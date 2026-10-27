import os
import sys
import cv2
import numpy as np
from PIL import Image

def prepare_background(raw_bg_path, out_bg_path, target_width=1920, quality=80):
    """
    bg.jpg: 1920 px kenglikka kichraytir, images/bg.webp (quality 80).
    """
    print(f"--> [1/2] Fon rasmi tayyorlanmoqda: {raw_bg_path}...")
    if not os.path.exists(raw_bg_path):
        raise FileNotFoundError(f"Fayl topilmadi: {raw_bg_path}")

    with Image.open(raw_bg_path) as img:
        img = img.convert('RGB')
        w, h = img.size
        print(f"Asl o'lcham: {w}x{h}")

        # Proporsional resize kenglik 1920 px ga
        if w != target_width:
            target_height = int(round(h * (target_width / float(w))))
            img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
            print(f"Yangi o'lcham: {target_width}x{target_height}")
        else:
            print("Kenglik allaqachon 1920 px.")

        os.makedirs(os.path.dirname(out_bg_path), exist_ok=True)
        img.save(out_bg_path, format="WEBP", quality=quality, method=6)
        size_kb = os.path.getsize(out_bg_path) / 1024
        print(f"Saqlandi: {out_bg_path} ({size_kb:.1f} KB, quality={quality})")

def prepare_mandala(raw_mandala_path, out_mandala_path, target_size=1400, quality=85):
    """
    mandala.jpg:
      a) Flood fill rasm chegarasidan tashqi magenta hududni shaffof qilish (HSV: ~300 deg, tol +-20 deg, sat > 0.4)
      b) Maskni 1-2 px eroziya qilish, alpha ~0.8 px feather
      c) Spill removal (yarim shaffof piksellardan magenta ayirish)
      d) Bounding box bo'yicha kvadratga markazlash (1400x1400 px, quality ~85, <= 500 KB)
    """
    print(f"\n--> [2/2] Mandala tayyorlanmoqda: {raw_mandala_path}...")
    if not os.path.exists(raw_mandala_path):
        raise FileNotFoundError(f"Fayl topilmadi: {raw_mandala_path}")

    # OpenCV orqali o'qish (BGR)
    img_bgr = cv2.imread(raw_mandala_path)
    if img_bgr is None:
        raise ValueError(f"Rasmni o'qib bo'lmadi: {raw_mandala_path}")

    h, w = img_bgr.shape[:2]
    print(f"Mandala asl o'lchami: {w}x{h}")

    # a) HSV konvertatsiya va magenta deteksiya
    img_hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    H, S, V = img_hsv[:, :, 0], img_hsv[:, :, 1], img_hsv[:, :, 2]

    # OpenCV HSV: H in [0, 180] (180 = 360 deg), 300 deg = 150. Tol +-20 deg => +-10 in opencv (140..160).
    # Saturation > 0.4 => 0.4 * 255 = 102
    # Value > 40
    # Kengroq qamrab olish uchun H: 135 dan 165 gacha, S >= 95
    magenta_candidates = (H >= 135) & (H <= 165) & (S >= 95) & (V >= 40)
    magenta_mask = magenta_candidates.astype(np.uint8) * 255

    # Tashqi chegaradan bog'langan qismni aniqlash (Flood Fill / Connected Components)
    # 1 px qalinlikdagi ramka qo'shamiz va (0,0) dan floodFill qilamiz
    padded_mask = cv2.copyMakeBorder(magenta_mask, 1, 1, 1, 1, cv2.BORDER_CONSTANT, value=255)
    flood_val = 128
    cv2.floodFill(padded_mask, None, (0, 0), flood_val)

    # FAQAT tashqi chegaradan yetib borgan magenta hudud (padded_mask == 128)
    outer_bg = (padded_mask[1:-1, 1:-1] == flood_val)
    print(f"Tashqi fon piksel ulushi: {np.mean(outer_bg)*100:.1f}%")

    # Mandala maskasi (1 = foreground, 0 = background)
    fg_mask = (~outer_bg).astype(np.uint8) * 255

    # b) Maskni 1–2 px eroziya qilish (magenta halo ketishi uchun)
    erode_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    # 1 yoki 2 marta eroziya
    fg_eroded = cv2.erode(fg_mask, erode_kernel, iterations=1)

    # Alphani ~0.8 px feather qilish (sigma=0.8)
    alpha = cv2.GaussianBlur(fg_eroded.astype(np.float32), (0, 0), sigmaX=0.8, sigmaY=0.8)
    alpha = np.clip(alpha / 255.0, 0.0, 1.0)

    # c) Spill removal: yarim shaffof piksellardan magenta aralashmasini ayirish
    # Magenta RGB: (255, 0, 255), BGR: (255, 0, 255)
    img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB).astype(np.float32)

    # Alpha 0 bo'lsa butunlay shaffof
    # Chetdagi piksellarda (alpha < 1.0) un-premultiplication va magenta de-spill
    alpha_3d = np.repeat(alpha[:, :, np.newaxis], 3, axis=2)
    magenta_rgb = np.array([255.0, 0.0, 255.0], dtype=np.float32)

    # Un-premultiply: recovered = (C - (1 - alpha) * magenta) / alpha
    # Alpha juda kichik bo'lsa xatolik bo'lmasligi uchun xavfsiz hisoblash
    safe_alpha = np.maximum(alpha_3d, 0.01)
    recovered_rgb = (img_rgb - (1.0 - alpha_3d) * magenta_rgb) / safe_alpha
    recovered_rgb = np.clip(recovered_rgb, 0.0, 255.0)

    # Chekka piksellarda qolgan qizil magentani bostirish (magenta spill suppression)
    # Agar R > G va B > G bo'lsa, qizilni G darajasiga tushirish
    edge_pixels = (alpha < 0.98) & (alpha > 0.01)
    if np.any(edge_pixels):
        r = recovered_rgb[:, :, 0]
        g = recovered_rgb[:, :, 1]
        b = recovered_rgb[:, :, 2]
        excess_magenta = np.maximum(0.0, np.minimum(r - g, b - g))
        r[edge_pixels] = np.maximum(0.0, r[edge_pixels] - excess_magenta[edge_pixels] * 0.9)
        recovered_rgb[:, :, 0] = r

    # Qat'iy alpha = 0 bo'lgan joylar toza 0
    recovered_rgb[alpha_3d == 0] = 0

    # RGBA yaratish
    rgba = np.dstack([recovered_rgb, alpha * 255.0]).astype(np.uint8)

    # d) Bounding box bo'yicha kes, KVADRATga keltirib markazla (mandala markazi = rasm markazi)
    non_zero_coords = np.argwhere(alpha > 0.05)
    if len(non_zero_coords) == 0:
        raise ValueError("Mandala foreground topilmadi!")

    y_min, x_min = non_zero_coords.min(axis=0)
    y_max, x_max = non_zero_coords.max(axis=0)
    print(f"Bounding box: x [{x_min} .. {x_max}], y [{y_min} .. {y_max}]")

    center_x = (x_min + x_max) / 2.0
    center_y = (y_min + y_max) / 2.0
    mandala_w = x_max - x_min
    mandala_h = y_max - y_min
    diameter = max(mandala_w, mandala_h)

    # Kvadrat o'lchami: aylana chetlariga ozgina 1-2% nafas olish oraliq bilan
    pad_margin = int(diameter * 0.01)
    box_size = int(np.ceil(diameter + 2 * pad_margin))
    if box_size % 2 != 0:
        box_size += 1

    half_box = box_size // 2
    crop_x1 = int(round(center_x - half_box))
    crop_y1 = int(round(center_y - half_box))
    crop_x2 = crop_x1 + box_size
    crop_y2 = crop_y1 + box_size

    # Shaffof kvadrat kanvas yaratamiz
    square_canvas = np.zeros((box_size, box_size, 4), dtype=np.uint8)

    # Kesib olish va kanvasga joylashtirish (rasm chegaralaridan oshib ketsa ham xavfsiz)
    src_x1 = max(0, crop_x1)
    src_y1 = max(0, crop_y1)
    src_x2 = min(w, crop_x2)
    src_y2 = min(h, crop_y2)

    dst_x1 = src_x1 - crop_x1
    dst_y1 = src_y1 - crop_y1
    dst_x2 = dst_x1 + (src_x2 - src_x1)
    dst_y2 = dst_y1 + (src_y2 - src_y1)

    square_canvas[dst_y1:dst_y2, dst_x1:dst_x2] = rgba[src_y1:src_y2, src_x1:src_x2]

    # 1400x1400 px ga keltirish
    pil_img = Image.fromarray(square_canvas, mode="RGBA")
    pil_resized = pil_img.resize((target_size, target_size), Image.Resampling.LANCZOS)

    # WebP formatida saqlash (<= 500 KB bo'lguncha quality sozlanadi)
    os.makedirs(os.path.dirname(out_mandala_path), exist_ok=True)
    current_q = quality
    while current_q >= 50:
        pil_resized.save(out_mandala_path, format="WEBP", quality=current_q, method=6)
        file_size_kb = os.path.getsize(out_mandala_path) / 1024
        print(f"Sinov: quality={current_q}, hajm={file_size_kb:.1f} KB")
        if file_size_kb <= 500.0:
            break
        current_q -= 5

    final_size_kb = os.path.getsize(out_mandala_path) / 1024
    print(f"Muvaffaqiyatli saqlandi: {out_mandala_path} ({final_size_kb:.1f} KB <= 500 KB, quality={current_q})")

if __name__ == "__main__":
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    raw_bg = os.path.join(base_dir, "images", "raw", "bg.jpg")
    raw_mandala = os.path.join(base_dir, "images", "raw", "mandala.jpg")
    out_bg = os.path.join(base_dir, "images", "bg.webp")
    out_mandala = os.path.join(base_dir, "images", "mandala.webp")

    prepare_background(raw_bg, out_bg)
    prepare_mandala(raw_mandala, out_mandala)
    print("\n[OK] Barcha rasmlar muvaffaqiyatli tayyorlandi!")

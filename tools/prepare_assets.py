import os
import sys
import cv2
import numpy as np
from PIL import Image

def prepare_background(raw_bg_path, out_bg_path, target_width=1920, quality=80):
    """
    bg.jpg: 1920 px kenglikka kichraytir, images/bg.webp (quality 80).
    """
    print(f"--> Fon rasmi tayyorlanmoqda: {raw_bg_path}...")
    if not os.path.exists(raw_bg_path):
        raise FileNotFoundError(f"Fayl topilmadi: {raw_bg_path}")

    with Image.open(raw_bg_path) as img:
        img = img.convert('RGB')
        w, h = img.size
        print(f"Asl o'lcham: {w}x{h}")

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
    Mandala:
      a) Flood fill rasm chegarasidan tashqi magenta hududni shaffof qilish (HSV: ~300 deg, tol +-20 deg, sat > 0.4)
      b) Maskni 1-2 px eroziya qilish, alpha ~0.8 px feather
      c) Spill removal (yarim shaffof piksellardan magenta ayirish)
      d) Bounding box bo'yicha kvadratga markazlash (1400x1400 px, quality ~85, <= 500 KB)
    """
    print(f"\n--> Mandala tayyorlanmoqda: {raw_mandala_path}...")
    if not os.path.exists(raw_mandala_path):
        raise FileNotFoundError(f"Fayl topilmadi: {raw_mandala_path}")

    img_bgr = cv2.imread(raw_mandala_path)
    if img_bgr is None:
        raise ValueError(f"Rasmni o'qib bo'lmadi: {raw_mandala_path}")

    h, w = img_bgr.shape[:2]
    print(f"Mandala asl o'lchami: {w}x{h}")

    # a) HSV konvertatsiya va magenta deteksiya
    img_hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    H, S, V = img_hsv[:, :, 0], img_hsv[:, :, 1], img_hsv[:, :, 2]

    # Magenta deteksiya
    magenta_candidates = (H >= 135) & (H <= 165) & (S >= 95) & (V >= 40)
    magenta_mask = magenta_candidates.astype(np.uint8) * 255

    # Chegara orqali flood fill
    padded_mask = cv2.copyMakeBorder(magenta_mask, 1, 1, 1, 1, cv2.BORDER_CONSTANT, value=255)
    cv2.floodFill(padded_mask, None, (0, 0), 128)
    outer_bg = (padded_mask[1:-1, 1:-1] == 128)

    # Mandala foreground
    fg_mask = (~outer_bg).astype(np.uint8) * 255

    # Eng katta markaziy mandala konturi
    contours, _ = cv2.findContours(fg_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        raise ValueError("Mandala foreground topilmadi!")

    largest_contour = max(contours, key=cv2.contourArea)
    clean_fg = np.zeros_like(fg_mask)
    cv2.drawContours(clean_fg, [largest_contour], -1, 255, thickness=cv2.FILLED)

    # b) 1-2 px eroziya va ~0.8 px feather
    erode_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    fg_eroded = cv2.erode(clean_fg, erode_kernel, iterations=1)

    alpha = cv2.GaussianBlur(fg_eroded.astype(np.float32), (0, 0), sigmaX=0.8, sigmaY=0.8)
    alpha = np.clip(alpha / 255.0, 0.0, 1.0)

    # c) Spill removal
    img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB).astype(np.float32)
    alpha_3d = np.repeat(alpha[:, :, np.newaxis], 3, axis=2)
    magenta_rgb = np.array([255.0, 0.0, 255.0], dtype=np.float32)

    safe_alpha = np.maximum(alpha_3d, 0.01)
    recovered_rgb = (img_rgb - (1.0 - alpha_3d) * magenta_rgb) / safe_alpha
    recovered_rgb = np.clip(recovered_rgb, 0.0, 255.0)

    edge_pixels = (alpha < 0.98) & (alpha > 0.01)
    if np.any(edge_pixels):
        r = recovered_rgb[:, :, 0]
        g = recovered_rgb[:, :, 1]
        b = recovered_rgb[:, :, 2]
        excess_magenta = np.maximum(0.0, np.minimum(r - g, b - g))
        r[edge_pixels] = np.maximum(0.0, r[edge_pixels] - excess_magenta[edge_pixels] * 0.9)
        recovered_rgb[:, :, 0] = r

    recovered_rgb[alpha_3d == 0] = 0
    rgba = np.dstack([recovered_rgb, alpha * 255.0]).astype(np.uint8)

    # d) Bounding box bo'yicha kes, kvadratga keltirib markazla
    non_zero_coords = np.argwhere(alpha > 0.05)
    y_min, x_min = non_zero_coords.min(axis=0)
    y_max, x_max = non_zero_coords.max(axis=0)

    center_x = (x_min + x_max) / 2.0
    center_y = (y_min + y_max) / 2.0
    mandala_w = x_max - x_min
    mandala_h = y_max - y_min
    diameter = max(mandala_w, mandala_h)

    pad_margin = int(diameter * 0.01)
    box_size = int(np.ceil(diameter + 2 * pad_margin))
    if box_size % 2 != 0:
        box_size += 1

    half_box = box_size // 2
    crop_x1 = int(round(center_x - half_box))
    crop_y1 = int(round(center_y - half_box))
    crop_x2 = crop_x1 + box_size
    crop_y2 = crop_y1 + box_size

    square_canvas = np.zeros((box_size, box_size, 4), dtype=np.uint8)

    src_x1 = max(0, crop_x1)
    src_y1 = max(0, crop_y1)
    src_x2 = min(w, crop_x2)
    src_y2 = min(h, crop_y2)

    dst_x1 = src_x1 - crop_x1
    dst_y1 = src_y1 - crop_y1
    dst_x2 = dst_x1 + (src_x2 - src_x1)
    dst_y2 = dst_y1 + (src_y2 - src_y1)

    square_canvas[dst_y1:dst_y2, dst_x1:dst_x2] = rgba[src_y1:src_y2, src_x1:src_x2]

    # Resize 1400x1400
    pil_img = Image.fromarray(square_canvas, mode="RGBA")
    pil_resized = pil_img.resize((target_size, target_size), Image.Resampling.LANCZOS)

    # WebP formatida saqlash (<= 500 KB)
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
    print(f"Saqlandi: {out_mandala_path} ({final_size_kb:.1f} KB <= 500 KB, quality={current_q})")

if __name__ == "__main__":
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

    # Yangi dizayn: bg2.jpg, mandala2.jpg (orqada) va mandala2.1.jpg (ustida)
    raw_bg2 = os.path.join(base_dir, "images", "bg2.jpg")
    raw_m2 = os.path.join(base_dir, "images", "mandala2.jpg")
    raw_m21 = os.path.join(base_dir, "images", "mandala2.1.jpg")

    out_bg = os.path.join(base_dir, "images", "bg.webp")
    out_m2 = os.path.join(base_dir, "images", "mandala2.webp")
    out_m21 = os.path.join(base_dir, "images", "mandala2.1.webp")

    # Fon tayyorlash
    prepare_background(raw_bg2, out_bg)

    # Mandala 2 (orqadagi)
    prepare_mandala(raw_m2, out_m2)

    # Mandala 2.1 (ustidagi)
    prepare_mandala(raw_m21, out_m21)

    print("\n[OK] Yangi dizayn aktivlari muvaffaqiyatli tayyorlandi!")

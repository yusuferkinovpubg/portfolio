"""
tools/switch_template.py
Choyxona Menyusi — Fon shablonlarini bir zumda almashtirish vositasi.

Ishlatish:
  python tools/switch_template.py 1   # 1-shablonga o'tish (4 burchakda 8 ta mandala + feruza fon)
  python tools/switch_template.py 2   # 2-shablonga o'tish (Chap tomonda yarim mandala 2 + 2.1 + sharqona oq fon)
"""

import os
import sys
import shutil

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
INDEX_PATH = os.path.join(BASE_DIR, "index.html")
STYLE_PATH = os.path.join(BASE_DIR, "style.css")

HTML_TEMPLATE_1 = """  <!-- ================= BG SCENE (1-shablon: 4 burchakda mandala) ================= -->
  <div class="bg-scene" aria-hidden="true">
    <div class="corner tl">
      <img class="mandala outer" src="images/mandala.webp" alt="">
      <img class="mandala inner" src="images/mandala.webp" alt="">
    </div>
    <div class="corner tr">
      <img class="mandala outer" src="images/mandala.webp" alt="">
      <img class="mandala inner" src="images/mandala.webp" alt="">
    </div>
    <div class="corner bl">
      <img class="mandala outer" src="images/mandala.webp" alt="">
      <img class="mandala inner" src="images/mandala.webp" alt="">
    </div>
    <div class="corner br">
      <img class="mandala outer" src="images/mandala.webp" alt="">
      <img class="mandala inner" src="images/mandala.webp" alt="">
    </div>
    <div class="bg-frame"></div>
  </div>"""

HTML_TEMPLATE_2 = """  <!-- ================= BG SCENE (2-shablon: Chap tomon o'rtada mandala 2 + 2.1) ================= -->
  <div class="bg-scene" aria-hidden="true">
    <div class="mandala-side-left">
      <img class="mandala mandala-back" src="images/mandala2.webp" alt="">
      <img class="mandala mandala-front" src="images/mandala2.1.webp" alt="">
    </div>
    <div class="bg-frame"></div>
  </div>"""

def switch_to_template(t_num):
    print(f"\n==========================================")
    print(f"  Shablon {t_num} ga o'tilmoqda...")
    print(f"==========================================")

    # 1. index.html ni yangilash
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    # <body> dan keyin va <noscript> dan oldingi bg-scene blokini almashtiramiz
    body_idx = html.find("<body>")
    noscript_idx = html.find("<noscript>")

    if body_idx != -1 and noscript_idx != -1:
        new_scene = HTML_TEMPLATE_1 if t_num == 1 else HTML_TEMPLATE_2
        new_html = html[:body_idx + 6] + "\n" + new_scene + "\n\n  " + html[noscript_idx:]
        with open(INDEX_PATH, "w", encoding="utf-8") as f:
            f.write(new_html)
        print("--> [1/3] index.html muvaffaqiyatli yangilandi!")
    else:
        print("--> [XATO] <body> yoki <noscript> tegi topilmadi.")

    # 2. style.css o'lchamlarini yangilash
    with open(STYLE_PATH, "r", encoding="utf-8") as f:
        css = f.read()

    import re
    if t_num == 1:
        css = re.sub(r"--outer:\s*clamp\([^;]+?\);", "--outer: clamp(300px, 64vmin, 960px);", css, count=1)
        css = re.sub(r"--inner-ratio:\s*[^;]+?;", "--inner-ratio: 0.5;", css, count=1)
    else:
        css = re.sub(r"--outer:\s*clamp\([^;]+?\);", "--outer: clamp(520px, 94vmin, 1150px);", css, count=1)
        css = re.sub(r"--inner-ratio:\s*[^;]+?;", "--inner-ratio: 0.72;", css, count=1)

    with open(STYLE_PATH, "w", encoding="utf-8") as f:
        f.write(css)
    print("--> [2/3] style.css sozlamalari moslashtirildi!")

    # 3. Rasmlarni faollashtirish
    images_dir = os.path.join(BASE_DIR, "images")
    if t_num == 1:
        bg1 = os.path.join(images_dir, "bg1.webp")
        m1 = os.path.join(images_dir, "mandala1.webp")
        if not os.path.exists(bg1):
            bg1 = os.path.join(BASE_DIR, "archive", "shablon-1", "images", "bg.webp")
        if not os.path.exists(m1):
            m1 = os.path.join(BASE_DIR, "archive", "shablon-1", "images", "mandala.webp")

        if os.path.exists(bg1):
            shutil.copyfile(bg1, os.path.join(images_dir, "bg.webp"))
        if os.path.exists(m1):
            shutil.copyfile(m1, os.path.join(images_dir, "mandala.webp"))
        print("--> [3/3] 1-shablon rasmlari faollashtirildi (bg.webp, mandala.webp)!")
    else:
        bg2 = os.path.join(images_dir, "bg2.webp")
        if os.path.exists(bg2):
            shutil.copyfile(bg2, os.path.join(images_dir, "bg.webp"))
        print("--> [3/3] 2-shablon rasmlari faollashtirildi (bg.webp, mandala2.webp, mandala2.1.webp)!")

    print(f"\n[MUVAFFAQIYAT] Shablon {t_num} to'liq ishga tushirildi!\n")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        print("Hozirgi mavjud shablonlar:")
        print("  1: Klassik 4 burchakli (har bir burchakda 2 tadan mandala)")
        print("  2: Zamonaviy chap tomonli (Mandala 2 + Mandala 2.1 teskari aylanishi)")
        val = input("Qaysi shablonga o'tmoqchisiz? (1 yoki 2): ").strip()
    else:
        val = sys.argv[1].strip()

    if val in ["1", "2"]:
        switch_to_template(int(val))
    else:
        print("Noto'g'ri tanlov. Faqat 1 yoki 2 kiriting.")

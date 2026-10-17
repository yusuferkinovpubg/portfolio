# Choyxona Menyusi — Rasmlar Galereyasi 🍽️🍵

Zamonaviy, minimalist va to'liq moslashuvchan (responsive) restoran va choyxona menyusi veb-sayti. Loyihada 95 ta professional taom, shashlik, salat, ichimlik, choy va shirinliklarning fotosuratlari bo'limlar bo'yicha saralangan.

---

## 📁 Loyiha Tuzilishi

```text
./
├── index.html          # Asosiy HTML hujjati
├── style.css           # Qorong'i-oltin (Dark-Gold) uslubdagi premium dizayn
├── script.js           # 95 ta taom ma'lumotlari, filtrlash, admin boshqaruvi va lightbox
├── images/             # 95 ta yuqori sifatli taom va ichimliklar fotosuratlari
├── .gitignore          # Keraksiz tizim fayllarini filtrlash
└── README.md           # Loyiha hujjatlari va GitHub-ga yuklash qo'llanmasi
```

---

## 🌟 Asosiy Xususiyatlar

1. **95 ta To'liq Tayyor Taom va Ichimlik**:
   - **Milliy Taomlar**: Qozon kabob, Jiz-Biz, Qaynatma Chuzma Lag'mon.
   - **Kaboblar va Shashlik**: G'ijduvoncha qiyma, Qo'y go'shti va dumba, Charvi, Jigar, Uchpanja, Tovuq, Sabzavotli kaboblar.
   - **Sho'rvalar**: Xushbo'y qo'y go'shtli sho'rva, Uycha uslubidagi sho'rva.
   - **Salatlar va Gazaklar**: Achichuk, Sezar, Fransuzcha, Mujskoy kapriz, Vinegret, Gozho, Suzma, Yangi ko'katlar.
   - **Tandir Non**: Samarqand tandir patir noni.
   - **Salqin Ichimliklar**: Pepsi, Coca-Cola, Fanta, Sprite, 9 xil tabiiy Dena sharbatlari, Moxito, Moviy Laguna, Milkshakelar.
   - **Choy va Qahva**: Frensh-pressda anorli, limonli, zanjabilli, tog' giyohlari choylari, Espresso, Kapuchino, Latte.
   - **Shirinliklar va Mevalar**: Belgiya vaflilari (mevali, shokoladli, muzqaymoqli), Muzqaymoqlar, Yangi qulupnay va tarvuz.

2. **Kategoriyalar bo'yicha Tezkor Filtrlash**:
   - Gorizontal skroll qilinadigan qulay bo'limlar tugmalari.

3. **To'liq Ekranda Rasmni Ko'rish (Lightbox)**:
   - Rasm ustiga bosilganda yuqori aniqlikda, nomi, tavsifi va narxi bilan birga ochiladi.

4. **Admin Tizimi va Narxlarni Joyida O'zgartirish**:
   - **Kirish**: Admin boshqaruv paneli orqali avtorizatsiyadan o'tish imkoniyati.
   - **Narxlarni tezkor tahrirlash**: Har bir taom kartochkasi ostida narxni to'g'ridan-to'g'ri o'zgartirib "Saqlash" tugmasini bosish mumkin.
   - **Yangi tovar qo'shish va tahrirlash**: Taom nomi, bo'limi, narxi, tavsifi va rasmini tanlash.
   - **Rasm yuklash**: Qurilmadan yangi rasm yuklanganda avtomatik ravishda optimallashtiriladi va siqiladi.
   - **Parolni yangilash**: Admin username va parolini o'zgartirish imkoniyati.
   - **Boshlang'ich holatga qaytarish (Reset)**: Xohlagan paytda 95 ta standart taomlar holatiga qaytarish mumkin.

5. **Yuqori Tezlik va WebP Optimallashtirish**:
   - Barcha 95 ta rasm zamonaviy WebP formatiga sifatni yo'qotmagan holda optimallashtirildi (802 MB hajmdan atigi 10 MB ga keltirildi).
   - Sayt mobil telefon va kompyuterlarda darhol, hech qanday qotishlarsiz ochiladi.
   - Rasmlar yuklanishi paytida chiroyli animatsiyali shimmer effekti mavjud.

---

## 🚀 GitHub-ga Yuklash Qo'llanmasi

Ushbu loyihani GitHub-ga yuklashning 3 ta oson usuli mavjud:

### 1-usul: Git orqali buyruqlar satrida (Tavsiya etiladi)

Agar kompyuteringizda Git o'rnatilmagan bo'lsa, PowerShell-da quyidagi buyruq orqali tezda o'rnatishingiz mumkin:
```powershell
winget install --id Git.Git -e --source winget
```

Git o'rnatilgach, PowerShell terminalida loyiha papkasida quyidagi buyruqlarni bajaring:

```powershell
# 1. Papkaga o'tish (agar boshqa papkada bo'lsangiz)
cd <loyiha-papkasi>

# 2. Git repozitoriysini ishga tushirish
git init

# 3. Barcha fayllarni indeksga qo'shish
git add .

# 4. Dastlabki commit yaratish
git commit -m "Initial commit: Choyxona Menyusi 95 ta taom va galereya bilan"

# 5. Asosiy tarmoqni 'main' deb nomlash
git branch -M main

# 6. GitHub-dagi repozitoriy havolasini ulash (USERNAME va REPO o'rniga o'zingiznikini yozing)
git remote add origin https://github.com/USERNAME/choyxona-menyusi.git

# 7. GitHub-ga yuklash
git push -u origin main
```

---

### 2-usul: GitHub Desktop ilovasi orqali

1. [desktop.github.com](https://desktop.github.com) saytidan **GitHub Desktop** dasturini yuklab oling va o'rnating.
2. Dasturni ochib, **File -> Add Local Repository** menyusini tanlang.
3. Yo'l sifatida loyiha papkasini ko'rsating va **Add repository** tugmasini bosing.
4. Pastki chap burchakdagi **Commit to main** tugmasini bosing.
5. Yuqoridagi **Publish repository** tugmasini bosib, GitHub hisobingizga yuklang.

---

### 3-usul: Vercel orqali Internetda jonli (live) ishga tushirish

Loyiha Vercel platformasida avtomatik CI/CD bilan ishlaydi. Repozitoriyangizni Vercel hisobingizga ulab qo'yganingizdan so'ng, `main` tarmog'iga yuborilgan har bir `git push` avtomatik tarzda jonli saytga chiqariladi.

---

## 💻 Mahalliy kompyuterda ishga tushirish

Loyihada ES Module (`type="module"`) va zamonaviy `@ybouane/liquidglass` kutubxonasi qo'llanilganligi sababli, brauzerlar xavfsizlik (CORS) qoidalariga binoan faylni to'g'ridan-to'g'ri `file://` orqali ochishga ruxsat bermaydi. 

Mahalliy kompyuterda saytni ochish uchun quyidagi qulay server usullaridan birini ishlating:

- **VS Code:** `Live Server` kengaytmasini o'rnating va `index.html` fayli ustida sichqonchaning o'ng tugmasini bosib **Open with Live Server** ni tanlang.
- **Node.js (npx):** Loyiha papkasida terminalni ochib, `npx serve .` buyrug'ini kiriting.
- **Python:** Terminalda `python -m http.server 8080` buyrug'ini kiriting va brauzerda `http://localhost:8080` manzilini oching.

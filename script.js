// ================= BO'LIMLAR (SECTIONS) =================
const DEFAULT_SECTIONS = [
  { id: 'asosiy',      name: 'Milliy Taomlar',             cover: 'images/icon_milliy.webp' },
  { id: 'kabob',       name: 'Kaboblar va Shashlik',       cover: 'images/icon_shashlik.webp' },
  { id: 'shorva',      name: "Sho'rvalar",                 cover: 'images/icon_shorva.webp' },
  { id: 'salatlar',    name: 'Salatlar va Gazaklar',       cover: 'images/icon_salat.webp' },
  { id: 'ichimliklar', name: 'Ichimliklar',                cover: 'images/icon_ichimliklar.webp' },
  { id: 'desert',      name: 'Shirinliklar va Mevalar',    cover: 'images/icon_desert.webp' }
];

let SECTIONS = JSON.parse(JSON.stringify(DEFAULT_SECTIONS));

// ================= 95 TA SARALANGAN MAHSULOTLAR VA TAOMLAR =================
const DEFAULT_ITEMS = [
  {
    id: 'item_1',
    name: "Qo'ziqorinli iliq salat",
    section: 'salatlar',
    price: 38000,
    desc: "Qovurilgan qo'ziqorinlar, cherri pomidori, barra ko'katlar va maxsus zaytun sousi",
    image: "images/030A0254.webp"
  },
  {
    id: 'item_2',
    name: "Gozho salati",
    section: 'salatlar',
    price: 35000,
    desc: "Tilli va sabzavotli to'yimli an'anaviy salat, mayonezli maxsus sous bilan",
    image: "images/030A0256.webp"
  },
  {
    id: 'item_3',
    name: "Klassik Vinegret salati",
    section: 'salatlar',
    price: 28000,
    desc: "Qizil lavlagi, tuzlangan bodring, no'xat, sabzi va xushbo'y o'simlik yog'i",
    image: "images/030A0258.webp"
  },
  {
    id: 'item_4',
    name: "Bahor karamli salati",
    section: 'salatlar',
    price: 25000,
    desc: "Yangi yosh karam, bodring, ko'k piyoz va ko'katlar aralashmasi",
    image: "images/030A0264.webp"
  },
  {
    id: 'item_5',
    name: "Ko'katlar assortisi",
    section: 'salatlar',
    price: 22000,
    desc: "Kashnich, shivit, rayhon, ko'k piyoz, yashil qalampir va turp",
    image: "images/030A0266.webp"
  },
  {
    id: 'item_6',
    name: "Anorli Achichuk salati",
    section: 'salatlar',
    price: 26000,
    desc: "Yupqa to'g'ralgan shirin pomidor, piyoz, achchiq qalampir va barra anor donalari",
    image: "images/030A0270.webp"
  },
  {
    id: 'item_7',
    name: "Yangi bodring-pomidor salati",
    section: 'salatlar',
    price: 25000,
    desc: "Dala pomidori, bodring va rayhon barglari",
    image: "images/030A0272.webp"
  },
  {
    id: 'item_8',
    name: "Katta meva assortisi",
    section: 'desert',
    price: 75000,
    desc: "Mavsumiy yangi mevalar: olma, nok, uzum, apelsin, kivi va banan",
    image: "images/030A0278.webp"
  },
  {
    id: 'item_9',
    name: "Barra qulupnay likopchasi",
    section: 'desert',
    price: 45000,
    desc: "Saralangan shirin va xushbo'y dala qulupnayi",
    image: "images/030A0281.webp"
  },
  {
    id: 'item_10',
    name: "Qo'y go'shtli xushbo'y sho'rva",
    section: 'shorva',
    price: 48000,
    desc: "Qo'y go'shti boldiri, butun kartoshka, sabzi va shifobaxsh tog' ziravorlari",
    image: "images/030A0283.webp"
  },
  {
    id: 'item_11',
    name: "Choyxona suzmasi",
    section: 'salatlar',
    price: 18000,
    desc: "Qatiqdan tayyorlangan xushbo'y suzma, ko'katlar va sarimsoq bilan",
    image: "images/030A0284.webp"
  },
  {
    id: 'item_12',
    name: "Choyxona muzdek ayroni (1L)",
    section: 'ichimliklar',
    price: 14000,
    desc: "Yalpizli va rayhonli tabiiy qatiq ayroni (1 litr)",
    image: "images/030A0288.webp"
  },
  {
    id: 'item_13',
    name: "Uy kompoti grafinda (1L)",
    section: 'ichimliklar',
    price: 22000,
    desc: "Tabiiy mevalardan tayyorlangan muzdek uy kompoti (1 litr)",
    image: "images/030A0291.webp"
  },
  {
    id: 'item_14',
    name: "Muzqaymoq assorti mevalar bilan",
    section: 'desert',
    price: 32000,
    desc: "Shokoladli, vanilli va qulupnayli qaymoqli muzqaymoq sharlari",
    image: "images/030A0293.webp"
  },
  {
    id: 'item_15',
    name: "Qaymoqli vanil muzqaymog'i",
    section: 'desert',
    price: 28000,
    desc: "Klassik vanilli muzqaymoq shokolad siropi bilan",
    image: "images/030A0294.webp"
  },
  {
    id: 'item_16',
    name: "Pepsi 1.5L",
    section: 'ichimliklar',
    price: 18000,
    desc: "Salqin gazlangan ichimlik Pepsi 1.5 litr",
    image: "images/030A0297.webp"
  },
  {
    id: 'item_17',
    name: "Coca-Cola 1.5L",
    section: 'ichimliklar',
    price: 18000,
    desc: "Klassik salqin ichimlik Coca-Cola 1.5 litr",
    image: "images/030A0298.webp"
  },
  {
    id: 'item_18',
    name: "Fanta 1.5L",
    section: 'ichimliklar',
    price: 18000,
    desc: "Apelsinli yorqin gazlangan ichimlik Fanta 1.5 litr",
    image: "images/030A0299.webp"
  },
  {
    id: 'item_19',
    name: "Dena Olma sharbati 1L",
    section: 'ichimliklar',
    price: 20000,
    desc: "Tabiiy yashil olma sharbati (1 litr)",
    image: "images/030A0301.webp"
  },
  {
    id: 'item_20',
    name: "Dena Shaftoli sharbati 1L",
    section: 'ichimliklar',
    price: 20000,
    desc: "Xushbo'y quyuq shaftoli sharbati (1 litr)",
    image: "images/030A0302.webp"
  },
  {
    id: 'item_21',
    name: "Dena Anor sharbati 1L",
    section: 'ichimliklar',
    price: 22000,
    desc: "Foydali va nordon-shirin tabiiy anor sharbati (1 litr)",
    image: "images/030A0303.webp"
  },
  {
    id: 'item_22',
    name: "Dena Olcha sharbati 1L",
    section: 'ichimliklar',
    price: 20000,
    desc: "Tetislashtiruvchi sarxush olcha sharbati (1 litr)",
    image: "images/030A0304.webp"
  },
  {
    id: 'item_23',
    name: "Dena Multimeva sharbati 1L",
    section: 'ichimliklar',
    price: 20000,
    desc: "Tropik va mahalliy mevalar nektari (1 litr)",
    image: "images/030A0305.webp"
  },
  {
    id: 'item_24',
    name: "Dena Apelsin sharbati 1L",
    section: 'ichimliklar',
    price: 20000,
    desc: "Vitaminlarga boy apelsin sharbati (1 litr)",
    image: "images/030A0306.webp"
  },
  {
    id: 'item_25',
    name: "Dena Pomidor sharbati 1L",
    section: 'ichimliklar',
    price: 20000,
    desc: "Tabiiy quyuq pomidor sharbati tuz bilan (1 litr)",
    image: "images/030A0307.webp"
  },
  {
    id: 'item_26',
    name: "Dena O'rik sharbati 1L",
    section: 'ichimliklar',
    price: 20000,
    desc: "Shirin va quyuq mayin o'rik sharbati (1 litr)",
    image: "images/030A0308.webp"
  },
  {
    id: 'item_27',
    name: "Dena Qora smorodina sharbati 1L",
    section: 'ichimliklar',
    price: 22000,
    desc: "Tabiiy qora smorodina sharbati (1 litr)",
    image: "images/030A0309.webp"
  },
  {
    id: 'item_28',
    name: "Coca-Cola Classic shisha 0.25L",
    section: 'ichimliklar',
    price: 12000,
    desc: "Muzdek shisha idishdagi klassik Coca-Cola (250 ml)",
    image: "images/030A0312.webp"
  },
  {
    id: 'item_29',
    name: "Fanta Orange shisha 0.25L",
    section: 'ichimliklar',
    price: 12000,
    desc: "Muzdek shisha idishdagi apelsinli Fanta (250 ml)",
    image: "images/030A0313.webp"
  },
  {
    id: 'item_30',
    name: "Sprite shisha 0.25L",
    section: 'ichimliklar',
    price: 12000,
    desc: "Muzdek shisha idishdagi limon-laymli Sprite (250 ml)",
    image: "images/030A0314.webp"
  },
  {
    id: 'item_31',
    name: "Pepsi banka 0.33L",
    section: 'ichimliklar',
    price: 14000,
    desc: "Temir bankadagi salqin Pepsi (330 ml)",
    image: "images/030A0315.webp"
  },
  {
    id: 'item_32',
    name: "Coca-Cola banka 0.33L",
    section: 'ichimliklar',
    price: 14000,
    desc: "Temir bankadagi klassik Coca-Cola (330 ml)",
    image: "images/030A0317.webp"
  },
  {
    id: 'item_33',
    name: "Fanta banka 0.33L",
    section: 'ichimliklar',
    price: 14000,
    desc: "Temir bankadagi apelsinli Fanta (330 ml)",
    image: "images/030A0318.webp"
  },
  {
    id: 'item_34',
    name: "Sprite banka 0.33L",
    section: 'ichimliklar',
    price: 14000,
    desc: "Temir bankadagi limonli Sprite (330 ml)",
    image: "images/030A0319.webp"
  },
  {
    id: 'item_35',
    name: "Coca-Cola Zero banka 0.33L",
    section: 'ichimliklar',
    price: 14000,
    desc: "Shakarsiz salqin ichimlik Coca-Cola Zero (330 ml)",
    image: "images/030A0320.webp"
  },
  {
    id: 'item_36',
    name: "Moviy Laguna kokteyli",
    section: 'ichimliklar',
    price: 28000,
    desc: "Moviy Kyurasao, Sprite, limon sharbati va muz",
    image: "images/030A0326.webp"
  },
  {
    id: 'item_37',
    name: "Yashil olma va kivi moxitosi",
    section: 'ichimliklar',
    price: 28000,
    desc: "Yangi yalpiz, kivi, yashil olma siropi, laym va gazlangan suv",
    image: "images/030A0332.webp"
  },
  {
    id: 'item_38',
    name: "Klassik Laymli Moxito",
    section: 'ichimliklar',
    price: 26000,
    desc: "Barra yalpiz barglari, laym bo'laklari, shakar qiyomi va muz",
    image: "images/030A0335.webp"
  },
  {
    id: 'item_39',
    name: "Sitrusli Tropik Limonad",
    section: 'ichimliklar',
    price: 28000,
    desc: "Apelsin, greyfrut, limon va yangi meva sharbatlari bilan",
    image: "images/030A0337.webp"
  },
  {
    id: 'item_40',
    name: "Qulupnayli Moxito kokteyli",
    section: 'ichimliklar',
    price: 28000,
    desc: "Qulupnay pyuresi, yalpiz, laym va muzdek gazlangan suv",
    image: "images/030A0339.webp"
  },
  {
    id: 'item_41',
    name: "Mango-Passhion mevali kokteyl",
    section: 'ichimliklar',
    price: 30000,
    desc: "Egzotik mango, marakuya mevalari va sitrus aralashmasi",
    image: "images/030A0341.webp"
  },
  {
    id: 'item_42',
    name: "Qozon kabob va go'shtli Jiz-Biz",
    section: 'asosiy',
    price: 88000,
    desc: "Maxsus qozonda qizartirilgan barra qo'y go'shti, oltinrang kartoshka va piyoz",
    image: "images/030A0348.webp"
  },
  {
    id: 'item_43',
    name: "Qaynatma Chuzma Lag'mon",
    section: 'asosiy',
    price: 52000,
    desc: "Qo'lda cho'zilgan xushbo'y xamir, yumshoq mol go'shti, sabzavotlar va qayla",
    image: "images/030A0350.webp"
  },
  {
    id: 'item_44',
    name: "Uycha usulida pishirilgan sho'rva",
    section: 'shorva',
    price: 42000,
    desc: "Bo'liq go'sht, no'xat, sabzi, xushbo'y kashnich va qalampir bilan",
    image: "images/030A0353.webp"
  },
  {
    id: 'item_45',
    name: "Katta sabzavotlar va ko'katlar to'plami",
    section: 'salatlar',
    price: 30000,
    desc: "Bodring, pomidor, turp, qizil qalampir, rayhon, shivit va yashil piyoz",
    image: "images/030A0358.webp"
  },
  {
    id: 'item_46',
    name: "Yangi uzilgan pomidor-bodring likopchasi",
    section: 'salatlar',
    price: 24000,
    desc: "Dala pomidori va bodringi zaytun moyi bilan",
    image: "images/030A0359.webp"
  },
  {
    id: 'item_47',
    name: "Cho'g'da pishgan pomidor kabob",
    section: 'kabob',
    price: 14000,
    desc: "Dumbul cho'g'da pishirilgan shirin va suvli pomidor shashligi",
    image: "images/030A0360.webp"
  },
  {
    id: 'item_48',
    name: "Qo'y go'shti va dumba kabob",
    section: 'kabob',
    price: 24000,
    desc: "Bir six yumshoq qo'y go'shti va mayin dumba bo'laklari",
    image: "images/030A0361.webp"
  },
  {
    id: 'item_49',
    name: "Moviy Laguna limonadi 1L grafinda",
    section: 'ichimliklar',
    price: 48000,
    desc: "Grafinda oilaviy salqin kokteyl: Moviy Kyurasao, laym, limon va muz",
    image: "images/030A0365.webp"
  },
  {
    id: 'item_50',
    name: "Yashil kivi va yalpiz limonadi 1L",
    section: 'ichimliklar',
    price: 48000,
    desc: "Grafinda tayyorlangan xushbo'y yashil moxito va kivi limonadi (1 litr)",
    image: "images/030A0368.webp"
  },
  {
    id: 'item_51',
    name: "G'ijduvoncha qiyma shashlik",
    section: 'kabob',
    price: 22000,
    desc: "Mayin qiyma, dumba yog'i va o'ziga xos ziravorlar bilan cho'g'da pishgan kabob",
    image: "images/030A0371.webp"
  },
  {
    id: 'item_52',
    name: "Qulupnayli sutli milkshake",
    section: 'ichimliklar',
    price: 26000,
    desc: "Tabiiy sut, qulupnayli muzqaymoq va meva siropi",
    image: "images/030A0377.webp"
  },
  {
    id: 'item_53',
    name: "Qaymoqli vanil milkshake",
    section: 'ichimliklar',
    price: 25000,
    desc: "Yangi qaymoq, sovuq sut va klassik vanil aralashmasi",
    image: "images/030A0380.webp"
  },
  {
    id: 'item_54',
    name: "Samarqand tandir patir noni",
    section: 'asosiy',
    price: 12000,
    desc: "Issiq tandirda yopilgan sedana va kunjutli shirmoy patir non",
    image: "images/030A0383.webp"
  },
  {
    id: 'item_55',
    name: "Shokoladli klassik milkshake",
    section: 'ichimliklar',
    price: 26000,
    desc: "Belgiya shokoladi, muzqaymoq, sut va shokolad qirindisi",
    image: "images/030A0391.webp"
  },
  {
    id: 'item_56',
    name: "Mangalda pishgan makkajo'xori kabob",
    section: 'kabob',
    price: 18000,
    desc: "Cho'g'da qizartirib pishirilgan shirin sutli makkajo'xori",
    image: "images/030A0393.webp"
  },
  {
    id: 'item_57',
    name: "Yashil qalampir shashlik",
    section: 'kabob',
    price: 14000,
    desc: "Mangalda pishirilgan xushbo'y barra yashil bulg'or qalampiri",
    image: "images/030A0395.webp"
  },
  {
    id: 'item_58',
    name: "Sabzavotli kaboblar assortisi",
    section: 'kabob',
    price: 35000,
    desc: "Pomidor, baqlajon, qalampir va qo'ziqorinli kaboblar to'plami",
    image: "images/030A0397.webp"
  },
  {
    id: 'item_59',
    name: "Qizil pomidor shashlik (2 six)",
    section: 'kabob',
    price: 18000,
    desc: "Mangalda dimlab pishirilgan mayin suvli pomidorlar",
    image: "images/030A0399.webp"
  },
  {
    id: 'item_60',
    name: "Qo'y qovurg'asi shashlik (Uchpanja)",
    section: 'kabob',
    price: 32000,
    desc: "Cho'g'da qarsildoq pishirilgan qo'y go'shti qovurg'alari",
    image: "images/030A0401.webp"
  },
  {
    id: 'item_61',
    name: "Espresso qahvasi",
    section: 'ichimliklar',
    price: 15000,
    desc: "Klassik quyuq italyancha espresso (30 ml)",
    image: "images/030A4439.webp"
  },
  {
    id: 'item_62',
    name: "Americano qahvasi",
    section: 'ichimliklar',
    price: 18000,
    desc: "Yangi tuyilgan qahva donachalaridan tayyorlangan xushbo'y Americano",
    image: "images/030A4440.webp"
  },
  {
    id: 'item_63',
    name: "Qaymoqli Kapuchino",
    section: 'ichimliklar',
    price: 22000,
    desc: "Qalin sutli ko'pikka ega klassik kapuchino qahvasi",
    image: "images/030A4442.webp"
  },
  {
    id: 'item_64',
    name: "Qora Arabika kofesi",
    section: 'ichimliklar',
    price: 20000,
    desc: "100% Arabika donachalaridan tayyorlangan xushbo'y qora qahva",
    image: "images/030A4443.webp"
  },
  {
    id: 'item_65',
    name: "Qatlamli Latte Makiyato",
    section: 'ichimliklar',
    price: 24000,
    desc: "Issiq sut, nozik ko'pik va xushbo'y espresso qatlamlari",
    image: "images/030A4444.webp"
  },
  {
    id: 'item_66',
    name: "Issiq shokolad va Kofe miks",
    section: 'ichimliklar',
    price: 25000,
    desc: "Kakao, qaymoqli sut va mayin kofe uyg'unligi",
    image: "images/030A4445.webp"
  },
  {
    id: 'item_67',
    name: "Belgiya vaflisi banan va shokolad bilan",
    section: 'desert',
    price: 36000,
    desc: "Issiq qarsildoq vafli, to'g'ralgan banan va iliq Nutella shokoladi",
    image: "images/030A5298.webp"
  },
  {
    id: 'item_68',
    name: "Belgiya vaflisi mevalar va muzqaymoq bilan",
    section: 'desert',
    price: 42000,
    desc: "Qulupnay, kivi, banan, vanilli muzqaymoq va karamel siropi",
    image: "images/030A5302.webp"
  },
  {
    id: 'item_69',
    name: "Qulupnayli va shokoladli Belgiya vaflisi",
    section: 'desert',
    price: 38000,
    desc: "Yangi qulupnay mevalari, shokolad qoplamasi va qarsildoq vafli",
    image: "images/030A5304.webp"
  },
  {
    id: 'item_70',
    name: "Belgiya vaflisi rang-barang mevalar bilan",
    section: 'desert',
    price: 40000,
    desc: "Muzqaymoq shari, apelsin, kivi va rezavor mevalar bilan bezatilgan",
    image: "images/030A5308.webp"
  },
  {
    id: 'item_71',
    name: "Shokoladli va yong'oqli vafli deserti",
    section: 'desert',
    price: 38000,
    desc: "Yong'oq bo'laklari, quyuq shokolad va yangi pishirilgan vafli",
    image: "images/030A5313.webp"
  },
  {
    id: 'item_72',
    name: "Qulupnay va vanil kremili vafli",
    section: 'desert',
    price: 38000,
    desc: "Barra qulupnay, yengil qaymoqli krem va shakar kukuni",
    image: "images/030A5320.webp"
  },
  {
    id: 'item_73',
    name: "Karamel va muzqaymoqli Belgiya vaflisi",
    section: 'desert',
    price: 39000,
    desc: "Oltinrang vafli, sovuq qaymoqli muzqaymoq va erigan karamel",
    image: "images/030A5323.webp"
  },
  {
    id: 'item_74',
    name: "Jigar va dumba shashlik",
    section: 'kabob',
    price: 22000,
    desc: "Mayin qo'y jigari va xushbo'y dumba bo'laklari cho'g'da",
    image: "images/030A7617.webp"
  },
  {
    id: 'item_75',
    name: "Charvi dumba kabob",
    section: 'kabob',
    price: 25000,
    desc: "Maxsus charviga o'ralgan shirali qo'y go'shti va dumba shashlik",
    image: "images/030A7624.webp"
  },
  {
    id: 'item_76',
    name: "Tovuq filesi va qanot kabob",
    section: 'kabob',
    price: 22000,
    desc: "Pechda va mangalda marinadlangan yumshoq tovuq go'shti",
    image: "images/030A7627.webp"
  },
  {
    id: 'item_77',
    name: "Rulet kabob (Go'sht va pishloq)",
    section: 'kabob',
    price: 28000,
    desc: "Yupqa go'shtga o'ralgan maxsus ziravorli rulet kabob",
    image: "images/030A7633.webp?v=4.2"
  },
  {
    id: 'item_78',
    name: "Qulupnayli maxsus kokteyl",
    section: 'ichimliklar',
    price: 26000,
    desc: "Yangi qulupnay sharbati, qaymoq va muzdek shirinlik",
    image: "images/030A7637.webp"
  },
  {
    id: 'item_79',
    name: "Shaftolili qaymoqli kokteyl",
    section: 'ichimliklar',
    price: 26000,
    desc: "Xushbo'y shaftoli mevalari va mayin vanil kremi",
    image: "images/030A7649.webp"
  },
  {
    id: 'item_80',
    name: "Bananli va karamelli bokal kokteyl",
    section: 'ichimliklar',
    price: 26000,
    desc: "Pishgan banan, quyuq karamel va muzdek sut",
    image: "images/030A7653.webp"
  },
  {
    id: 'item_81',
    name: "Kivi va laymli tropik kokteyl",
    section: 'ichimliklar',
    price: 26000,
    desc: "Nordon-shirin kivi, laym sharbati va muz bo'laklari",
    image: "images/030A7656.webp"
  },
  {
    id: 'item_82',
    name: "Shokoladli Snikers kokteyli",
    section: 'ichimliklar',
    price: 29000,
    desc: "Yeryong'oq, qaymoq, karamel va erigan shokolad aralashmasi",
    image: "images/030A7661.webp"
  },
  {
    id: 'item_83',
    name: "Frensh-pressda mevali qizil choy",
    section: 'ichimliklar',
    price: 28000,
    desc: "Anor donachalari, karkade, apelsin va dolchinli issiq choy",
    image: "images/030A9434.webp"
  },
  {
    id: 'item_84',
    name: "Frensh-pressda anorli va limonli choy",
    section: 'ichimliklar',
    price: 28000,
    desc: "Barra anor sharbati, limon parraklari va tog' giyohlari",
    image: "images/030A9440.webp"
  },
  {
    id: 'item_85',
    name: "Zanjabilli va asalli shifobaxsh choy",
    section: 'ichimliklar',
    price: 26000,
    desc: "Yangi zanjabil ildizi, tabiiy asal, limon va ko'k choy",
    image: "images/030A9442.webp"
  },
  {
    id: 'item_86',
    name: "Dengiz itshumurti (Oblepixa) choyi",
    section: 'ichimliklar',
    price: 30000,
    desc: "Foydali oblepixa mevalari, apelsin va yalpizli xushbo'y choy",
    image: "images/030A9448.webp"
  },
  {
    id: 'item_87',
    name: "Tog' giyohlari va yalpizli choy",
    section: 'ichimliklar',
    price: 22000,
    desc: "Chotqol tog'larining shifobaxsh giyohlari, kiyiko't va yalpiz",
    image: "images/030A9451.webp"
  },
  {
    id: 'item_88',
    name: "Limonli va yalpizli ko'k choy",
    section: 'ichimliklar',
    price: 20000,
    desc: "Klassik 95-ko'k choy, yangi limon bo'laklari va yalpiz",
    image: "images/030A9463.webp"
  },
  {
    id: 'item_89',
    name: "Qora choy limon va novvot bilan",
    section: 'ichimliklar',
    price: 20000,
    desc: "Hindcha oliy nav qora choy, limon va oq shirin novvot",
    image: "images/030A9466.webp"
  },
  {
    id: 'item_90',
    name: "Sitrusli va mevali maxsus choy",
    section: 'ichimliklar',
    price: 28000,
    desc: "Limon, laym, apelsin va olma bo'laklari bilan damlangan choy",
    image: "images/030A9468.webp"
  },
  {
    id: 'item_91',
    name: "Qulupnayli va yalpizli choynak choyi",
    section: 'ichimliklar',
    price: 28000,
    desc: "Haqiqiy qulupnay donalari, yalpiz va mayin ko'k choy",
    image: "images/030A9469.webp"
  },
  {
    id: 'item_92',
    name: "Klassik Sezar salati tovuq bilan",
    section: 'salatlar',
    price: 42000,
    desc: "Grilda pishgan tovuq filesi, aysberg karami, cherri pomidor, suxarik va Parmezan",
    image: "images/IMG_8064.webp"
  },
  {
    id: 'item_93',
    name: "Fransuzcha go'shtli salat",
    section: 'salatlar',
    price: 40000,
    desc: "Qaynatilgan mol go'shti, pishgan tuxum, tuzlangan bodring va yengil mayonez",
    image: "images/IMG_8072.webp"
  },
  {
    id: 'item_94',
    name: "Pishloqli 'Mujskoy kapriz' salati",
    section: 'salatlar',
    price: 44000,
    desc: "Dudlangan go'sht, sarxush til, qattiq pishloq, yong'oq va maxsus sous",
    image: "images/IMG_8074.webp"
  },
  {
    id: 'item_95',
    name: "Tilimlangan shirin tarvuz",
    section: 'desert',
    price: 30000,
    desc: "Muzdek, sersuv va asaldek shirin dala tarvuzi tilimlari",
    image: "images/IMG_8161.webp"
  }
];

// ================= LOCAL STORAGE VA HOLAT (STATE) =================
// DIQQAT: Saytda server (backend) yo'q. Avtorizatsiya faqat brauzerning localStorage xotirasida ishlaydi
// va mijozlar tasodifan admin tugmalarini bosib qo'ymasligi uchun qulaylik darajasida yaratilgan.
// Haqiqiy to'liq himoya uchun alohida backend talab etiladi.
const STORAGE_KEYS = {
  ITEMS: 'choyxona_gallery_items_v6',
  AUTH: 'choyxona_gallery_auth_v6',
  SESSION: 'choyxona_gallery_session_v6',
  SECTIONS: 'choyxona_gallery_sections_v6'
};

let items = [];
let credentials = { username: 'admin', password: '1234' };
let currentUsername = null;
let activeSection = null;
let cardObserver = null;
let currentRenderedCount = 0;
const CHUNK_SIZE = 12;




const GAZLI_IDS = new Set(['item_16', 'item_17', 'item_18', 'item_28', 'item_29', 'item_30', 'item_31', 'item_32', 'item_33', 'item_34', 'item_35']);
const SHARBAT_IDS = new Set(['item_12', 'item_13', 'item_19', 'item_20', 'item_21', 'item_22', 'item_23', 'item_24', 'item_25', 'item_26', 'item_27']);
const MOXITO_IDS = new Set(['item_36', 'item_37', 'item_38', 'item_39', 'item_40', 'item_41', 'item_49', 'item_50']);
const KOKTEYL_IDS = new Set(['item_52', 'item_53', 'item_55', 'item_78', 'item_79', 'item_80', 'item_81', 'item_82']);

const DRINK_SECS = new Set(['gazli', 'sharbat', 'moxito', 'kokteyl', 'choy_kofe']);

function migrateOldSections() {
  let changed = false;
  items.forEach(item => {
    if (item.section === 'non') {
      changed = true;
      item.section = 'asosiy';
    }
    if (item.id === 'item_77' && (!item.image || !item.image.includes('?v='))) {
      item.image = 'images/030A7633.webp?v=4.2';
      changed = true;
    }
    if (DRINK_SECS.has(item.section)) {
      changed = true;
      item.section = 'ichimliklar';
    }
  });
  if (changed) {
    saveItems();
  }
}

function loadData() {
  try {
    const rawSections = localStorage.getItem(STORAGE_KEYS.SECTIONS);
    if (rawSections) {
      const savedSecs = JSON.parse(rawSections);
      if (Array.isArray(savedSecs)) {
        savedSecs.forEach(s => {
          const target = SECTIONS.find(x => x.id === s.id);
          if (target && s.name && s.name.trim()) {
            target.name = s.name.trim();
            if (s.cover) target.cover = s.cover;
          } else if (!target && s.id && s.name && s.name.trim()) {
            SECTIONS.push({
              id: s.id,
              name: s.name.trim(),
              cover: s.cover || 'images/icon_milliy.webp'
            });
          }
        });
      }
    }
  } catch (e) {}

  try {
    const rawItems = localStorage.getItem(STORAGE_KEYS.ITEMS);
    items = rawItems ? JSON.parse(rawItems) : [...DEFAULT_ITEMS];
  } catch (e) {
    items = [...DEFAULT_ITEMS];
  }

  migrateOldSections();

  try {
    const rawAuth = localStorage.getItem(STORAGE_KEYS.AUTH);
    if (rawAuth) {
      credentials = { ...credentials, ...JSON.parse(rawAuth) };
    }
  } catch (e) {}

  try {
    const savedSession = sessionStorage.getItem(STORAGE_KEYS.SESSION);
    if (savedSession && savedSession === credentials.username) {
      currentUsername = savedSession;
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.SESSION);
      currentUsername = null;
    }
  } catch (e) {}
}

function saveItems() {
  try {
    localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
    return true;
  } catch (e) {
    showToast("Xotira to'ldi: yangi rasm hajmini kichikroq qilib yuklang.");
    return false;
  }
}

function commitItems(mutate, successMsg) {
  const prevItems = JSON.parse(JSON.stringify(items));
  try {
    mutate();
    const ok = saveItems();
    if (ok) {
      if (activeSection) {
        renderGallery();
      } else {
        renderHomeMenu();
      }
      if (successMsg) showToast(successMsg);
      return true;
    } else {
      items = prevItems;
      if (activeSection) renderGallery(); else renderHomeMenu();
      return false;
    }
  } catch (err) {
    items = prevItems;
    if (activeSection) renderGallery(); else renderHomeMenu();
    showToast("Amalni bajarishda xatolik yuz berdi.");
    return false;
  }
}

function saveCredentialsData() {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(credentials));
  } catch (e) {}
}

function saveSectionsData() {
  try {
    localStorage.setItem(STORAGE_KEYS.SECTIONS, JSON.stringify(SECTIONS.map(s => ({ id: s.id, name: s.name, cover: s.cover }))));
    return true;
  } catch (e) {
    return false;
  }
}

function refreshAllSectionsUI() {
  populateSectionSelect();
  renderHomeMenu();
  renderSectionsBar();
  if (activeSection) {
    renderGallery();
  }
  const reorderModal = document.getElementById('reorderModal');
  if (reorderModal && reorderModal.classList.contains('open')) {
    const dashSecSelect = document.getElementById('dashboardSecSelect');
    const currentVal = dashSecSelect ? dashSecSelect.value : null;
    if (dashSecSelect) {
      dashSecSelect.innerHTML = SECTIONS.map(s => {
        const cnt = items.filter(i => i.section === s.id).length;
        return `<option value="${s.id}" ${s.id === currentVal ? 'selected' : ''}>${escapeHtml(s.name)} (${cnt} ta taom)</option>`;
      }).join('');
    }
    const sec = SECTIONS.find(s => s.id === currentVal);
    const title = document.getElementById('reorderModalTitle');
    if (title && sec) {
      title.textContent = `«${sec.name}» — Taomlar tartibi`;
    }
  }
}

function renderSectionsEditList() {
  const container = document.getElementById('sectionsListContainer');
  if (!container) return;

  container.innerHTML = SECTIONS.map(s => {
    const count = items.filter(i => i.section === s.id).length;
    return `
      <div class="sec-edit-row" data-sec-row="${s.id}">
        <img src="${s.cover || 'images/icon_milliy.webp'}" alt="" class="sec-edit-cover" onerror="this.src='images/icon_milliy.webp'" />
        <div class="sec-edit-fields">
          <div class="sec-edit-header">
            <span class="sec-edit-badge">${escapeHtml(s.id)}</span>
            <span class="sec-edit-count">${count} ta taom</span>
          </div>
          <input type="text" class="sec-name-input" data-sec-id="${s.id}" value="${escapeHtml(s.name)}" placeholder="Bo'lim nomi" required maxlength="60" />
        </div>
        <button type="button" class="btn-del-sec" data-del-sec="${s.id}" title="Bo'limni o'chirish" aria-label="Bo'limni o'chirish">🗑️</button>
      </div>
    `;
  }).join('');
}

function openSectionsModal(preferredSecId) {
  renderSectionsEditList();
  openModal('sectionsModal');
  if (preferredSecId) {
    setTimeout(() => {
      const inp = document.querySelector(`.sec-name-input[data-sec-id="${preferredSecId}"]`);
      if (inp) {
        inp.focus();
        inp.select();
        const row = inp.closest('.sec-edit-row');
        if (row) row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);
  }
}

function formatSom(value) {
  return Number(value || 0).toLocaleString('ru-RU') + " so'm";
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getItemPhotoSrc(item) {
  let src = item.customImage || item.image || 'images/030A0348.webp';
  if (src.endsWith('.png')) src = src.replace(/\.png$/, '.webp');
  return src;
}

// ================= UI RENDERING =================
function renderHeaderAuth() {
  const btnLogin = document.getElementById('btnOpenLogin');
  const adminGroup = document.getElementById('adminHeaderGroup');
  const userLabel = document.getElementById('activeUsernameLabel');

  if (currentUsername) {
    btnLogin.style.display = 'none';
    adminGroup.classList.add('visible');
    userLabel.textContent = currentUsername;
  } else {
    btnLogin.style.display = 'inline-flex';
    adminGroup.classList.remove('visible');
  }
}

function renderHomeMenu() {
  const container = document.getElementById('homeMenu');
  if (!container) return;

  const validSections = SECTIONS.filter(sec => items.some(i => i.section === sec.id));

  const tilesHtml = validSections.map((sec, idx) => {
    const count = items.filter(i => i.section === sec.id).length;
    const coverSrc = sec.cover || 'images/030A0348.webp';
    const loadingAttr = idx < 6 ? 'eager' : 'lazy';

    return `
      <div class="home-tile" data-sec="${sec.id}" role="button" tabindex="0">
        <div class="tile-glass-backdrop"></div>
        <img class="home-tile-img" src="${coverSrc}" alt="" width="200" height="200" loading="${loadingAttr}" decoding="async"
          onerror="if (!this.dataset.fallback) { this.dataset.fallback = '1'; this.src = 'images/030A0348.webp'; }" />
        <div class="home-tile-info">
          <span class="home-tile-title">${escapeHtml(sec.name)}</span>
          <span class="home-tile-count">${count} ta taom</span>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = tilesHtml;
}

function renderSectionsBar() {
  const nav = document.getElementById('sectionsNav');
  const bar = document.getElementById('sectionsBar');
  if (!nav || !bar) return;

  if (!activeSection) {
    nav.style.display = 'none';
    bar.innerHTML = '';
    return;
  }

  nav.style.display = 'block';
  const sec = SECTIONS.find(s => s.id === activeSection);
  const secName = sec ? escapeHtml(sec.name) : '';

  bar.innerHTML = `
    <button class="btn-back-home" id="btnBackHome" type="button" aria-label="Bosh ekranga qaytish">
      <span>←</span> Bo'limlar
    </button>
    <span class="active-sec-badge">${secName}</span>
  `;
}

function navigateToSection(secId, pushHistory = true) {
  activeSection = secId;
  currentRenderedCount = CHUNK_SIZE;
  if (pushHistory) {
    history.pushState({ sec: secId }, '');
  }
  const homeWrap = document.getElementById('homeMenuWrap');
  const gallery = document.getElementById('galleryContainer');
  if (homeWrap) homeWrap.style.display = 'none';
  if (gallery) gallery.style.display = 'flex';
  renderSectionsBar();
  renderGallery();
  window.scrollTo(0, 0);
}

function navigateToHome(pushHistory = false) {
  activeSection = null;
  if (cardObserver) {
    cardObserver.disconnect();
    cardObserver = null;
  }
  currentRenderedCount = 0;
  if (pushHistory) {
    history.pushState(null, '');
  }
  const homeWrap = document.getElementById('homeMenuWrap');
  const gallery = document.getElementById('galleryContainer');
  if (homeWrap) homeWrap.style.display = 'flex';
  if (gallery) {
    gallery.style.display = 'none';
    gallery.innerHTML = '';
  }
  renderSectionsBar();
  renderHomeMenu();
  window.scrollTo(0, 0);
}

function populateSectionSelect() {
  const sel = document.getElementById('itemSectionInput');
  sel.innerHTML = SECTIONS.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
}

function populatePresetPhotoSelect() {
  const sel = document.getElementById('itemPresetPhoto');
  sel.innerHTML = DEFAULT_ITEMS.map(i => `<option value="${escapeHtml(i.image)}">${escapeHtml(i.name)}</option>`).join('');
}

function moveItemToPosition(itemId, targetPos1Based) {
  const item = items.find(x => x.id === itemId);
  if (!item) return false;

  const sectionId = item.section;
  const secItems = items.filter(x => x.section === sectionId);
  const total = secItems.length;
  if (total <= 1) return false;

  const currentSecIndex = secItems.findIndex(x => x.id === itemId);
  if (currentSecIndex === -1) return false;

  const targetIndex = Math.max(0, Math.min(total - 1, targetPos1Based - 1));
  if (currentSecIndex === targetIndex) return false;

  const oldPos = currentSecIndex + 1;
  const newPos = targetIndex + 1;

  const [moved] = secItems.splice(currentSecIndex, 1);
  secItems.splice(targetIndex, 0, moved);

  let cursor = 0;
  items = items.map(x => {
    if (x.section === sectionId) {
      return secItems[cursor++];
    }
    return x;
  });

  commitItems(() => {}, `«${item.name}» ${newPos}-o'ringa ko'chirildi (#${oldPos} ➔ #${newPos})`);

  // Dashboard ochiq bo'lsa darhol ikonkalarni qayta chizamiz
  renderReorderModalItems();

  return true;
}

function openReorderModal(preferredSecId) {
  const targetSecId = preferredSecId || activeSection || (SECTIONS[0] ? SECTIONS[0].id : null);
  if (!targetSecId) return;

  const secSelect = document.getElementById('dashboardSecSelect');
  if (secSelect) {
    secSelect.innerHTML = SECTIONS.map(s => {
      const cnt = items.filter(i => i.section === s.id).length;
      return `<option value="${s.id}" ${s.id === targetSecId ? 'selected' : ''}>${escapeHtml(s.name)} (${cnt} ta taom)</option>`;
    }).join('');
  }

  renderReorderModalItems();
  openModal('reorderModal');
}

function renderReorderModalItems() {
  const grid = document.getElementById('reorderItemsGrid');
  if (!grid) return;

  const secSelect = document.getElementById('dashboardSecSelect');
  const targetSecId = (secSelect && secSelect.value) ? secSelect.value : (activeSection || (SECTIONS[0] ? SECTIONS[0].id : 'asosiy'));

  const sec = SECTIONS.find(s => s.id === targetSecId);
  const title = document.getElementById('reorderModalTitle');
  if (title) {
    title.textContent = `«${sec ? sec.name : ''}» — Taomlar tartibi`;
  }

  const secItems = items.filter(x => x.section === targetSecId);
  if (secItems.length === 0) {
    grid.innerHTML = '<div class="empty-section-msg" style="grid-column: 1 / -1;">Bu bo\'limda taomlar yo\'q.</div>';
    return;
  }

  grid.innerHTML = secItems.map((item, idx) => {
    const pos = idx + 1;
    return `
      <div class="reorder-card" data-id="${item.id}" data-pos="${pos}" role="button" tabindex="0" title="${escapeHtml(item.name)} — bosib turib suring">
        <span class="reorder-badge">#${pos}</span>
        <div class="reorder-img-box">
          <img src="${getItemPhotoSrc(item)}" alt="" class="reorder-img" draggable="false" />
        </div>
        <div class="reorder-title">${escapeHtml(item.name)}</div>
      </div>
    `;
  }).join('');
}

let dragSourceId = null;
let dragSourceEl = null;
let selectedForSwapId = null;
let longPressTimer = null;
let isDraggingActive = false;
let startX = 0;
let startY = 0;
let latestX = 0;
let latestY = 0;
let dragOffsetX = 0;
let dragOffsetY = 0;
let floatingClone = null;
let wasDragging = false;

function removeFloatingClone() {
  if (floatingClone) {
    try { floatingClone.remove(); } catch (e) {}
    floatingClone = null;
  }
}

function setupDashboardDragAndDrop() {
  const grid = document.getElementById('reorderItemsGrid');
  if (!grid) return;

  const cancelLongPress = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
    if (dragSourceEl && !isDraggingActive) {
      dragSourceEl.classList.remove('is-pressing');
    }
    if (!isDraggingActive) {
      document.body.classList.remove('is-reordering-active');
    }
  };

  // Bosib turganda: 300ms turgandan keyinoq tartiblash (drag) faollashadi
  grid.addEventListener('pointerdown', (e) => {
    const card = e.target.closest('.reorder-card');
    if (!card) return;
    if (e.button !== undefined && e.button !== 0) return;

    cancelLongPress();
    removeFloatingClone();

    // Agar oldin tap-to-swap uchun belgilangan bo'lsa tozalash
    if (selectedForSwapId) {
      selectedForSwapId = null;
      grid.querySelectorAll('.reorder-card.is-selected').forEach(c => c.classList.remove('is-selected'));
    }

    isDraggingActive = false;
    dragSourceId = card.getAttribute('data-id');
    dragSourceEl = card;
    startX = e.clientX;
    startY = e.clientY;
    latestX = e.clientX;
    latestY = e.clientY;

    card.classList.add('is-pressing');

    // 300ms bosib turganda barmoqqa ergashuvchi klon hosil qilinadi
    longPressTimer = setTimeout(() => {
      isDraggingActive = true;
      document.body.classList.add('is-reordering-active');
      card.classList.remove('is-pressing');
      card.classList.add('is-placeholder');

      if (navigator.vibrate) {
        try { navigator.vibrate(50); } catch (err) {}
      }

      const rect = card.getBoundingClientRect();
      dragOffsetX = latestX - rect.left;
      dragOffsetY = latestY - rect.top;

      removeFloatingClone();

      floatingClone = card.cloneNode(true);
      floatingClone.classList.remove('is-pressing', 'is-selected', 'is-placeholder');
      floatingClone.classList.add('is-floating-ghost');
      floatingClone.style.width = `${rect.width}px`;
      floatingClone.style.height = `${rect.height}px`;
      const posX = latestX - dragOffsetX;
      const posY = latestY - dragOffsetY;
      floatingClone.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(1.08)`;
      document.body.appendChild(floatingClone);
    }, 300);
  });

  const onPointerMove = (e) => {
    if (!dragSourceEl) return;
    latestX = e.clientX;
    latestY = e.clientY;

    // Agar hali 300ms to'lmagan bo'lsa va barmoq 8px dan ko'proq siljisa -> bu tabiiy skroll
    if (!isDraggingActive) {
      const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
      if (dist > 8) {
        cancelLongPress();
        dragSourceId = null;
        dragSourceEl = null;
      }
      return;
    }

    // Drag faollashgan: skrollni to'xtatib, klonni barmoqqa ergashtiramiz
    e.preventDefault();

    if (floatingClone) {
      const posX = e.clientX - dragOffsetX;
      const posY = e.clientY - dragOffsetY;
      floatingClone.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(1.08)`;
    }

    // Modal ichida bo'lsa: faqat haqiqiy scroll mavjud bo'lganda (kontent ekrandan katta bo'lsa) va chekkaga yaqinlashganda asta siljitish
    const modalBody = grid.closest('.reorder-modal-body') || grid.closest('.modal-box');
    if (modalBody && modalBody.scrollHeight > modalBody.clientHeight + 40) {
      const mRect = modalBody.getBoundingClientRect();
      if (e.clientY < mRect.top + 24 && modalBody.scrollTop > 0) {
        modalBody.scrollTop -= 5;
      } else if (e.clientY > mRect.bottom - 24 && modalBody.scrollTop < (modalBody.scrollHeight - modalBody.clientHeight - 2)) {
        modalBody.scrollTop += 5;
      }
    }

    // Barmoq ostidagi nishon kartochkani aniqlash
    const under = document.elementFromPoint(e.clientX, e.clientY);
    const targetCard = under ? under.closest('.reorder-card:not(.is-floating-ghost)') : null;

    grid.querySelectorAll('.reorder-card.is-drag-over').forEach(c => {
      if (c !== targetCard) c.classList.remove('is-drag-over');
    });

    if (targetCard && targetCard !== dragSourceEl) {
      targetCard.classList.add('is-drag-over');
    }
  };

  const finishDrag = (e) => {
    cancelLongPress();
    document.body.classList.remove('is-reordering-active');

    const didDrag = isDraggingActive;
    const sourceEl = dragSourceEl;
    const sourceId = dragSourceId;

    removeFloatingClone();

    grid.querySelectorAll('.reorder-card').forEach(c => {
      c.classList.remove('is-placeholder', 'is-dragging', 'is-drag-over', 'is-pressing');
    });

    isDraggingActive = false;
    dragSourceId = null;
    dragSourceEl = null;

    if (didDrag && sourceEl) {
      let clientX = e ? e.clientX : 0;
      let clientY = e ? e.clientY : 0;
      if ((!clientX || !clientY) && e && e.changedTouches && e.changedTouches[0]) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      }
      if (clientX && clientY) {
        const under = document.elementFromPoint(clientX, clientY);
        const targetCard = under ? under.closest('.reorder-card:not(.is-floating-ghost)') : null;

        if (targetCard && targetCard !== sourceEl) {
          const targetPos = parseInt(targetCard.getAttribute('data-pos'), 10);
          if (targetPos) {
            moveItemToPosition(sourceId, targetPos);
          }
        }
      }
    }

    if (didDrag) {
      wasDragging = true;
      setTimeout(() => { wasDragging = false; }, 120);
    }
  };

  // Hodisalarni grid va butun window darajasida kuzatish (qo'l tez harakatlansa ham uzilmaydi)
  grid.addEventListener('pointermove', onPointerMove, { passive: false });
  window.addEventListener('pointermove', (e) => {
    if (isDraggingActive) onPointerMove(e);
  }, { passive: false });

  // Touch qurilmalarda (Galaxy Tab / Android Chrome) drag vaqtida browser pull-to-refresh va sahifa skrollini to'liq bloklash
  window.addEventListener('touchmove', (e) => {
    if (isDraggingActive) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, { passive: false });

  grid.addEventListener('pointerup', finishDrag);
  grid.addEventListener('pointercancel', finishDrag);
  window.addEventListener('pointerup', (e) => {
    if (isDraggingActive || dragSourceEl) finishDrag(e);
  });
  window.addEventListener('pointercancel', (e) => {
    if (isDraggingActive || dragSourceEl) finishDrag(e);
  });
  window.addEventListener('touchend', (e) => {
    if (isDraggingActive || dragSourceEl || longPressTimer) finishDrag(e);
  });
  window.addEventListener('touchcancel', (e) => {
    if (isDraggingActive || dragSourceEl || longPressTimer) finishDrag(e);
  });

  // Tanlab almashtirish (Tap-to-swap: masalan, 4-ni bir marta bosib, keyin 1-ni bossa ham o'rni almashadi)
  grid.addEventListener('click', (e) => {
    if (isDraggingActive || wasDragging) return;
    const card = e.target.closest('.reorder-card');
    if (!card) return;
    const clickedId = card.getAttribute('data-id');
    const clickedPos = parseInt(card.getAttribute('data-pos'), 10);

    if (!selectedForSwapId) {
      selectedForSwapId = clickedId;
      card.classList.add('is-selected');
    } else if (selectedForSwapId === clickedId) {
      selectedForSwapId = null;
      card.classList.remove('is-selected');
    } else {
      const sourceId = selectedForSwapId;
      selectedForSwapId = null;
      grid.querySelectorAll('.reorder-card.is-selected').forEach(c => c.classList.remove('is-selected'));
      moveItemToPosition(sourceId, clickedPos);
    }
  });
}

function setupGalleryLongPress() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  let galleryLongPressTimer = null;
  let gStartX = 0;
  let gStartY = 0;
  let pressedCard = null;

  const cancelGalleryLongPress = () => {
    if (galleryLongPressTimer) {
      clearTimeout(galleryLongPressTimer);
      galleryLongPressTimer = null;
    }
    if (pressedCard) {
      pressedCard.classList.remove('is-pressing');
      pressedCard = null;
    }
  };

  container.addEventListener('pointerdown', (e) => {
    if (!currentUsername) return;
    const card = e.target.closest('.gallery-card');
    if (!card) return;
    if (e.target.closest('input, button, textarea, select')) return;

    cancelGalleryLongPress();
    pressedCard = card;
    gStartX = e.clientX;
    gStartY = e.clientY;

    card.classList.add('is-pressing');

    // 350ms bosib turgandan keyin tartiblash dashboardi ochiladi
    galleryLongPressTimer = setTimeout(() => {
      cancelGalleryLongPress();
      if (navigator.vibrate) {
        try { navigator.vibrate(60); } catch (err) {}
      }
      openReorderModal(activeSection);
      showToast("Taomlar tartibi dashboardi ochildi.");
    }, 350);
  });

  container.addEventListener('pointermove', (e) => {
    if (!galleryLongPressTimer) return;
    const dist = Math.hypot(e.clientX - gStartX, e.clientY - gStartY);
    if (dist > 10) {
      cancelGalleryLongPress();
    }
  });

  container.addEventListener('pointerup', cancelGalleryLongPress);
  container.addEventListener('pointercancel', cancelGalleryLongPress);
}

function renderCardHtml(item) {
  const imgSrc = getItemPhotoSrc(item);
  const adminBarHtml = currentUsername ? `
    <div class="card-admin-bar">
      <div class="inline-price-form">
        <label for="price_${item.id}">Narx:</label>
        <input type="number" class="inline-price-input" id="price_${item.id}" value="${item.price}" step="100" min="100" />
        <button type="button" class="btn-save-price" data-action="save-price" data-id="${item.id}">Saqlash</button>
      </div>
      <div class="card-admin-actions">
        <button type="button" class="btn" data-action="edit" data-id="${item.id}">Tahrirlash</button>
        <button type="button" class="btn btn-danger" data-action="delete" data-id="${item.id}">O'chirish</button>
      </div>
    </div>
  ` : '';

  return `
    <article class="gallery-card" data-card-id="${item.id}">
      <div class="gallery-photo-box">
        <img src="${imgSrc}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async"
          onload="this.classList.add('loaded')"
          onerror="if (!this.dataset.fallback) { this.dataset.fallback = '1'; this.src = 'images/030A0348.webp'; } else { this.classList.add('loaded'); }" />
      </div>
      <div class="gallery-info">
        <div class="gallery-text">
          <h3 class="gallery-title">${escapeHtml(item.name)}</h3>
          <p class="gallery-desc">${escapeHtml(item.desc || '')}</p>
        </div>
        <div class="gallery-price">${formatSom(item.price)}</div>
      </div>
      ${adminBarHtml}
    </article>
  `;
}

function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  if (cardObserver) {
    cardObserver.disconnect();
    cardObserver = null;
  }

  if (!activeSection) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  container.style.display = 'flex';
  const sec = SECTIONS.find(s => s.id === activeSection);
  const secName = sec ? escapeHtml(sec.name) : '';
  const secItems = items.filter(i => i.section === activeSection);

  if (secItems.length === 0) {
    container.innerHTML = `
      <section class="section-group">
        <div class="empty-section-msg">
          Bu bo'limda hozircha mahsulotlar yo'q.
        </div>
      </section>
    `;
    return;
  }

  currentRenderedCount = Math.min(Math.max(CHUNK_SIZE, currentRenderedCount || CHUNK_SIZE), secItems.length);
  const initialCards = secItems.slice(0, currentRenderedCount).map(item => renderCardHtml(item)).join('');
  const hasMore = currentRenderedCount < secItems.length;

  container.innerHTML = `
    <section class="section-group">
      <div class="section-heading">
        <h2>${secName}</h2>
        <div class="section-heading-right">
          <span>${secItems.length} ta taom</span>
          ${currentUsername ? `
            <button type="button" class="btn-sec-reorder" id="btnEditCurrentSec" data-sec-id="${sec ? sec.id : ''}" title="Bo'lim nomini o'zgartirish">✏️ Nomini tahrirlash</button>
            <button type="button" class="btn-sec-reorder" id="btnOpenReorderModal" title="Taomlar tartibini o'zgartirish dashboardi">⊞ Tartiblash</button>
          ` : ''}
        </div>
      </div>
      <div class="single-column-list" id="cardList">
        ${initialCards}
      </div>
      ${hasMore ? '<div id="sentinel" class="gallery-sentinel"></div>' : ''}
    </section>
  `;

  if (hasMore) {
    const sentinel = document.getElementById('sentinel');
    if (sentinel && 'IntersectionObserver' in window) {
      cardObserver = new IntersectionObserver((entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          loadMoreCards(secItems);
        }
      }, { rootMargin: '400px' });
      cardObserver.observe(sentinel);
    }
  }
}

function loadMoreCards(secItems) {
  const list = document.getElementById('cardList');
  if (!list) return;

  const nextCount = Math.min(currentRenderedCount + CHUNK_SIZE, secItems.length);
  const nextSlice = secItems.slice(currentRenderedCount, nextCount);
  nextSlice.forEach(item => {
    list.insertAdjacentHTML('beforeend', renderCardHtml(item));
  });
  currentRenderedCount = nextCount;

  if (currentRenderedCount >= secItems.length) {
    const sentinel = document.getElementById('sentinel');
    if (sentinel) sentinel.remove();
    if (cardObserver) {
      cardObserver.disconnect();
      cardObserver = null;
    }
  }
}

// ================= HODISALAR (EVENTS) =================
function setupEvents() {
  // Logotip bosilganda (bo'limda bo'lsa bosh ekranga, aks holda tepaga)
  const brandLogo = document.getElementById('brandLogo');
  if (brandLogo) {
    brandLogo.addEventListener('click', () => {
      if (activeSection) {
        if (history.state && history.state.sec) {
          history.back();
        } else {
          navigateToHome(false);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Login tugmasi
  document.getElementById('btnOpenLogin').addEventListener('click', () => {
    document.getElementById('loginError').style.display = 'none';
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    openModal('loginModal');
  });

  // Admin chiqish
  document.getElementById('btnLogout').addEventListener('click', () => {
    currentUsername = null;
    try { sessionStorage.removeItem(STORAGE_KEYS.SESSION); } catch (e) {}
    renderHeaderAuth();
    if (activeSection) renderGallery(); else renderHomeMenu();
    showToast("Admin rejimidan chiqildi.");
  });

  // Tovar qo'shish modalini ochish
  document.getElementById('btnOpenAddModal').addEventListener('click', () => {
    openItemModal(null);
  });

  // Admin parol va sozlamalar modalini ochish
  document.getElementById('btnOpenCredModal').addEventListener('click', () => {
    document.getElementById('newAdminUser').value = credentials.username;
    document.getElementById('newAdminPass').value = '';
    document.getElementById('newAdminPass').placeholder = 'Yangi parol';
    openModal('credModal');
  });

  // Standart holatga qaytarish (Reset)
  document.getElementById('btnResetGallery').addEventListener('click', () => {
    if (confirm("Haqiqatan ham barcha taomlar va rasmlarni boshlang'ich 95 ta holatiga qaytarmoqchimisiz?")) {
      const ok = commitItems(() => {
        items = JSON.parse(JSON.stringify(DEFAULT_ITEMS));
      }, "Boshlang'ich 95 ta taom qayta tiklandi.");
      if (ok) closeModal('credModal');
    }
  });

  // Preset rasm tanlanganda oldingi maxsus yuklangan rasm ma'lumotlarini tozalash
  document.getElementById('itemPresetPhoto').addEventListener('change', () => {
    document.getElementById('itemCustomImageData').value = '';
    document.getElementById('itemFileInput').value = '';
  });

  // Modallarni yopish (X tugmasi va data-close)
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.getAttribute('data-close'));
    });
  });

  // Modal orqa foni bosilganda yopish
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('open');
      }
    });
  });

  // Login form yuborilganda
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const u = document.getElementById('loginUsername').value.trim();
    const p = document.getElementById('loginPassword').value.trim();

    if (u.toLowerCase() === credentials.username.toLowerCase() && p === credentials.password) {
      currentUsername = credentials.username;
      try { sessionStorage.setItem(STORAGE_KEYS.SESSION, currentUsername); } catch (err) {}
      closeModal('loginModal');
      renderHeaderAuth();
      if (activeSection) renderGallery(); else renderHomeMenu();
      showToast(`Xush kelibsiz, @${currentUsername}`);
    } else {
      document.getElementById('loginError').style.display = 'block';
    }
  });

  // Rasmni qurilmadan tanlaganda siqish (compress canvas) va poyga holatidan himoya
  document.getElementById('itemFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const submitBtn = document.querySelector('#itemForm button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const reader = new FileReader();
    reader.onerror = () => {
      showToast("Faylni o'qishda xatolik yuz berdi.");
      if (submitBtn) submitBtn.disabled = false;
    };
    reader.onload = (ev) => {
      const img = new Image();
      img.onerror = () => {
        showToast("Rasm formatini yuklab bo'lmadi.");
        if (submitBtn) submitBtn.disabled = false;
      };
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxW = 960;
        const scale = img.width > maxW ? maxW / img.width : 1;
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        document.getElementById('itemCustomImageData').value = canvas.toDataURL('image/jpeg', 0.85);
        if (submitBtn) submitBtn.disabled = false;
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Yangi tovar / tahrirlash formasi yuborilganda (commitItems orqali)
  document.getElementById('itemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('itemIdInput').value;
    const itemObj = {
      id: id || ('item_' + Date.now()),
      name: document.getElementById('itemNameInput').value.trim(),
      section: document.getElementById('itemSectionInput').value,
      price: Number(document.getElementById('itemPriceInput').value),
      desc: document.getElementById('itemDescInput').value.trim(),
      image: document.getElementById('itemPresetPhoto').value,
      customImage: document.getElementById('itemCustomImageData').value || ''
    };

    const ok = commitItems(() => {
      if (id) {
        const idx = items.findIndex(x => x.id === id);
        if (idx > -1) items[idx] = itemObj;
      } else {
        items.unshift(itemObj);
      }
    }, id ? "Mahsulot ma'lumotlari yangilandi." : "Yangi mahsulot galereyaga qo'shildi.");

    if (ok) closeModal('itemModal');
  });

  // Yangi login/parol saqlash
  document.getElementById('credForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nu = document.getElementById('newAdminUser').value.trim();
    const np = document.getElementById('newAdminPass').value.trim();
    if (!nu || !np) return;
    credentials.username = nu;
    credentials.password = np;
    currentUsername = nu;
    saveCredentialsData();
    try { sessionStorage.setItem(STORAGE_KEYS.SESSION, currentUsername); } catch (err) {}
    renderHeaderAuth();
    closeModal('credModal');
    showToast("Username va parol muvaffaqiyatli yangilandi.");
  });

  // Galereya kartochkalari bo'yicha hodisalarni delegatsiya qilish (commitItems orqali)
  document.getElementById('galleryContainer').addEventListener('click', (e) => {
    const reorderBtn = e.target.closest('#btnOpenReorderModal');
    if (reorderBtn) {
      openReorderModal();
      return;
    }

    const editSecBtn = e.target.closest('#btnEditCurrentSec');
    if (editSecBtn) {
      const secId = editSecBtn.getAttribute('data-sec-id') || activeSection;
      openSectionsModal(secId);
      return;
    }

    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');
    const item = items.find(x => x.id === id);
    if (!item) return;

    if (action === 'save-price') {
      const inp = document.getElementById('price_' + id);
      const val = Number(inp ? inp.value : 0);
      if (val > 0) {
        commitItems(() => {
          item.price = val;
        }, `"${item.name}" narxi yangilandi: ${formatSom(val)}`);
      }
    } else if (action === 'edit') {
      openItemModal(item);
    } else if (action === 'delete') {
      if (confirm(`"${item.name}" taomini o'chirmoqchimisiz?`)) {
        commitItems(() => {
          items = items.filter(x => x.id !== id);
        }, `"${item.name}" o'chirildi.`);
      }
    }
  });

  // Headerdagi "⊞ Dashboard" tugmasi bosilganda
  const btnOpenDashboard = document.getElementById('btnOpenDashboard');
  if (btnOpenDashboard) {
    btnOpenDashboard.addEventListener('click', () => {
      openReorderModal();
    });
  }

  // Dashboard modalida bo'lim tanlanganda
  const dashSecSelect = document.getElementById('dashboardSecSelect');
  if (dashSecSelect) {
    dashSecSelect.addEventListener('change', () => {
      renderReorderModalItems();
    });
  }

  // Headerdagi "📁 Bo'limlar" tugmasi bosilganda
  const btnOpenSectionsModal = document.getElementById('btnOpenSectionsModal');
  if (btnOpenSectionsModal) {
    btnOpenSectionsModal.addEventListener('click', () => {
      openSectionsModal(activeSection);
    });
  }

  // Dashboard ichidagi "✏️ Nomini o'zgartirish" tugmasi bosilganda
  const btnEditSecFromDashboard = document.getElementById('btnEditSecFromDashboard');
  if (btnEditSecFromDashboard) {
    btnEditSecFromDashboard.addEventListener('click', () => {
      const secSel = document.getElementById('dashboardSecSelect');
      openSectionsModal(secSel ? secSel.value : activeSection);
    });
  }

  // Bo'limlar nomlarini saqlash formasi yuborilganda
  const sectionsForm = document.getElementById('sectionsForm');
  if (sectionsForm) {
    sectionsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = document.querySelectorAll('.sec-name-input');
      let hasEmpty = false;
      inputs.forEach(inp => {
        const secId = inp.getAttribute('data-sec-id');
        const val = inp.value.trim();
        if (!val) {
          hasEmpty = true;
          inp.focus();
          return;
        }
        const target = SECTIONS.find(s => s.id === secId);
        if (target) {
          target.name = val;
        }
      });

      if (hasEmpty) {
        showToast("Bo'lim nomi bo'sh bo'lishi mumkin emas.");
        return;
      }

      saveSectionsData();
      refreshAllSectionsUI();
      closeModal('sectionsModal');
      showToast("Bo'limlar nomlari muvaffaqiyatli saqlandi!");
    });
  }

  // Yangi bo'lim qo'shish tugmasi
  const btnAddNewSection = document.getElementById('btnAddNewSection');
  if (btnAddNewSection) {
    btnAddNewSection.addEventListener('click', () => {
      const nameInp = document.getElementById('newSectionNameInput');
      const iconSel = document.getElementById('newSectionIconSelect');
      const name = nameInp ? nameInp.value.trim() : '';
      if (!name) {
        showToast("Iltimos, yangi bo'lim nomini kiriting.");
        if (nameInp) nameInp.focus();
        return;
      }
      const newId = 'sec_' + Date.now();
      const newCover = iconSel ? iconSel.value : 'images/icon_milliy.webp';
      SECTIONS.push({
        id: newId,
        name: name,
        cover: newCover
      });
      saveSectionsData();
      renderSectionsEditList();
      refreshAllSectionsUI();
      if (nameInp) nameInp.value = '';
      showToast(`"${name}" bo'limi muvaffaqiyatli qo'shildi!`);
    });
  }

  // Bo'limni o'chirish (delegated click)
  const sectionsListContainer = document.getElementById('sectionsListContainer');
  if (sectionsListContainer) {
    sectionsListContainer.addEventListener('click', (e) => {
      const delBtn = e.target.closest('[data-del-sec]');
      if (!delBtn) return;
      const secId = delBtn.getAttribute('data-del-sec');
      const targetSec = SECTIONS.find(s => s.id === secId);
      if (!targetSec) return;

      const dishCount = items.filter(i => i.section === secId).length;
      if (dishCount > 0) {
        alert(`"${targetSec.name}" bo'limida ${dishCount} ta taom bor. Bo'limni o'chirishdan oldin undagi taomlarni boshqa bo'limga o'tkazing yoki o'chiring.`);
        return;
      }

      if (confirm(`Haqiqatan ham "${targetSec.name}" bo'limini o'chirmoqchimisiz?`)) {
        SECTIONS = SECTIONS.filter(s => s.id !== secId);
        saveSectionsData();
        renderSectionsEditList();
        refreshAllSectionsUI();
        showToast(`"${targetSec.name}" bo'limi o'chirildi.`);
      }
    });
  }

  // Bo'lim nomlarini standart holatiga qaytarish
  const btnResetSectionNames = document.getElementById('btnResetSectionNames');
  if (btnResetSectionNames) {
    btnResetSectionNames.addEventListener('click', () => {
      if (confirm("Haqiqatan ham barcha bo'lim nomlarini standart holatiga qaytarmoqchimisiz?")) {
        SECTIONS = JSON.parse(JSON.stringify(DEFAULT_SECTIONS));
        try { localStorage.removeItem(STORAGE_KEYS.SECTIONS); } catch (err) {}
        renderSectionsEditList();
        refreshAllSectionsUI();
        showToast("Bo'lim nomlari standart holatiga qaytarildi.");
      }
    });
  }

  // Dashboard drag & drop hodisalarini ishga tushirish
  setupDashboardDragAndDrop();
  setupGalleryLongPress();

  // Bosh ekrandagi bo'lim katakchasi bosilganda bo'limga o'tish
  const homeMenu = document.getElementById('homeMenu');
  if (homeMenu) {
    homeMenu.addEventListener('click', (e) => {
      const tile = e.target.closest('.home-tile');
      if (!tile) return;
      const secId = tile.getAttribute('data-sec');
      if (secId) {
        navigateToSection(secId, true);
      }
    });
  }

  // Bo'lim ichida "← Bo'limlar" tugmasi bosilganda bosh ekranga qaytish
  const sectionsBar = document.getElementById('sectionsBar');
  if (sectionsBar) {
    sectionsBar.addEventListener('click', (e) => {
      const btn = e.target.closest('#btnBackHome');
      if (btn) {
        if (history.state && history.state.sec) {
          history.back();
        } else {
          navigateToHome(false);
        }
      }
    });
  }

  // Planshet va brauzer orqaga (back) jestini qo'llab-quvvatlash
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.sec) {
      navigateToSection(e.state.sec, false);
    } else {
      navigateToHome(false);
    }
  });

  // Klaviaturada Escape bosilganda ochiq modallarni yopish
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
    }
  });
}

function openItemModal(item) {
  document.getElementById('itemFileInput').value = '';
  if (item) {
    document.getElementById('itemModalTitle').textContent = "Tovarni tahrirlash";
    document.getElementById('itemIdInput').value = item.id;
    document.getElementById('itemNameInput').value = item.name;
    document.getElementById('itemSectionInput').value = item.section;
    document.getElementById('itemPriceInput').value = item.price;
    document.getElementById('itemDescInput').value = item.desc || '';
    document.getElementById('itemPresetPhoto').value = item.image || (DEFAULT_ITEMS[0] ? DEFAULT_ITEMS[0].image : '');
    document.getElementById('itemCustomImageData').value = item.customImage || '';
  } else {
    document.getElementById('itemModalTitle').textContent = "Yangi tovar qo'shish";
    document.getElementById('itemIdInput').value = '';
    document.getElementById('itemNameInput').value = '';
    document.getElementById('itemSectionInput').value = activeSection ? activeSection : (SECTIONS[0] ? SECTIONS[0].id : 'asosiy');
    document.getElementById('itemPriceInput').value = '';
    document.getElementById('itemDescInput').value = '';
    document.getElementById('itemPresetPhoto').value = DEFAULT_ITEMS[0] ? DEFAULT_ITEMS[0].image : '';
    document.getElementById('itemCustomImageData').value = '';
  }
  openModal('itemModal');
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
  if (id === 'reorderModal') {
    removeFloatingClone();
    isDraggingActive = false;
    dragSourceId = null;
    dragSourceEl = null;
    document.body.classList.remove('is-reordering-active');
  }
}

function showToast(msg) {
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

// Boshlang'ich yuklanish
function startApp() {
  document.body.classList.remove('is-reordering-active');
  isDraggingActive = false;
  if (history.state && history.state.sec) {
    history.replaceState(null, '');
  }
  activeSection = null;

  loadData();
  populateSectionSelect();
  populatePresetPhotoSelect();
  renderHeaderAuth();
  renderHomeMenu();
  renderSectionsBar();
  renderGallery();
  setupEvents();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

['gesturestart', 'gesturechange', 'gestureend'].forEach(ev =>
  document.addEventListener(ev, e => e.preventDefault(), { passive: false })
);

// Android Chrome (Galaxy Tab) va iOS da uzoq bosganda tizim menyusi (Save image, etc.) ochilib ketishini bloklash
document.addEventListener('contextmenu', (e) => {
  if (!e.target.closest('input, textarea')) {
    e.preventDefault();
    return false;
  }
}, { passive: false });


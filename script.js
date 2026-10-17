import { LiquidGlass } from 'https://cdn.jsdelivr.net/npm/@ybouane/liquidglass/dist/index.js';

// ================= BO'LIMLAR (SECTIONS) =================
const SECTIONS = [
  { id: 'all', name: 'Barchasi' },
  { id: 'asosiy', name: 'Milliy Taomlar' },
  { id: 'kabob', name: 'Kaboblar va Shashlik' },
  { id: 'shorva', name: "Sho'rvalar" },
  { id: 'salatlar', name: 'Salatlar va Gazaklar' },
  { id: 'non', name: 'Tandir Non va Somsa' },
  { id: 'ichimliklar', name: 'Salqin Ichimliklar' },
  { id: 'choy_kofe', name: 'Choy va Qahva' },
  { id: 'desert', name: 'Shirinliklar va Mevalar' }
];

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
    section: 'non',
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
    section: 'choy_kofe',
    price: 15000,
    desc: "Klassik quyuq italyancha espresso (30 ml)",
    image: "images/030A4439.webp"
  },
  {
    id: 'item_62',
    name: "Americano qahvasi",
    section: 'choy_kofe',
    price: 18000,
    desc: "Yangi tuyilgan qahva donachalaridan tayyorlangan xushbo'y Americano",
    image: "images/030A4440.webp"
  },
  {
    id: 'item_63',
    name: "Qaymoqli Kapuchino",
    section: 'choy_kofe',
    price: 22000,
    desc: "Qalin sutli ko'pikka ega klassik kapuchino qahvasi",
    image: "images/030A4442.webp"
  },
  {
    id: 'item_64',
    name: "Qora Arabika kofesi",
    section: 'choy_kofe',
    price: 20000,
    desc: "100% Arabika donachalaridan tayyorlangan xushbo'y qora qahva",
    image: "images/030A4443.webp"
  },
  {
    id: 'item_65',
    name: "Qatlamli Latte Makiyato",
    section: 'choy_kofe',
    price: 24000,
    desc: "Issiq sut, nozik ko'pik va xushbo'y espresso qatlamlari",
    image: "images/030A4444.webp"
  },
  {
    id: 'item_66',
    name: "Issiq shokolad va Kofe miks",
    section: 'choy_kofe',
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
    image: "images/030A7633.webp"
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
    section: 'choy_kofe',
    price: 28000,
    desc: "Anor donachalari, karkade, apelsin va dolchinli issiq choy",
    image: "images/030A9434.webp"
  },
  {
    id: 'item_84',
    name: "Frensh-pressda anorli va limonli choy",
    section: 'choy_kofe',
    price: 28000,
    desc: "Barra anor sharbati, limon parraklari va tog' giyohlari",
    image: "images/030A9440.webp"
  },
  {
    id: 'item_85',
    name: "Zanjabilli va asalli shifobaxsh choy",
    section: 'choy_kofe',
    price: 26000,
    desc: "Yangi zanjabil ildizi, tabiiy asal, limon va ko'k choy",
    image: "images/030A9442.webp"
  },
  {
    id: 'item_86',
    name: "Dengiz itshumurti (Oblepixa) choyi",
    section: 'choy_kofe',
    price: 30000,
    desc: "Foydali oblepixa mevalari, apelsin va yalpizli xushbo'y choy",
    image: "images/030A9448.webp"
  },
  {
    id: 'item_87',
    name: "Tog' giyohlari va yalpizli choy",
    section: 'choy_kofe',
    price: 22000,
    desc: "Chotqol tog'larining shifobaxsh giyohlari, kiyiko't va yalpiz",
    image: "images/030A9451.webp"
  },
  {
    id: 'item_88',
    name: "Limonli va yalpizli ko'k choy",
    section: 'choy_kofe',
    price: 20000,
    desc: "Klassik 95-ko'k choy, yangi limon bo'laklari va yalpiz",
    image: "images/030A9463.webp"
  },
  {
    id: 'item_89',
    name: "Qora choy limon va novvot bilan",
    section: 'choy_kofe',
    price: 20000,
    desc: "Hindcha oliy nav qora choy, limon va oq shirin novvot",
    image: "images/030A9466.webp"
  },
  {
    id: 'item_90',
    name: "Sitrusli va mevali maxsus choy",
    section: 'choy_kofe',
    price: 28000,
    desc: "Limon, laym, apelsin va olma bo'laklari bilan damlangan choy",
    image: "images/030A9468.webp"
  },
  {
    id: 'item_91',
    name: "Qulupnayli va yalpizli choynak choyi",
    section: 'choy_kofe',
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
const STORAGE_KEYS = {
  ITEMS: 'choyxona_gallery_items_v6',
  AUTH: 'choyxona_gallery_auth_v6',
  SESSION: 'choyxona_gallery_session_v6'
};

let items = [];
let credentials = { username: 'admin', password: '1234' };
let currentUsername = null;
let activeSection = 'all';

function loadData() {
  try {
    const rawItems = localStorage.getItem(STORAGE_KEYS.ITEMS);
    items = rawItems ? JSON.parse(rawItems) : [...DEFAULT_ITEMS];
  } catch (e) {
    items = [...DEFAULT_ITEMS];
  }

  try {
    const rawAuth = localStorage.getItem(STORAGE_KEYS.AUTH);
    if (rawAuth) {
      credentials = { ...credentials, ...JSON.parse(rawAuth) };
    }
  } catch (e) {}

  try {
    const savedSession = sessionStorage.getItem(STORAGE_KEYS.SESSION);
    if (savedSession) {
      currentUsername = savedSession;
    }
  } catch (e) {}
}

function saveItems() {
  try {
    localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
  } catch (e) {
    showToast("Xotira to'ldi: yangi rasm hajmini kichikroq qilib yuklang.");
  }
}

function saveCredentialsData() {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(credentials));
  } catch (e) {}
}

function formatSom(value) {
  return Number(value || 0).toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm";
}

function getItemPhotoSrc(item) {
  if (item.customImage) return item.customImage;
  if (item.image) return item.image;
  if (item.photoPath) return item.photoPath;
  let src = item.image || item.photoPath || 'images/030A0348.webp';
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

function renderSectionsBar() {
  const bar = document.getElementById('sectionsBar');
  bar.innerHTML = SECTIONS.map(sec => {
    const isActive = sec.id === activeSection ? 'active' : '';
    return `<button class="sec-btn ${isActive}" type="button" data-sec="${sec.id}">${sec.name}</button>`;
  }).join('');

  bar.querySelectorAll('.sec-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSection = btn.getAttribute('data-sec');
      bar.querySelectorAll('.sec-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-sec') === activeSection);
      });
      renderGallery();
    });
  });
}

function populateSectionSelect() {
  const sel = document.getElementById('itemSectionInput');
  sel.innerHTML = SECTIONS.filter(s => s.id !== 'all')
    .map(s => `<option value="${s.id}">${s.name}</option>`)
    .join('');
}

function populatePresetPhotoSelect() {
  const sel = document.getElementById('itemPresetPhoto');
  sel.innerHTML = DEFAULT_ITEMS.map(i => `<option value="${i.image}">${i.name}</option>`).join('');
}

function renderCardHtml(item) {
  const imgSrc = getItemPhotoSrc(item);
  const adminBarHtml = currentUsername ? `
    <div class="card-admin-bar">
      <div class="inline-price-form">
        <label for="price_${item.id}">Narx:</label>
        <input type="number" class="inline-price-input" id="price_${item.id}" value="${item.price}" step="500" min="500" />
        <button type="button" class="btn-save-price" data-action="save-price" data-id="${item.id}">Saqlash</button>
      </div>
      <div class="card-admin-actions">
        <button type="button" class="btn" data-action="edit" data-id="${item.id}">Tahrirlash</button>
        <button type="button" class="btn btn-danger" data-action="delete" data-id="${item.id}">O'chirish</button>
      </div>
    </div>
  ` : '';

  return `
    <article class="gallery-card">
      <div class="gallery-photo-box" data-action="lightbox" data-id="${item.id}">
        <img src="${imgSrc}" alt="${item.name}" loading="lazy" decoding="async" onload="this.classList.add('loaded')" />
      </div>
      <div class="gallery-info">
        <div class="gallery-text">
          <h3 class="gallery-title">${item.name}</h3>
          <p class="gallery-desc">${item.desc || ''}</p>
        </div>
        <div class="gallery-price">${formatSom(item.price)}</div>
      </div>
      ${adminBarHtml}
    </article>
  `;
}

function renderGallery() {
  const container = document.getElementById('galleryContainer');
  const sectionsToRender = activeSection === 'all'
    ? SECTIONS.filter(s => s.id !== 'all')
    : SECTIONS.filter(s => s.id === activeSection);

  let html = '';
  sectionsToRender.forEach(sec => {
    const secItems = items.filter(i => i.section === sec.id);
    if (secItems.length === 0) return;

    html += `
      <section class="section-group">
        <div class="section-heading">
          <h2>${sec.name}</h2>
          <span>${secItems.length} ta taom</span>
        </div>
        <div class="single-column-list">
          ${secItems.map(item => renderCardHtml(item)).join('')}
        </div>
      </section>
    `;
  });

  if (!html) {
    html = `
      <div style="text-align:center; padding:60px 20px; color:var(--text-muted); border:1px dashed var(--border-dark); border-radius:16px;">
        Bu bo'limda hozircha mahsulotlar yo'q.
      </div>
    `;
  }

  container.innerHTML = html;
}

// ================= HODISALAR (EVENTS) =================
function setupEvents() {
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
    renderGallery();
    showToast("Admin rejimidan chiqildi.");
  });

  // Tovar qo'shish modalini ochish
  document.getElementById('btnOpenAddModal').addEventListener('click', () => {
    openItemModal(null);
  });

  // Admin parol va sozlamalar modalini ochish
  document.getElementById('btnOpenCredModal').addEventListener('click', () => {
    document.getElementById('newAdminUser').value = credentials.username;
    document.getElementById('newAdminPass').value = credentials.password;
    openModal('credModal');
  });

  // Standart holatga qaytarish (Reset)
  document.getElementById('btnResetGallery').addEventListener('click', () => {
    if (confirm("Haqiqatan ham barcha taomlar va rasmlarni boshlang'ich 95 ta holatiga qaytarmoqchimisiz?")) {
      items = [...DEFAULT_ITEMS];
      saveItems();
      closeModal('credModal');
      renderGallery();
      showToast("Boshlang'ich 95 ta taom qayta tiklandi.");
    }
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
      renderGallery();
      showToast(`Xush kelibsiz, @${currentUsername}`);
    } else {
      document.getElementById('loginError').style.display = 'block';
    }
  });

  // Rasmni qurilmadan tanlaganda siqish (compress canvas)
  document.getElementById('itemFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxW = 960;
        const scale = img.width > maxW ? maxW / img.width : 1;
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        document.getElementById('itemCustomImageData').value = canvas.toDataURL('image/jpeg', 0.85);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Yangi tovar / tahrirlash formasi yuborilganda
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

    if (id) {
      const idx = items.findIndex(x => x.id === id);
      if (idx > -1) items[idx] = itemObj;
      showToast("Mahsulot ma'lumotlari yangilandi.");
    } else {
      items.unshift(itemObj);
      showToast("Yangi mahsulot galereyaga qo'shildi.");
    }

    saveItems();
    closeModal('itemModal');
    renderGallery();
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

  // Galereya kartochkalari bo'yicha hodisalarni delegatsiya qilish
  document.getElementById('galleryContainer').addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');
    const item = items.find(x => x.id === id);
    if (!item) return;

    if (action === 'lightbox') {
      document.getElementById('lightboxTitle').textContent = item.name;
      document.getElementById('lightboxImage').src = getItemPhotoSrc(item);
      document.getElementById('lightboxDesc').textContent = item.desc || '';
      document.getElementById('lightboxPrice').textContent = formatSom(item.price);
      openModal('lightboxModal');
    } else if (action === 'save-price') {
      const inp = document.getElementById('price_' + id);
      const val = Number(inp ? inp.value : 0);
      if (val > 0) {
        item.price = val;
        saveItems();
        renderGallery();
        showToast(`"${item.name}" narxi yangilandi: ${formatSom(val)}`);
      }
    } else if (action === 'edit') {
      openItemModal(item);
    } else if (action === 'delete') {
      if (confirm(`"${item.name}" taomini o'chirmoqchimisiz?`)) {
        items = items.filter(x => x.id !== id);
        saveItems();
        renderGallery();
        showToast(`"${item.name}" o'chirildi.`);
      }
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
    document.getElementById('itemSectionInput').value = activeSection !== 'all' ? activeSection : 'asosiy';
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
}

function showToast(msg) {
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

// ================= LIQUID GLASS EFFEKTI (TUGMALAR UCHUN MAXSUS OPTIMALLASHTIRILGAN) =================
async function initLiquidGlass() {
  try {
    const bar = document.getElementById('sectionsBar');
    if (bar && typeof LiquidGlass !== 'undefined') {
      const secBtns = Array.from(bar.querySelectorAll('.sec-btn'));
      if (secBtns.length > 0) {
        secBtns.forEach(btn => {
          btn.dataset.config = JSON.stringify({
            button: true,
            cornerRadius: 999,
            refraction: 0.45,
            chromAberration: 0.04,
            blurAmount: 0.15,
            specular: 0.3,
            edgeHighlight: 0.18
          });
        });
        const lg = await LiquidGlass.init({
          root: bar,
          glassElements: secBtns,
          defaults: {
            button: true,
            cornerRadius: 999,
            refraction: 0.45,
            chromAberration: 0.04,
            blurAmount: 0.15,
            specular: 0.3,
            edgeHighlight: 0.18
          }
        });
        console.log("LiquidGlass kutubxonasi tugmalarda muvaffaqiyatli ishga tushdi:", lg);
      }
    }
  } catch (err) {
    console.warn("LiquidGlass xabari:", err);
  }
}

// Boshlang'ich yuklanish
function startApp() {
  loadData();
  populateSectionSelect();
  populatePresetPhotoSelect();
  renderHeaderAuth();
  renderSectionsBar();
  renderGallery();
  setupEvents();
  initLiquidGlass();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}


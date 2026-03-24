// НИИЧАЗ — База данных v3.3

const ARTIFACTS = [
  { id:"a01",  name:"Медуза",            rarity:"common",   effect:"Умеренно снижает радиационное заражение организма",                                   buy:22000  },
  { id:"a02",  name:"Батарейка",         rarity:"common",   effect:"Незначительно повышает выносливость, снижает усталость",                              buy:20000  },
  { id:"a03",  name:"Пустышка",          rarity:"common",   effect:"Слабо подавляет радиационный фон в тканях носителя",                                  buy:21000  },
  { id:"a04",  name:"Кристаллик",        rarity:"common",   effect:"Незначительно замедляет потерю крови при ранениях",                                   buy:23000  },
  { id:"a05",  name:"Ночная звезда",     rarity:"rare",     effect:"Существенно ускоряет регенерацию повреждённых тканей",                                buy:28000  },
  { id:"a06",  name:"Душа",              rarity:"rare",     effect:"Останавливает кровотечение, заметно стимулирует процесс заживления",                  buy:27000  },
  { id:"a07",  name:"Пружина",           rarity:"common",   effect:"Компенсирует гравитационное давление, заметно увеличивает допустимую нагрузку",       buy:24000  },
  { id:"a08",  name:"Мамины бусы",       rarity:"uncommon", effect:"Умеренно рассеивает кинетическую энергию взрыва в радиусе носителя",                  buy:26000  },
  { id:"a09",  name:"Огненный шар",      rarity:"common",   effect:"Умеренно нейтрализует химические реагенты в крови носителя",                          buy:22000  },
  { id:"a10",  name:"Золотая рыбка",     rarity:"unique",   effect:"Оказывает комплексное положительное воздействие на все системы организма",             buy:150000 },
  { id:"a11",  name:"Жаба",              rarity:"rare",     effect:"Существенно экранирует псионическое воздействие извне",                               buy:29000  },
  { id:"a12",  name:"Светлячок",         rarity:"unique",   effect:"Заметно ускоряет регенерацию тканей, нейтрализует электромагнитное поле вокруг носителя", buy:120000 },
  { id:"a13",  name:"Пузырь",            rarity:"common",   effect:"Умеренная химическая защита, нейтрализует токсины в тканях",                          buy:20000  },
  { id:"a14",  name:"Ломоть мяса",       rarity:"common",   effect:"Поглощает радиационное излучение, воздействующее на носителя",                        buy:20000  },
  { id:"a15",  name:"Каменный цветок",   rarity:"uncommon", effect:"Умеренно поглощает ударную волну при взрыве вблизи носителя",                         buy:25000  },
  { id:"a16",  name:"Сердце оазиса",     rarity:"unique",   effect:"Обеспечивает существенную регенерацию всех систем организма одновременно",            buy:200000 },
  { id:"a17",  name:"Слеза звезды",      rarity:"uncommon", effect:"Умеренно экранирует электромагнитные разряды аномальной природы",                     buy:27000  },
  { id:"a18",  name:"Морской ёж",        rarity:"common",   effect:"Незначительно снижает ударный импульс при механическом воздействии",                  buy:21000  },
  { id:"a19",  name:"Грави",             rarity:"common",   effect:"Нейтрализует гравитационное сжатие, умеренно увеличивает допустимую нагрузку",        buy:23000  },
  { id:"a20",  name:"Ведьмин студень",   rarity:"uncommon", effect:"Существенно нейтрализует воздействие химических веществ на организм носителя",        buy:26000  },
  { id:"a21",  name:"Зуб",               rarity:"common",   effect:"Незначительно поглощает кинетическую энергию пуль при попадании",                     buy:20000  },
  { id:"a22",  name:"Синяя лазурь",      rarity:"rare",     effect:"Существенно подавляет псионическое излучение в области носителя",                     buy:28000  },
  { id:"a23",  name:"Трубочка",          rarity:"common",   effect:"Умеренная изоляция от высокотемпературного воздействия термических аномалий",         buy:20000  },
  { id:"a24",  name:"Чёрная капля",      rarity:"uncommon", effect:"Ускоряет коагуляцию крови, умеренно снижает болевой порог носителя",                  buy:25000  },
  { id:"a25",  name:"Бенгальский огонь", rarity:"common",   effect:"Незначительно снижает тепловое воздействие термических аномалий на носителя",         buy:21000  },
  { id:"a26",  name:"Компас",            rarity:"uncommon", effect:"Нормализует вестибулярный аппарат, заметно повышает скорость ориентирования",         buy:27000  },
  { id:"a27",  name:"Снежинка",          rarity:"uncommon", effect:"Умеренная термоизоляция тканей носителя, снижает риск ожогов",                        buy:26000  },
  { id:"a28",  name:"Оберег",            rarity:"rare",     effect:"Обеспечивает широкополосную защиту от различных видов физического воздействия",        buy:45000  },
  { id:"a29",  name:"Кольцо",            rarity:"common",   effect:"Слабо нейтрализует воздействие гравитационных аномалий на носителя",                  buy:20000  },
  { id:"a30",  name:"Лунный свет",       rarity:"uncommon", effect:"Умеренно стимулирует регенерацию тканей в условиях пониженной освещённости",          buy:25000  },
  { id:"a31",  name:"Удача",             rarity:"rare",     effect:"Статистически снижает вероятность получения критической травмы носителем",            buy:40000  },
  { id:"a32",  name:"Спираль",           rarity:"common",   effect:"Постепенная, но стабильная регенерация мягких тканей носителя в состоянии покоя",     buy:24000  },
  { id:"a33",  name:"Ломаный",           rarity:"common",   effect:"Умеренная изоляция от высокотемпературных аномальных источников",                     buy:21000  },
  { id:"a34",  name:"Грави-концентрат",  rarity:"uncommon", effect:"Существенно увеличивает допустимую нагрузку носителя, заметно снижает скорость",      buy:28000  },
  { id:"a35",  name:"Хамелеон",          rarity:"unique",   effect:"Частично искажает световое отражение — носитель визуально сливается с окружением",    buy:180000 },
  { id:"a36",  name:"Тёмная звезда",     rarity:"rare",     effect:"Существенная псионическая защита, умеренное подавление радиационного фона",           buy:50000  }
];

const MUTANTS = [
  { id:"m01", name:"Слепой пёс",    threat:"low",      buy:1500  },
  { id:"m02", name:"Псевдопёс",     threat:"low",      buy:2500  },
  { id:"m03", name:"Кабан",         threat:"low",      buy:2000  },
  { id:"m04", name:"Плоть",         threat:"medium",   buy:5000  },
  { id:"m05", name:"Псевдокот",     threat:"medium",   buy:7000  },
  { id:"m06", name:"Кровосос",      threat:"high",     buy:15000 },
  { id:"m07", name:"Зомбированный", threat:"medium",   buy:3500  },
  { id:"m08", name:"Бюрер",         threat:"high",     buy:25000 },
  { id:"m09", name:"Контролёр",     threat:"critical", buy:60000 },
  { id:"m10", name:"Полтергейст",   threat:"high",     buy:20000 },
  { id:"m11", name:"Химера",        threat:"critical", buy:40000 },
  { id:"m12", name:"Излом",         threat:"anomalous",buy:50000 },
  { id:"m13", name:"Снорк",         threat:"medium",   buy:4500  },
  { id:"m14", name:"Кошка",         threat:"low",      buy:1800  },
  { id:"m15", name:"Тушкан",        threat:"low",      buy:1000  }
];

const RARITY_MAP = {
  common:   { label:"ЧАСТО ВСТРЕЧАЕТСЯ",  cls:"rar-common"   },
  uncommon: { label:"ВСТРЕЧАЕТСЯ РЕДКО",  cls:"rar-uncommon" },
  rare:     { label:"КРАЙНЕ РЕДОК",       cls:"rar-rare"     },
  unique:   { label:"ЕДИНИЧНЫЕ СЛУЧАИ",   cls:"rar-unique"   }
};

const THREAT_MAP = {
  low:      { label:"НИЗКИЙ",      cls:"thr-low"  },
  medium:   { label:"СРЕДНИЙ",     cls:"thr-med"  },
  high:     { label:"ВЫСОКИЙ",     cls:"thr-high" },
  critical: { label:"КРИТИЧЕСКИЙ", cls:"thr-crit" },
  anomalous:{ label:"АНОМАЛЬНЫЙ",  cls:"thr-anom" }
};

function getStalkers() { return JSON.parse(localStorage.getItem("niichaz_stalkers") || "[]"); }
function saveStalkers(list) { localStorage.setItem("niichaz_stalkers", JSON.stringify(list)); }
function getReports() { return JSON.parse(localStorage.getItem("niichaz_reports") || "[]"); }
function saveReports(list) { localStorage.setItem("niichaz_reports", JSON.stringify(list)); }

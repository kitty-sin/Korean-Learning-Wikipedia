/**
 * 韓語圖解百科全書資料集 - PROPER_NOUN_ENCYCLOPEDIA_PAGES
 */
const PROPER_NOUN_ENCYCLOPEDIA_PAGES = [
  {
    "id": "prop-01",
    "domainId": "prop01",
    "domainName": "01_韓國地名與城市",
    "domainIcon": "🇰🇷",
    "titleKo": "한국의 주요 도시와 명소",
    "titleZh": "韓國代表城市與旅遊名勝",
    "titleRom": "han-guk-ui ju-yo do-si-wa myeong-so",
    "themeColor": "#E67E22",
    "accentBg": "#FEF5E7",
    "desc": "首爾、釜山、濟州島等韓國代表性一線城市與行政區域名勝。",
    "items": [
      {
        "kr": "서울",
        "rom": "seo-ul",
        "zh": "首爾 (首都)",
        "icon": "🗼",
        "tip": "韓國政治文化心臟首都，漢江橫貫"
      },
      {
        "kr": "부산",
        "rom": "bu-san",
        "zh": "釜山 (海港城市)",
        "icon": "🌊",
        "tip": "韓國第二大城，擁有海雲台美景 (漢字：釜山)"
      },
      {
        "kr": "제주도",
        "rom": "je-ju-do",
        "zh": "濟州島 (度假勝地)",
        "icon": "🏝️",
        "tip": "蜜月度假島嶼，火山與橘子故鄉 (漢字：濟州島)"
      },
      {
        "kr": "인천",
        "rom": "in-cheon",
        "zh": "仁川",
        "icon": "✈️",
        "tip": "仁川國際機場與著名海港 (漢字：仁川)"
      },
      {
        "kr": "대구",
        "rom": "dae-gu",
        "zh": "大邱",
        "icon": "🍎",
        "tip": "慶尚道核心樞紐城市 (漢字：大邱)"
      },
      {
        "kr": "경주",
        "rom": "gyeong-ju",
        "zh": "慶州 (千年古都)",
        "icon": "🏛️",
        "tip": "新羅王朝千年歷史古城，世界遺產 (漢字：慶州)"
      },
      {
        "kr": "남산",
        "rom": "nam-san",
        "zh": "南山 (首爾塔地標)",
        "icon": "🗼",
        "tip": "首爾市中心南山公園與N首爾塔 (漢字：南山)"
      },
      {
        "kr": "한강",
        "rom": "han-gang",
        "zh": "漢江",
        "icon": "🌉",
        "tip": "首爾母親河，市民吃泡麵賞夜景勝地 (漢字：漢江)"
      }
    ]
  },
  {
    "id": "prop-02",
    "domainId": "prop02",
    "domainName": "02_世界國家與歷史",
    "domainIcon": "🌏",
    "titleKo": "세계 국가와 역사 인물",
    "titleZh": "世界主要國家與歷史偉人",
    "titleRom": "se-gye guk-ga-wa yeok-sa in-mul",
    "themeColor": "#E67E22",
    "accentBg": "#FEF5E7",
    "desc": "常見國際國名、大都會與韓國敬仰的偉大歷史人物。",
    "items": [
      {
        "kr": "한국",
        "rom": "han-guk",
        "zh": "韓國 (大韓民國)",
        "icon": "🇰🇷",
        "tip": "大韓民國簡稱 (漢字：韓國)"
      },
      {
        "kr": "대만",
        "rom": "dae-man",
        "zh": "台灣 (臺灣)",
        "icon": "🧋",
        "tip": "美麗寶島台灣 (漢字：臺灣)"
      },
      {
        "kr": "홍콩",
        "rom": "hong-kong",
        "zh": "香港",
        "icon": "🏙️",
        "tip": "東方之珠香港 (漢字：香港)"
      },
      {
        "kr": "미국",
        "rom": "mi-guk",
        "zh": "美國",
        "icon": "🗽",
        "tip": "美利堅合眾國 (漢字：美國)"
      },
      {
        "kr": "중국",
        "rom": "jung-guk",
        "zh": "中國",
        "icon": "🏮",
        "tip": "鄰國中華 (漢字：中國)"
      },
      {
        "kr": "일본",
        "rom": "il-bon",
        "zh": "日本",
        "icon": "🗾",
        "tip": "日出之國 (漢字：日本)"
      },
      {
        "kr": "세종대왕",
        "rom": "se-jong-dae-wang",
        "zh": "世宗大王",
        "icon": "👑",
        "tip": "發明諺文韓字訓民正音的偉大君王 (萬元紙鈔人物)"
      },
      {
        "kr": "이순신",
        "rom": "i-sun-sin",
        "zh": "李舜臣將軍",
        "icon": "⚔️",
        "tip": "造龜甲船抗倭名將 (光化門廣場雕像人物)"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROPER_NOUN_ENCYCLOPEDIA_PAGES };
}

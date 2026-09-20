/**
 * 韓語圖解百科全書資料集 - NUMERAL_ENCYCLOPEDIA_PAGES (數字與序數詞)
 */
const NUMERAL_ENCYCLOPEDIA_PAGES = [
  {
    "id": "num-01",
    "domainId": "num01",
    "domainName": "01_固有詞數詞(1~10)",
    "domainIcon": "1️⃣",
    "titleKo": "순우리말 수사 (1~10)",
    "titleZh": "純韓文固有詞數詞 (1～10)",
    "titleRom": "sun-u-ri-mal su-sa",
    "themeColor": "#FF5E86",
    "accentBg": "#FFEBF0",
    "desc": "計算【事物個數、年齡、鐘點小時】時必備的韓語純固有詞數字。注意 1~4 接量詞會縮寫（한, 두, 세, 네）！",
    "items": [
      {
        "kr": "하나",
        "rom": "ha-na",
        "zh": "一 (個數: 한)",
        "icon": "1️⃣",
        "tip": "接量詞變 한 · 例: 사과 한 개 (一顆蘋果)"
      },
      {
        "kr": "둘",
        "rom": "dul",
        "zh": "二 (個數: 두)",
        "icon": "2️⃣",
        "tip": "接量詞變 두 · 例: 커피 두 잔 (兩杯咖啡)"
      },
      {
        "kr": "셋",
        "rom": "set",
        "zh": "三 (個數: 세)",
        "icon": "3️⃣",
        "tip": "接量詞變 세 · 例: 친구 세 명 (三位朋友)"
      },
      {
        "kr": "넷",
        "rom": "net",
        "zh": "四 (個數: 네)",
        "icon": "4️⃣",
        "tip": "接量詞變 네 · 例: 네 살 (四歲)"
      },
      {
        "kr": "다섯",
        "rom": "da-seot",
        "zh": "五",
        "icon": "5️⃣",
        "tip": "例: 다섯 시 (五點鐘) · 다섯 마리 (五隻)"
      },
      {
        "kr": "여섯",
        "rom": "yeo-seot",
        "zh": "六",
        "icon": "6️⃣",
        "tip": "例: 여섯 시간 (六個小時)"
      },
      {
        "kr": "일곱",
        "rom": "il-gop",
        "zh": "七",
        "icon": "7️⃣",
        "tip": "例: 일곱 살 (七歲)"
      },
      {
        "kr": "여덟",
        "rom": "yeo-deol",
        "zh": "八 (雙收音 ㄼ 讀 ㄹ)",
        "icon": "8️⃣",
        "tip": "發音 [여덜] · 例: 여덟 개 (八個)"
      },
      {
        "kr": "아홉",
        "rom": "a-hop",
        "zh": "九",
        "icon": "9️⃣",
        "tip": "例: 아홉 시 (九點鐘)"
      },
      {
        "kr": "열",
        "rom": "yeol",
        "zh": "十",
        "icon": "🔟",
        "tip": "例: 열 명 (十個人)"
      }
    ]
  },
  {
    "id": "num-02",
    "domainId": "num02",
    "domainName": "02_固有詞整十位(20~90)",
    "domainIcon": "🔢",
    "titleKo": "순우리말 십 단위 수사",
    "titleZh": "純韓文固有詞整十位數 (20～90)",
    "titleRom": "sun-u-ri-mal sip dan-wi su-sa",
    "themeColor": "#FF8A65",
    "accentBg": "#FFF3E0",
    "desc": "韓語在表達年齡（歲）時，整十位數有其獨立專屬單詞。20 接量詞會縮寫為 스무！",
    "items": [
      {
        "kr": "스물",
        "rom": "seu-mul",
        "zh": "二十 (個數: 스무)",
        "icon": "2️⃣",
        "tip": "接量詞變 스무 · 例: 스무 살 (二十歲)"
      },
      {
        "kr": "서른",
        "rom": "seo-reun",
        "zh": "三十",
        "icon": "3️⃣",
        "tip": "例: 서른 살 (三十歲)"
      },
      {
        "kr": "마흔",
        "rom": "ma-heun",
        "zh": "四十",
        "icon": "4️⃣",
        "tip": "例: 마흔 살 (四十歲)"
      },
      {
        "kr": "쉰",
        "rom": "swin",
        "zh": "五十",
        "icon": "5️⃣",
        "tip": "例: 쉰 살 (五十歲)"
      },
      {
        "kr": "예순",
        "rom": "ye-sun",
        "zh": "六十",
        "icon": "6️⃣",
        "tip": "例: 환갑 (花甲/六十歲)"
      },
      {
        "kr": "일흔",
        "rom": "il-heun",
        "zh": "七十",
        "icon": "7️⃣",
        "tip": "例: 고희 (古稀/七十歲)"
      },
      {
        "kr": "여든",
        "rom": "yeo-deun",
        "zh": "八十",
        "icon": "8️⃣",
        "tip": "例: 여든 살 (八十歲)"
      },
      {
        "kr": "아흔",
        "rom": "a-heun",
        "zh": "九十",
        "icon": "9️⃣",
        "tip": "例: 아흔 살 (九十歲)"
      },
      {
        "kr": "백",
        "rom": "baek",
        "zh": "百 (漢字詞代用)",
        "icon": "💯",
        "tip": "韓語 100 以上一律直接使用漢字詞 백 (百)"
      }
    ]
  },
  {
    "id": "num-03",
    "domainId": "num03",
    "domainName": "03_漢字音數詞(1~10)",
    "domainIcon": "📅",
    "titleKo": "한자어 수사 (1~10)",
    "titleZh": "漢字音數字 (1～10)",
    "titleRom": "han-ja-eo su-sa",
    "themeColor": "#3498DB",
    "accentBg": "#EBF5FB",
    "desc": "計算【金錢金額、日期年月日、分鐘秒數、電話號碼、樓層房號、公車站號】時使用的漢字數字！",
    "items": [
      {
        "kr": "일",
        "rom": "il",
        "zh": "一",
        "icon": "1️⃣",
        "tip": "例: 일월 (一月) · 일 일 (一日) · 일 층 (一樓)"
      },
      {
        "kr": "이",
        "rom": "i",
        "zh": "二",
        "icon": "2️⃣",
        "tip": "例: 이월 (二月) · 이십 분 (二十分鐘)"
      },
      {
        "kr": "삼",
        "rom": "sam",
        "zh": "三",
        "icon": "3️⃣",
        "tip": "例: 삼월 (三月) · 삼천 원 (三千韓元)"
      },
      {
        "kr": "사",
        "rom": "sa",
        "zh": "四",
        "icon": "4️⃣",
        "tip": "例: 사월 (四月) · 사 층 (四樓)"
      },
      {
        "kr": "오",
        "rom": "o",
        "zh": "五",
        "icon": "5️⃣",
        "tip": "例: 오월 (五月) · 오만 원 (五萬韓元)"
      },
      {
        "kr": "육",
        "rom": "yuk",
        "zh": "六 (發音[유])",
        "icon": "6️⃣",
        "tip": "與月份連用發音為 [유월] (六月)"
      },
      {
        "kr": "칠",
        "rom": "chil",
        "zh": "七",
        "icon": "7️⃣",
        "tip": "例: 칠월 (七月) · 칠 층 (七樓)"
      },
      {
        "kr": "팔",
        "rom": "pal",
        "zh": "八",
        "icon": "8️⃣",
        "tip": "例: 팔월 (八月) · 팔천 원 (八千韓元)"
      },
      {
        "kr": "구",
        "rom": "gu",
        "zh": "九",
        "icon": "9️⃣",
        "tip": "例: 구월 (九月) · 구십 분 (九十分鐘)"
      },
      {
        "kr": "십",
        "rom": "sip",
        "zh": "十 (發音[시])",
        "icon": "🔟",
        "tip": "與月份連用發音為 [시월] (十月)"
      }
    ]
  },
  {
    "id": "num-04",
    "domainId": "num04",
    "domainName": "04_漢字詞大數與單位",
    "domainIcon": "💰",
    "titleKo": "큰 수와 금액 단위",
    "titleZh": "漢字詞大數與金錢計算單位",
    "titleRom": "keun su-wa geum-aek dan-wi",
    "themeColor": "#2ECC71",
    "accentBg": "#EAFAF1",
    "desc": "在韓國購物買單、報價與看年份必備的四位進位制大數體系。",
    "items": [
      {
        "kr": "영 / 공",
        "rom": "yeong / gong",
        "zh": "零 / 〇",
        "icon": "0️⃣",
        "tip": "算術用 영 · 電話號碼報號常用 공 (例: 010)"
      },
      {
        "kr": "십",
        "rom": "sip",
        "zh": "十 (10)",
        "icon": "🔟",
        "tip": "例: 십 원 (十元) · 십오 (十五)"
      },
      {
        "kr": "백",
        "rom": "baek",
        "zh": "百 (100)",
        "icon": "💯",
        "tip": "例: 오백 원 (五百元)"
      },
      {
        "kr": "천",
        "rom": "cheon",
        "zh": "千 (1,000)",
        "icon": "💵",
        "tip": "例: 천 원 (一千元紙鈔)"
      },
      {
        "kr": "만",
        "rom": "man",
        "zh": "萬 (10,000)",
        "icon": "💴",
        "tip": "四位一進！例: 오만 원 (五萬元紙鈔)"
      },
      {
        "kr": "십만",
        "rom": "sip-man",
        "zh": "十萬 (100,000)",
        "icon": "💶",
        "tip": "例: 십만 원 (十萬韓元)"
      },
      {
        "kr": "백만",
        "rom": "baek-man",
        "zh": "百萬 (1,000,000)",
        "icon": "💷",
        "tip": "例: 백만장자 (百萬富翁)"
      },
      {
        "kr": "천만",
        "rom": "cheon-man",
        "zh": "千萬 (10,000,000)",
        "icon": "🏦",
        "tip": "例: 천만 관객 영화 (千萬觀影人次電影)"
      },
      {
        "kr": "억",
        "rom": "eok",
        "zh": "億 (100,000,000)",
        "icon": "💎",
        "tip": "例: 일억 원 (一億韓元)"
      }
    ]
  },
  {
    "id": "num-05",
    "domainId": "num05",
    "domainName": "05_序數詞與倍數",
    "domainIcon": "🥇",
    "titleKo": "서수사와 배수 표현",
    "titleZh": "序數詞順序與倍數頻率",
    "titleRom": "seo-su-sa-wa bae-su pyo-hyeon",
    "themeColor": "#9B59B6",
    "accentBg": "#F4ECF7",
    "desc": "表達第一、第二的順序排列，以及一次、兩次、倍數的實用數詞短語。",
    "items": [
      {
        "kr": "첫째",
        "rom": "cheot-jjae",
        "zh": "第一 / 老大",
        "icon": "🥇",
        "tip": "指排第一名或家中長子/長女"
      },
      {
        "kr": "둘째",
        "rom": "dul-jjae",
        "zh": "第二 / 老二",
        "icon": "🥈",
        "tip": "指排列第二項或次子/次女"
      },
      {
        "kr": "셋째",
        "rom": "set-jjae",
        "zh": "第三 / 老三",
        "icon": "🥉",
        "tip": "例: 셋째 날 (第三天)"
      },
      {
        "kr": "넷째",
        "rom": "net-jjae",
        "zh": "第四 / 老四",
        "icon": "4️⃣",
        "tip": "例: 넷째 주 (第四週)"
      },
      {
        "kr": "마지막",
        "rom": "ma-ji-mak",
        "zh": "最後 / 最終",
        "icon": "🏁",
        "tip": "例: 마지막 기회 (最後機會)"
      },
      {
        "kr": "한 번",
        "rom": "han beon",
        "zh": "一次 / 一趟",
        "icon": "☝️",
        "tip": "例: 다시 한 번 (再一次)"
      },
      {
        "kr": "두 번",
        "rom": "du beon",
        "zh": "兩次 / 兩回",
        "icon": "✌️",
        "tip": "例: 두 번 생각하다 (三思/考慮兩次)"
      },
      {
        "kr": "두 배",
        "rom": "du bae",
        "zh": "兩倍 / 雙倍",
        "icon": "✖️",
        "tip": "例: 가격이 두 배 (價格翻倍)"
      },
      {
        "kr": "하나씩",
        "rom": "ha-na-ssik",
        "zh": "一個一個地",
        "icon": "📦",
        "tip": "例: 하나씩 가져가세요 (請一人拿一個)"
      }
    ]
  }
];

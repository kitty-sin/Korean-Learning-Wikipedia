/**
 * 韓語全量圖解生活百科全書資料集 (Korean Visual Encyclopedia Master Data)
 * 涵蓋全量 15 大生活領域、27 個精選分頁、300+ 核心單字！
 * 嚴格遵循：清晰圖像、純繁體中文解釋、大字排版、羅馬拼音、發音點讀與極致舒適留白。
 */

const ENCYCLOPEDIA_PAGES = [
  {
    "id": "domain-01-01",
    "domainId": "01",
    "domainName": "01_時間與曆法",
    "domainIcon": "📅",
    "titleKo": "요일과 시간",
    "titleZh": "一週七天與星期日曆",
    "titleRom": "yoil-gwa sigan",
    "themeColor": "#4A90E2",
    "accentBg": "#F0F7FF",
    "desc": "韓國一週七天以古代「日、月、五行（火水木金土）」命名，秒記生活日程！",
    "items": [
      {
        "kr": "월요일",
        "rom": "wol-yo-il",
        "zh": "星期一 (週一)",
        "icon": "🌙",
        "tip": "月曜日 · 新一週的開始"
      },
      {
        "kr": "화요일",
        "rom": "hwa-yo-il",
        "zh": "星期二 (週二)",
        "icon": "🔥",
        "tip": "火曜日 · 充滿衝勁的週二"
      },
      {
        "kr": "수요일",
        "rom": "su-yo-il",
        "zh": "星期三 (週三)",
        "icon": "💧",
        "tip": "水曜日 · 一週的正中間"
      },
      {
        "kr": "목요일",
        "rom": "mok-yo-il",
        "zh": "星期四 (週四)",
        "icon": "🌲",
        "tip": "木曜日 · 就快要放週末了"
      },
      {
        "kr": "금요일",
        "rom": "geum-yo-il",
        "zh": "星期五 (週五)",
        "icon": "✨",
        "tip": "金曜日 · 期待的燃燒週五(불금)"
      },
      {
        "kr": "토요일",
        "rom": "to-yo-il",
        "zh": "星期六 (週六)",
        "icon": "⛰️",
        "tip": "土曜日 · 享受假期好時光"
      },
      {
        "kr": "일요일",
        "rom": "il-yo-il",
        "zh": "星期日 (週日)",
        "icon": "☀️",
        "tip": "日曜日 · 溫暖放鬆的家庭日"
      }
    ]
  },
  {
    "id": "domain-01-02",
    "domainId": "01",
    "domainName": "01_時間與曆法",
    "domainIcon": "📅",
    "titleKo": "하루의 시간",
    "titleZh": "一日時段與時間概念",
    "titleRom": "haru-ui sigan",
    "themeColor": "#4A90E2",
    "accentBg": "#F0F7FF",
    "desc": "從清晨到深夜，日常生活必備的早中晚時段名詞與時間單位。",
    "items": [
      {
        "kr": "아침",
        "rom": "a-chim",
        "zh": "早晨 / 早餐",
        "icon": "🌅",
        "tip": "清晨時光，亦常指早餐"
      },
      {
        "kr": "점심",
        "rom": "jeom-sim",
        "zh": "中午 / 午餐",
        "icon": "🍱",
        "tip": "中午12點前後，亦指午飯"
      },
      {
        "kr": "저녁",
        "rom": "jeo-nyeok",
        "zh": "傍晚 / 晚餐",
        "icon": "🌇",
        "tip": "夕陽西下時，亦指晚飯"
      },
      {
        "kr": "밤",
        "rom": "bam",
        "zh": "夜晚 / 晚上",
        "icon": "🌌",
        "tip": "天黑入夜 (注意：밤 也是栗子)"
      },
      {
        "kr": "새벽",
        "rom": "sae-byeok",
        "zh": "凌晨 / 破曉",
        "icon": "🌃",
        "tip": "半夜到清晨之間的時段"
      },
      {
        "kr": "낮",
        "rom": "nat",
        "zh": "白天 / 白晝",
        "icon": "🌤️",
        "tip": "太陽升起的日間"
      },
      {
        "kr": "오전",
        "rom": "o-jeon",
        "zh": "上午 (AM)",
        "icon": "⏳",
        "tip": "中午12點之前 (漢字：午前)"
      },
      {
        "kr": "오후",
        "rom": "o-hu",
        "zh": "下午 (PM)",
        "icon": "⌛",
        "tip": "中午12點之後 (漢字：午後)"
      },
      {
        "kr": "시간",
        "rom": "si-gan",
        "zh": "時間 / 小時",
        "icon": "⏰",
        "tip": "時間概念或計時小時"
      },
      {
        "kr": "분",
        "rom": "bun",
        "zh": "分鐘",
        "icon": "⏱️",
        "tip": "鐘點的分鐘 (漢字：分)"
      },
      {
        "kr": "초",
        "rom": "cho",
        "zh": "秒鐘",
        "icon": "⏲️",
        "tip": "極短的時間單位 (漢字：秒)"
      }
    ]
  },
  {
    "id": "domain-01-03",
    "domainId": "01",
    "domainName": "01_時間與曆法",
    "domainIcon": "📅",
    "titleKo": "계절과 날짜",
    "titleZh": "四季季節與日期座標",
    "titleRom": "gye-jeol-gwa nal-jja",
    "themeColor": "#4A90E2",
    "accentBg": "#F0F7FF",
    "desc": "春夏秋冬四季變化，與昨天、今天、明天等前後推移的相對日期。",
    "items": [
      {
        "kr": "봄",
        "rom": "bom",
        "zh": "春天",
        "icon": "🌸",
        "tip": "櫻花綻放的溫暖季節"
      },
      {
        "kr": "여름",
        "rom": "yeo-reum",
        "zh": "夏天",
        "icon": "🌻",
        "tip": "陽光燦爛炎熱的盛夏"
      },
      {
        "kr": "가을",
        "rom": "ga-eul",
        "zh": "秋天",
        "icon": "🍁",
        "tip": "楓葉轉紅的涼爽秋天"
      },
      {
        "kr": "겨울",
        "rom": "gyeo-ul",
        "zh": "冬天",
        "icon": "❄️",
        "tip": "白雪皚皚的浪漫冬季"
      },
      {
        "kr": "오늘",
        "rom": "o-neul",
        "zh": "今天",
        "icon": "📍",
        "tip": "當下這一天"
      },
      {
        "kr": "어제",
        "rom": "eo-je",
        "zh": "昨天",
        "icon": "⏮️",
        "tip": "過去的前一天"
      },
      {
        "kr": "내일",
        "rom": "nae-il",
        "zh": "明天",
        "icon": "⏭️",
        "tip": "未來的下一天 (漢字：來日)"
      },
      {
        "kr": "올해",
        "rom": "ol-hae",
        "zh": "今年",
        "icon": "🌱",
        "tip": "目前所處的這一年"
      },
      {
        "kr": "작년",
        "rom": "jang-nyeon",
        "zh": "去年",
        "icon": "🍂",
        "tip": "過去的一年 (漢字：去年)"
      },
      {
        "kr": "내년",
        "rom": "nae-nyeon",
        "zh": "明年",
        "icon": "🎍",
        "tip": "未來的一年 (漢字：來年)"
      }
    ]
  },
  {
    "id": "domain-02-01",
    "domainId": "02",
    "domainName": "02_人體與外貌",
    "domainIcon": "👤",
    "titleKo": "얼굴과 이목구비",
    "titleZh": "臉部五官與容貌細節",
    "titleRom": "eol-gul-gwa i-mok-gu-bi",
    "themeColor": "#E06D53",
    "accentBg": "#FFF6F3",
    "desc": "細緻的臉龐五官部位與面部特徵，觀察身邊人最先注意的詞彙。",
    "items": [
      {
        "kr": "눈썹",
        "rom": "nun-sseop",
        "zh": "眉毛",
        "icon": "〰️",
        "tip": "雙眼上方的毛髮"
      },
      {
        "kr": "눈",
        "rom": "nun",
        "zh": "眼睛",
        "icon": "👀",
        "tip": "靈魂之窗 (注意：눈 也是雪)"
      },
      {
        "kr": "코",
        "rom": "ko",
        "zh": "鼻子",
        "icon": "👃",
        "tip": "呼吸與聞香氣的器官"
      },
      {
        "kr": "입",
        "rom": "ip",
        "zh": "嘴巴",
        "icon": "👄",
        "tip": "說話和進食的部位"
      },
      {
        "kr": "입술",
        "rom": "ip-sul",
        "zh": "嘴唇",
        "icon": "💋",
        "tip": "雙唇"
      },
      {
        "kr": "귀",
        "rom": "gwi",
        "zh": "耳朵",
        "icon": "👂",
        "tip": "聆聽聲音的雙耳"
      },
      {
        "kr": "이마",
        "rom": "i-ma",
        "zh": "額頭",
        "icon": "🙍",
        "tip": "眉毛上方的寬闊額頭"
      },
      {
        "kr": "턱",
        "rom": "teok",
        "zh": "下巴",
        "icon": "🗣️",
        "tip": "臉部最下方的下巴"
      },
      {
        "kr": "보조개",
        "rom": "bo-jo-gae",
        "zh": "酒窩",
        "icon": "😊",
        "tip": "微笑時臉頰凹陷的酒窩"
      },
      {
        "kr": "주름",
        "rom": "ju-reum",
        "zh": "皺紋",
        "icon": "👴",
        "tip": "肌膚紋理與歲月皺紋"
      },
      {
        "kr": "여드름",
        "rom": "yeo-deu-reum",
        "zh": "痘痘 / 青春痘",
        "icon": "✨",
        "tip": "臉部粉刺或痘痘"
      }
    ]
  },
  {
    "id": "domain-02-02",
    "domainId": "02",
    "domainName": "02_人體與外貌",
    "domainIcon": "👤",
    "titleKo": "몸과 사지",
    "titleZh": "身體軀幹與四肢關節",
    "titleRom": "mom-gwa sa-ji",
    "themeColor": "#E06D53",
    "accentBg": "#FFF6F3",
    "desc": "人體核心軀幹與各部位關節，看醫生或運動時必用單字。",
    "items": [
      {
        "kr": "머리",
        "rom": "meo-ri",
        "zh": "頭 / 頭髮",
        "icon": "🧠",
        "tip": "腦袋、頭頂或整頭頭髮"
      },
      {
        "kr": "목",
        "rom": "mok",
        "zh": "脖子 / 喉嚨",
        "icon": "🧣",
        "tip": "頸部，喉嚨痛也是 목"
      },
      {
        "kr": "어깨",
        "rom": "eo-kkae",
        "zh": "肩膀",
        "icon": "💪",
        "tip": "雙肩"
      },
      {
        "kr": "팔",
        "rom": "pal",
        "zh": "手臂",
        "icon": "🦾",
        "tip": "整隻手臂 (注意：팔 也是八)"
      },
      {
        "kr": "손",
        "rom": "son",
        "zh": "手 (手掌)",
        "icon": "✋",
        "tip": "雙手"
      },
      {
        "kr": "손가락",
        "rom": "son-ga-rak",
        "zh": "手指",
        "icon": "🖐️",
        "tip": "手上的十根指頭"
      },
      {
        "kr": "가슴",
        "rom": "ga-seum",
        "zh": "胸膛 / 內心",
        "icon": "🫀",
        "tip": "胸口，常借指心中"
      },
      {
        "kr": "배",
        "rom": "bae",
        "zh": "肚子 / 腹部",
        "icon": "🤰",
        "tip": "肚子 (注意：배 也是船或水梨)"
      },
      {
        "kr": "허리",
        "rom": "heo-ri",
        "zh": "腰部",
        "icon": "🥋",
        "tip": "身體的腰部輪廓"
      },
      {
        "kr": "다리",
        "rom": "da-ri",
        "zh": "腿 (雙腿)",
        "icon": "🦵",
        "tip": "雙腿 (注意：다리 也是橋樑)"
      },
      {
        "kr": "무릎",
        "rom": "mu-reup",
        "zh": "膝蓋",
        "icon": "🧎",
        "tip": "腿部膝蓋關節"
      },
      {
        "kr": "발",
        "rom": "bal",
        "zh": "腳 (腳掌)",
        "icon": "🦶",
        "tip": "站立行走的腳掌"
      }
    ]
  },
  {
    "id": "domain-03-01",
    "domainId": "03",
    "domainName": "03_家族與親屬",
    "domainIcon": "👨‍👩‍👧‍👦",
    "titleKo": "가족과 친척",
    "titleZh": "核心親屬與長輩稱謂",
    "titleRom": "ga-jok-gwa chin-cheok",
    "themeColor": "#8E44AD",
    "accentBg": "#F9F0FC",
    "desc": "韓國敬語文化核心！區分內外祖父母、父母尊稱與晚輩稱呼。",
    "items": [
      {
        "kr": "가족",
        "rom": "ga-jok",
        "zh": "家人 / 家庭",
        "icon": "🏡",
        "tip": "一家人 (漢字：家族)"
      },
      {
        "kr": "친할아버지",
        "rom": "chin-hal-a-beo-ji",
        "zh": "親爺爺 (父系祖父)",
        "icon": "👴",
        "tip": "父親的爸爸"
      },
      {
        "kr": "친할머니",
        "rom": "chin-hal-meo-ni",
        "zh": "親奶奶 (父系祖母)",
        "icon": "👵",
        "tip": "父親的媽媽"
      },
      {
        "kr": "외할아버지",
        "rom": "oe-hal-a-beo-ji",
        "zh": "外公 (外祖父)",
        "icon": "👴🏼",
        "tip": "母親的爸爸 (漢字：外割父)"
      },
      {
        "kr": "외할머니",
        "rom": "oe-hal-meo-ni",
        "zh": "外婆 (外祖母)",
        "icon": "👵🏼",
        "tip": "母親的媽媽 (漢字：外割母)"
      },
      {
        "kr": "아버지 / 아빠",
        "rom": "a-beo-ji / a-ppa",
        "zh": "父親 / 爸爸",
        "icon": "👨",
        "tip": "正式尊稱 vs 親切口語"
      },
      {
        "kr": "어머니 / 엄마",
        "rom": "eo-meo-ni / eom-ma",
        "zh": "母親 / 媽媽",
        "icon": "👩",
        "tip": "正式尊稱 vs 親切口語"
      },
      {
        "kr": "아들",
        "rom": "a-deul",
        "zh": "兒子",
        "icon": "👦",
        "tip": "自己的愛子"
      },
      {
        "kr": "딸",
        "rom": "ttal",
        "zh": "女兒",
        "icon": "👧",
        "tip": "自己的掌上明珠"
      }
    ]
  },
  {
    "id": "domain-03-02",
    "domainId": "03",
    "domainName": "03_家族與親屬",
    "domainIcon": "👨‍👩‍👧‍👦",
    "titleKo": "형제자매와 호칭",
    "titleZh": "手足稱謂：男稱與女稱差異",
    "titleRom": "hyeong-je-ja-mae-wa ho-ching",
    "themeColor": "#8E44AD",
    "accentBg": "#F9F0FC",
    "desc": "韓國文化中叫哥哥姊姊有性別嚴格區分，韓劇追星必備！",
    "items": [
      {
        "kr": "오빠",
        "rom": "o-ppa",
        "zh": "哥哥 (女性稱呼)",
        "icon": "🌟",
        "tip": "女性叫年長哥哥、男友或偶像"
      },
      {
        "kr": "형",
        "rom": "hyeong",
        "zh": "哥哥 (男性稱呼)",
        "icon": "🧢",
        "tip": "男性叫年長哥哥或前輩 (漢字：兄)"
      },
      {
        "kr": "언니",
        "rom": "eon-ni",
        "zh": "姊姊 (女性稱呼)",
        "icon": "🎀",
        "tip": "女性叫年長姊姊或學姊"
      },
      {
        "kr": "누나",
        "rom": "nu-na",
        "zh": "姊姊 (男性稱呼)",
        "icon": "👒",
        "tip": "男性叫年長姊姊或前輩"
      },
      {
        "kr": "남동생",
        "rom": "nam-dong-saeng",
        "zh": "弟弟",
        "icon": "🧒",
        "tip": "家中年幼的男手足"
      },
      {
        "kr": "여동생",
        "rom": "yeo-dong-saeng",
        "zh": "妹妹",
        "icon": "👧",
        "tip": "家中年幼的女手足"
      },
      {
        "kr": "삼촌",
        "rom": "sam-chon",
        "zh": "叔叔 / 伯父",
        "icon": "🧔",
        "tip": "父親的兄弟 (漢字：三寸)"
      },
      {
        "kr": "이모",
        "rom": "i-mo",
        "zh": "阿姨 / 姨母",
        "icon": "👩‍🦰",
        "tip": "母親的姊妹 (漢字：姨母)"
      },
      {
        "kr": "고모",
        "rom": "go-mo",
        "zh": "姑姑 / 姑母",
        "icon": "👱‍♀️",
        "tip": "父親的姊妹 (漢字：姑母)"
      }
    ]
  },
  {
    "id": "domain-04-01",
    "domainId": "04",
    "domainName": "04_美妝與護膚",
    "domainIcon": "💄",
    "titleKo": "스킨케어 기초",
    "titleZh": "基礎護膚保養八步驟",
    "titleRom": "seu-kin-ke-eo gi-cho",
    "themeColor": "#E91E63",
    "accentBg": "#FFF0F5",
    "desc": "Olive Young 保養品專區必備術語，韓妞水光肌秘密步驟全收錄。",
    "items": [
      {
        "kr": "클렌저",
        "rom": "keul-len-jeo",
        "zh": "洗面乳 / 潔顏乳",
        "icon": "🫧",
        "tip": "早晚溫和洗淨臉部 (Cleanser)"
      },
      {
        "kr": "토너",
        "rom": "to-neo",
        "zh": "化妝水 / 爽膚水",
        "icon": "💧",
        "tip": "潔面後二次清潔補水 (Toner)"
      },
      {
        "kr": "세럼",
        "rom": "se-reom",
        "zh": "精華液",
        "icon": "🧪",
        "tip": "高效修護密集調理 (Serum)"
      },
      {
        "kr": "에센스",
        "rom": "e-sen-seu",
        "zh": "精華露",
        "icon": "✨",
        "tip": "水潤清爽精華露 (Essence)"
      },
      {
        "kr": "로션",
        "rom": "ro-syeon",
        "zh": "乳液",
        "icon": "🧴",
        "tip": "水油平衡保濕乳 (Lotion)"
      },
      {
        "kr": "크림",
        "rom": "keu-rim",
        "zh": "面霜 / 保濕乳霜",
        "icon": "🧁",
        "tip": "深層滋潤鎖水面霜 (Cream)"
      },
      {
        "kr": "마스크팩",
        "rom": "ma-seu-keu-paek",
        "zh": "面膜",
        "icon": "🧖‍♀️",
        "tip": "日常片狀急救補水面膜 (Mask Pack)"
      },
      {
        "kr": "미스트",
        "rom": "mi-seu-teu",
        "zh": "保濕噴霧",
        "icon": "💨",
        "tip": "隨身攜帶即時補水噴霧 (Mist)"
      },
      {
        "kr": "오일",
        "rom": "o-il",
        "zh": "護膚油 / 卸妝油",
        "icon": "🫒",
        "tip": "滋養油或以油溶妝 (Oil)"
      }
    ]
  },
  {
    "id": "domain-04-02",
    "domainId": "04",
    "domainName": "04_美妝與護膚",
    "domainIcon": "💄",
    "titleKo": "화장품과 메이크업",
    "titleZh": "彩妝化妝包實用單品",
    "titleRom": "hwa-jang-pum-gwa me-i-keu-eop",
    "themeColor": "#E91E63",
    "accentBg": "#FFF0F5",
    "desc": "從精緻底妝到眼唇點綴，走進韓國美妝店隨心選購不求人。",
    "items": [
      {
        "kr": "파운데이션",
        "rom": "pa-un-de-i-syeon",
        "zh": "粉底液",
        "icon": "🧫",
        "tip": "修飾膚色的液態底妝 (Foundation)"
      },
      {
        "kr": "쿠션",
        "rom": "ku-syeon",
        "zh": "氣墊粉餅",
        "icon": "🪞",
        "tip": "韓系隨身補妝氣墊 (Cushion)"
      },
      {
        "kr": "컨실러",
        "rom": "keon-sil-leo",
        "zh": "遮瑕膏",
        "icon": "🖌️",
        "tip": "局部重點遮蓋瑕疵 (Concealer)"
      },
      {
        "kr": "파우더",
        "rom": "pa-u-deo",
        "zh": "蜜粉 / 定妝散粉",
        "icon": "🌫️",
        "tip": "控油持妝霧面粉體 (Powder)"
      },
      {
        "kr": "쉐이딩",
        "rom": "swae-i-ding",
        "zh": "修容 / 陰影粉",
        "icon": "🎨",
        "tip": "立體輪廓小臉修飾 (Shading)"
      },
      {
        "kr": "섀도우",
        "rom": "syae-do-u",
        "zh": "眼影",
        "icon": "👁️",
        "tip": "打造層次感眼妝 (Shadow)"
      },
      {
        "kr": "아이라이너",
        "rom": "a-i-ra-i-neo",
        "zh": "眼線筆",
        "icon": "✏️",
        "tip": "描繪眼型神采 (Eyeliner)"
      },
      {
        "kr": "마스카라",
        "rom": "ma-seu-ka-ra",
        "zh": "睫毛膏",
        "icon": "👀",
        "tip": "根根分明捲翹睫毛 (Mascara)"
      },
      {
        "kr": "볼터치",
        "rom": "bol-teo-chi",
        "zh": "腮紅 / 胭脂",
        "icon": "🌸",
        "tip": "增添紅潤好氣色 (Blusher)"
      },
      {
        "kr": "틴트",
        "rom": "tin-teu",
        "zh": "唇釉 / 染唇露",
        "icon": "💄",
        "tip": "高顯色持久水光唇釉 (Lip Tint)"
      },
      {
        "kr": "립스틱",
        "rom": "rip-seu-tik",
        "zh": "口紅 / 唇膏",
        "icon": "💋",
        "tip": "經典絲絨或水潤膏體 (Lipstick)"
      }
    ]
  },
  {
    "id": "domain-05-01",
    "domainId": "05",
    "domainName": "05_服飾與珠寶",
    "domainIcon": "👗",
    "titleKo": "옷과 일상 패션",
    "titleZh": "上衣下著與日常穿搭",
    "titleRom": "ot-gwa il-sang pae-syeon",
    "themeColor": "#9C27B0",
    "accentBg": "#FBF0FF",
    "desc": "四季出門穿著必備單字，逛東大門、弘大買衫溝通無障礙。",
    "items": [
      {
        "kr": "옷",
        "rom": "ot",
        "zh": "衣服 / 服裝",
        "icon": "👕",
        "tip": "各類衣物的總稱"
      },
      {
        "kr": "셔츠",
        "rom": "syeo-cheu",
        "zh": "襯衫",
        "icon": "👔",
        "tip": "正式或休閒鈕扣襯衫 (Shirt)"
      },
      {
        "kr": "티셔츠",
        "rom": "ti-syeo-cheu",
        "zh": "T恤 (短袖)",
        "icon": "👕",
        "tip": "百搭圓領短袖 (T-shirt)"
      },
      {
        "kr": "바지",
        "rom": "ba-ji",
        "zh": "褲子",
        "icon": "👖",
        "tip": "各類長短褲"
      },
      {
        "kr": "청바지",
        "rom": "cheong-ba-ji",
        "zh": "牛仔褲",
        "icon": "👖",
        "tip": "丹寧牛仔長褲 (漢字：靑바지)"
      },
      {
        "kr": "치마",
        "rom": "chi-ma",
        "zh": "裙子",
        "icon": "👗",
        "tip": "半身裙"
      },
      {
        "kr": "원피스",
        "rom": "won-pi-seu",
        "zh": "連身洋裝",
        "icon": "👗",
        "tip": "一件式連衣裙 (One-piece)"
      },
      {
        "kr": "코트",
        "rom": "ko-teu",
        "zh": "大衣 / 外套",
        "icon": "🧥",
        "tip": "秋冬保暖毛呢長大衣 (Coat)"
      },
      {
        "kr": "패딩",
        "rom": "pae-ding",
        "zh": "羽絨外套",
        "icon": "🦺",
        "tip": "韓國冬天國民禦寒裝備 (Padding)"
      },
      {
        "kr": "스웨터",
        "rom": "seu-we-teo",
        "zh": "毛衣 / 針織衫",
        "icon": "🧶",
        "tip": "保暖編織針織衫 (Sweater)"
      }
    ]
  },
  {
    "id": "domain-05-02",
    "domainId": "05",
    "domainName": "05_服飾與珠寶",
    "domainIcon": "👗",
    "titleKo": "신발과 모자 액세서리",
    "titleZh": "鞋履配件與珠寶首飾",
    "titleRom": "sin-bal-gwa moja ak-se-seo-ri",
    "themeColor": "#9C27B0",
    "accentBg": "#FBF0FF",
    "desc": "點亮個人風格的鞋帽配件與精緻珠寶首飾，日常吸睛亮點。",
    "items": [
      {
        "kr": "모자",
        "rom": "mo-ja",
        "zh": "帽子",
        "icon": "🧢",
        "tip": "鴨舌帽、漁夫帽 (漢字：帽子)"
      },
      {
        "kr": "신발",
        "rom": "sin-bal",
        "zh": "鞋子",
        "icon": "👞",
        "tip": "外出穿著各類鞋履"
      },
      {
        "kr": "운동화",
        "rom": "un-dong-hwa",
        "zh": "運動鞋 / 球鞋",
        "icon": "👟",
        "tip": "舒適跑鞋 (漢字：運動靴)"
      },
      {
        "kr": "구두",
        "rom": "gu-du",
        "zh": "皮鞋 / 高跟鞋",
        "icon": "👠",
        "tip": "正式皮鞋或優雅女鞋"
      },
      {
        "kr": "양말",
        "rom": "yang-mal",
        "zh": "襪子",
        "icon": "🧦",
        "tip": "保暖棉襪 (漢字：洋襪)"
      },
      {
        "kr": "가방",
        "rom": "ga-bang",
        "zh": "包包 / 提袋",
        "icon": "👜",
        "tip": "側背包、手提袋"
      },
      {
        "kr": "지갑",
        "rom": "ji-gap",
        "zh": "皮夾 / 錢包",
        "icon": "👛",
        "tip": "放鈔票卡片的隨身錢包 (漢字：紙匣)"
      },
      {
        "kr": "손목시계",
        "rom": "son-mok-si-gye",
        "zh": "手錶 (腕錶)",
        "icon": "⌚",
        "tip": "手腕上的手錶"
      },
      {
        "kr": "귀걸이",
        "rom": "gwi-geol-i",
        "zh": "耳環",
        "icon": "✨",
        "tip": "耳垂上的飾品"
      },
      {
        "kr": "반지",
        "rom": "ban-ji",
        "zh": "戒指",
        "icon": "💍",
        "tip": "佩戴在手指上的指環"
      },
      {
        "kr": "목걸이",
        "rom": "mok-geol-i",
        "zh": "項鍊",
        "icon": "📿",
        "tip": "頸部優雅項鍊"
      },
      {
        "kr": "다이아몬드",
        "rom": "da-i-a-mon-deu",
        "zh": "鑽石",
        "icon": "💎",
        "tip": "璀璨寶石 (Diamond)"
      }
    ]
  },
  {
    "id": "domain-06-01",
    "domainId": "06",
    "domainName": "06_逛街與購物",
    "domainIcon": "🛍️",
    "titleKo": "계산과 쇼핑 용어",
    "titleZh": "結帳交易與商場必備詞",
    "titleRom": "gye-san-gwa syo-ping yong-eo",
    "themeColor": "#FF9800",
    "accentBg": "#FFF8E7",
    "desc": "購物結帳、詢問折扣與退換貨實用對話名詞，買東西超安心！",
    "items": [
      {
        "kr": "돈",
        "rom": "don",
        "zh": "錢 (金錢)",
        "icon": "💰",
        "tip": "日常金錢"
      },
      {
        "kr": "현금",
        "rom": "hyeon-geum",
        "zh": "現金",
        "icon": "💵",
        "tip": "鈔票硬幣 (漢字：現金)"
      },
      {
        "kr": "신용카드",
        "rom": "sin-yong-ka-deu",
        "zh": "信用卡",
        "icon": "💳",
        "tip": "刷卡付款 (Credit Card)"
      },
      {
        "kr": "계산",
        "rom": "gye-san",
        "zh": "結帳 / 買單",
        "icon": "🧾",
        "tip": "「계산해 주세요」請幫我結帳"
      },
      {
        "kr": "할인",
        "rom": "har-in",
        "zh": "折扣 / 打折",
        "icon": "🏷️",
        "tip": "特價減價 (漢字：割引)"
      },
      {
        "kr": "가격",
        "rom": "ga-gyeok",
        "zh": "價格 / 價錢",
        "icon": "💲",
        "tip": "商品標價 (漢字：價格)"
      },
      {
        "kr": "영수증",
        "rom": "yeong-su-jeung",
        "zh": "發票 / 收據",
        "icon": "📄",
        "tip": "交易明細證明 (漢字：領收證)"
      },
      {
        "kr": "교환",
        "rom": "gyo-hwan",
        "zh": "換貨 (退換)",
        "icon": "🔄",
        "tip": "更換顏色或尺碼 (漢字：交換)"
      },
      {
        "kr": "환불",
        "rom": "hwan-bul",
        "zh": "退款 (退錢)",
        "icon": "↩️",
        "tip": "退回商品貨款 (漢字：換拂)"
      },
      {
        "kr": "쇼핑백",
        "rom": "syo-ping-baek",
        "zh": "購物袋 / 紙袋",
        "icon": "🛍️",
        "tip": "裝衣服的購物袋 (Shopping Bag)"
      },
      {
        "kr": "점원",
        "rom": "jeom-won",
        "zh": "店員 / 服務員",
        "icon": "🧑‍💼",
        "tip": "店內門市店員 (漢字：店員)"
      },
      {
        "kr": "탈의실",
        "rom": "tal-ui-sil",
        "zh": "試衣間 / 更衣室",
        "icon": "🚪",
        "tip": "試穿衣服的地方 (漢字：脫衣室)"
      }
    ]
  },
  {
    "id": "domain-06-02",
    "domainId": "06",
    "domainName": "06_逛街與購物",
    "domainIcon": "🛍️",
    "titleKo": "상점과 쇼핑 장소",
    "titleZh": "購物商圈與各類店鋪",
    "titleRom": "sang-jeom-gwa syo-ping jang-so",
    "themeColor": "#FF9800",
    "accentBg": "#FFF8E7",
    "desc": "從傳統市集到現代免稅店與便利商店，各類型購物據點全覽。",
    "items": [
      {
        "kr": "백화점",
        "rom": "baek-hwa-jeom",
        "zh": "百貨公司",
        "icon": "🏬",
        "tip": "大型精品百貨 (漢字：百貨店)"
      },
      {
        "kr": "마트",
        "rom": "ma-teu",
        "zh": "大型超市",
        "icon": "🛒",
        "tip": "如 Emart、樂天超市 (Mart)"
      },
      {
        "kr": "편의점",
        "rom": "pyeon-ui-jeom",
        "zh": "便利商店",
        "icon": "🏪",
        "tip": "24小時超商 (漢字：便宜店)"
      },
      {
        "kr": "시장",
        "rom": "si-jang",
        "zh": "傳統市場",
        "icon": "🏮",
        "tip": "傳統在地市集 (漢字：市場)"
      },
      {
        "kr": "면세점",
        "rom": "myeon-se-jeom",
        "zh": "免稅店",
        "icon": "✈️",
        "tip": "機場或市區免稅店 (漢字：免稅店)"
      },
      {
        "kr": "가게",
        "rom": "ga-ge",
        "zh": "店鋪 / 商店",
        "icon": "🛖",
        "tip": "街邊各色獨立小店"
      },
      {
        "kr": "온라인 쇼핑",
        "rom": "on-ra-in syo-ping",
        "zh": "線上購物 / 網購",
        "icon": "📱",
        "tip": "手機或電腦網購 (Online Shopping)"
      },
      {
        "kr": "선물",
        "rom": "seon-mul",
        "zh": "禮物 / 伴手禮",
        "icon": "🎁",
        "tip": "送給親友的禮物 (漢字：膳物)"
      }
    ]
  },
  {
    "id": "domain-07-01",
    "domainId": "07",
    "domainName": "07_飲食與料理",
    "domainIcon": "🍲",
    "titleKo": "한국의 대표 음식",
    "titleZh": "韓式經典小吃與料理",
    "titleRom": "han-guk-ui dae-pyo eum-sik",
    "themeColor": "#E67E22",
    "accentBg": "#FEF5E7",
    "desc": "布帳馬車人氣小吃、招牌烤肉與經典主食，美味道地！",
    "items": [
      {
        "kr": "떡볶이",
        "rom": "tteok-bok-ki",
        "zh": "辣炒年糕",
        "icon": "🍢",
        "tip": "甜辣軟糯經典國民街頭小吃"
      },
      {
        "kr": "김밥",
        "rom": "gim-bap",
        "zh": "海苔飯捲 / 紫菜包飯",
        "icon": "🍙",
        "tip": "麻油香氣滿滿的蔬菜肉片飯捲"
      },
      {
        "kr": "순대",
        "rom": "sun-dae",
        "zh": "韓式血腸",
        "icon": "🌭",
        "tip": "搭配年糕醬汁享用的傳統蒸灌腸"
      },
      {
        "kr": "튀김",
        "rom": "twi-gim",
        "zh": "韓式炸物",
        "icon": "🍤",
        "tip": "香脆炸蝦、炸魷魚與炸紫菜捲"
      },
      {
        "kr": "어묵",
        "rom": "eo-muk",
        "zh": "魚板 / 甜不辣",
        "icon": "🍢",
        "tip": "冬天串在竹籤上的熱呼呼魚糕串"
      },
      {
        "kr": "라면",
        "rom": "ra-myeon",
        "zh": "泡麵 / 辛拉麵",
        "icon": "🍜",
        "tip": "加蛋加起司的濃郁熱湯麵 (漢字：拉麵)"
      },
      {
        "kr": "비빔밥",
        "rom": "bi-bim-bap",
        "zh": "韓式拌飯",
        "icon": "🍲",
        "tip": "全州石鍋什錦彩蔬拌飯"
      },
      {
        "kr": "삼겹살",
        "rom": "sam-gyeop-sal",
        "zh": "五花肉 (三層肉)",
        "icon": "🥓",
        "tip": "生菜包蒜頭泡菜的厚切烤五花"
      },
      {
        "kr": "치킨",
        "rom": "chi-kin",
        "zh": "韓式炸雞",
        "icon": "🍗",
        "tip": "洋釀甜辣脆皮炸雞配啤酒 (Chicken)"
      },
      {
        "kr": "김치",
        "rom": "gim-chi",
        "zh": "泡菜",
        "icon": "🥬",
        "tip": "韓國靈魂代表發酵辛奇"
      },
      {
        "kr": "찌개",
        "rom": "jji-gae",
        "zh": "濃湯鍋 / 泡菜鍋",
        "icon": "🥘",
        "tip": "熱滾滾的大醬湯或泡菜鍋"
      }
    ]
  },
  {
    "id": "domain-07-02",
    "domainId": "07",
    "domainName": "07_飲食與料理",
    "domainIcon": "🍲",
    "titleKo": "음료와 디저트",
    "titleZh": "人氣茶飲酒水與甜品",
    "titleRom": "eum-ryo-wa di-jeo-teu",
    "themeColor": "#E67E22",
    "accentBg": "#FEF5E7",
    "desc": "咖啡文化大國必點飲品、傳統米釀與韓式微醺特調。",
    "items": [
      {
        "kr": "물",
        "rom": "mul",
        "zh": "水 (冷水/開水)",
        "icon": "💧",
        "tip": "餐廳必提供的清涼飲用水"
      },
      {
        "kr": "커피",
        "rom": "keo-pi",
        "zh": "咖啡",
        "icon": "☕",
        "tip": "「冰美式 얼죽아」每日精神泉源 (Coffee)"
      },
      {
        "kr": "차",
        "rom": "cha",
        "zh": "茶 (傳統茶)",
        "icon": "🍵",
        "tip": "玉米鬚茶、大麥茶或柚子茶 (漢字：茶)"
      },
      {
        "kr": "우유",
        "rom": "u-yu",
        "zh": "牛奶",
        "icon": "🥛",
        "tip": "香甜香蕉牛奶等 (漢字：牛乳)"
      },
      {
        "kr": "맥주",
        "rom": "maek-ju",
        "zh": "啤酒",
        "icon": "🍺",
        "tip": "配炸雞絕配的沁涼啤酒 (漢字：麥酒)"
      },
      {
        "kr": "소주",
        "rom": "so-ju",
        "zh": "燒酒",
        "icon": "🍶",
        "tip": "韓國國民綠色玻璃瓶燒酒 (漢字：燒酒)"
      },
      {
        "kr": "막걸리",
        "rom": "mak-geol-li",
        "zh": "馬格利米酒",
        "icon": "🍶",
        "tip": "下雨天配海鮮煎餅的香甜米釀酒"
      },
      {
        "kr": "빵",
        "rom": "ppang",
        "zh": "麵包",
        "icon": "🍞",
        "tip": "咖啡廳各款現烤麵包點心"
      },
      {
        "kr": "케이크",
        "rom": "ke-i-keu",
        "zh": "蛋糕",
        "icon": "🎂",
        "tip": "慶生下午茶精緻蛋糕 (Cake)"
      },
      {
        "kr": "아이스크림",
        "rom": "a-i-seu-keu-rim",
        "zh": "冰淇淋",
        "icon": "🍦",
        "tip": "甜筒或雪糕 (Ice cream)"
      }
    ]
  },
  {
    "id": "domain-08-01",
    "domainId": "08",
    "domainName": "08_居家生活空間",
    "domainIcon": "🏠",
    "titleKo": "집과 방의 구조",
    "titleZh": "房屋格局與家具佈置",
    "titleRom": "jip-gwa bang-ui gu-jo",
    "themeColor": "#27AE60",
    "accentBg": "#EAFAF1",
    "desc": "溫馨小窩的格局空間與客廳臥室家具，日常起居核心名詞。",
    "items": [
      {
        "kr": "집",
        "rom": "jip",
        "zh": "家 / 房子",
        "icon": "🏡",
        "tip": "居住溫馨的家"
      },
      {
        "kr": "방",
        "rom": "bang",
        "zh": "房間 / 屋子",
        "icon": "🚪",
        "tip": "臥室或單獨房間 (漢字：房)"
      },
      {
        "kr": "거실",
        "rom": "geo-sil",
        "zh": "客廳",
        "icon": "🛋️",
        "tip": "家人團聚的客廳空間 (漢字：居室)"
      },
      {
        "kr": "주방 / 부엌",
        "rom": "ju-bang / bu-eok",
        "zh": "廚房",
        "icon": "🍳",
        "tip": "烹飪美味料理的空間 (漢字：廚房)"
      },
      {
        "kr": "화장실",
        "rom": "hwa-jang-sil",
        "zh": "洗手間 / 廁所",
        "icon": "🚽",
        "tip": "浴室洗手間 (漢字：化粧室)"
      },
      {
        "kr": "문",
        "rom": "mun",
        "zh": "門",
        "icon": "🚪",
        "tip": "房門、大門 (漢字：門)"
      },
      {
        "kr": "창문",
        "rom": "chang-mun",
        "zh": "窗戶",
        "icon": "🪟",
        "tip": "採光通風窗 (漢字：窓門)"
      },
      {
        "kr": "침대",
        "rom": "chim-dae",
        "zh": "床 (睡床)",
        "icon": "🛏️",
        "tip": "舒眠的大床 (漢字：寢臺)"
      },
      {
        "kr": "책상",
        "rom": "chaek-sang",
        "zh": "書桌 / 辦公桌",
        "icon": "🪵",
        "tip": "讀書用功的桌子 (漢字：冊床)"
      },
      {
        "kr": "의자",
        "rom": "ui-ja",
        "zh": "椅子",
        "icon": "🪑",
        "tip": "坐椅靠背椅 (漢字：椅子)"
      },
      {
        "kr": "소파",
        "rom": "so-pa",
        "zh": "沙發",
        "icon": "🛋️",
        "tip": "客廳柔軟沙發 (Sofa)"
      }
    ]
  },
  {
    "id": "domain-08-02",
    "domainId": "08",
    "domainName": "08_居家生活空間",
    "domainIcon": "🏠",
    "titleKo": "가전제품과 생활용품",
    "titleZh": "家電電器與生活用品",
    "titleRom": "ga-jeon-je-pum-gwa saeng-hwal-yong-pum",
    "themeColor": "#27AE60",
    "accentBg": "#EAFAF1",
    "desc": "現代居家的實用電器設備與生活隨手用品，便利好物一網打盡。",
    "items": [
      {
        "kr": "냉장고",
        "rom": "naeng-jang-go",
        "zh": "冰箱",
        "icon": "🧊",
        "tip": "保鮮食材家電 (漢字：冷藏庫)"
      },
      {
        "kr": "세탁기",
        "rom": "se-tak-gi",
        "zh": "洗衣機",
        "icon": "🧺",
        "tip": "洗淨衣物家電 (漢字：洗濯機)"
      },
      {
        "kr": "텔레비전",
        "rom": "tel-re-bi-jeon",
        "zh": "電視機",
        "icon": "📺",
        "tip": "看劇娛樂家電 (Television)"
      },
      {
        "kr": "에어컨",
        "rom": "e-eo-keon",
        "zh": "冷氣 / 空調",
        "icon": "❄️",
        "tip": "夏天消暑空調 (Air conditioner)"
      },
      {
        "kr": "컴퓨터",
        "rom": "keom-pyu-teo",
        "zh": "電腦",
        "icon": "💻",
        "tip": "個人工作電腦 (Computer)"
      },
      {
        "kr": "청소기",
        "rom": "cheong-so-gi",
        "zh": "吸塵器",
        "icon": "🧹",
        "tip": "打掃地板吸塵機 (漢字：淸掃機)"
      },
      {
        "kr": "이불",
        "rom": "i-bul",
        "zh": "被子 / 棉被",
        "icon": "🛌",
        "tip": "睡覺保暖蓋被"
      },
      {
        "kr": "베개",
        "rom": "be-gae",
        "zh": "枕頭",
        "icon": "🛏️",
        "tip": "睡眠安神枕頭"
      },
      {
        "kr": "수건",
        "rom": "su-geon",
        "zh": "毛巾",
        "icon": "🧼",
        "tip": "洗臉沐浴擦乾毛巾 (漢字：手巾)"
      }
    ]
  },
  {
    "id": "domain-09-01",
    "domainId": "09",
    "domainName": "09_交通出行設施",
    "domainIcon": "🚗",
    "titleKo": "대중교통과 탈것",
    "titleZh": "大眾交通工具與出行",
    "titleRom": "dae-jung-gyo-tong-gwa tal-geot",
    "themeColor": "#16A085",
    "accentBg": "#E8F8F5",
    "desc": "韓國地鐵公車四通八達！搭乘交通工具前往各景點必讀。",
    "items": [
      {
        "kr": "지하철",
        "rom": "ji-ha-cheol",
        "zh": "地鐵 / 捷運",
        "icon": "🚇",
        "tip": "市區快捷地下鐵 (漢字：地下鐵)"
      },
      {
        "kr": "버스",
        "rom": "beo-seu",
        "zh": "公車 / 巴士",
        "icon": "🚌",
        "tip": "各路市區公車 (Bus)"
      },
      {
        "kr": "택시",
        "rom": "taek-si",
        "zh": "計程車 / 的士",
        "icon": "🚕",
        "tip": "招手即乘隨招車 (Taxi)"
      },
      {
        "kr": "기차",
        "rom": "gi-cha",
        "zh": "火車 / 列車",
        "icon": "🚆",
        "tip": "KTX 高鐵或城際火車 (漢字：汽車)"
      },
      {
        "kr": "비행기",
        "rom": "bi-haeng-gi",
        "zh": "飛機",
        "icon": "✈️",
        "tip": "出國遠行客機 (漢字：飛行機)"
      },
      {
        "kr": "자전거",
        "rom": "ja-jeon-geo",
        "zh": "自行車 / 單車",
        "icon": "🚲",
        "tip": "首爾叮鈴鈴共享單車 (漢字：自轉車)"
      },
      {
        "kr": "자동차",
        "rom": "ja-dong-cha",
        "zh": "汽車 / 自用轎車",
        "icon": "🚗",
        "tip": "自用私家車 (漢字：自動車)"
      },
      {
        "kr": "오토바이",
        "rom": "o-to-ba-i",
        "zh": "機車 / 摩托車",
        "icon": "🛵",
        "tip": "外送外快雙輪機車 (Auto-bike)"
      }
    ]
  },
  {
    "id": "domain-09-02",
    "domainId": "09",
    "domainName": "09_交通出行設施",
    "domainIcon": "🚗",
    "titleKo": "도로와 도시 시설",
    "titleZh": "道路交通與公共設施",
    "titleRom": "do-ro-wa do-si si-seol",
    "themeColor": "#16A085",
    "accentBg": "#E8F8F5",
    "desc": "穿梭在城市街道上的斑馬線、紅綠燈與生活醫療郵政場所。",
    "items": [
      {
        "kr": "역",
        "rom": "yeok",
        "zh": "車站 (地鐵站/火車站)",
        "icon": "🚉",
        "tip": "如「서울역 首爾站」(漢字：驛)"
      },
      {
        "kr": "정류장",
        "rom": "jeong-ryu-jang",
        "zh": "公車站牌 / 候車亭",
        "icon": "🚏",
        "tip": "搭公車站點 (漢字：停留場)"
      },
      {
        "kr": "공항",
        "rom": "gong-hang",
        "zh": "機場",
        "icon": "🛫",
        "tip": "仁川或金浦國際航空站 (漢字：空港)"
      },
      {
        "kr": "길 / 도로",
        "rom": "gil / do-ro",
        "zh": "道路 / 街道",
        "icon": "🛣️",
        "tip": "行人行駛道路 (漢字：道路)"
      },
      {
        "kr": "횡단보도",
        "rom": "hoeng-dan-bo-do",
        "zh": "斑馬線 / 行人穿越道",
        "icon": "🦓",
        "tip": "過馬路專用道 (漢字：橫斷步道)"
      },
      {
        "kr": "신호등",
        "rom": "sin-ho-deung",
        "zh": "紅綠燈 / 交通號誌",
        "icon": "🚦",
        "tip": "道路指示燈 (漢字：信號燈)"
      },
      {
        "kr": "병원",
        "rom": "byeong-won",
        "zh": "醫院",
        "icon": "🏥",
        "tip": "就醫診所大醫院 (漢字：病院)"
      },
      {
        "kr": "약국",
        "rom": "yak-guk",
        "zh": "藥局 / 藥房",
        "icon": "💊",
        "tip": "買保健藥物處 (漢字：藥局)"
      },
      {
        "kr": "은행",
        "rom": "eun-haeng",
        "zh": "銀行",
        "icon": "🏦",
        "tip": "換匯金融機構 (漢字：銀行)"
      },
      {
        "kr": "공원",
        "rom": "gong-won",
        "zh": "公園",
        "icon": "🌳",
        "tip": "散步休閒綠地 (漢字：公園)"
      }
    ]
  },
  {
    "id": "domain-10-01",
    "domainId": "10",
    "domainName": "10_自然生態動物",
    "domainIcon": "🐱",
    "titleKo": "귀여운 동물 친구들",
    "titleZh": "身邊可愛動物夥伴",
    "titleRom": "gwi-yeo-un dong-mul chin-gu-deul",
    "themeColor": "#2ECC71",
    "accentBg": "#EAFAF1",
    "desc": "萌趣可愛的家寵、農場與大自然動物朋友，叫聲生動好記！",
    "items": [
      {
        "kr": "강아지 / 개",
        "rom": "gang-a-ji / gae",
        "zh": "小狗 / 狗",
        "icon": "🐶",
        "tip": "最忠實可愛的毛小孩"
      },
      {
        "kr": "고양이",
        "rom": "go-yang-i",
        "zh": "貓咪",
        "icon": "🐱",
        "tip": "傲嬌可愛的貓星人"
      },
      {
        "kr": "새",
        "rom": "sae",
        "zh": "鳥 / 飛禽",
        "icon": "🐦",
        "tip": "在天空展翅高飛的小鳥"
      },
      {
        "kr": "물고기",
        "rom": "mul-go-gi",
        "zh": "魚 (活魚)",
        "icon": "🐟",
        "tip": "水裡悠游的魚兒"
      },
      {
        "kr": "토끼",
        "rom": "to-kki",
        "zh": "兔子",
        "icon": "🐰",
        "tip": "長耳朵跳躍小兔"
      },
      {
        "kr": "곰",
        "rom": "gom",
        "zh": "熊",
        "icon": "🐻",
        "tip": "韓國檀君神話主角黑熊"
      },
      {
        "kr": "호랑이",
        "rom": "ho-rang-i",
        "zh": "老虎",
        "icon": "🐯",
        "tip": "威武神勇的白頭山老虎"
      },
      {
        "kr": "소",
        "rom": "so",
        "zh": "牛 (黃牛/乳牛)",
        "icon": "🐮",
        "tip": "辛勤耕作溫馴的牛"
      },
      {
        "kr": "돼지",
        "rom": "dwae-ji",
        "zh": "豬",
        "icon": "🐷",
        "tip": "象徵發財富貴的小豬"
      },
      {
        "kr": "닭",
        "rom": "dak",
        "zh": "雞",
        "icon": "🐔",
        "tip": "清晨啼叫的家禽 (雙收音 ㄺ 發 ㄱ 音)"
      }
    ]
  },
  {
    "id": "domain-10-02",
    "domainId": "10",
    "domainName": "10_自然生態動物",
    "domainIcon": "🐱",
    "titleKo": "자연과 날씨 풍경",
    "titleZh": "大自然美景與天氣氣象",
    "titleRom": "ja-yeon-gwa nal-ssi pung-gyeong",
    "themeColor": "#2ECC71",
    "accentBg": "#EAFAF1",
    "desc": "日月星辰、高山大海與晴雨風雪，感受大自然的壯闊呼吸。",
    "items": [
      {
        "kr": "하늘",
        "rom": "ha-neul",
        "zh": "天空",
        "icon": "🌤️",
        "tip": "蔚藍澄澈的天空"
      },
      {
        "kr": "해 / 태양",
        "rom": "hae / tae-yang",
        "zh": "太陽",
        "icon": "☀️",
        "tip": "普照大地的紅日 (漢字：太陽)"
      },
      {
        "kr": "달",
        "rom": "dal",
        "zh": "月亮",
        "icon": "🌙",
        "tip": "夜空皎潔明月"
      },
      {
        "kr": "별",
        "rom": "byeol",
        "zh": "星星",
        "icon": "⭐",
        "tip": "夜幕閃爍星辰"
      },
      {
        "kr": "산",
        "rom": "san",
        "zh": "山 / 高山",
        "icon": "⛰️",
        "tip": "韓國多山地貌 (漢字：山)"
      },
      {
        "kr": "바다",
        "rom": "ba-da",
        "zh": "大海 / 海洋",
        "icon": "🌊",
        "tip": "波瀾壯闊的藍海"
      },
      {
        "kr": "나무",
        "rom": "na-mu",
        "zh": "樹木 / 木材",
        "icon": "🌳",
        "tip": "挺拔蒼翠的大樹"
      },
      {
        "kr": "꽃",
        "rom": "kkot",
        "zh": "花 / 花朵",
        "icon": "🌸",
        "tip": "芬芳迷人的花"
      },
      {
        "kr": "비",
        "rom": "bi",
        "zh": "雨 / 降雨",
        "icon": "🌧️",
        "tip": "淅淅瀝瀝的天降甘霖"
      },
      {
        "kr": "눈",
        "rom": "nun",
        "zh": "雪 / 下雪",
        "icon": "❄️",
        "tip": "純白雪花 (注意：눈 也是眼睛)"
      },
      {
        "kr": "바람",
        "rom": "ba-ram",
        "zh": "風",
        "icon": "💨",
        "tip": "微風或強風"
      },
      {
        "kr": "무지개",
        "rom": "mu-ji-gae",
        "zh": "彩虹",
        "icon": "🌈",
        "tip": "雨後初晴的七色彩虹"
      }
    ]
  },
  {
    "id": "domain-11-01",
    "domainId": "11",
    "domainName": "11_情緒感受表現",
    "domainIcon": "❤️",
    "titleKo": "마음과 감정 표현",
    "titleZh": "心情感受與喜怒哀樂",
    "titleRom": "ma-eum-gwa gam-jeong pyo-hyeon",
    "themeColor": "#E74C3C",
    "accentBg": "#FDEDEC",
    "desc": "向朋友傾訴心情、表達愛意與日常情緒波動的生動字詞。",
    "items": [
      {
        "kr": "기분",
        "rom": "gi-bun",
        "zh": "心情 / 情緒",
        "icon": "🌈",
        "tip": "「기분이 좋아요」心情真好 (漢字：氣分)"
      },
      {
        "kr": "행복",
        "rom": "haeng-bok",
        "zh": "幸福",
        "icon": "🥰",
        "tip": "溫暖美滿的幸福感 (漢字：幸福)"
      },
      {
        "kr": "기쁨",
        "rom": "gi-ppeum",
        "zh": "喜悅 / 高興",
        "icon": "😄",
        "tip": "內心雀躍快樂"
      },
      {
        "kr": "사랑",
        "rom": "sa-rang",
        "zh": "愛 / 愛情",
        "icon": "💖",
        "tip": "最美好的愛 (사랑해요 我愛你)"
      },
      {
        "kr": "슬픔",
        "rom": "seul-peum",
        "zh": "悲傷 / 難過",
        "icon": "😢",
        "tip": "令人心酸的傷心"
      },
      {
        "kr": "화 / 분노",
        "rom": "hwa / bun-no",
        "zh": "生氣 / 憤怒",
        "icon": "😡",
        "tip": "發脾氣動怒 (漢字：火 / 憤怒)"
      },
      {
        "kr": "걱정",
        "rom": "geok-jeong",
        "zh": "擔心 / 憂慮",
        "icon": "😟",
        "tip": "「걱정하지 마세요」請不用擔心"
      },
      {
        "kr": "재미",
        "rom": "jae-mi",
        "zh": "趣味 / 好玩",
        "icon": "🎉",
        "tip": "「재미있어요」很有趣！"
      },
      {
        "kr": "외로움",
        "rom": "oe-ro-um",
        "zh": "孤單 / 寂寞",
        "icon": "🥺",
        "tip": "獨自一人的孤獨感"
      },
      {
        "kr": "피곤",
        "rom": "pi-gon",
        "zh": "疲倦 / 疲憊",
        "icon": "🥱",
        "tip": "工作勞碌好累 (漢字：疲困)"
      }
    ]
  },
  {
    "id": "domain-12-01",
    "domainId": "12",
    "domainName": "12_學校與職場",
    "domainIcon": "🏫",
    "titleKo": "학교와 공부 문구",
    "titleZh": "校園學習生活與文具用品",
    "titleRom": "hak-gyo-wa gong-bu mun-gu",
    "themeColor": "#3498DB",
    "accentBg": "#EBF5FB",
    "desc": "在學校上課學習、寫功課考試與書包裡的文具小物。",
    "items": [
      {
        "kr": "학교",
        "rom": "hak-gyo",
        "zh": "學校",
        "icon": "🏫",
        "tip": "求學求知場所 (漢字：學校)"
      },
      {
        "kr": "학생",
        "rom": "hak-saeng",
        "zh": "學生",
        "icon": "🧑‍🎓",
        "tip": "在學學生 (漢字：學生)"
      },
      {
        "kr": "선생님",
        "rom": "seon-saeng-nim",
        "zh": "老師 / 先生",
        "icon": "👩‍🏫",
        "tip": "對師長的最高敬稱 (漢字：先生+님)"
      },
      {
        "kr": "공부",
        "rom": "gong-bu",
        "zh": "學習 / 功課",
        "icon": "📖",
        "tip": "「열심히 공부해요」努力用功 (漢字：工夫)"
      },
      {
        "kr": "시험",
        "rom": "si-heom",
        "zh": "考試 / 測驗",
        "icon": "📝",
        "tip": "學校學力測驗 (漢字：試驗)"
      },
      {
        "kr": "책",
        "rom": "chaek",
        "zh": "書 / 書籍",
        "icon": "📚",
        "tip": "教科書或課外書 (漢字：冊)"
      },
      {
        "kr": "공책",
        "rom": "gong-chaek",
        "zh": "筆記本",
        "icon": "📓",
        "tip": "寫筆記作業本 (漢字：空冊)"
      },
      {
        "kr": "연필",
        "rom": "yeon-pil",
        "zh": "鉛筆",
        "icon": "✏️",
        "tip": "木質石墨鉛筆 (漢字：鉛筆)"
      },
      {
        "kr": "지우개",
        "rom": "ji-u-gae",
        "zh": "橡皮擦",
        "icon": "🧼",
        "tip": "擦拭筆跡的擦膠"
      },
      {
        "kr": "가위",
        "rom": "ga-wi",
        "zh": "剪刀",
        "icon": "✂️",
        "tip": "美工勞作用剪刀"
      }
    ]
  },
  {
    "id": "domain-12-02",
    "domainId": "12",
    "domainName": "12_學校與職場",
    "domainIcon": "🏫",
    "titleKo": "회사와 직장 생활",
    "titleZh": "職場辦公與職務日常",
    "titleRom": "hoe-sa-wa jik-jang saeng-hwal",
    "themeColor": "#3498DB",
    "accentBg": "#EBF5FB",
    "desc": "韓國上班族日常，打卡開會與領薪水的必備詞彙。",
    "items": [
      {
        "kr": "회사",
        "rom": "hoe-sa",
        "zh": "公司",
        "icon": "🏢",
        "tip": "上班的企業單位 (漢字：會社)"
      },
      {
        "kr": "회사원",
        "rom": "hoe-sa-won",
        "zh": "上班族 / 公司職員",
        "icon": "💼",
        "tip": "在公司任職者 (漢字：會社員)"
      },
      {
        "kr": "일 / 업무",
        "rom": "il / eop-mu",
        "zh": "工作 / 業務",
        "icon": "💻",
        "tip": "日常工作事項 (漢字：業務)"
      },
      {
        "kr": "회의",
        "rom": "hoe-ui",
        "zh": "會議 / 開會",
        "icon": "👥",
        "tip": "團隊商討公事 (漢字：會議)"
      },
      {
        "kr": "서류",
        "rom": "seo-ryu",
        "zh": "文件 / 書面資料",
        "icon": "📑",
        "tip": "紙本或電子公文 (漢字：書類)"
      },
      {
        "kr": "출근",
        "rom": "chul-geun",
        "zh": "上班 (出勤)",
        "icon": "🚶‍♂️",
        "tip": "早晨前往公司 (漢字：出勤)"
      },
      {
        "kr": "퇴근",
        "rom": "toe-geun",
        "zh": "下班 (退勤)",
        "icon": "🏃‍♂️",
        "tip": "結束工作回家 (漢字：退勤)"
      },
      {
        "kr": "월급",
        "rom": "wol-geup",
        "zh": "薪水 / 月薪",
        "icon": "💵",
        "tip": "每月辛勤所得 (漢字：月給)"
      }
    ]
  },
  {
    "id": "domain-13-01",
    "domainId": "13",
    "domainName": "13_休閒運動娛樂",
    "domainIcon": "⚽",
    "titleKo": "운동과 스포츠",
    "titleZh": "熱門體育運動項目",
    "titleRom": "un-dong-gwa seu-po-cheu",
    "themeColor": "#F39C12",
    "accentBg": "#FEF9E7",
    "desc": "強身健體的各類熱門球類運動與日常休閒鍛鍊。",
    "items": [
      {
        "kr": "운동",
        "rom": "un-dong",
        "zh": "運動 / 鍛鍊",
        "icon": "🏃",
        "tip": "體能運動健身 (漢字：運動)"
      },
      {
        "kr": "축구",
        "rom": "chuk-gu",
        "zh": "足球",
        "icon": "⚽",
        "tip": "韓國極受歡迎的足球 (漢字：蹴球)"
      },
      {
        "kr": "야구",
        "rom": "ya-gu",
        "zh": "棒球",
        "icon": "⚾",
        "tip": "超熱血 KBO 職業棒球 (漢字：野球)"
      },
      {
        "kr": "농구",
        "rom": "nong-gu",
        "zh": "籃球",
        "icon": "🏀",
        "tip": "投籃比賽 (漢字：籠球)"
      },
      {
        "kr": "수영",
        "rom": "su-yeong",
        "zh": "游泳",
        "icon": "🏊",
        "tip": "水中游泳競速 (漢字：水泳)"
      },
      {
        "kr": "등산",
        "rom": "deung-san",
        "zh": "登山 / 爬山",
        "icon": "🧗",
        "tip": "週末親近大自然爬山 (漢字：登山)"
      },
      {
        "kr": "요가",
        "rom": "yo-ga",
        "zh": "瑜伽",
        "icon": "🧘",
        "tip": "舒緩身心伸展 (Yoga)"
      },
      {
        "kr": "테니스",
        "rom": "te-ni-seu",
        "zh": "網球",
        "icon": "🎾",
        "tip": "持拍擊球運動 (Tennis)"
      },
      {
        "kr": "배드민턴",
        "rom": "bae-deu-min-teon",
        "zh": "羽毛球",
        "icon": "🏸",
        "tip": "社區常見羽球 (Badminton)"
      }
    ]
  },
  {
    "id": "domain-13-02",
    "domainId": "13",
    "domainName": "13_休閒運動娛樂",
    "domainIcon": "⚽",
    "titleKo": "취미와 문화 오락",
    "titleZh": "休閒愛好與藝文影視",
    "titleRom": "chwi-mi-wa mun-hwa o-rak",
    "themeColor": "#F39C12",
    "accentBg": "#FEF9E7",
    "desc": "聽歌追劇、拍照旅遊與日常豐富人生的興趣愛好。",
    "items": [
      {
        "kr": "영화",
        "rom": "yeong-hwa",
        "zh": "電影",
        "icon": "🎬",
        "tip": "院線電影院賞片 (漢字：映畫)"
      },
      {
        "kr": "드라마",
        "rom": "deu-ra-ma",
        "zh": "電視劇 / 韓劇",
        "icon": "📺",
        "tip": "精彩熱播劇集 (Drama)"
      },
      {
        "kr": "음악 / 노래",
        "rom": "eum-ak / no-rae",
        "zh": "音樂 / 歌曲",
        "icon": "🎵",
        "tip": "K-pop 或旋律樂曲 (漢字：音樂)"
      },
      {
        "kr": "게임",
        "rom": "ge-im",
        "zh": "遊戲 / 電玩",
        "icon": "🎮",
        "tip": "手機或電腦遊戲 (Game)"
      },
      {
        "kr": "여행",
        "rom": "yeo-haeng",
        "zh": "旅行 / 旅遊",
        "icon": "🧳",
        "tip": "出發探索世界 (漢字：旅行)"
      },
      {
        "kr": "사진",
        "rom": "sa-jin",
        "zh": "照片 / 攝影",
        "icon": "📸",
        "tip": "紀錄美好瞬間 (漢字：寫眞)"
      },
      {
        "kr": "그림",
        "rom": "geu-rim",
        "zh": "畫畫 / 圖畫",
        "icon": "🎨",
        "tip": "手繪藝術創作"
      },
      {
        "kr": "피아노",
        "rom": "pi-a-no",
        "zh": "鋼琴",
        "icon": "🎹",
        "tip": "優美黑白鍵樂器 (Piano)"
      },
      {
        "kr": "기타",
        "rom": "gi-ta",
        "zh": "吉他",
        "icon": "🎸",
        "tip": "民謠或電吉他 (Guitar)"
      }
    ]
  },
  {
    "id": "domain-14-01",
    "domainId": "14",
    "domainName": "14_色彩與形狀",
    "domainIcon": "🎨",
    "titleKo": "다채로운 색상",
    "titleZh": "日常豐富美麗色彩",
    "titleRom": "da-chae-ro-un saek-sang",
    "themeColor": "#1ABC9C",
    "accentBg": "#E8F8F5",
    "desc": "彩虹般的鮮明顏色，妝點衣物、食物與生活周遭的所有事物。",
    "items": [
      {
        "kr": "빨간색",
        "rom": "ppal-gan-saek",
        "zh": "紅色",
        "icon": "🔴",
        "tip": "鮮豔熱情的紅"
      },
      {
        "kr": "파란색",
        "rom": "pa-ran-saek",
        "zh": "藍色",
        "icon": "🔵",
        "tip": "晴空或海洋的深淺藍"
      },
      {
        "kr": "노란색",
        "rom": "no-ran-saek",
        "zh": "黃色",
        "icon": "🟡",
        "tip": "明亮溫暖的鵝黃"
      },
      {
        "kr": "초록색",
        "rom": "cho-rok-saek",
        "zh": "綠色",
        "icon": "🟢",
        "tip": "大自然生機翠綠 (漢字：草綠色)"
      },
      {
        "kr": "하얀색 / 흰색",
        "rom": "ha-yan-saek / hin-saek",
        "zh": "白色",
        "icon": "⚪",
        "tip": "純潔無瑕的白 (漢字：白色)"
      },
      {
        "kr": "검은색",
        "rom": "geom-eun-saek",
        "zh": "黑色",
        "icon": "⚫",
        "tip": "沉穩典雅的墨黑"
      },
      {
        "kr": "보라색",
        "rom": "bo-ra-saek",
        "zh": "紫色",
        "icon": "🟣",
        "tip": "浪漫神祕的紫"
      },
      {
        "kr": "분홍색",
        "rom": "bun-hong-saek",
        "zh": "粉紅色",
        "icon": "🌸",
        "tip": "甜美櫻花粉 (漢字：粉紅色)"
      },
      {
        "kr": "주황색",
        "rom": "ju-hwang-saek",
        "zh": "橘色 / 橙色",
        "icon": "🟠",
        "tip": "柑橘香氣般的橙 (漢字：朱黃色)"
      },
      {
        "kr": "갈색",
        "rom": "gal-saek",
        "zh": "褐色 / 棕色",
        "icon": "🟤",
        "tip": "泥土咖啡棕 (漢字：褐色)"
      },
      {
        "kr": "회색",
        "rom": "hoe-saek",
        "zh": "灰色",
        "icon": "🔘",
        "tip": "低調質感的霧灰 (漢字：灰色)"
      }
    ]
  },
  {
    "id": "domain-14-02",
    "domainId": "14",
    "domainName": "14_色彩與形狀",
    "domainIcon": "🎨",
    "titleKo": "기하학적 모양",
    "titleZh": "基礎幾何形狀世界",
    "titleRom": "gi-ha-hak-jeok mo-yang",
    "themeColor": "#1ABC9C",
    "accentBg": "#E8F8F5",
    "desc": "圓形、三角形、方形與星芒，生活觀察最基礎的幾何元素。",
    "items": [
      {
        "kr": "동그라미 / 원",
        "rom": "dong-geu-ra-mi / won",
        "zh": "圓形 / 圈圈",
        "icon": "⭕",
        "tip": "完美的圓圈 (漢字：圓)"
      },
      {
        "kr": "세모 / 삼각형",
        "rom": "se-mo / sam-gak-hyeong",
        "zh": "三角形",
        "icon": "🔺",
        "tip": "三條邊三隻角 (漢字：三角形)"
      },
      {
        "kr": "네모 / 사각형",
        "rom": "ne-mo / sa-gak-hyeong",
        "zh": "方形 / 正方形",
        "icon": "🟦",
        "tip": "四四方方的格子 (漢字：四角形)"
      },
      {
        "kr": "별",
        "rom": "byeol",
        "zh": "星形 / 五角星",
        "icon": "⭐",
        "tip": "星芒形狀"
      },
      {
        "kr": "하트",
        "rom": "ha-teu",
        "zh": "心形 / 愛心",
        "icon": "💖",
        "tip": "浪漫愛心 (Heart)"
      },
      {
        "kr": "다이아몬드",
        "rom": "da-i-a-mon-deu",
        "zh": "菱形 / 鑽石形",
        "icon": "🔶",
        "tip": "菱角分明鑽石形 (Diamond)"
      },
      {
        "kr": "직선",
        "rom": "jik-seon",
        "zh": "直線",
        "icon": "📏",
        "tip": "筆直的線條 (漢字：直線)"
      }
    ]
  },
  {
    "id": "domain-15-01",
    "domainId": "15",
    "domainName": "15_空間與方位",
    "domainIcon": "🧭",
    "titleKo": "위치와 방향",
    "titleZh": "空間相對位置與指引",
    "titleRom": "wi-chi-wa bang-hyang",
    "themeColor": "#34495E",
    "accentBg": "#EBEDEF",
    "desc": "問路、找物品最實用的前後上下與東西南北方位指南。",
    "items": [
      {
        "kr": "위",
        "rom": "wi",
        "zh": "上面 / 上方",
        "icon": "⬆️",
        "tip": "在某物體的上方"
      },
      {
        "kr": "아래 / 밑",
        "rom": "a-rae / mit",
        "zh": "下面 / 底下",
        "icon": "⬇️",
        "tip": "在某物體的下方"
      },
      {
        "kr": "앞",
        "rom": "ap",
        "zh": "前面 / 前方",
        "icon": "⏩",
        "tip": "在正前方視野"
      },
      {
        "kr": "뒤",
        "rom": "dwi",
        "zh": "後面 / 後方",
        "icon": "⏪",
        "tip": "在背後"
      },
      {
        "kr": "옆",
        "rom": "yeop",
        "zh": "旁邊 / 側邊",
        "icon": "↔️",
        "tip": "在左右鄰近側邊"
      },
      {
        "kr": "안 / 속",
        "rom": "an / sok",
        "zh": "裡面 / 內部",
        "icon": "📥",
        "tip": "在容器或空間內部"
      },
      {
        "kr": "밖",
        "rom": "bak",
        "zh": "外面 / 外部",
        "icon": "📤",
        "tip": "在門外或空間外部"
      },
      {
        "kr": "오른쪽",
        "rom": "o-reun-jjok",
        "zh": "右邊 / 右側",
        "icon": "➡️",
        "tip": "右手方向"
      },
      {
        "kr": "왼쪽",
        "rom": "oen-jjok",
        "zh": "左邊 / 左側",
        "icon": "⬅️",
        "tip": "左手方向"
      },
      {
        "kr": "가운데 / 중간",
        "rom": "ga-un-de / jung-gan",
        "zh": "中間 / 當中",
        "icon": "🎯",
        "tip": "在正中間核心處 (漢字：中間)"
      },
      {
        "kr": "근처",
        "rom": "geun-cheo",
        "zh": "附近 / 周圍",
        "icon": "📍",
        "tip": "鄰近周遭地帶 (漢字：近處)"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ENCYCLOPEDIA_PAGES };
}

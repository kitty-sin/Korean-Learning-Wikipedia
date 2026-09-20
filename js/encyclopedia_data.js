/**
 * 韓語圖解百科全書核心資料庫 (Korean Visual Encyclopedia Master Data)
 * 嚴格遵循：清晰圖像、純繁體中文解釋、韓文大字、羅馬拼音、發音標籤、每頁適中留白
 */

const ENCYCLOPEDIA_PAGES = [
  // ==========================================
  // PAGE 01: 時間與星期 (Days of the Week / 요일과 시간)
  // ==========================================
  {
    id: "page-01",
    titleKo: "요일과 시간",
    titleZh: "時間與星期日曆",
    titleRom: "yoil-gwa sigan",
    category: "01_時間與日期",
    categoryIcon: "📅",
    themeColor: "#4A90E2",
    accentBg: "#F0F7FF",
    description: "韓國一週七天以古代「日、月、五行（火水木金土）」命名，搭配常見年週時間座標，秒記生活實用日程！",
    layoutType: "calendar-grid",
    sections: [
      {
        sectionTitle: "📅 一週七天 (Days of the Week)",
        type: "cards-list",
        items: [
          { kr: "월요일", rom: "wol-yo-il", zh: "星期一 (週一)", icon: "🌙", tip: "月曜日 · 新一週的開始", hanja: "月曜日" },
          { kr: "화요일", rom: "hwa-yo-il", zh: "星期二 (週二)", icon: "🔥", tip: "火曜日 · 充滿幹勁的週二", hanja: "火曜日" },
          { kr: "수요일", rom: "su-yo-il", zh: "星期三 (週三)", icon: "💧", tip: "水曜日 · 一週的正中間", hanja: "水曜日" },
          { kr: "목요일", rom: "mok-yo-il", zh: "星期四 (週四)", icon: "🌲", tip: "木曜日 · 就快要放週末了", hanja: "木曜日" },
          { kr: "금요일", rom: "geum-yo-il", zh: "星期五 (週五)", icon: "✨", tip: "金曜日 · 令人期待的燃燒週五 (불금)", hanja: "金曜日" },
          { kr: "토요일", rom: "to-yo-il", zh: "星期六 (週六)", icon: "⛰️", tip: "土曜日 · 享受假期好時光", hanja: "土曜日" },
          { kr: "일요일", rom: "il-yo-il", zh: "星期日 (週日)", icon: "☀️", tip: "日曜日 · 溫暖放鬆的家庭日", hanja: "日曜日" }
        ]
      },
      {
        sectionTitle: "⏳ 常見時間座標 (Time Reference)",
        type: "pills-list",
        items: [
          { kr: "올해", rom: "ol-hae", zh: "今年", icon: "🌱", tip: "這一年" },
          { kr: "작년", rom: "jang-nyeon", zh: "去年", icon: "🍂", tip: "上一年 (漢字：去年)" },
          { kr: "내년", rom: "nae-nyeon", zh: "明年", icon: "🌸", tip: "下一年 (漢字：來年)" },
          { kr: "이번 주", rom: "i-beon ju", zh: "這週 (本週)", icon: "📍", tip: "當前這個星期" },
          { kr: "지난 주", rom: "ji-nan ju", zh: "上週", icon: "⏮️", tip: "已經過去的一週" },
          { kr: "다음 주", rom: "da-eum ju", zh: "下週", icon: "⏭️", tip: "即將到來的一週" }
        ]
      }
    ]
  },

  // ==========================================
  // PAGE 02: 人體部位與五官 (Body Parts & Face / 몸과 얼굴)
  // ==========================================
  {
    id: "page-02",
    titleKo: "몸과 얼굴",
    titleZh: "人體部位與五官容貌",
    titleRom: "mom-gwa eol-gul",
    category: "02_人體與外貌",
    categoryIcon: "👤",
    themeColor: "#E06D53",
    accentBg: "#FFF6F3",
    description: "看圖識字！從頭到腳的身體構造、面部五官與特色細節，搭配清楚的圖示，輕鬆看懂人體單字。",
    layoutType: "visual-diagram",
    sections: [
      {
        sectionTitle: "👧 臉部五官與容貌特徵 (Face)",
        type: "cards-grid-compact",
        items: [
          { kr: "눈썹", rom: "nun-sseop", zh: "眉毛", icon: "〰️", tip: "眼睛上方的眉毛" },
          { kr: "눈", rom: "nun", zh: "眼睛", icon: "👀", tip: "注意：눈 也是「雪」的意思" },
          { kr: "코", rom: "ko", zh: "鼻子", icon: "👃", tip: "嗅覺器官" },
          { kr: "입", rom: "ip", zh: "嘴巴", icon: "👄", tip: "說話、吃飯的嘴" },
          { kr: "귀", rom: "gwi", zh: "耳朵", icon: "👂", tip: "聆聽聲音" },
          { kr: "목", rom: "mok", zh: "頸部 / 喉嚨", icon: "🧣", tip: "脖子、咽喉" },
          { kr: "보조개", rom: "bo-jo-gae", zh: "酒窩", icon: "😊", tip: "笑起來臉頰凹陷的小酒窩" },
          { kr: "주름", rom: "ju-reum", zh: "皺紋", icon: "👴", tip: "皮膚褶皺" },
          { kr: "여드름", rom: "yeo-deu-reum", zh: "痘痘 (青春痘)", icon: "✨", tip: "臉部痘痘、粉刺" }
        ]
      },
      {
        sectionTitle: "🧍 身體軀幹與四肢 (Body & Limbs)",
        type: "cards-grid-compact",
        items: [
          { kr: "머리", rom: "meo-ri", zh: "頭 / 頭髮", icon: "🧠", tip: "腦袋、頭顱或頭髮" },
          { kr: "어깨", rom: "eo-kkae", zh: "肩膀", icon: "💪", tip: "雙肩" },
          { kr: "팔", rom: "pal", zh: "手臂", icon: "🦾", tip: "注意：팔 也是數字「八」" },
          { kr: "손", rom: "son", zh: "手", icon: "✋", tip: "手掌" },
          { kr: "손가락", rom: "son-ga-rak", zh: "手指", icon: "🖐️", tip: "手上的十指" },
          { kr: "가슴", rom: "ga-seum", zh: "胸膛 / 內心", icon: "🫀", tip: "胸口，亦常借指心靈" },
          { kr: "허리", rom: "heo-ri", zh: "腰部", icon: "🥋", tip: "身體腰部" },
          { kr: "다리", rom: "da-ri", zh: "腿", icon: "🦵", tip: "注意：다리 也是「橋樑」" },
          { kr: "무릎", rom: "mu-reup", zh: "膝蓋", icon: "🧎", tip: "腿部關節" },
          { kr: "발", rom: "bal", zh: "腳 (足)", icon: "🦶", tip: "走路的腳掌" },
          { kr: "발가락", rom: "bal-ga-rak", zh: "腳趾", icon: "👣", tip: "腳部的五指" }
        ]
      }
    ]
  },

  // ==========================================
  // PAGE 03: 家族親屬稱謂 (Family / 가족)
  // ==========================================
  {
    id: "page-03",
    titleKo: "가족",
    titleZh: "家族親屬與男女稱謂",
    titleRom: "ga-jok",
    category: "03_家族親屬",
    categoryIcon: "👨‍👩‍👧‍👦",
    themeColor: "#8E44AD",
    accentBg: "#F9F0FC",
    description: "韓國文化中極度重視長幼稱謂！特別是叫哥哥與姊姊，男生與女生的叫法完全不同，一張圖徹底搞懂！",
    layoutType: "family-tree",
    sections: [
      {
        sectionTitle: "👵 祖父母長輩輩分",
        type: "cards-grid-compact",
        items: [
          { kr: "친할아버지", rom: "chin-hal-a-beo-ji", zh: "親爺爺 (父系祖父)", icon: "👴", tip: "爸爸的父親" },
          { kr: "친할머니", rom: "chin-hal-meo-ni", zh: "親奶奶 (父系祖母)", icon: "👵", tip: "爸爸的母親" },
          { kr: "외할아버지", rom: "oe-hal-a-beo-ji", zh: "外公 (母系外祖父)", icon: "👴🏼", tip: "媽媽的父親" },
          { kr: "외할머니", rom: "oe-hal-meo-ni", zh: "外婆 (母系外祖母)", icon: "👵🏼", tip: "媽媽的母親" }
        ]
      },
      {
        sectionTitle: "👨‍👩‍👦 父母與核心家人",
        type: "cards-grid-compact",
        items: [
          { kr: "아버지 / 아빠", rom: "a-beo-ji / a-ppa", zh: "父親 / 爸爸", icon: "👨", tip: "正式尊稱 아버지，親切口語 아빠" },
          { kr: "어머니 / 엄마", rom: "eo-meo-ni / eom-ma", zh: "母親 / 媽媽", icon: "👩", tip: "正式尊稱 어머니，親切口語 엄마" },
          { kr: "아들", rom: "a-deul", zh: "兒子", icon: "👦", tip: "自己的男兒" },
          { kr: "딸", rom: "ttal", zh: "女兒", icon: "👧", tip: "自己的愛女" }
        ]
      },
      {
        sectionTitle: "⚡ 兄弟姊妹：男稱 vs 女稱大不同（韓流必備！）",
        type: "comparison-box",
        items: [
          {
            label: "女生稱呼 (Female POV)",
            items: [
              { kr: "오빠", rom: "o-ppa", zh: "哥哥 (女稱)", icon: "🌟", tip: "女性叫年長男性哥哥/學長/男友" },
              { kr: "언니", rom: "eon-ni", zh: "姊姊 (女稱)", icon: "🎀", tip: "女性叫年長女性姊姊/學姊" }
            ]
          },
          {
            label: "男生稱呼 (Male POV)",
            items: [
              { kr: "형", rom: "hyeong", zh: "哥哥 (男稱)", icon: "🧢", tip: "男性叫年長男性哥哥/學長" },
              { kr: "누나", rom: "nu-na", zh: "姊姊 (男稱)", icon: "👒", tip: "男性叫年長女性姊姊/學姊" }
            ]
          },
          {
            label: "男女通用稱呼",
            items: [
              { kr: "남동생", rom: "nam-dong-saeng", zh: "弟弟", icon: "🧒", tip: "年幼的男性手足" },
              { kr: "여동생", rom: "yeo-dong-saeng", zh: "妹妹", icon: "👧", tip: "年幼的女性手足" }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================
  // PAGE 04: 美妝彩妝與護膚保養 (Makeup & Skincare)
  // ==========================================
  {
    id: "page-04",
    titleKo: "화장품과 스킨케어",
    titleZh: "美妝彩妝與護膚保養",
    titleRom: "hwa-jang-pum-gwa seu-kin-ke-eo",
    category: "04_美妝護膚",
    categoryIcon: "💄",
    themeColor: "#E91E63",
    accentBg: "#FFF0F5",
    description: "去韓國 Olive Young 逛街必備寶典！涵蓋化妝保養完整步驟與彩妝單品，韓妞必備術語全收錄。",
    layoutType: "beauty-showcase",
    sections: [
      {
        sectionTitle: "🧴 基礎護膚步驟單元 (Skin Care)",
        type: "cards-grid-compact",
        items: [
          { kr: "토너", rom: "to-neo", zh: "化妝水 (爽膚水)", icon: "💧", tip: "清潔後的保濕第一步 (Toner)" },
          { kr: "세럼", rom: "se-reom", zh: "精華液", icon: "🧪", tip: "高濃度修護 (Serum)" },
          { kr: "에센스", rom: "e-sen-seu", zh: "精華露", icon: "✨", tip: "輕盈水潤精華 (Essence)" },
          { kr: "크림", rom: "keu-rim", zh: "面霜 / 乳霜", icon: "🧴", tip: "鎖水修護 (Cream)" },
          { kr: "마스크팩", rom: "ma-seu-keu-paek", zh: "面膜", icon: "🧖‍♀️", tip: "日常必敷保濕片狀面膜 (Mask Pack)" },
          { kr: "미스트", rom: "mi-seu-teu", zh: "保濕噴霧", icon: "💨", tip: "隨身補水噴霧 (Mist)" },
          { kr: "클렌저", rom: "keul-len-jeo", zh: "洗面乳 / 潔顏乳", icon: "🫧", tip: "臉部溫和清潔 (Cleanser)" },
          { kr: "오일", rom: "o-il", zh: "護膚油 / 卸妝油", icon: "🫒", tip: "滋潤精油或深層卸妝油 (Oil)" }
        ]
      },
      {
        sectionTitle: "💋 彩妝化妝包單品 (Makeup)",
        type: "cards-grid-compact",
        items: [
          { kr: "파운데이션", rom: "pa-un-de-i-syeon", zh: "粉底液", icon: "🧫", tip: "底妝粉底 (Foundation)" },
          { kr: "쿠션", rom: "ku-syeon", zh: "氣墊粉餅", icon: "🪞", tip: "韓系隨身氣墊 (Cushion Foundation)" },
          { kr: "컨실러", rom: "keon-sil-leo", zh: "遮瑕膏", icon: "🖌️", tip: "修飾斑點黑眼圈 (Concealer)" },
          { kr: "파우더", rom: "pa-u-deo", zh: "蜜粉 / 定妝散粉", icon: "🧁", tip: "吸油控油定妝 (Powder)" },
          { kr: "쉐이딩", rom: "swae-i-ding", zh: "修容 / 陰影粉", icon: "🎨", tip: "打造立體小臉輪廓 (Contour/Shading)" },
          { kr: "섀도우", rom: "syae-do-u", zh: "眼影", icon: "👁️", tip: "眼妝色彩盤 (Eye Shadow)" },
          { kr: "아이라이너", rom: "a-i-ra-i-neo", zh: "眼線筆", icon: "✏️", tip: "勾勒迷人眼神 (Eyeliner)" },
          { kr: "마스카라", rom: "ma-seu-ka-ra", zh: "睫毛膏", icon: "👀", tip: "纖長捲翹睫毛 (Mascara)" },
          { kr: "볼터치", rom: "bol-teo-chi", zh: "腮紅 (胭脂)", icon: "🌸", tip: "雙頰好氣色 (Blusher / 볼터치)" },
          { kr: "틴트", rom: "tin-teu", zh: "唇釉 / 染唇露", icon: "💄", tip: "韓系持久果凍唇彩 (Lip Tint)" },
          { kr: "립스틱", rom: "rip-seu-tik", zh: "口紅 / 唇膏", icon: "💋", tip: "經典膏狀唇彩 (Lipstick)" }
        ]
      }
    ]
  },

  // ==========================================
  // PAGE 05: 逛街購物與隨身配件 (Shopping & Accessories)
  // ==========================================
  {
    id: "page-05",
    titleKo: "쇼핑과 악세사리",
    titleZh: "逛街購物與隨身配件",
    titleRom: "syo-ping-gwa ak-se-sa-ri",
    category: "05_逛街與配件",
    categoryIcon: "🛍️",
    themeColor: "#FF9800",
    accentBg: "#FFF8E7",
    description: "去明洞、弘大或聖水洞血拼逛街必用詞彙！收錄支付交易常用語、飾品珠寶與隨身實用小物。",
    layoutType: "shopping-bag",
    sections: [
      {
        sectionTitle: "💳 結帳交易實用詞彙 (Shopping & Pay)",
        type: "cards-grid-compact",
        items: [
          { kr: "돈", rom: "don", zh: "錢 (金錢)", icon: "💰", tip: "日常貨幣" },
          { kr: "현금", rom: "hyeon-geum", zh: "現金", icon: "💵", tip: "紙幣硬幣 (漢字：現金)" },
          { kr: "신용카드", rom: "sin-yong-ka-deu", zh: "信用卡", icon: "💳", tip: "刷卡付款 (Credit Card)" },
          { kr: "계산", rom: "gye-san", zh: "結帳 / 買單", icon: "🧾", tip: "「계산해 주세요」請幫我結帳" },
          { kr: "할인", rom: "har-in", zh: "折扣 / 打折", icon: "🏷️", tip: "優惠減價 (漢字：割引)" },
          { kr: "가격", rom: "ga-gyeok", zh: "價格 / 價錢", icon: "💲", tip: "商品售價 (漢字：價格)" },
          { kr: "영수증", rom: "yeong-su-jeung", zh: "發票 / 收據", icon: "📄", tip: "「영수증 버려주세요」收據幫我丟掉即可" },
          { kr: "교환", rom: "gyo-hwan", zh: "換貨 (退換)", icon: "🔄", tip: "更換尺寸或款式 (漢字：交換)" },
          { kr: "환불", rom: "hwan-bul", zh: "退款 (退錢)", icon: "↩️", tip: "退還貨款 (漢字：換拂)" },
          { kr: "쇼핑백", rom: "syo-ping-baek", zh: "購物袋 / 紙袋", icon: "🛍️", tip: "裝商品的袋子 (Shopping Bag)" },
          { kr: "점원", rom: "jeom-won", zh: "店員 / 銷售員", icon: "🧑‍💼", tip: "門市服務人員 (漢字：店員)" },
          { kr: "탈의실", rom: "tal-ui-sil", zh: "試衣間 / 更衣室", icon: "🚪", tip: "試穿衣物的地方 (漢字：脫衣室)" }
        ]
      },
      {
        sectionTitle: "👜 隨身流行配件 (Accessories)",
        type: "cards-grid-compact",
        items: [
          { kr: "손목시계", rom: "son-mok-si-gye", zh: "手錶 (腕錶)", icon: "⌚", tip: "戴在手腕上的時鐘" },
          { kr: "가방", rom: "ga-bang", zh: "包包 / 提袋", icon: "👜", tip: "外出提包、背包" },
          { kr: "우산", rom: "u-san", zh: "雨傘", icon: "☂️", tip: "下雨天隨身攜帶" },
          { kr: "모자", rom: "mo-ja", zh: "帽子", icon: "🧢", tip: "鴨舌帽、漁夫帽" },
          { kr: "향수", rom: "hyang-su", zh: "香水", icon: "🧴", tip: "散發芬芳香氣 (漢字：香水)" },
          { kr: "스카프", rom: "seu-ka-peu", zh: "圍巾 / 絲巾", icon: "🧣", tip: "防風保暖絲巾 (Scarf)" },
          { kr: "벨트", rom: "bel-teu", zh: "皮帶 / 腰帶", icon: "🥋", tip: "褲裝皮帶 (Belt)" },
          { kr: "안경", rom: "an-gyeong", zh: "眼鏡", icon: "👓", tip: "光學眼鏡 (漢字：眼鏡)" },
          { kr: "선글라스", rom: "seon-geul-ra-seu", zh: "太陽眼鏡 (墨鏡)", icon: "🕶️", tip: "遮陽時尚墨鏡 (Sunglasses)" }
        ]
      },
      {
        sectionTitle: "💍 珠寶首飾與貴金屬 (Jewelry)",
        type: "cards-grid-compact",
        items: [
          { kr: "귀걸이", rom: "gwi-geol-i", zh: "耳環", icon: "✨", tip: "掛在耳朵上的飾品" },
          { kr: "반지", rom: "ban-ji", zh: "戒指", icon: "💍", tip: "戴在手指上的戒圈" },
          { kr: "목걸이", rom: "mok-geol-i", zh: "項鍊", icon: "📿", tip: "掛在頸部的飾物" },
          { kr: "팔찌", rom: "pal-jji", zh: "手鍊 / 手鐲", icon: "💫", tip: "手腕手鐲" },
          { kr: "금", rom: "geum", zh: "黃金", icon: "🥇", tip: "貴金屬黃金" },
          { kr: "은", rom: "eun", zh: "白銀", icon: "🥈", tip: "貴金屬白銀" },
          { kr: "진주", rom: "jin-ju", zh: "珍珠", icon: "🦪", tip: "優雅珍珠" },
          { kr: "다이아몬드", rom: "da-i-a-mon-deu", zh: "鑽石", icon: "💎", tip: "閃爍鑽石 (Diamond)" }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ENCYCLOPEDIA_PAGES };
}

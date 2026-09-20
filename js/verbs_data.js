/**
 * 韓語圖解生活動詞百科全書資料集 (Korean Visual Verb Encyclopedia Master Data)
 * 涵蓋 12 大動作生活領域、精選單元頁、100+ 高頻日常動詞！
 * 嚴格遵循：清晰圖像、純繁體中文解釋、韓文原形、日常해요體變形、實用生活搭配句與真人發音。
 */

const VERB_ENCYCLOPEDIA_PAGES = [
  {
    "id": "verb-01-01",
    "domainId": "v01",
    "domainName": "01_日常起居作息",
    "domainIcon": "⏰",
    "titleKo": "하루의 시작과 일상",
    "titleZh": "一日作息與早晚動作",
    "titleRom": "ha-ru-ui si-jak-gwa il-sang",
    "themeColor": "#FF5E86",
    "accentBg": "#FFEBF0",
    "desc": "從早晨睜開眼睛到晚上入睡，天天都在做的高頻起居動作。",
    "items": [
      {
        "kr": "일어나다",
        "rom": "i-reo-na-da",
        "haeyo": "일어나요",
        "zh": "起床 / 站起來",
        "icon": "🥱",
        "tip": "해요體: 일어나요 · 例: 아침에 일찍 일어나요 (早上早起)"
      },
      {
        "kr": "자다",
        "rom": "ja-da",
        "haeyo": "자요",
        "zh": "睡覺 / 入睡",
        "icon": "😴",
        "tip": "해요體: 자요 · 敬語: 주무시다 · 例: 잘 자요 (晚安)"
      },
      {
        "kr": "씻다",
        "rom": "ssit-da",
        "haeyo": "씻어요",
        "zh": "洗臉 / 洗滌",
        "icon": "🫧",
        "tip": "해요體: 씻어요 · 例: 손을 깨끗이 씻어요 (把手洗乾淨)"
      },
      {
        "kr": "눕다",
        "rom": "nup-da",
        "haeyo": "누워요",
        "zh": "躺下 / 橫躺",
        "icon": "🛌",
        "tip": "해요體: 누워요 (ㅂ不規則) · 例: 침대에 누워요 (躺在床上)"
      },
      {
        "kr": "쉬다",
        "rom": "swi-da",
        "haeyo": "쉬어요",
        "zh": "休息 / 放鬆",
        "icon": "🛋️",
        "tip": "해요體: 쉬어요 · 例: 집에서 푹 쉬어요 (在家好好休息)"
      },
      {
        "kr": "준비하다",
        "rom": "jun-bi-ha-da",
        "haeyo": "준비해요",
        "zh": "準備 / 預備",
        "icon": "🎒",
        "tip": "해요體: 준비해요 · 例: 나갈 준비를 해요 (準備出門)"
      },
      {
        "kr": "나가다",
        "rom": "na-ga-da",
        "haeyo": "나가요",
        "zh": "出門 / 出去",
        "icon": "🚪",
        "tip": "해요體: 나가요 · 例: 밖으로 나가요 (走到外面去)"
      },
      {
        "kr": "들어오다",
        "rom": "deul-eo-o-da",
        "haeyo": "들어와요",
        "zh": "回家 / 進來",
        "icon": "🏡",
        "tip": "해요體: 들어와요 · 例: 집에 들어와요 (進到家裡)"
      }
    ]
  },
  {
    "id": "verb-02-01",
    "domainId": "v02",
    "domainName": "02_飲食烹飪動作",
    "domainIcon": "🍽️",
    "titleKo": "식사와 요리 동작",
    "titleZh": "餐桌進食與烹飪下廚",
    "titleRom": "sik-sa-wa yo-ri dong-jak",
    "themeColor": "#FF9800",
    "accentBg": "#FFF8E7",
    "desc": "一日三餐、下館子點菜與烹煮美味韓食必備動詞。",
    "items": [
      {
        "kr": "먹다",
        "rom": "meok-da",
        "haeyo": "먹어요",
        "zh": "吃 (進食)",
        "icon": "😋",
        "tip": "해요體: 먹어요 · 尊稱: 드시다 · 例: 밥을 맛있게 먹어요"
      },
      {
        "kr": "마시다",
        "rom": "ma-si-da",
        "haeyo": "마셔요",
        "zh": "喝 / 飲用",
        "icon": "☕",
        "tip": "해요體: 마셔요 · 例: 시원한 물을 마셔요 (喝涼水)"
      },
      {
        "kr": "씹다",
        "rom": "ssip-da",
        "haeyo": "씹어요",
        "zh": "咀嚼 / 咬",
        "icon": "🥪",
        "tip": "해요體: 씹어요 · 例: 꼭꼭 씹어 먹어요 (細嚼慢嚥)"
      },
      {
        "kr": "요리하다",
        "rom": "yo-ri-ha-da",
        "haeyo": "요리해요",
        "zh": "做飯 / 烹飪",
        "icon": "🍳",
        "tip": "해요體: 요리해요 · 例: 한국 음식을 요리해요 (煮韓式料理)"
      },
      {
        "kr": "굽다",
        "rom": "gup-da",
        "haeyo": "구워요",
        "zh": "烤 / 煎",
        "icon": "🥩",
        "tip": "해요體: 구워요 (ㅂ不規則) · 例: 삼겹살을 구워요 (烤五花肉)"
      },
      {
        "kr": "끓이다",
        "rom": "kkeul-i-da",
        "haeyo": "끓여요",
        "zh": "煮 / 熬湯",
        "icon": "🍲",
        "tip": "해요體: 끓여요 · 例: 라면을 끓여요 (煮泡麵)"
      },
      {
        "kr": "볶다",
        "rom": "bok-da",
        "haeyo": "볶아요",
        "zh": "炒 (熱炒)",
        "icon": "🥘",
        "tip": "해요體: 볶아요 · 例: 김치볶음밥을 볶아요 (炒泡菜炒飯)"
      },
      {
        "kr": "자르다",
        "rom": "ja-reu-da",
        "haeyo": "잘라요",
        "zh": "切 / 剪開",
        "icon": "✂️",
        "tip": "해요體: 잘라요 (르不規則) · 例: 고기를 가위로 잘라요 (剪肉)"
      }
    ]
  },
  {
    "id": "verb-03-01",
    "domainId": "v03",
    "domainName": "03_交通出行移動",
    "domainIcon": "🚗",
    "titleKo": "이동과 대중교통",
    "titleZh": "行走移動與搭車乘位",
    "titleRom": "i-dong-gwa dae-jung-gyo-tong",
    "themeColor": "#16A085",
    "accentBg": "#E8F8F5",
    "desc": "去韓國旅遊問路、搭地鐵公車必備位移動詞。",
    "items": [
      {
        "kr": "가다",
        "rom": "ga-da",
        "haeyo": "가요",
        "zh": "去 / 走",
        "icon": "🚶‍♂️",
        "tip": "해요體: 가요 · 例: 학교에 가요 (去學校)"
      },
      {
        "kr": "오다",
        "rom": "o-da",
        "haeyo": "와요",
        "zh": "來",
        "icon": "🏃‍♂️",
        "tip": "해요體: 와요 · 例: 친구가 집에 와요 (朋友來家裡)"
      },
      {
        "kr": "걷다",
        "rom": "geot-da",
        "haeyo": "걸어요",
        "zh": "走路 / 步行",
        "icon": "🚶‍♀️",
        "tip": "해요體: 걸어요 (ㄷ不規則) · 例: 공원을 걸어요 (在公園散步)"
      },
      {
        "kr": "달리다 / 뛰다",
        "rom": "dal-li-da / ttwi-da",
        "haeyo": "달려요 / 뛰어요",
        "zh": "奔跑 / 跳躍",
        "icon": "🏃",
        "tip": "해요體: 달려요 · 例: 버스를 타려고 뛰어요 (趕公車跑起來)"
      },
      {
        "kr": "타다",
        "rom": "ta-da",
        "haeyo": "타요",
        "zh": "搭乘 (車/船/飛機)",
        "icon": "🚇",
        "tip": "해요體: 타요 · 例: 지하철을 타요 (搭地鐵)"
      },
      {
        "kr": "내리다",
        "rom": "nae-ri-da",
        "haeyo": "내려요",
        "zh": "下車",
        "icon": "🚉",
        "tip": "해요體: 내려요 · 例: 이번 역에서 내려요 (在這站下車)"
      },
      {
        "kr": "갈아타다",
        "rom": "gar-a-ta-da",
        "haeyo": "갈아타요",
        "zh": "換乘 / 轉車",
        "icon": "🔄",
        "tip": "해요體: 갈아타요 · 例: 2호선으로 갈아타요 (轉乘2號線)"
      },
      {
        "kr": "도착하다",
        "rom": "do-chak-ha-da",
        "haeyo": "도착해요",
        "zh": "到達 / 抵達",
        "icon": "🏁",
        "tip": "해요體: 도착해요 · 例: 서울에 도착해요 (抵達首爾)"
      }
    ]
  },
  {
    "id": "verb-04-01",
    "domainId": "v04",
    "domainName": "04_逛街購物消費",
    "domainIcon": "🛍️",
    "titleKo": "쇼핑과 결제 동작",
    "titleZh": "買賣選購與結帳交易",
    "titleRom": "syo-ping-gwa gyeol-je dong-jak",
    "themeColor": "#FF5E86",
    "accentBg": "#FFEBF0",
    "desc": "在東大門、弘大血拼時必用的挑選、試穿與買單動作。",
    "items": [
      {
        "kr": "사다",
        "rom": "sa-da",
        "haeyo": "사요",
        "zh": "買 / 購買",
        "icon": "🛒",
        "tip": "해요體: 사요 · 例: 예쁜 옷을 사요 (買漂亮衣服)"
      },
      {
        "kr": "팔다",
        "rom": "pal-da",
        "haeyo": "팔아요",
        "zh": "賣 / 販售",
        "icon": "🏷️",
        "tip": "해요體: 팔아요 · 例: 과일을 싸게 팔아요 (便宜賣水果)"
      },
      {
        "kr": "고르다",
        "rom": "go-reu-da",
        "haeyo": "골라요",
        "zh": "挑選 / 選擇",
        "icon": "👉",
        "tip": "해요體: 골라요 (르不規則) · 例: 마음에 드는 것을 골라요"
      },
      {
        "kr": "입어보다",
        "rom": "ib-eo-bo-da",
        "haeyo": "입어봐요",
        "zh": "試穿 (衣服)",
        "icon": "👗",
        "tip": "해요體: 입어봐요 · 例: 이거 입어봐도 돼요? (我可以試穿這個嗎?)"
      },
      {
        "kr": "신어보다",
        "rom": "sin-eo-bo-da",
        "haeyo": "신어봐요",
        "zh": "試穿 (鞋子)",
        "icon": "👟",
        "tip": "해요體: 신어봐요 · 例: 이 신발 신어봐요 (試穿這雙鞋)"
      },
      {
        "kr": "계산하다",
        "rom": "gye-san-ha-da",
        "haeyo": "계산해요",
        "zh": "結帳 / 買單",
        "icon": "💳",
        "tip": "해요體: 계산해요 · 例: 카드로 계산해요 (用信用卡結帳)"
      },
      {
        "kr": "주문하다",
        "rom": "ju-mun-ha-da",
        "haeyo": "주문해요",
        "zh": "點餐 / 訂購",
        "icon": "📝",
        "tip": "해요體: 주문해요 · 例: 커피 두 잔 주문해요 (點兩杯咖啡)"
      },
      {
        "kr": "환불하다",
        "rom": "hwan-bul-ha-da",
        "haeyo": "환불해요",
        "zh": "退款 / 退錢",
        "icon": "↩️",
        "tip": "해요體: 환불해요 · 例: 영수증으로 환불해요 (憑發票退款)"
      }
    ]
  },
  {
    "id": "verb-05-01",
    "domainId": "v05",
    "domainName": "05_穿戴裝扮動作",
    "domainIcon": "👗",
    "titleKo": "입고 꾸미는 동작",
    "titleZh": "韓語特色穿戴部位專屬詞",
    "titleRom": "ip-go kku-mi-neun dong-jak",
    "themeColor": "#9C27B0",
    "accentBg": "#FBF0FF",
    "desc": "韓語穿戴動詞超精準！穿衣服、套鞋子、戴帽子用詞完全不同！",
    "items": [
      {
        "kr": "입다",
        "rom": "ip-da",
        "haeyo": "입어요",
        "zh": "穿 (衣服 / 褲子 / 裙子)",
        "icon": "👕",
        "tip": "穿身體上著下著 · 例: 따뜻한 코트를 입어요 (穿大衣)"
      },
      {
        "kr": "신다",
        "rom": "sin-da",
        "haeyo": "신어요",
        "zh": "穿 (鞋子 / 襪子)",
        "icon": "👞",
        "tip": "套在雙腳上的 · 例: 편한 운동화를 신어요 (穿運動鞋)"
      },
      {
        "kr": "쓰다",
        "rom": "sseu-da",
        "haeyo": "써요",
        "zh": "戴 (帽子 / 眼鏡 / 撐傘)",
        "icon": "🧢",
        "tip": "戴在頭部臉上 · 例: 예쁜 모자를 써요 (戴帽子)"
      },
      {
        "kr": "끼다",
        "rom": "kki-da",
        "haeyo": "껴요",
        "zh": "戴 (手套 / 戒指)",
        "icon": "💍",
        "tip": "套進手指/手掌 · 例: 반지를 손가락에 껴요 (戴戒指)"
      },
      {
        "kr": "차다",
        "rom": "cha-da",
        "haeyo": "차요",
        "zh": "戴 (手錶 / 腳鍊)",
        "icon": "⌚",
        "tip": "扣在手腕上 · 例: 손목시계를 차요 (戴手錶)"
      },
      {
        "kr": "매다",
        "rom": "mae-da",
        "haeyo": "매요",
        "zh": "繫 (領帶 / 絲巾 / 鞋帶)",
        "icon": "🧣",
        "tip": "繫綁打結 · 例: 목도리를 따뜻하게 매요 (繫圍巾)"
      },
      {
        "kr": "바르다",
        "rom": "ba-reu-da",
        "haeyo": "발라요",
        "zh": "塗抹 (護膚品 / 口紅)",
        "icon": "💄",
        "tip": "塗在肌膚唇上 · 例: 립스틱을 예쁘게 발라요 (塗口紅)"
      },
      {
        "kr": "벗다",
        "rom": "beot-da",
        "haeyo": "벗어요",
        "zh": "脫下 (衣物 / 鞋帽)",
        "icon": "👘",
        "tip": "各類穿戴的反義詞 · 例: 신발을 벗어요 (脫鞋)"
      }
    ]
  },
  {
    "id": "verb-06-01",
    "domainId": "v06",
    "domainName": "06_語言溝通交流",
    "domainIcon": "💬",
    "titleKo": "대화와 소통 동작",
    "titleZh": "言語交談與日常問候",
    "titleRom": "dae-hwa-wa so-tong dong-jak",
    "themeColor": "#2980B9",
    "accentBg": "#EAF2F8",
    "desc": "和朋友聊天、發問請求與表達感謝的禮貌交流動作。",
    "items": [
      {
        "kr": "말하다",
        "rom": "mal-ha-da",
        "haeyo": "말해요",
        "zh": "說話 / 講話",
        "icon": "🗣️",
        "tip": "해요體: 말해요 · 例: 한국어로 말해요 (用韓文說話)"
      },
      {
        "kr": "이야기하다",
        "rom": "i-ya-gi-ha-da",
        "haeyo": "이야기해요",
        "zh": "聊天 / 談話",
        "icon": "👥",
        "tip": "해요體: 이야기해요 · 例: 친구와 재미있게 이야기해요"
      },
      {
        "kr": "물어보다",
        "rom": "mul-eo-bo-da",
        "haeyo": "물어봐요",
        "zh": "詢問 / 打聽",
        "icon": "❓",
        "tip": "해요體: 물어봐요 · 例: 길을 친절하게 물어봐요 (問路)"
      },
      {
        "kr": "대답하다",
        "rom": "dae-dap-ha-da",
        "haeyo": "대답해요",
        "zh": "回答 / 答覆",
        "icon": "🙋",
        "tip": "해요體: 대답해요 · 例: 질문에 밝게 대답해요 (回答問題)"
      },
      {
        "kr": "듣다",
        "rom": "deut-da",
        "haeyo": "들어요",
        "zh": "聽 / 聆聽",
        "icon": "👂",
        "tip": "해요體: 들어요 (ㄷ不規則) · 例: 한국 노래를 들어요 (聽韓樂)"
      },
      {
        "kr": "부르다",
        "rom": "bu-reu-da",
        "haeyo": "불러요",
        "zh": "叫人 / 唱歌",
        "icon": "🎤",
        "tip": "해요體: 불러요 (르不規則) · 例: 노래를 신나게 불러요 (唱歌)"
      },
      {
        "kr": "약속하다",
        "rom": "yak-sok-ha-da",
        "haeyo": "약속해요",
        "zh": "約定 / 答應",
        "icon": "🤙",
        "tip": "해요體: 약속해요 · 例: 주말에 만나기로 약속해요 (約見面)"
      },
      {
        "kr": "인사하다",
        "rom": "in-sa-ha-da",
        "haeyo": "인사해요",
        "zh": "問候 / 打招呼",
        "icon": "🙇",
        "tip": "해요體: 인사해요 · 例: 반갑게 인사해요 (熱情打招呼)"
      }
    ]
  },
  {
    "id": "verb-07-01",
    "domainId": "v07",
    "domainName": "07_感官知覺心智",
    "domainIcon": "👀",
    "titleKo": "보고 느끼고 생각하기",
    "titleZh": "感官體驗與大腦思考",
    "titleRom": "bo-go neu-kki-go saeng-gak-ha-gi",
    "themeColor": "#8E44AD",
    "accentBg": "#F9F0FC",
    "desc": "雙眼觀看、用心體會、大腦思考與記憶的重要心智動詞。",
    "items": [
      {
        "kr": "보다",
        "rom": "bo-da",
        "haeyo": "봐요",
        "zh": "看 / 看見",
        "icon": "👀",
        "tip": "해요體: 봐요 · 例: 재미있는 영화를 봐요 (看電影)"
      },
      {
        "kr": "느끼다",
        "rom": "neu-kki-da",
        "haeyo": "느껴요",
        "zh": "感覺 / 體會",
        "icon": "💭",
        "tip": "해요體: 느껴요 · 例: 따뜻함을 느껴요 (感受到溫暖)"
      },
      {
        "kr": "알다",
        "rom": "al-da",
        "haeyo": "알아요",
        "zh": "知道 / 認識",
        "icon": "💡",
        "tip": "해요體: 알아요 · 例: 그 소식을 알아요 (我知道那消息)"
      },
      {
        "kr": "모르다",
        "rom": "mo-reu-da",
        "haeyo": "몰라요",
        "zh": "不知道 / 不認識",
        "icon": "🤷",
        "tip": "해요體: 몰라요 (르不規則) · 例: 아직 잘 몰라요 (還不太清楚)"
      },
      {
        "kr": "생각하다",
        "rom": "saeng-gak-ha-da",
        "haeyo": "생각해요",
        "zh": "想 / 思考",
        "icon": "🧠",
        "tip": "해요體: 생각해요 · 例: 깊이 생각해요 (深刻思考)"
      },
      {
        "kr": "기억하다",
        "rom": "gi-eok-ha-da",
        "haeyo": "기억해요",
        "zh": "記得 / 記住",
        "icon": "📝",
        "tip": "해요體: 기억해요 · 例: 단어를 꼭 기억해요 (把單字記住)"
      },
      {
        "kr": "잊어버리다",
        "rom": "ij-eo-beo-ri-da",
        "haeyo": "잊어버려요",
        "zh": "忘記 / 遺忘",
        "icon": "🍂",
        "tip": "해요體: 잊어버려요 · 例: 약속을 잊어버려요 (忘了約定)"
      },
      {
        "kr": "믿다",
        "rom": "mit-da",
        "haeyo": "믿어요",
        "zh": "相信 / 信任",
        "icon": "🤝",
        "tip": "해요體: 믿어요 · 例: 친구를 믿어요 (相信朋友)"
      }
    ]
  },
  {
    "id": "verb-08-01",
    "domainId": "v08",
    "domainName": "08_情感心境表現",
    "domainIcon": "❤️",
    "titleKo": "사랑과 감정 표현",
    "titleZh": "喜怒哀樂與愛憎心情",
    "titleRom": "sa-rang-gwa gam-jeong pyo-hyeon",
    "themeColor": "#E74C3C",
    "accentBg": "#FDEDEC",
    "desc": "歡笑哭泣、表達愛意與吐露心聲的情緒動詞。",
    "items": [
      {
        "kr": "사랑하다",
        "rom": "sa-rang-ha-da",
        "haeyo": "사랑해요",
        "zh": "愛 / 深愛",
        "icon": "💖",
        "tip": "해요體: 사랑해요 · 例: 가족을 많이 사랑해요 (很愛家人)"
      },
      {
        "kr": "좋아하다",
        "rom": "jo-a-ha-da",
        "haeyo": "좋아해요",
        "zh": "喜歡 / 喜愛",
        "icon": "🥰",
        "tip": "해요體: 좋아해요 · 例: 한국 드라마를 좋아해요 (喜歡韓劇)"
      },
      {
        "kr": "싫어하다",
        "rom": "sir-eo-ha-da",
        "haeyo": "싫어해요",
        "zh": "討厭 / 不喜歡",
        "icon": "😖",
        "tip": "해요體: 싫어해요 · 例: 매운 음식을 싫어해요 (討厭辣食)"
      },
      {
        "kr": "웃다",
        "rom": "ut-da",
        "haeyo": "웃어요",
        "zh": "笑 / 微笑",
        "icon": "😄",
        "tip": "해요體: 웃어요 · 例: 환하게 활짝 웃어요 (開懷大笑)"
      },
      {
        "kr": "울다",
        "rom": "ul-da",
        "haeyo": "울어요",
        "zh": "哭 / 流淚",
        "icon": "😭",
        "tip": "해요體: 울어요 · 例: 슬퍼서 눈물을 흘리며 울어요 (傷心哭泣)"
      },
      {
        "kr": "화내다",
        "rom": "hwa-nae-da",
        "haeyo": "화내요",
        "zh": "發脾氣 / 動怒",
        "icon": "😡",
        "tip": "해요體: 화내요 · 例: 화내지 마세요 (請不要發脾氣)"
      },
      {
        "kr": "걱정하다",
        "rom": "geok-jeong-ha-da",
        "haeyo": "걱정해요",
        "zh": "擔心 / 牽掛",
        "icon": "😟",
        "tip": "해요體: 걱정해요 · 例: 건강을 걱정해요 (擔心健康)"
      },
      {
        "kr": "놀라다",
        "rom": "nol-ra-da",
        "haeyo": "놀라요",
        "zh": "吃驚 / 嚇一跳",
        "icon": "😲",
        "tip": "해요體: 놀라요 · 例: 깜짝 놀라요 (嚇了一大跳)"
      }
    ]
  },
  {
    "id": "verb-09-01",
    "domainId": "v09",
    "domainName": "09_學習職場工作",
    "domainIcon": "📖",
    "titleKo": "공부와 업무 활동",
    "titleZh": "勤奮讀書與辦公打拼",
    "titleRom": "gong-bu-wa eop-mu hwal-dong",
    "themeColor": "#3498DB",
    "accentBg": "#EBF5FB",
    "desc": "背單字練口說、上班下班開會的奮鬥日常動詞。",
    "items": [
      {
        "kr": "공부하다",
        "rom": "gong-bu-ha-da",
        "haeyo": "공부해요",
        "zh": "學習 / 唸書",
        "icon": "📚",
        "tip": "해요體: 공부해요 · 例: 매일 한국어를 공부해요 (天天學韓語)"
      },
      {
        "kr": "읽다",
        "rom": "ik-da",
        "haeyo": "읽어요",
        "zh": "閱讀 / 看書",
        "icon": "📖",
        "tip": "해요體: 읽어요 (雙收音 ㄺ 發 ㄱ) · 例: 책을 소리 내어 읽어요"
      },
      {
        "kr": "쓰다",
        "rom": "sseu-da",
        "haeyo": "써요",
        "zh": "寫字 / 書寫",
        "icon": "✍️",
        "tip": "해요體: 써요 (ㅡ脫落) · 例: 공책에 글씨를 써요 (寫字)"
      },
      {
        "kr": "배우다",
        "rom": "bae-u-da",
        "haeyo": "배워요",
        "zh": "學 / 向人學習",
        "icon": "🎓",
        "tip": "해요體: 배워요 · 例: 선생님께 한국어를 배워요 (跟老師學)"
      },
      {
        "kr": "가르치다",
        "rom": "ga-reu-chi-da",
        "haeyo": "가르쳐요",
        "zh": "教導 / 傳授",
        "icon": "👩‍🏫",
        "tip": "해요體: 가르쳐요 · 例: 학생들에게 가르쳐요 (教學生)"
      },
      {
        "kr": "일하다",
        "rom": "il-ha-da",
        "haeyo": "일해요",
        "zh": "工作 / 幹活",
        "icon": "💼",
        "tip": "해요體: 일해요 · 例: 회사에서 열심히 일해요 (在公司努力工作)"
      },
      {
        "kr": "출근하다",
        "rom": "chul-geun-ha-da",
        "haeyo": "출근해요",
        "zh": "上班 (出勤)",
        "icon": "🏢",
        "tip": "해요體: 출근해요 · 例: 아침 9시에 출근해요 (早上9點上班)"
      },
      {
        "kr": "퇴근하다",
        "rom": "toe-geun-ha-da",
        "haeyo": "퇴근해요",
        "zh": "下班",
        "icon": "🚶‍♂️",
        "tip": "해요體: 퇴근해요 · 例: 저녁 6시에 퇴근해요 (傍晚6點下班)"
      }
    ]
  },
  {
    "id": "verb-10-01",
    "domainId": "v10",
    "domainName": "10_休閒運動娛樂",
    "domainIcon": "⚽",
    "titleKo": "운동과 문화 취미",
    "titleZh": "強身健體與文藝休閒",
    "titleRom": "un-dong-gwa mun-hwa chwi-mi",
    "themeColor": "#F39C12",
    "accentBg": "#FEF9E7",
    "desc": "唱歌跳舞、拍照旅行與揮灑汗水的休閒嗜好動詞。",
    "items": [
      {
        "kr": "운동하다",
        "rom": "un-dong-ha-da",
        "haeyo": "운동해요",
        "zh": "運動 / 鍛鍊",
        "icon": "🏃‍♂️",
        "tip": "해요體: 운동해요 · 例: 헬스장에서 운동해요 (在健身房運動)"
      },
      {
        "kr": "놀다",
        "rom": "nol-da",
        "haeyo": "놀아요",
        "zh": "玩耍 / 遊玩",
        "icon": "🎡",
        "tip": "해요體: 놀아요 (ㄹ不規則) · 例: 주말에 신나게 놀아요 (週末盡情玩)"
      },
      {
        "kr": "노래하다",
        "rom": "no-rae-ha-da",
        "haeyo": "노래해요",
        "zh": "唱歌",
        "icon": "🎵",
        "tip": "해요體: 노래해요 · 例: 노래방에서 노래해요 (在KTV唱歌)"
      },
      {
        "kr": "춤추다",
        "rom": "chum-chu-da",
        "haeyo": "춤춰요",
        "zh": "跳舞",
        "icon": "💃",
        "tip": "해요體: 춤춰요 · 例: K-pop 댄스를 춤춰요 (跳 K-pop 舞)"
      },
      {
        "kr": "여행하다",
        "rom": "yeo-haeng-ha-da",
        "haeyo": "여행해요",
        "zh": "旅行 / 旅遊",
        "icon": "🧳",
        "tip": "해요體: 여행해요 · 例: 제주도를 여행해요 (去濟州島旅行)"
      },
      {
        "kr": "사진찍다",
        "rom": "sa-jin-jjik-da",
        "haeyo": "사진찍어요",
        "zh": "拍照 / 攝影",
        "icon": "📸",
        "tip": "해요體: 사진찍어요 · 例: 인생네컷 사진을 찍어요 (拍人生四格)"
      },
      {
        "kr": "수영하다",
        "rom": "su-yeong-ha-da",
        "haeyo": "수영해요",
        "zh": "游泳",
        "icon": "🏊‍♂️",
        "tip": "해요體: 수영해요 · 例: 바다에서 시원하게 수영해요 (海裡暢遊)"
      },
      {
        "kr": "응원하다",
        "rom": "eung-won-ha-da",
        "haeyo": "응원해요",
        "zh": "加油 / 應援",
        "icon": "📣",
        "tip": "해요體: 응원해요 · 例: 좋아하는 팀을 응원해요 (為喜愛隊伍應援)"
      }
    ]
  },
  {
    "id": "verb-11-01",
    "domainId": "v11",
    "domainName": "11_社交互助人際",
    "domainIcon": "🤝",
    "titleKo": "만남과 도움 주고받기",
    "titleZh": "見面約會與互相幫助",
    "titleRom": "man-nam-gwa do-um ju-go-bat-gi",
    "themeColor": "#27AE60",
    "accentBg": "#EAFAF1",
    "desc": "人際相遇、彼此贈禮、互相借物與陪伴等互動動作。",
    "items": [
      {
        "kr": "만나다",
        "rom": "man-na-da",
        "haeyo": "만나요",
        "zh": "見面 / 遇見",
        "icon": "🤝",
        "tip": "해요體: 만나요 · 例: 카페에서 친구를 만나요 (在咖啡廳見面)"
      },
      {
        "kr": "돕다",
        "rom": "dop-da",
        "haeyo": "도와요",
        "zh": "幫助 / 幫忙",
        "icon": "🤲",
        "tip": "해요體: 도와요 (ㅂ不規則) · 例: 서로 따뜻하게 도와요 (互相幫忙)"
      },
      {
        "kr": "주다",
        "rom": "ju-da",
        "haeyo": "줘요",
        "zh": "給予 / 送給",
        "icon": "🎁",
        "tip": "해요體: 줘요 · 敬語: 드리다 · 例: 친구에게 선물을 줘요 (送禮)"
      },
      {
        "kr": "받다",
        "rom": "bat-da",
        "haeyo": "받아요",
        "zh": "接收 / 收到",
        "icon": "📬",
        "tip": "해요體: 받아요 · 例: 감동적인 편지를 받아요 (收到信)"
      },
      {
        "kr": "빌리다",
        "rom": "bil-li-da",
        "haeyo": "빌려요",
        "zh": "借入 (向人借)",
        "icon": "📖",
        "tip": "해요體: 빌려요 · 例: 도서관에서 책을 빌려요 (向圖書館借書)"
      },
      {
        "kr": "기다리다",
        "rom": "gi-da-ri-da",
        "haeyo": "기다려요",
        "zh": "等待 / 等候",
        "icon": "⏳",
        "tip": "해요體: 기다려요 · 例: 조금만 기다려요 (請稍等一下)"
      },
      {
        "kr": "보내다",
        "rom": "bo-nae-da",
        "haeyo": "보내요",
        "zh": "寄送 / 度過時光",
        "icon": "💌",
        "tip": "해요體: 보내요 · 例: 메시지를 보내요 (發訊息) / 즐겁게 보내요"
      },
      {
        "kr": "축하하다",
        "rom": "chuk-ha-da",
        "haeyo": "축하해요",
        "zh": "祝賀 / 慶祝",
        "icon": "🎉",
        "tip": "해요體: 축하해요 · 例: 생일을 진심으로 축하해요 (祝生日快樂)"
      }
    ]
  },
  {
    "id": "verb-12-01",
    "domainId": "v12",
    "domainName": "12_家務打理整理",
    "domainIcon": "🧰",
    "titleKo": "청소와 생활 정리",
    "titleZh": "居家清潔與收納整理",
    "titleRom": "cheong-so-wa saeng-hwal jeong-ri",
    "themeColor": "#34495E",
    "accentBg": "#EBEDEF",
    "desc": "開關電器、打掃房間、洗衣服丟垃圾的居家整理動作。",
    "items": [
      {
        "kr": "청소하다",
        "rom": "cheong-so-ha-da",
        "haeyo": "청소해요",
        "zh": "打掃 / 清潔",
        "icon": "🧹",
        "tip": "해요體: 청소해요 · 例: 주말마다 방을 청소해요 (打掃房間)"
      },
      {
        "kr": "빨래하다",
        "rom": "ppal-lae-ha-da",
        "haeyo": "빨래해요",
        "zh": "洗衣服 / 洗滌",
        "icon": "🧺",
        "tip": "해요體: 빨래해요 · 例: 세탁기로 빨래를 해요 (用洗衣機洗衣服)"
      },
      {
        "kr": "닦다",
        "rom": "dak-da",
        "haeyo": "닦아요",
        "zh": "擦拭 / 刷牙",
        "icon": "🧽",
        "tip": "해요體: 닦아요 · 例: 이를 깨끗이 닦아요 (刷牙) / 창문을 닦아요"
      },
      {
        "kr": "켜다",
        "rom": "kyeo-da",
        "haeyo": "켜요",
        "zh": "打開 (電器 / 電燈)",
        "icon": "💡",
        "tip": "해요體: 켜요 · 例: 방에 불을 켜요 (開燈) / 에어컨을 켜요"
      },
      {
        "kr": "끄다",
        "rom": "kkeu-da",
        "haeyo": "꺼요",
        "zh": "關閉 (電器 / 電燈)",
        "icon": "🔌",
        "tip": "해요體: 꺼요 (ㅡ脫落) · 例: 나갈 때 불을 꺼요 (出門關燈)"
      },
      {
        "kr": "열다",
        "rom": "yeol-da",
        "haeyo": "열어요",
        "zh": "打開 (門 / 窗)",
        "icon": "🪟",
        "tip": "해요體: 열어요 (ㄹ不規則) · 例: 창문을 활짝 열어요 (開窗通風)"
      },
      {
        "kr": "닫다",
        "rom": "dat-da",
        "haeyo": "닫아요",
        "zh": "關閉 (門 / 窗)",
        "icon": "🚪",
        "tip": "해요體: 닫아요 · 例: 바람이 불어서 문을 닫아요 (關上門)"
      },
      {
        "kr": "버리다",
        "rom": "beo-ri-da",
        "haeyo": "버려요",
        "zh": "扔掉 / 丟棄",
        "icon": "🗑️",
        "tip": "해요體: 버려요 · 例: 쓰레기를 분리수거해서 버려요 (分類扔垃圾)"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VERB_ENCYCLOPEDIA_PAGES };
}

/**
 * 韓語圖解百科全書資料集 - PRONOUN_ENCYCLOPEDIA_PAGES
 */
const PRONOUN_ENCYCLOPEDIA_PAGES = [
  {
    "id": "pro-01",
    "domainId": "pro01",
    "domainName": "01_人稱代名詞",
    "domainIcon": "👥",
    "titleKo": "인칭 대명사",
    "titleZh": "第一二人稱與長幼尊卑",
    "titleRom": "in-ching dae-myeong-sa",
    "themeColor": "#8E44AD",
    "accentBg": "#F9F0FC",
    "desc": "韓語代名詞嚴格區分謙稱、平語與尊稱，表達極具文化內涵。",
    "items": [
      {
        "kr": "나",
        "rom": "na",
        "zh": "我 (平語/非敬語)",
        "icon": "🙋‍♂️",
        "tip": "對朋友或晚輩 · 接助詞: 나는 / 내가 (我是主語變形)"
      },
      {
        "kr": "저",
        "rom": "jeo",
        "zh": "我 (謙稱/日常敬語)",
        "icon": "🙇",
        "tip": "對長輩上司謙卑自稱 · 接助詞: 저는 / 제가"
      },
      {
        "kr": "우리",
        "rom": "u-ri",
        "zh": "我們 (我方/我國)",
        "icon": "👨‍👩‍👧",
        "tip": "韓國集體主義代表詞 · 例: 우리 집 (我家)、우리 나라 (我國)"
      },
      {
        "kr": "너",
        "rom": "neo",
        "zh": "你 (非敬語)",
        "icon": "👉",
        "tip": "僅限對摯友晚輩 · 接助詞: 너는 / 네가 (口語發音 니가)"
      },
      {
        "kr": "당신",
        "rom": "dang-sin",
        "zh": "您 / 親愛的",
        "icon": "💑",
        "tip": "夫妻間親暱稱呼「親愛的」，或吵架時指責對方「你」"
      },
      {
        "kr": "여러분",
        "rom": "yeo-reo-bun",
        "zh": "各位 / 大家",
        "icon": "📢",
        "tip": "演講公眾致詞 · 例: 여러분, 안녕하세요! (各位好！)"
      },
      {
        "kr": "그",
        "rom": "geu",
        "zh": "他",
        "icon": "👨",
        "tip": "第三人稱男性，多用於書面或小說"
      },
      {
        "kr": "그녀",
        "rom": "geu-nyeo",
        "zh": "她",
        "icon": "👩",
        "tip": "第三人稱女性，多用於文學小說翻譯"
      },
      {
        "kr": "누구",
        "rom": "nu-gu",
        "zh": "誰 (何人)",
        "icon": "❓",
        "tip": "疑問代名詞 · 主格變形: 누가 (是誰)"
      }
    ]
  },
  {
    "id": "pro-02",
    "domainId": "pro02",
    "domainName": "02_指示代名詞",
    "domainIcon": "📍",
    "titleKo": "지시 대명사",
    "titleZh": "事物與處所近中遠稱 (이·그·저)",
    "titleRom": "ji-si dae-myeong-sa",
    "themeColor": "#8E44AD",
    "accentBg": "#F9F0FC",
    "desc": "韓語「近稱 이、中稱 그、遠稱 저」黃金三角空間方位法則！",
    "items": [
      {
        "kr": "이것 / 이거",
        "rom": "i-geot / i-geo",
        "zh": "這個 (近稱)",
        "icon": "👇",
        "tip": "靠近說話者自身 · 例: 이것 얼마예요? (這個多少錢?)"
      },
      {
        "kr": "그것 / 그거",
        "rom": "geu-geot / geu-geo",
        "zh": "那個 (中稱)",
        "icon": "👉",
        "tip": "靠近聽話者，或方才提到的事物 · 例: 그것 주세요"
      },
      {
        "kr": "저것 / 저거",
        "rom": "jeo-geot / jeo-geo",
        "zh": "那個 (遠稱)",
        "icon": "👉",
        "tip": "遠離彼此視線可及的遠處 · 例: 저것 봐요 (你看那邊那個)"
      },
      {
        "kr": "무엇 / 뭐",
        "rom": "mu-eot / mwo",
        "zh": "什麼 (何物)",
        "icon": "❔",
        "tip": "疑問代名詞 · 口語常縮略為 뭐 · 例: 이게 뭐예요? (這是什麼?)"
      },
      {
        "kr": "여기",
        "rom": "yeo-gi",
        "zh": "這裡 (近處所)",
        "icon": "📍",
        "tip": "說話人所在之處 · 例: 여기 앉으세요 (請坐這裡)"
      },
      {
        "kr": "거기",
        "rom": "geo-gi",
        "zh": "那裡 (聽話人處)",
        "icon": "📌",
        "tip": "對方所在之處 · 例: 거기 날씨 어때요? (那邊天氣如何?)"
      },
      {
        "kr": "저기",
        "rom": "jeo-gi",
        "zh": "那邊 / 遠處",
        "icon": "🚩",
        "tip": "遠處或搭話借光 · 例: 저기요! (服務生！/ 不好意思打擾一下)"
      },
      {
        "kr": "어디",
        "rom": "eo-di",
        "zh": "哪裡 (何處)",
        "icon": "🗺️",
        "tip": "詢問地點 · 例: 화장실이 어디예요? (洗手間在哪裡?)"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRONOUN_ENCYCLOPEDIA_PAGES };
}

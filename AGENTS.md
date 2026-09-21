# 🤖 AGENTS.md: Korean-Learning-Wikipedia（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

---

## 📌 專案基本資訊

- **專案名稱**：Korean-Learning-Wikipedia（韓語學習百科知識庫）
- **定位目標**：建構結構化、可檢索、多維度的韓語百科詞典與文法知識體系，整合核心詞庫、漢字音變、主題辭典與深度學習語料。
- **關聯專案**：
  - 前端應用／互動樂園：`Korean-Learning`（[GitHub Pages 線上版](https://kitty-sin.github.io/sanrio-korean-learning/)）
  - 閱讀與跟讀系統：`Korean-Learning-OpenCode`（두루책방 1–6단계 124本繪本）
- **線上發布版（Firebase Hosting）**：[https://korean-learning-1ec2a.web.app](https://korean-learning-1ec2a.web.app)
- **GitHub 倉庫**：[https://github.com/kitty-sin/Korean-Learning-Wikipedia](https://github.com/kitty-sin/Korean-Learning-Wikipedia)（私有倉庫）
- **Obsidian 關聯筆記**：創作庫 / Korean-Learning-Wikipedia.md

---

## 🎯 目標與路線圖

- [x] **階段一：專案初始化與結構規範建立**
  - [x] 建立標準 `.gitignore`、`AGENTS.md`、`handoff.md`、`README.md`
  - [x] 初始化 Git 版本控制 (`main` 分支)
  - [x] 建立 GitHub 遠端私有儲存庫並完成初次推播
  - [x] 盤點收錄之初始語料（5,666 基準詞庫、Kitty 自訂新增詞庫、漢字詞與音節矩陣、主題美食詞彙）
- [ ] **階段二：百科架構與結構化梳理**
  - [ ] 規劃百科分類層級（詞彙庫、漢字音變、文法句型、發音與音變規則、文化與日常主題）
  - [ ] 統一 CSV 與 Markdown 欄位結構及交叉引用錨點
- [ ] **階段三：百科瀏覽與靜態網站生成（選配）**
  - [ ] 評估並建置 Wiki 靜態站點（如 VitePress / Starlight / MkDocs 或單頁式全域速查百科）
  - [ ] 支援即時多向搜尋（韓文、羅馬拼音、中文、英文、詞性與等級）
- [ ] **階段四：多端整合與雲端同步**
  - [x] 推播至 GitHub 遠端儲存庫（`kitty-sin/Korean-Learning-Wikipedia`）
  - [ ] 與 `Korean-Learning` 進行雙向資料同步管線整合

---

## 🏗️ 資料夾結構與核心資料庫

```
Korean-Learning-Wikipedia/
├── .git/                        # Git 版本控制
├── .gitignore                   # 版控忽略配置
├── AGENTS.md                    # 本檔：跨 Agent 通用專案藍圖
├── handoff.md                   # 跨 Agent / 跨電腦交接檔
├── README.md                    # 專案公開說明與百科導覽
├── korean_vocab_5666.csv        # 5,666 筆 TOPIK 基準詞庫總表 (CSV)
├── korean_vocab_5666.md         # 5,666 筆基準詞庫 Markdown 字典
├── korean_vocab_kitty_add.csv   # Kitty 自訂新增擴充詞庫總表 (CSV，#5667 起)
├── korean_vocab_kitty_add.md    # Kitty 自訂新增擴充詞庫 Markdown 字典
├── korean_hanja.csv             # 6,520+ 筆漢字詞、音節矩陣與外來語總表 (CSV)
├── korean_hanja.md              # 漢字音變與單音節對照 Markdown 辭典
└── sanrio_korean_food_100.md    # 三麗鷗 10 大主題 100 款韓式美食百科清單
```

---

## 🔄 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 | 讀取時機 |
|:---:|:---:|:---|:---|
| **L1** | 本地（雲端硬碟資料夾） | `AGENTS.md` ＋ `handoff.md` | 每個 session 開工與收工必讀寫 |
| **L2** | GitHub | `kitty-sin/Korean-Learning-Wikipedia` | 專案里程碑與版本交付時 |
| **L3** | Obsidian | 創作庫 / `Korean-Learning-Wikipedia.md` | 深度筆記與知識關聯時 |

---

## 📜 工作約定與協同規範

1. **開工先讀 `handoff.md`，收工必更新 `handoff.md`**：保持跨電腦、跨 Agent 任務進度完全透明。
2. **語系與文字**：所有回應、文件說明與註解一律使用**繁體中文**。
3. **資料結構完整性**：
   - 修改詞庫或百科資料前，務必維持 CSV 與 Markdown 雙向對齊。
   - 避免直接刪除既有詞彙序號，擴充詞彙依序向上遞增。
4. **編碼安全**：
   - 韓文字串一律使用 **UTF-8 with BOM / UTF-8** 編碼儲存。
   - 在 Windows PowerShell 環境下若有批次處理指令，優先使用 Python 腳本避免中韓文編碼亂碼。
5. **🎯 收工 3 步標準程序（極重要鐵律）**：
   - 每當使用者輸入「**收工**」，**必須自動完整執行並回報以下 3 步收工程序**：
     - **第 1 步【L1 本地檔】**：完整更新並整理 `handoff.md`，確保任務紀錄與最新進度清晰，工作區乾淨。
     - **第 2 步【L2 GitHub】**：執行 `git add`、撰寫精準 commit 訊息並 `git push origin main` 推播至遠端儲存庫。
     - **第 3 步【L3 Obsidian】**：同步更新 `G:\My Drive\2ndbrain-Obsidian\創作庫\Korean-Learning-Wikipedia.md` 筆記，確保架構與功能與實作完全同步。

---

## 🔒 安全與隱私（不可違反）

- **不把 API Key、Token、密碼、憑證寫進 repo**，一律由 `.env` 管理並於 `.gitignore` 排除。
- 公開分享或推播至 GitHub 前，嚴格檢查無個人隱私及金鑰外洩。

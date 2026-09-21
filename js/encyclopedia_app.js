/**
 * 韓語全量圖解生活百科全書互動引擎 (Encyclopedia App Logic)
 * 支援雙圖鑑模式：【🌸 生活名詞圖鑑 (Noun · 29頁)】與【⚡ 日常動詞圖鑑 (Verb · 12領域)】
 * 嚴格遵循：清晰圖像、純繁中解釋、韓文原形、日常해요體變形、真人語音點讀與極致舒適留白
 */

class EncyclopediaApp {
  constructor() {
    this.currentMode = 'noun';
    
    // 13 大全景韓語圖解資料庫註冊
    this.modes = {
      // 📚 核心品詞 (7)
      noun: {
        id: 'noun',
        label: '名詞 Noun',
        icon: '🌸',
        pages: typeof ENCYCLOPEDIA_PAGES !== 'undefined' ? ENCYCLOPEDIA_PAGES : []
      },
      verb: {
        id: 'verb',
        label: '動詞 Verb',
        icon: '⚡',
        pages: typeof VERB_ENCYCLOPEDIA_PAGES !== 'undefined' ? VERB_ENCYCLOPEDIA_PAGES : []
      },
      adjective: {
        id: 'adjective',
        label: '形容詞 Adjective',
        icon: '🌈',
        pages: typeof ADJECTIVE_ENCYCLOPEDIA_PAGES !== 'undefined' ? ADJECTIVE_ENCYCLOPEDIA_PAGES : []
      },
      adverb: {
        id: 'adverb',
        label: '副詞 Adverb',
        icon: '✨',
        pages: typeof ADVERB_ENCYCLOPEDIA_PAGES !== 'undefined' ? ADVERB_ENCYCLOPEDIA_PAGES : []
      },
      pronoun: {
        id: 'pronoun',
        label: '代名詞 Pronoun',
        icon: '👤',
        pages: typeof PRONOUN_ENCYCLOPEDIA_PAGES !== 'undefined' ? PRONOUN_ENCYCLOPEDIA_PAGES : []
      },
      proper_noun: {
        id: 'proper_noun',
        label: '專有名詞 Proper Noun',
        icon: '🏛️',
        pages: typeof PROPER_NOUN_ENCYCLOPEDIA_PAGES !== 'undefined' ? PROPER_NOUN_ENCYCLOPEDIA_PAGES : []
      },
      dependent_noun: {
        id: 'dependent_noun',
        label: '依存名詞 Dependent Noun',
        icon: '📦',
        pages: typeof DEPENDENT_NOUN_ENCYCLOPEDIA_PAGES !== 'undefined' ? DEPENDENT_NOUN_ENCYCLOPEDIA_PAGES : []
      },

      // 🧩 語法核心 (4)
      numeral: {
        id: 'numeral',
        label: '數字雙系統 Numeral',
        icon: '🔢',
        pages: typeof NUMERAL_ENCYCLOPEDIA_PAGES !== 'undefined' ? NUMERAL_ENCYCLOPEDIA_PAGES : []
      },
      determiner: {
        id: 'determiner',
        label: '冠形詞 Determiner',
        icon: '🔤',
        pages: typeof DETERMINER_ENCYCLOPEDIA_PAGES !== 'undefined' ? DETERMINER_ENCYCLOPEDIA_PAGES : []
      },
      particle: {
        id: 'particle',
        label: '核心助詞 Particle',
        icon: '🧩',
        pages: typeof PARTICLE_ENCYCLOPEDIA_PAGES !== 'undefined' ? PARTICLE_ENCYCLOPEDIA_PAGES : []
      },
      greeting: {
        id: 'greeting',
        label: '生活問候 Greeting',
        icon: '💬',
        pages: typeof GREETING_ENCYCLOPEDIA_PAGES !== 'undefined' ? GREETING_ENCYCLOPEDIA_PAGES : []
      },

      // 🌟 專題圖鑑 (2)
      loanword: {
        id: 'loanword',
        label: '外來語借詞 Loanword',
        icon: '🌍',
        pages: typeof LOANWORD_ENCYCLOPEDIA_PAGES !== 'undefined' ? LOANWORD_ENCYCLOPEDIA_PAGES : []
      },
      sanrio_food: {
        id: 'sanrio_food',
        label: '三麗鷗美食 Sanrio Food',
        icon: '🍲',
        pages: typeof SANRIO_FOOD_ENCYCLOPEDIA_PAGES !== 'undefined' ? SANRIO_FOOD_ENCYCLOPEDIA_PAGES : []
      }
    };

    this.pages = this.modes[this.currentMode].pages;
    this.currentPageIndex = 0;
    this.synth = window.speechSynthesis || null;
    this.isDomainPopoutOpen = false;

    // 同步 body data-mode 屬性以驅動背景主題色氛圍聯動
    document.body.dataset.mode = this.currentMode;

    this.initElements();
    this.renderDomainSelector();
    this.bindEvents();
    this.render();
  }

  initElements() {
    this.pageCanvas = document.getElementById('page-canvas');
    this.pageStepper = document.getElementById('page-stepper');
    this.pageCounter = document.getElementById('page-counter');
    this.navPageInfo = document.getElementById('nav-page-info');
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.btnToc = document.getElementById('btn-toc');
    this.tocModal = document.getElementById('toc-modal');
    this.btnCloseModal = document.getElementById('btn-close-modal');
    this.tocList = document.getElementById('toc-list');
    this.domainBar = document.getElementById('domain-bar');
    this.domainPopoutWrapper = document.getElementById('domain-popout-wrapper');
    this.domainPopoutTitle = document.getElementById('domain-popout-title');
    this.btnCloseDomainPopout = document.getElementById('btn-close-domain-popout');
  }

  // 切換 13 大百科圖鑑模式 (支援點選時彈出副頁標籤抽屜)
  setMode(mode, fromTabClick = false) {
    if (!this.modes[mode]) return;

    // 若點選當前已經作用中 (active) 的標籤，切換副頁彈出抽屜之開關
    if (fromTabClick && this.currentMode === mode) {
      this.toggleDomainPopout();
      return;
    }

    this.currentMode = mode;
    this.pages = this.modes[mode].pages;
    this.currentPageIndex = 0;

    // 智能背景氛圍色聯動：更新 body data-mode
    document.body.dataset.mode = mode;

    // 更新頂部模式按鈕 active 狀態與橫向捲動可視度
    document.querySelectorAll('.mode-tab-btn').forEach(btn => {
      const isActive = (btn.dataset.mode === mode);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    this.renderDomainSelector();
    this.render();

    // 依使用者指示：點進去才彈出看到副頁標籤
    if (fromTabClick) {
      this.openDomainPopout();
    } else {
      this.closeDomainPopout();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleDomainPopout() {
    if (this.isDomainPopoutOpen) {
      this.closeDomainPopout();
    } else {
      this.openDomainPopout();
    }
  }

  openDomainPopout() {
    this.isDomainPopoutOpen = true;
    if (this.domainPopoutWrapper) {
      this.domainPopoutWrapper.classList.add('is-open');
    }
    document.body.classList.add('domain-popout-open');
  }

  closeDomainPopout() {
    this.isDomainPopoutOpen = false;
    if (this.domainPopoutWrapper) {
      this.domainPopoutWrapper.classList.remove('is-open');
    }
    document.body.classList.remove('domain-popout-open');
  }

  // 彈出式副頁生活領域快捷彩虹標籤列
  renderDomainSelector() {
    if (!this.domainBar) return;

    // 提取不重複的領域
    const domainMap = new Map();
    this.pages.forEach((p, idx) => {
      if (!domainMap.has(p.domainId)) {
        domainMap.set(p.domainId, {
          domainId: p.domainId,
          name: p.domainName.replace(/^(v|adj|adv|pro|prop|dep|num|det|par|grt|loan|s)?\d+_/, ''),
          icon: p.domainIcon,
          firstPageIndex: idx
        });
      }
    });

    const domains = Array.from(domainMap.values());
    const modeConfig = this.modes[this.currentMode] || { label: '百科', icon: '📖' };

    // 更新彈出抽屜頂部標題與總數
    if (this.domainPopoutTitle) {
      this.domainPopoutTitle.innerHTML = `
        <span>${modeConfig.icon}</span>
        <span>${modeConfig.label} · 副頁領域主題 (共 ${domains.length} 個主題)</span>
      `;
    }

    // 賦予每張副頁標籤專屬獨立的彩虹色彩 (data-color 0~14)
    this.domainBar.innerHTML = domains.map((d, idx) => `
      <button class="domain-tab-btn" data-domain="${d.domainId}" data-color="${idx % 15}" data-index="${d.firstPageIndex}" onclick="app.goToPage(${d.firstPageIndex});">
        <span class="domain-tab-icon">${d.icon}</span>
        <span class="domain-tab-label">${d.name}</span>
      </button>
    `).join('');
  }

  bindEvents() {
    // 翻頁按鈕
    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => this.prevPage());
    }
    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.nextPage());
    }

    // 目錄抽屜
    if (this.btnToc) {
      this.btnToc.addEventListener('click', () => this.openToc());
    }
    if (this.btnCloseModal) {
      this.btnCloseModal.addEventListener('click', () => this.closeToc());
    }
    if (this.tocModal) {
      this.tocModal.addEventListener('click', (e) => {
        if (e.target === this.tocModal) this.closeToc();
      });
    }

    // 點擊外部關閉副頁彈出抽屜
    document.addEventListener('click', (e) => {
      if (this.isDomainPopoutOpen && this.domainPopoutWrapper) {
        const inPopout = this.domainPopoutWrapper.contains(e.target);
        const inTabs = e.target.closest('.mode-switcher-container');
        if (!inPopout && !inTabs) {
          this.closeDomainPopout();
        }
      }
    });

    // 鍵盤左右鍵翻頁
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevPage();
      } else if (e.key === 'ArrowRight') {
        this.nextPage();
      } else if (e.key === 'Escape') {
        this.closeToc();
        this.closeDomainPopout();
      }
    });

    // 手機觸控滑動翻頁
    let touchStartX = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 60) {
        if (diffX < 0) {
          this.nextPage();
        } else {
          this.prevPage();
        }
      }
    }, { passive: true });
  }

  render() {
    if (!this.pages.length) return;
    const page = this.pages[this.currentPageIndex];

    // 更新指示器與計數
    const pageNumStr = `${String(this.currentPageIndex + 1).padStart(2, '0')} / ${String(this.pages.length).padStart(2, '0')}`;
    const modeConfig = this.modes[this.currentMode] || { label: '百科', icon: '📖' };
    const modeBadge = `${modeConfig.icon} ${modeConfig.label}`;
    if (this.pageCounter) this.pageCounter.textContent = `${modeBadge} ${pageNumStr}`;
    if (this.navPageInfo) this.navPageInfo.textContent = `${modeBadge} Page ${pageNumStr}`;

    // 更新 Stepper Dots
    if (this.pageStepper) {
      this.pageStepper.innerHTML = this.pages.map((_, idx) => `
        <div class="step-dot ${idx === this.currentPageIndex ? 'active' : ''}" title="第 ${idx + 1} 頁" data-index="${idx}"></div>
      `).join('');

      this.pageStepper.querySelectorAll('.step-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          this.goToPage(parseInt(dot.dataset.index, 10));
        });
      });
    }

    // 更新領域選擇器 Active 狀態
    if (this.domainBar) {
      this.domainBar.querySelectorAll('.domain-tab-btn').forEach(btn => {
        if (btn.dataset.domain === page.domainId) {
          btn.classList.add('active');
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          btn.classList.remove('active');
        }
      });
    }

    // 更新按鈕狀態
    if (this.btnPrev) this.btnPrev.disabled = (this.currentPageIndex === 0);
    if (this.btnNext) this.btnNext.disabled = (this.currentPageIndex === this.pages.length - 1);

    // 渲染本頁主要內容
    this.renderPageCanvas(page);
  }

  renderPageCanvas(page) {
    if (!this.pageCanvas) return;

    // 平滑淡入淡出動畫
    this.pageCanvas.style.opacity = '0';
    this.pageCanvas.style.transform = 'translateY(8px)';

    setTimeout(() => {
      let cardsHtml = '';

      if (page.items && page.items.length) {
        cardsHtml = `
          <div class="cards-grid">
            ${page.items.map((item, cIdx) => {
              const hasSlash = item.kr && item.kr.includes('/');
              let wordKoHtml = '';
              let topSoundBtnHtml = '';
              let cardClickAction = '';

              if (hasSlash) {
                const parts = item.kr.split('/').map(w => w.trim()).filter(Boolean);
                const partsJson = JSON.stringify(parts).replace(/"/g, '&quot;');
                cardClickAction = `app.speakSequential(${partsJson.replace(/&quot;/g, "'")}, this)`;
                topSoundBtnHtml = `
                  <button class="btn-sound-mini" onclick="event.stopPropagation(); app.speakSequential(${partsJson.replace(/&quot;/g, "'")}, this.closest('.vocab-card'));" title="順序發音: ${parts.join(' ➔ ')}">🔊</button>
                `;
                wordKoHtml = `
                  <div class="dual-word-container">
                    ${parts.map((p, pIdx) => `
                      ${pIdx > 0 ? '<span class="dual-word-divider">/</span>' : ''}
                      <div class="dual-word-chip" onclick="event.stopPropagation(); app.speak('${p.replace(/'/g, "\\'")}', this);" title="點擊分別單獨發音: ${p}">
                        <span class="dual-word-text">${p}</span>
                        <button class="btn-sound-chip" title="發音: ${p}">🔊</button>
                      </div>
                    `).join('')}
                  </div>
                `;
              } else {
                cardClickAction = `app.speak('${item.kr.replace(/'/g, "\\'")}', this)`;
                topSoundBtnHtml = `
                  <button class="btn-sound-mini" onclick="event.stopPropagation(); app.speak('${item.kr.replace(/'/g, "\\'")}', this.closest('.vocab-card'));" title="點擊發音: ${item.kr}">🔊</button>
                `;
                wordKoHtml = `<div class="card-word-ko">${item.kr}</div>`;
              }

              const safeKr = (item.kr || '').replace(/"/g, '&quot;');
              return `
                <div class="vocab-card" id="card-item-${cIdx}" data-card-idx="${cIdx}" data-card-kr="${safeKr}" onclick="${cardClickAction}">
                  <div class="card-top">
                    <span class="card-icon">${item.icon || '🏷️'}</span>
                    ${topSoundBtnHtml}
                  </div>
                  ${wordKoHtml}
                  <div class="card-word-rom">${item.rom || ''}</div>
                  ${item.haeyo ? `
                    <div class="conjugation-row">
                      <div class="card-haeyo-pill">⚡ 해요體: ${item.haeyo}</div>
                      <button class="btn-sound-pill" onclick="event.stopPropagation(); app.speak('${item.haeyo}', this);" title="發音: ${item.haeyo}">🔊</button>
                    </div>
                  ` : ''}
                  ${item.hasipsio ? `
                    <div class="conjugation-row">
                      <div class="card-hasipsio-pill">「하십시오體」: ${item.hasipsio}</div>
                      <button class="btn-sound-pill" onclick="event.stopPropagation(); app.speak('${item.hasipsio}', this);" title="發音: ${item.hasipsio}">🔊</button>
                    </div>
                  ` : ''}
                  <div class="card-word-zh">${item.zh || ''}</div>
                  ${item.tip ? `<div class="card-tip">${item.tip}</div>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      this.pageCanvas.innerHTML = `
        <div class="page-hero">
          <div class="page-category-tag" style="background:${page.accentBg || '#F5F5F5'};color:${page.themeColor || '#333'};border: 1px solid ${page.themeColor}33;">
            ${page.domainIcon || '📚'} ${page.domainName}
          </div>
          <div class="page-title-row">
            <h1 class="page-title-ko">${page.titleKo}</h1>
            <span class="page-title-zh">${page.titleZh}</span>
            <span class="page-title-rom">(${page.titleRom})</span>
          </div>
          <p class="page-desc">${page.desc || ''}</p>
        </div>
        <div class="page-body">
          ${cardsHtml}
        </div>
      `;

      this.pageCanvas.style.opacity = '1';
      this.pageCanvas.style.transform = 'translateY(0)';
    }, 120);
  }

  prevPage() {
    if (this.currentPageIndex > 0) {
      this.goToPage(this.currentPageIndex - 1);
    }
  }

  nextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.goToPage(this.currentPageIndex + 1);
    }
  }

  goToPage(index) {
    if (index >= 0 && index < this.pages.length) {
      this.currentPageIndex = index;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // 跨模式直達指定單元頁與單字卡片（支援平滑捲動、高亮光暈與自動朗讀）
  jumpToCard(mode, pageIndex, cardIndex, targetWord = '') {
    if (!this.modes[mode]) return;

    this.currentMode = mode;
    this.pages = this.modes[mode].pages;
    this.currentPageIndex = Math.max(0, Math.min(pageIndex, this.pages.length - 1));

    document.body.dataset.mode = mode;

    document.querySelectorAll('.mode-tab-btn').forEach(btn => {
      const isActive = (btn.dataset.mode === mode);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    this.renderDomainSelector();
    this.render();
    this.closeDomainPopout();

    // 捲動並為目標單字卡片加上炫彩高亮光暈脈衝動畫
    setTimeout(() => {
      let targetCard = null;
      if (targetWord) {
        targetCard = document.querySelector(`.vocab-card[data-card-kr*="${targetWord}"]`);
      }
      if (!targetCard && cardIndex !== undefined) {
        targetCard = document.getElementById(`card-item-${cardIndex}`);
      }
      if (!targetCard) {
        const cards = document.querySelectorAll('.vocab-card');
        targetCard = (cardIndex !== undefined && cards[cardIndex]) ? cards[cardIndex] : cards[0];
      }

      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.remove('highlight-pulse');
        void targetCard.offsetWidth;
        targetCard.classList.add('highlight-pulse');

        // 自動播放目標詞彙發音提供即時回饋
        const wordToSpeak = targetWord || targetCard.getAttribute('data-card-kr');
        if (wordToSpeak) {
          this.speak(wordToSpeak, targetCard);
        }

        setTimeout(() => targetCard.classList.remove('highlight-pulse'), 3500);
      }
    }, 280);
  }

  // 全域 13 大合頁主題導航大綱頁 (依使用者設計圖稿 01~13 編號與副頁展開)
  openToc() {
    if (!this.tocList || !this.tocModal) return;

    const modeOrder = [
      { key: 'noun', idx: '01' },
      { key: 'verb', idx: '02' },
      { key: 'adjective', idx: '03' },
      { key: 'adverb', idx: '04' },
      { key: 'pronoun', idx: '05' },
      { key: 'proper_noun', idx: '06' },
      { key: 'dependent_noun', idx: '07' },
      { key: 'numeral', idx: '08' },
      { key: 'determiner', idx: '09' },
      { key: 'particle', idx: '10' },
      { key: 'greeting', idx: '11' },
      { key: 'loanword', idx: '12' },
      { key: 'sanrio_food', idx: '13' }
    ];

    const currentPage = this.pages[this.currentPageIndex];
    const currentDomainId = currentPage ? currentPage.domainId : '';

    this.tocList.innerHTML = modeOrder.map(item => {
      const modeConfig = this.modes[item.key];
      if (!modeConfig) return '';
      const isActiveMode = (this.currentMode === item.key);

      // 提取該分類下的所有生活主題領域 (若無獨立 domainId 則依頁面排開)
      const domainMap = new Map();
      modeConfig.pages.forEach((p, pIdx) => {
        const dId = p.domainId || `p-${pIdx}`;
        if (!domainMap.has(dId)) {
          const cleanName = (p.domainName || p.titleZh || p.titleKo || '').replace(/^(v|adj|adv|pro|prop|dep|num|det|par|grt|loan|s)?\d+_/, '');
          domainMap.set(dId, {
            domainId: dId,
            name: cleanName || p.titleZh || p.titleKo,
            icon: p.domainIcon || '📖',
            firstPageIndex: pIdx
          });
        }
      });
      const domains = Array.from(domainMap.values());

      return `
        <div class="toc-category-row ${isActiveMode ? 'is-active-category' : ''}" data-mode="${item.key}">
          <div class="toc-row-left">
            <span class="toc-number-badge" data-mode="${item.key}">${item.idx}</span>
            <button type="button" class="toc-main-pill ${isActiveMode ? 'active' : ''}" data-mode="${item.key}" onclick="app.jumpFromToc('${item.key}', 0)" title="前往 ${modeConfig.label} 首頁">
              <span class="toc-main-icon">${modeConfig.icon}</span>
              <span class="toc-main-label">${modeConfig.label}</span>
              ${isActiveMode ? '<span class="toc-main-arrow">▾</span>' : ''}
            </button>
          </div>
          <div class="toc-sub-pills-wrap">
            ${domains.map((d, dIdx) => {
              const isCurrentDomain = isActiveMode && (currentDomainId === d.domainId);
              return `
                <button type="button" class="toc-sub-pill ${isCurrentDomain ? 'active' : ''}" data-color="${dIdx % 15}" onclick="app.jumpFromToc('${item.key}', ${d.firstPageIndex})" title="直達：${d.name}">
                  <span class="sub-pill-icon">${d.icon}</span>
                  <span class="sub-pill-name">${d.name}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');

    this.tocModal.classList.add('show');
  }

  // 從全域目錄直達指定模式與頁面
  jumpFromToc(mode, pageIndex) {
    this.closeToc();
    this.setMode(mode, false);
    this.goToPage(pageIndex);
  }

  closeToc() {
    if (this.tocModal) {
      this.tocModal.classList.remove('show');
    }
  }

  speak(text, el = null) {
    if (!this.synth || !text) return;
    this.synth.cancel();

    if (el) {
      el.classList.add('is-playing');
      setTimeout(() => el.classList.remove('is-playing'), 850);
    }

    // 若包含斜線則依序分別發音，絕不念出「슬래시 (slash)」
    if (text.includes('/')) {
      const parts = text.split('/').map(w => w.trim()).filter(Boolean);
      this.speakSequential(parts, el);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = 'ko-KR';
    utterance.rate = 0.88;
    this.synth.speak(utterance);
  }

  // 多詞彙依序分別朗讀（詞與詞之間保留 0.65 秒自然停頓）
  speakSequential(words, el = null) {
    if (!this.synth || !words || !words.length) return;
    this.synth.cancel();

    if (el) {
      el.classList.add('is-playing');
      setTimeout(() => el.classList.remove('is-playing'), words.length * 850);
    }

    words.forEach((w, idx) => {
      const utter = new SpeechSynthesisUtterance(w.trim());
      utter.lang = 'ko-KR';
      utter.rate = 0.88;
      if (idx > 0) {
        setTimeout(() => {
          this.synth.speak(utter);
        }, idx * 650);
      } else {
        this.synth.speak(utter);
      }
    });
  }
}

// 初始化全域應用並掛載至 window
let app = null;
function initEncyclopediaApp() {
  if (!window.app) {
    app = new EncyclopediaApp();
    window.app = app;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEncyclopediaApp);
} else {
  initEncyclopediaApp();
}

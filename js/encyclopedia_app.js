/**
 * 韓語全量圖解生活百科全書互動引擎 (Encyclopedia App Logic)
 * 支援雙圖鑑模式：【🌸 生活名詞圖鑑 (Noun · 29頁)】與【⚡ 日常動詞圖鑑 (Verb · 12領域)】
 * 嚴格遵循：清晰圖像、純繁中解釋、韓文原形、日常해요體變形、真人語音點讀與極致舒適留白
 */

class EncyclopediaApp {
  constructor() {
    this.currentMode = 'noun';
    
    // 7 大詞性圖鑑資料庫註冊
    this.modes = {
      noun: {
        id: 'noun',
        label: '名詞篇',
        icon: '🌸',
        pages: typeof ENCYCLOPEDIA_PAGES !== 'undefined' ? ENCYCLOPEDIA_PAGES : []
      },
      verb: {
        id: 'verb',
        label: '動詞篇',
        icon: '⚡',
        pages: typeof VERB_ENCYCLOPEDIA_PAGES !== 'undefined' ? VERB_ENCYCLOPEDIA_PAGES : []
      },
      adjective: {
        id: 'adjective',
        label: '形容詞篇',
        icon: '🌈',
        pages: typeof ADJECTIVE_ENCYCLOPEDIA_PAGES !== 'undefined' ? ADJECTIVE_ENCYCLOPEDIA_PAGES : []
      },
      adverb: {
        id: 'adverb',
        label: '副詞篇',
        icon: '✨',
        pages: typeof ADVERB_ENCYCLOPEDIA_PAGES !== 'undefined' ? ADVERB_ENCYCLOPEDIA_PAGES : []
      },
      pronoun: {
        id: 'pronoun',
        label: '代名詞篇',
        icon: '👤',
        pages: typeof PRONOUN_ENCYCLOPEDIA_PAGES !== 'undefined' ? PRONOUN_ENCYCLOPEDIA_PAGES : []
      },
      proper_noun: {
        id: 'proper_noun',
        label: '專有名詞篇',
        icon: '🏛️',
        pages: typeof PROPER_NOUN_ENCYCLOPEDIA_PAGES !== 'undefined' ? PROPER_NOUN_ENCYCLOPEDIA_PAGES : []
      },
      dependent_noun: {
        id: 'dependent_noun',
        label: '依存名詞篇',
        icon: '📦',
        pages: typeof DEPENDENT_NOUN_ENCYCLOPEDIA_PAGES !== 'undefined' ? DEPENDENT_NOUN_ENCYCLOPEDIA_PAGES : []
      }
    };

    this.pages = this.modes[this.currentMode].pages;
    this.currentPageIndex = 0;
    this.synth = window.speechSynthesis || null;

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
  }

  // 切換 7 大詞性圖鑑模式
  setMode(mode) {
    if (!this.modes[mode]) return;
    this.currentMode = mode;
    this.pages = this.modes[mode].pages;
    this.currentPageIndex = 0;

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 頂部生活領域快捷水平滾動列
  renderDomainSelector() {
    if (!this.domainBar) return;

    // 提取不重複的領域
    const domainMap = new Map();
    this.pages.forEach((p, idx) => {
      if (!domainMap.has(p.domainId)) {
        domainMap.set(p.domainId, {
          domainId: p.domainId,
          name: p.domainName.replace(/^v?\d+_/, ''),
          icon: p.domainIcon,
          firstPageIndex: idx
        });
      }
    });

    this.domainBar.innerHTML = Array.from(domainMap.values()).map(d => `
      <button class="domain-tab-btn" data-domain="${d.domainId}" data-index="${d.firstPageIndex}" onclick="app.goToPage(${d.firstPageIndex})">
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

    // 鍵盤左右鍵翻頁
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevPage();
      } else if (e.key === 'ArrowRight') {
        this.nextPage();
      } else if (e.key === 'Escape') {
        this.closeToc();
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
            ${page.items.map(item => `
              <div class="vocab-card" onclick="app.speak('${item.kr}', this)">
                <div class="card-top">
                  <span class="card-icon">${item.icon || '🏷️'}</span>
                  <button class="btn-sound-mini" title="點擊發音">🔊</button>
                </div>
                <div class="card-word-ko">${item.kr}</div>
                <div class="card-word-rom">${item.rom || ''}</div>
                ${item.haeyo ? `<div class="card-haeyo-pill">⚡ 해요體: ${item.haeyo}</div>` : ''}
                <div class="card-word-zh">${item.zh || ''}</div>
                ${item.tip ? `<div class="card-tip">${item.tip}</div>` : ''}
              </div>
            `).join('')}
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

  openToc() {
    if (!this.tocList || !this.tocModal) return;
    const modeConfig = this.modes[this.currentMode] || { label: '百科', icon: '📖' };
    const modeName = `${modeConfig.icon} ${modeConfig.label}主題目錄`;
    const tocModalTitle = document.querySelector('.toc-modal .toc-title');
    if (tocModalTitle) tocModalTitle.textContent = modeName;

    this.tocList.innerHTML = this.pages.map((p, idx) => `
      <div class="toc-item ${idx === this.currentPageIndex ? 'active' : ''}" onclick="app.goToPage(${idx}); app.closeToc();">
        <div class="toc-item-left">
          <span class="toc-item-num">${String(idx + 1).padStart(2, '0')}</span>
          <span style="font-size:1.3rem;">${p.domainIcon || '📖'}</span>
          <div>
            <div class="toc-item-title">${p.titleKo} · <span style="color:#718096;font-size:0.9rem;">${p.titleZh}</span></div>
            <div class="toc-item-zh" style="font-size:0.78rem;color:#A0AEC0;">${p.domainName}</div>
          </div>
        </div>
        <span style="font-size:0.85rem;color:#A0AEC0;">➔</span>
      </div>
    `).join('');
    this.tocModal.classList.add('show');
  }

  closeToc() {
    if (this.tocModal) {
      this.tocModal.classList.remove('show');
    }
  }

  speak(text, el = null) {
    if (!this.synth) return;
    this.synth.cancel();

    if (el) {
      el.classList.add('is-playing');
      setTimeout(() => el.classList.remove('is-playing'), 800);
    }

    const cleanText = text.split('/')[0].trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.88;

    this.synth.speak(utterance);
  }
}

// 初始化全域應用
let app = null;
window.addEventListener('DOMContentLoaded', () => {
  app = new EncyclopediaApp();
});

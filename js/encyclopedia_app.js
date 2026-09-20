/**
 * 韓語圖解百科全書互動引擎 (Encyclopedia App Logic)
 * 支援：翻頁切換、Web Speech 韓語發音、全域目錄、鍵盤快速鍵與觸控手勢
 */

class EncyclopediaApp {
  constructor() {
    this.pages = typeof ENCYCLOPEDIA_PAGES !== 'undefined' ? ENCYCLOPEDIA_PAGES : [];
    this.currentPageIndex = 0;
    this.isPlayingAudio = false;
    this.synth = window.speechSynthesis || null;

    this.initElements();
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
    if (this.pageCounter) this.pageCounter.textContent = pageNumStr;
    if (this.navPageInfo) this.navPageInfo.textContent = `Page ${pageNumStr}`;

    // 更新 Stepper Dots
    if (this.pageStepper) {
      this.pageStepper.innerHTML = this.pages.map((_, idx) => `
        <div class="step-dot ${idx === this.currentPageIndex ? 'active' : ''}" data-index="${idx}"></div>
      `).join('');

      this.pageStepper.querySelectorAll('.step-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          this.goToPage(parseInt(dot.dataset.index, 10));
        });
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

    // 動畫淡出淡入
    this.pageCanvas.style.opacity = '0';
    this.pageCanvas.style.transform = 'translateY(8px)';

    setTimeout(() => {
      let sectionsHtml = '';

      page.sections.forEach(sec => {
        sectionsHtml += `<div class="page-section">`;
        if (sec.sectionTitle) {
          sectionsHtml += `<h3 class="section-heading">${sec.sectionTitle}</h3>`;
        }

        if (sec.type === 'cards-list' || sec.type === 'cards-grid-compact') {
          const gridClass = sec.type === 'cards-list' ? 'cards-grid' : 'cards-grid-compact';
          sectionsHtml += `<div class="${gridClass}">`;
          sec.items.forEach(item => {
            sectionsHtml += `
              <div class="vocab-card" onclick="app.speak('${item.kr}', this)">
                <div class="card-top">
                  <span class="card-icon">${item.icon || '🏷️'}</span>
                  <button class="btn-sound-mini" title="點擊發音">🔊</button>
                </div>
                <div class="card-word-ko">${item.kr}</div>
                <div class="card-word-rom">${item.rom}</div>
                <div class="card-word-zh">${item.zh}</div>
                ${item.tip ? `<div class="card-tip">${item.tip}</div>` : ''}
              </div>
            `;
          });
          sectionsHtml += `</div>`;
        } else if (sec.type === 'pills-list') {
          sectionsHtml += `<div class="pills-list">`;
          sec.items.forEach(item => {
            sectionsHtml += `
              <div class="pill-card" onclick="app.speak('${item.kr}', this)">
                <span class="pill-icon">${item.icon || '📍'}</span>
                <div class="pill-content">
                  <div class="pill-ko">${item.kr} <span style="font-size:0.8rem;color:var(--text-rom);font-weight:normal;">(${item.rom})</span></div>
                  <div class="pill-zh">${item.zh} · <span style="color:#7F8C8D;font-weight:normal;">${item.tip || ''}</span></div>
                </div>
              </div>
            `;
          });
          sectionsHtml += `</div>`;
        } else if (sec.type === 'comparison-box') {
          sectionsHtml += `<div class="comparison-grid">`;
          sec.items.forEach(group => {
            sectionsHtml += `
              <div class="comparison-box">
                <div class="comparison-label">${group.label}</div>
                <div class="comparison-items">
                  ${group.items.map(item => `
                    <div class="vocab-card" style="margin-bottom:0;" onclick="app.speak('${item.kr}', this)">
                      <div class="card-top">
                        <span class="card-icon">${item.icon || '✨'}</span>
                        <button class="btn-sound-mini">🔊</button>
                      </div>
                      <div class="card-word-ko">${item.kr}</div>
                      <div class="card-word-rom">${item.rom}</div>
                      <div class="card-word-zh">${item.zh}</div>
                      ${item.tip ? `<div class="card-tip">${item.tip}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          });
          sectionsHtml += `</div>`;
        }

        sectionsHtml += `</div>`;
      });

      this.pageCanvas.innerHTML = `
        <div class="page-hero">
          <div class="page-category-tag" style="background:${page.accentBg || '#F5F5F5'};color:${page.themeColor || '#333'};">
            ${page.categoryIcon || '📚'} ${page.category}
          </div>
          <div class="page-title-row">
            <h1 class="page-title-ko">${page.titleKo}</h1>
            <span class="page-title-zh">${page.titleZh}</span>
            <span class="page-title-rom">(${page.titleRom})</span>
          </div>
          <p class="page-desc">${page.description || ''}</p>
        </div>
        <div class="page-body">
          ${sectionsHtml}
        </div>
      `;

      this.pageCanvas.style.opacity = '1';
      this.pageCanvas.style.transform = 'translateY(0)';
    }, 150);
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
    this.tocList.innerHTML = this.pages.map((p, idx) => `
      <div class="toc-item ${idx === this.currentPageIndex ? 'active' : ''}" onclick="app.goToPage(${idx}); app.closeToc();">
        <div class="toc-item-left">
          <span class="toc-item-num">${String(idx + 1).padStart(2, '0')}</span>
          <span style="font-size:1.2rem;">${p.categoryIcon || '📖'}</span>
          <div>
            <div class="toc-item-title">${p.titleKo}</div>
            <div class="toc-item-zh">${p.titleZh}</div>
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

    // 視覺回饋
    if (el) {
      el.classList.add('is-playing');
      setTimeout(() => el.classList.remove('is-playing'), 800);
    }

    const cleanText = text.split('/')[0].trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.88; // 稍微放慢，發音更清晰

    this.synth.speak(utterance);
  }
}

// 初始化全域應用
let app = null;
window.addEventListener('DOMContentLoaded', () => {
  app = new EncyclopediaApp();
});

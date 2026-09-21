/**
 * 韓語圖解生活百科全書 - 全域多向即時搜尋引擎 (Encyclopedia Search Engine)
 * 支援五向跨語言秒級檢索：韓文 (애정)、中文 (愛情)、拼音 (aiqing)、羅馬拼音 (aejeong)、英文 (love)
 * 整合：13 大圖解生活百科卡片直達 ＋ TOPIK 5,666 詞庫 ＋ Kitty 擴充詞庫 ＋ 6,520 漢字大辭典
 */

(function () {
  'use strict';

  // 聲調移除輔助函式 (àiqíng -> aiqing)
  function stripPinyinTones(text) {
    if (!text) return '';
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  class EncyclopediaSearch {
    constructor() {
      this.index = [];
      this.isIndexLoaded = false;
      this.currentFilter = 'all';
      this.lastQuery = '';
      this.filteredResults = [];
      this.debounceTimer = null;

      this.initDOMElements();
      this.bindEvents();
      this.initIndex();
    }

    initDOMElements() {
      this.container = document.getElementById('search-section-wrapper');
      this.input = document.getElementById('search-input');
      this.btnClear = document.getElementById('btn-search-clear');
      this.btnSubmit = document.getElementById('btn-search-submit');
      this.resultsPanel = document.getElementById('search-results-panel');
      this.statsBadge = document.getElementById('search-stats-badge');
      this.filterPills = document.getElementById('search-filter-pills');
      this.resultsList = document.getElementById('search-results-list');
      this.btnCloseResults = document.getElementById('btn-results-close');
    }

    initIndex() {
      // 若 search_index.js 已經載入
      if (window.ENCYCLOPEDIA_SEARCH_INDEX && Array.isArray(window.ENCYCLOPEDIA_SEARCH_INDEX)) {
        this.index = window.ENCYCLOPEDIA_SEARCH_INDEX;
        this.isIndexLoaded = true;
      } else {
        // 動態延遲確認
        const checkTimer = setInterval(() => {
          if (window.ENCYCLOPEDIA_SEARCH_INDEX) {
            this.index = window.ENCYCLOPEDIA_SEARCH_INDEX;
            this.isIndexLoaded = true;
            clearInterval(checkTimer);
          }
        }, 100);
      }
    }

    bindEvents() {
      if (!this.input) return;

      // 即時輸入檢索 (防抖 150ms)
      this.input.addEventListener('input', (e) => {
        const query = e.target.value;
        if (this.btnClear) {
          this.btnClear.style.display = query.length > 0 ? 'inline-flex' : 'none';
        }
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
          this.executeSearch(query);
        }, 150);
      });

      // 點擊搜尋按鈕
      if (this.btnSubmit) {
        this.btnSubmit.addEventListener('click', () => {
          this.executeSearch(this.input.value);
        });
      }

      // Enter 鍵觸發搜尋
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          clearTimeout(this.debounceTimer);
          this.executeSearch(this.input.value);
        } else if (e.key === 'Escape') {
          this.closeResults();
        }
      });

      // 清空按鈕
      if (this.btnClear) {
        this.btnClear.addEventListener('click', () => {
          this.input.value = '';
          this.btnClear.style.display = 'none';
          this.closeResults();
          this.input.focus();
        });
      }

      // 關閉結果面板按鈕
      if (this.btnCloseResults) {
        this.btnCloseResults.addEventListener('click', () => {
          this.closeResults();
        });
      }

      // 篩選標籤點擊
      if (this.filterPills) {
        this.filterPills.addEventListener('click', (e) => {
          const pill = e.target.closest('.filter-pill');
          if (!pill) return;
          const filter = pill.dataset.filter;
          this.setFilter(filter);
        });
      }

      // 點擊外部自動收起
      document.addEventListener('click', (e) => {
        if (this.resultsPanel && this.resultsPanel.style.display !== 'none') {
          if (!this.container.contains(e.target)) {
            this.closeResults();
          }
        }
      });
    }

    executeSearch(query) {
      const q = (query || '').trim();
      this.lastQuery = q;

      if (!q) {
        this.closeResults();
        return;
      }

      if (!this.isIndexLoaded && window.ENCYCLOPEDIA_SEARCH_INDEX) {
        this.index = window.ENCYCLOPEDIA_SEARCH_INDEX;
        this.isIndexLoaded = true;
      }

      if (!this.index || this.index.length === 0) {
        console.warn('搜尋索引尚未載入完成');
        return;
      }

      const qLower = q.toLowerCase();
      const qClean = stripPinyinTones(qLower);

      // 評分匹配機制
      const matches = [];

      for (let i = 0; i < this.index.length; i++) {
        // [0:kr, 1:rom, 2:zh, 3:en, 4:py, 5:pyClean, 6:lvl, 7:pos, 8:wikiList]
        const item = this.index[i];
        const kr = item[0] || '';
        const rom = (item[1] || '').toLowerCase();
        const zh = (item[2] || '').toLowerCase();
        const en = (item[3] || '').toLowerCase();
        const py = (item[4] || '').toLowerCase();
        const pyClean = item[5] || '';
        const wikiList = item[8] || [];

        let score = 0;

        // 1. 韓文比對
        if (kr === q) {
          score += 120;
        } else if (kr.startsWith(q)) {
          score += 90;
        } else if (kr.includes(q)) {
          score += 70;
        }

        // 2. 中文比對
        if (zh) {
          if (zh === qLower) {
            score += 100;
          } else if (zh.startsWith(qLower)) {
            score += 80;
          } else if (zh.includes(qLower)) {
            score += 60;
          }
        }

        // 3. 拼音比對 (免聲調)
        if (pyClean && qClean) {
          if (pyClean === qClean) {
            score += 95;
          } else if (pyClean.startsWith(qClean)) {
            score += 75;
          } else if (pyClean.includes(qClean)) {
            score += 50;
          }
        }

        // 4. 羅馬拼音比對
        if (rom) {
          if (rom === qLower) {
            score += 85;
          } else if (rom.startsWith(qLower)) {
            score += 65;
          } else if (rom.includes(qLower)) {
            score += 45;
          }
        }

        // 5. 英文釋義比對
        if (en) {
          if (en.startsWith(qLower)) {
            score += 55;
          } else if (en.includes(qLower)) {
            score += 40;
          }
        }

        if (score > 0) {
          // 若有圖解百科卡片加分優先排在前面
          if (wikiList.length > 0) {
            score += 15;
          }
          matches.push({
            score,
            data: item
          });
        }
      }

      // 依分數由高到低排序
      matches.sort((a, b) => b.score - a.score);

      // 取出資料本體
      this.filteredResults = matches.map(m => m.data);
      this.renderResults();
      this.openResults();
    }

    setFilter(filter) {
      this.currentFilter = filter;
      if (this.filterPills) {
        this.filterPills.querySelectorAll('.filter-pill').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.filter === filter);
        });
      }
      this.renderResults();
    }

    renderResults() {
      if (!this.resultsList) return;

      const q = this.lastQuery;
      const allResults = this.filteredResults;

      // 統計分類筆數
      const wikiCount = allResults.filter(item => item[8] && item[8].length > 0).length;
      const dictCount = allResults.filter(item => item[6] && item[6].length > 0).length;
      const hanjaCount = allResults.filter(item => item[4] && item[4].length > 0).length;

      // 更新篩選標籤上的數量
      if (this.filterPills) {
        const pAll = this.filterPills.querySelector('[data-filter="all"]');
        const pWiki = this.filterPills.querySelector('[data-filter="wiki"]');
        const pDict = this.filterPills.querySelector('[data-filter="dict"]');
        const pHanja = this.filterPills.querySelector('[data-filter="hanja"]');

        if (pAll) pAll.textContent = `全部 (${allResults.length})`;
        if (pWiki) pWiki.textContent = `📖 圖解百科 (${wikiCount})`;
        if (pDict) pDict.textContent = `📚 核心詞庫 (${dictCount})`;
        if (pHanja) pHanja.textContent = `🀄 漢字詞 (${hanjaCount})`;
      }

      // 依當前篩選過濾
      let displayItems = allResults;
      if (this.currentFilter === 'wiki') {
        displayItems = allResults.filter(item => item[8] && item[8].length > 0);
      } else if (this.currentFilter === 'dict') {
        displayItems = allResults.filter(item => item[6] && item[6].length > 0);
      } else if (this.currentFilter === 'hanja') {
        displayItems = allResults.filter(item => item[4] && item[4].length > 0);
      }

      // 更新總數 Badge
      if (this.statsBadge) {
        this.statsBadge.textContent = `找到 ${displayItems.length} 筆結果`;
      }

      if (displayItems.length === 0) {
        this.resultsList.innerHTML = `
          <div class="search-empty-state">
            <div class="empty-icon">🔍</div>
            <div class="empty-text">找不到符合「<strong>${this.escapeHtml(q)}</strong>」的詞彙</div>
            <div class="empty-hint">請嘗試輸入韓文、中文繁簡體、拼音、羅馬拼音或英文單字</div>
          </div>
        `;
        return;
      }

      // 限制最多顯示 50 筆以保證極致流暢度
      const renderLimit = Math.min(displayItems.length, 50);
      const itemsToRender = displayItems.slice(0, renderLimit);

      let html = '';
      for (const item of itemsToRender) {
        // [0:kr, 1:rom, 2:zh, 3:en, 4:py, 5:pyClean, 6:lvl, 7:pos, 8:wikiList]
        const kr = item[0] || '';
        const rom = item[1] || '';
        const zh = item[2] || '';
        const en = item[3] || '';
        const py = item[4] || '';
        const lvl = item[6] || '';
        const pos = item[7] || '';
        const wikiList = item[8] || [];

        const hasWiki = wikiList.length > 0;
        const firstWiki = hasWiki ? wikiList[0] : null;

        html += `
          <div class="search-result-card ${hasWiki ? 'has-wiki-card' : ''}">
            <div class="result-card-main">
              <div class="result-word-header">
                <span class="result-kr-word">${this.highlightMatch(kr, q)}</span>
                <button type="button" class="btn-sound-chip btn-search-tts" onclick="window.app && window.app.speak('${kr}', this)" title="朗讀發音">
                  🔊
                </button>
                <span class="result-rom">${rom ? `[${this.highlightMatch(rom, q)}]` : ''}</span>
                ${py ? `<span class="result-py-badge" title="漢語拼音">🀄 ${this.highlightMatch(py, q)}</span>` : ''}
                ${lvl ? `<span class="result-lvl-badge">TOPIK ${lvl}級</span>` : ''}
              </div>
              <div class="result-zh-mean">${this.highlightMatch(zh, q)}</div>
              ${en ? `<div class="result-en-mean">${this.highlightMatch(en, q)}</div>` : ''}
              ${pos ? `<div class="result-pos-note">${pos}</div>` : ''}
            </div>

            ${hasWiki ? `
              <div class="result-wiki-action">
                <button type="button" class="btn-jump-wiki" onclick="window.encyclopediaSearch.jumpToCard('${firstWiki.mode}', ${firstWiki.pageIdx}, ${firstWiki.cardIdx})">
                  <span class="wiki-jump-icon">${firstWiki.icon || '📖'}</span>
                  <span class="wiki-jump-text">
                    <span class="wiki-tag">圖解百科直達</span>
                    <span class="wiki-title">${firstWiki.modeLabel} · ${firstWiki.pageTitle || firstWiki.domain} (第 ${firstWiki.pageIdx + 1} 頁)</span>
                  </span>
                  <span class="wiki-arrow">👉</span>
                </button>
              </div>
            ` : ''}
          </div>
        `;
      }

      if (displayItems.length > 50) {
        html += `
          <div class="search-more-hint">
            還有 ${displayItems.length - 50} 筆結果未展示，請縮小關鍵字範圍以獲得精準結果。
          </div>
        `;
      }

      this.resultsList.innerHTML = html;
    }

    jumpToCard(mode, pageIdx, cardIdx) {
      this.closeResults();
      if (window.app && typeof window.app.jumpToCard === 'function') {
        window.app.jumpToCard(mode, pageIdx, cardIdx);
      } else if (window.app && typeof window.app.setMode === 'function') {
        window.app.setMode(mode, false);
        window.app.currentPageIndex = pageIdx;
        window.app.render();
      }
    }

    openResults() {
      if (this.resultsPanel) {
        this.resultsPanel.style.display = 'block';
      }
    }

    closeResults() {
      if (this.resultsPanel) {
        this.resultsPanel.style.display = 'none';
      }
    }

    highlightMatch(text, query) {
      if (!text || !query) return this.escapeHtml(text);
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      try {
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return this.escapeHtml(text).replace(regex, '<mark class="search-highlight">$1</mark>');
      } catch (e) {
        return this.escapeHtml(text);
      }
    }

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }
  }

  // 初始化並掛載至 window
  document.addEventListener('DOMContentLoaded', () => {
    window.encyclopediaSearch = new EncyclopediaSearch();
  });
})();

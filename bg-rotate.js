/**
 * bg-rotate.js
 * Choyxona Menyusi — Mandala fon aylanishi (Feruza fon + ko'k mandala)
 * 
 * Talablar:
 * 1. Scroll window yoki maxsus konteynerda ekanini aniqlash.
 * 2. Lerp interpolatsiyasi: current += (target - current) * 0.1.
 * 3. .bg-scene ga --r CSS o'zgaruvchisini yozish.
 * 4. Farq < 0.05 bo'lganda rAF ni to'xtatish (CPU va batareyani tejash).
 * 5. Passive listener ({ passive: true }).
 * 6. prefers-reduced-motion: reduce holatida animatsiyani to'xtatish.
 */

(function () {
  'use strict';

  // Harakatni kamaytirish talabi bormi?
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    // Agar foydalanuvchi reduced-motion yoqqan bo'lsa, aylantirmaymiz
    return;
  }

  function initBgRotate() {
    const bgScene = document.querySelector('.bg-scene');
    if (!bgScene) return;

    // 1. Scroll manbasini aniqlash (window yoki maxsus ichki konteyner)
    let scrollElement = null;

    function detectScrollContainer() {
      // Dastlab tekshiriladigan ehtimoliy konteynerlar
      const candidates = [
        document.getElementById('galleryContainer'),
        document.getElementById('homeMenuWrap'),
        document.querySelector('.gallery-wrapper'),
        document.scrollingElement,
        document.documentElement,
        document.body
      ];

      for (const el of candidates) {
        if (!el) continue;
        const style = window.getComputedStyle(el);
        const hasScrollStyle = (style.overflowY === 'auto' || style.overflowY === 'scroll');
        const hasScrollHeight = el.scrollHeight > el.clientHeight + 10;
        if (hasScrollStyle && hasScrollHeight && el !== document.documentElement && el !== document.body) {
          return el;
        }
      }
      return null;
    }

    scrollElement = detectScrollContainer();

    function getScrollPosition() {
      if (scrollElement) {
        return scrollElement.scrollTop;
      }
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    let current = 0;
    let target = 0;
    let rafId = null;
    let isRunning = false;

    function update() {
      const diff = target - current;

      // Farq 0.05 dan kichik bo'lsa, to'xtatish
      if (Math.abs(diff) < 0.05) {
        current = target;
        bgScene.style.setProperty('--r', current.toFixed(2));
        rafId = null;
        isRunning = false;
        return;
      }

      // Lerp formulasi
      current += diff * 0.1;
      bgScene.style.setProperty('--r', current.toFixed(2));

      rafId = requestAnimationFrame(update);
    }

    function onScroll() {
      target = getScrollPosition();
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(update);
      }
    }

    // Window scroll tinglovchisi (passive: true)
    window.addEventListener('scroll', onScroll, { passive: true });

    // Agar alohida konteyner bo'lsa yoki dinamik almashsa, unga ham listener ulaymiz
    if (scrollElement) {
      scrollElement.addEventListener('scroll', onScroll, { passive: true });
    }

    // Sahifa dinamik yuklanganda qayta tekshirish (masalan, bo'lim tanlanganda)
    window.addEventListener('resize', () => {
      const newScrollEl = detectScrollContainer();
      if (newScrollEl && newScrollEl !== scrollElement) {
        if (scrollElement) {
          scrollElement.removeEventListener('scroll', onScroll);
        }
        scrollElement = newScrollEl;
        scrollElement.addEventListener('scroll', onScroll, { passive: true });
      }
      onScroll();
    }, { passive: true });

    // Boshlang'ich qiymatni o'rnatish
    target = getScrollPosition();
    current = target;
    bgScene.style.setProperty('--r', current.toFixed(2));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBgRotate);
  } else {
    initBgRotate();
  }
})();

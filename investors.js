/* =========================================================================
   Project Remo · For Investors page
   ─────────────────────────────────────────────────────────────────────────
   Self-contained — does NOT depend on site.js.
   Handles:
   - reveal-on-scroll (IntersectionObserver)
   - sticky topbar shadow
   - chapter-rail active state syncing with viewport section
   - chapter-now readout in topbar
   - smooth scroll for in-page anchors
   - column-chart fill from data-h
   ========================================================================= */

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ─── 1. reveal-on-scroll ──────────────────────────────────────────────
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  // ─── 2. topbar scroll state ───────────────────────────────────────────
  const topbar = $("#topbar");
  if (topbar) {
    const setScrolled = () => {
      topbar.classList.toggle("scrolled", window.scrollY > 30);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  // ─── 3. chapter-rail active + chapter-now readout ─────────────────────
  const sections = $$("section[data-chapter]");
  const railLinks = $$(".chapter-rail a");
  const chapterNow = $("#chapter-now");
  const railByNum = new Map();
  railLinks.forEach((a) => railByNum.set(a.dataset.num, a));

  const sectionSpy = () => {
    // pick section nearest the top fourth of viewport
    const vh = window.innerHeight;
    const probe = vh * 0.30;
    let active = null;
    sections.forEach((sec) => {
      const r = sec.getBoundingClientRect();
      if (r.top <= probe && r.bottom > probe) active = sec;
    });
    if (!active) {
      // fallback to last passed section
      sections.forEach((sec) => {
        const r = sec.getBoundingClientRect();
        if (r.top <= probe) active = sec;
      });
    }
    if (!active) return;
    const num = active.dataset.chapter;
    const name = active.dataset.chapterName || "";
    railLinks.forEach((a) => a.classList.toggle("active", a.dataset.num === num));
    if (chapterNow) {
      const b = chapterNow.querySelector("b");
      const span = chapterNow.querySelector("span");
      if (b) b.textContent = num;
      if (span) span.textContent = name;
    }
  };
  if (sections.length) {
    sectionSpy();
    window.addEventListener("scroll", sectionSpy, { passive: true });
    window.addEventListener("resize", sectionSpy);
  }

  // ─── 4. smooth in-page scroll ─────────────────────────────────────────
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  });

  // ─── 5. column-chart fill (data-h % heights) ──────────────────────────
  // The CSS sets style.height inline; here we also support data-h as a
  // fallback in case future edits omit the inline style.
  $$(".cbar-fill[data-h]").forEach((el) => {
    if (!el.style.height) el.style.height = `${el.dataset.h}%`;
  });

  // ─── 6a. GAN before/after slider · 同消费者页 site.js 实现 ─────────────
  // 完全匹配消费者 #truecolor 的 #color-slider / #color-restored / #color-handle
  // restored 用 clip-path: inset(0 0 0 V%) —— 左侧裁 V%，露出右侧 V%~100% 区段
  const colorSlider   = document.getElementById("color-slider");
  const colorRestored = document.getElementById("color-restored");
  const colorHandle   = document.getElementById("color-handle");
  const updateColorCompare = (value) => {
    const v = Math.max(0, Math.min(100, Number(value)));
    if (colorRestored) colorRestored.style.clipPath = `inset(0 0 0 ${v}%)`;
    if (colorHandle)   colorHandle.style.left       = `${v}%`;
  };
  if (colorSlider) {
    updateColorCompare(colorSlider.value);
    colorSlider.addEventListener("input", (e) => updateColorCompare(e.target.value));
  }

  // ─── 6. animate hbar fill when chart enters viewport ──────────────────
  const hbarFills = $$(".hbar .hbar-fill, .cbar .cbar-fill");
  if ("IntersectionObserver" in window && hbarFills.length) {
    const seen = new WeakSet();
    const bio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !seen.has(e.target)) {
            seen.add(e.target);
            // re-trigger CSS transition: read computed style, clear, restore
            const fill = e.target;
            if (fill.classList.contains("hbar-fill")) {
              const w = getComputedStyle(fill).getPropertyValue("--w").trim() || "50%";
              fill.style.setProperty("--w", "0%");
              requestAnimationFrame(() => {
                requestAnimationFrame(() => fill.style.setProperty("--w", w));
              });
            } else if (fill.classList.contains("cbar-fill")) {
              const h = fill.style.height;
              fill.style.height = "0%";
              requestAnimationFrame(() => {
                requestAnimationFrame(() => (fill.style.height = h));
              });
            }
            bio.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );
    hbarFills.forEach((el) => bio.observe(el));
  }
})();

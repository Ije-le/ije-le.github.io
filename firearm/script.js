// ─── 1. HERO IMAGE FADE TO BLACK ──────────────────────────
const heroEl = document.getElementById('hero');
const heroImg = document.getElementById('hero-img');

function updateHeroFade() {
  const scrollY = window.scrollY;
  const total = heroEl.offsetHeight;
  const vh = window.innerHeight;

  // The sticky phase ends when scrollY >= total - vh
  // We start fading in the last ~45% of the sticky scroll
  const fadeStart = total - vh - vh * 0.45;
  const fadeEnd   = total - vh;

  if (scrollY <= fadeStart) {
    heroImg.style.opacity = 1;
  } else if (scrollY >= fadeEnd) {
    heroImg.style.opacity = 0;
  } else {
    const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    heroImg.style.opacity = 1 - progress;
  }
}

// ─── 2. SCROLL HINT ────────────────────────────────────────
const scrollHint = document.getElementById('scroll-hint');

function updateScrollHint() {
  if (window.scrollY > window.innerHeight * 0.3) {
    scrollHint.style.opacity = 0;
  } else {
    scrollHint.style.opacity = 1;
  }
}

// ─── 3. PARAGRAPH REVEAL / FADE-OUT ───────────────────────
const paraWraps = document.querySelectorAll('.pullquote');

function updateParas() {
  const vh = window.innerHeight;

  paraWraps.forEach(el => {
    const rect = el.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;

    // Fade IN: trigger when element's top enters lower 82% of screen
    const inView = top < vh * 0.82 && bottom > 0;

    // Fade OUT: element has scrolled above 18% of screen height
    const aboveView = bottom < vh * 0.18;

    if (aboveView) {
      el.classList.remove('visible');
      el.classList.add('faded-out');
    } else if (inView) {
      el.classList.remove('faded-out');
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
      el.classList.remove('faded-out');
    }
  });
}

// ─── MAIN SCROLL HANDLER ───────────────────────────────────
function onScroll() {
  updateHeroFade();
  updateScrollHint();
  updateParas();
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });

// Init on load
onScroll();
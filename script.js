/* Fleet Ready Logistics — script.js */

// ===== LANGUAGE TOGGLE =====
const LANG_KEY = 'frl_lang';

function setLang(lang) {
  document.body.classList.remove('lang-en', 'lang-es');
  document.body.classList.add('lang-' + lang);
  localStorage.setItem(LANG_KEY, lang);

  const btn = document.getElementById('lang-btn');
  const mobileBtn = document.getElementById('mobile-lang-btn');
  if (btn) btn.textContent = lang === 'en' ? 'ES' : 'EN';
  if (mobileBtn) mobileBtn.textContent = lang === 'en' ? 'ES' : 'EN';
}

function initLang() {
  const saved = localStorage.getItem(LANG_KEY) || 'en';
  setLang(saved);
}

document.getElementById('lang-btn')?.addEventListener('click', () => {
  const current = localStorage.getItem(LANG_KEY) || 'en';
  setLang(current === 'en' ? 'es' : 'en');
});

document.getElementById('mobile-lang-btn')?.addEventListener('click', () => {
  const current = localStorage.getItem(LANG_KEY) || 'en';
  setLang(current === 'en' ? 'es' : 'en');
  closeMobileMenu();
});

// ===== MOBILE NAV =====
const mobileMenu = document.getElementById('mobile-menu');

function openMobileMenu() {
  mobileMenu?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu?.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('hamburger')?.addEventListener('click', openMobileMenu);
document.getElementById('mobile-close')?.addEventListener('click', closeMobileMenu);

document.querySelectorAll('#mobile-menu .mobile-nav-links a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on backdrop click
mobileMenu?.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMobileMenu();
});

// ===== SMOOTH SCROLL (for hash links) =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 110; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== NAV SHADOW ON SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
}, { passive: true });

// Add scrolled style
const style = document.createElement('style');
style.textContent = '#nav.scrolled { box-shadow: 0 2px 16px rgba(0,0,0,0.10); }';
document.head.appendChild(style);

// ===== INIT =====
initLang();

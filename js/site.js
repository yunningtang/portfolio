/* ── Theme Toggle ── */
(function initTheme() {
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  syncThemeIcons();
})();

function syncThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('[data-theme-icon="light"]').forEach(
    (el) => el.classList.toggle('hidden', !isDark)
  );
  document.querySelectorAll('[data-theme-icon="dark"]').forEach(
    (el) => el.classList.toggle('hidden', isDark)
  );
}

document.querySelectorAll('.theme-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    syncThemeIcons();
  });
});

/* ── Custom Cursor ── */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (window.matchMedia('(pointer: fine)').matches && cursorDot && cursorOutline) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorOutline.animate(
      { left: `${e.clientX}px`, top: `${e.clientY}px` },
      { duration: 500, fill: 'forwards' }
    );
  });

  document.querySelectorAll('.hover-trigger').forEach((el) => {
    el.addEventListener('mouseenter', () =>
      document.body.classList.add('hovering')
    );
    el.addEventListener('mouseleave', () =>
      document.body.classList.remove('hovering')
    );
  });
}

/* ── ScrollSpy (index page sections) ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length > 0 && navLinks.length > 0) {
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      if (scrollY >= section.offsetTop - 300) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href.includes('#') && href.includes(current)) {
        link.classList.add('active');
      }
    });
  });
}

/* ── Pathname-based Nav Highlight (listing pages) ── */
(function highlightActiveNav() {
  const currentPage = (
    window.location.pathname.split('/').pop() || 'index.html'
  ).toLowerCase();
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = (link.getAttribute('href') || '').split('#')[0];
    const hrefPage = (href.split('/').pop() || '').toLowerCase();
    if (hrefPage && hrefPage === currentPage) {
      link.classList.add('active');
    }
  });
})();

/* ── Mobile Menu ── */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', closeMenu)
  );
}

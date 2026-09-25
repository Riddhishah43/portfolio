(function () {
  'use strict';

  // Theme
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Scroll animations
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));

  // Button ripple
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const r = this.getBoundingClientRect();
      const s = Math.max(r.width, r.height);
      const rip = document.createElement('span');
      rip.style.cssText = `position:absolute;width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px;background:rgba(255,255,255,0.25);border-radius:50%;transform:scale(0);animation:cs-ripple 0.5s ease-out forwards;pointer-events:none;z-index:0;`;
      this.appendChild(rip);
      setTimeout(() => rip.remove(), 500);
    });
  });

  const s = document.createElement('style');
  s.textContent = '@keyframes cs-ripple{to{transform:scale(2.5);opacity:0;}}';
  document.head.appendChild(s);
})();

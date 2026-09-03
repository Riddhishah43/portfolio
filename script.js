/* ═══════════════════════════════════════════════
   Riddhi Shah — Portfolio Scripts
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── DOM References ───────────────────────── */
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');
  const particlesContainer = document.getElementById('particles');
  const codeRainContainer = document.getElementById('codeRain');
  const typingEl = document.getElementById('typingText');
  const animElements = document.querySelectorAll('.anim-fade-up');
  const allNavLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  /* ── Dark / Light Mode ────────────────────── */
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  /* ── Hamburger Menu ───────────────────────── */
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ── Sticky Nav on Scroll ─────────────────── */
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('nav--scrolled', scrollY > 50);
    lastScroll = scrollY;
  }, { passive: true });

  /* ── Active Section Highlight ─────────────── */
  function updateActiveLink() {
    const scrollY = window.scrollY + 150;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        allNavLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ── Entrance Animations (IntersectionObserver) ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animElements.forEach(el => observer.observe(el));

  /* ── Typing Effect ────────────────────────── */
  const typingCommands = [
    'echo "Learning. Building. Experimenting."',
    'echo "Web Development & AI"',
    'git commit -m "keep exploring"',
    'npm run build --learning',
    'python explore_ai.py',
    'echo "BCA Student | Builder"',
  ];

  let cmdIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 80;

  function typeEffect() {
    const current = typingCommands[cmdIndex];

    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 40;
    } else {
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 80;
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      typingDelay = 2000; // pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      cmdIndex = (cmdIndex + 1) % typingCommands.length;
      typingDelay = 400;
    }

    setTimeout(typeEffect, typingDelay);
  }

  setTimeout(typeEffect, 800);

  /* ── Particles ────────────────────────────── */
  function createParticles() {
    const count = window.innerWidth < 600 ? 15 : 30;
    const colors = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)'];

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const dur = Math.random() * 15 + 10;
      const delay = Math.random() * 10;

      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration: ${dur}s;
        animation-delay: ${delay}s;
      `;
      particlesContainer.appendChild(p);
    }
  }

  createParticles();

  /* ── Code Rain ────────────────────────────── */
  function createCodeRain() {
    const chars = '{}[]()<>=/;:const let var if else return import def class async await pip install echo git npm python print 0 1 true false'.split('');
    const count = window.innerWidth < 600 ? 12 : 25;

    for (let i = 0; i < count; i++) {
      const span = document.createElement('span');
      span.classList.add('code-rain-char');
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.left = `${Math.random() * 100}%`;
      span.style.animationDuration = `${Math.random() * 8 + 6}s`;
      span.style.animationDelay = `${Math.random() * 10}s`;
      span.style.fontSize = `${Math.random() * 6 + 10}px`;
      codeRainContainer.appendChild(span);
    }
  }

  createCodeRain();

  /* ── Button Ripple Micro-interaction ──────── */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
        background: rgba(255,255,255,0.25);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-anim 0.5s ease-out forwards;
        pointer-events: none;
        z-index: 0;
      `;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  // Inject ripple keyframes once
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple-anim {
      to { transform: scale(2.5); opacity: 0; }
    }
  `;
  document.head.appendChild(rippleStyle);

  /* ── About: Approach Loop Animation ──────── */
  const approachSteps = document.querySelectorAll('.about__step');
  const loopLabel = document.getElementById('loopLabel');
  const loopProgress = document.getElementById('loopProgress');
  const stepLabels = ['Learn', 'Build', 'Experiment', 'Debug', 'Improve'];
  let approachIndex = 0;
  let approachInterval;

  function updateApproach() {
    approachSteps.forEach((s, i) => {
      s.classList.toggle('active', i === approachIndex);
    });
    if (loopLabel) loopLabel.textContent = stepLabels[approachIndex];
    if (loopProgress) {
      const progress = ((approachIndex + 1) / stepLabels.length) * 565.48;
      loopProgress.style.strokeDashoffset = 565.48 - progress;
    }
    approachIndex = (approachIndex + 1) % stepLabels.length;
  }

  function startApproachLoop() {
    approachInterval = setInterval(updateApproach, 1800);
  }

  // Start when About section is in view
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const approachObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startApproachLoop();
          approachObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    approachObserver.observe(aboutSection);
  }

})();

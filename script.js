// mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  }));

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // hero trunk-curve draw-on animation
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroPath = document.getElementById('trunk-path-hero');
  if (heroPath && !reduceMotion) {
    try {
      const len = heroPath.getTotalLength();
      heroPath.style.strokeDasharray = len;
      heroPath.style.strokeDashoffset = len;
      heroPath.style.transition = 'stroke-dashoffset 1.8s ease-out';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        heroPath.style.strokeDashoffset = '0';
      }));
    } catch (e) {}
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // countdown to Ganesh Chaturthi 2026 (14 Sept 2026, 00:00 IST)
  const target = new Date('2026-09-14T00:00:00+05:30').getTime();
  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = d;
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-min').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-sec').textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);

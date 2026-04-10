fetch('menu.html')
  .then(r => r.text())
  .then(html => {
    const el = document.querySelector('.roadmap');
    if (!el) return;
    el.innerHTML = html;
    const page = location.pathname.split('/').pop() || 'index.html';
    const active = el.querySelector('a[href="' + page + '"]');
    if (active) {
      active.classList.remove('done');
      active.classList.add('active');
      const label = active.querySelector('.lesson-label');
      if (label) label.textContent += ' ←';
    }
  });

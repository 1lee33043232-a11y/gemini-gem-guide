// 점 네비게이션 — 현재 보고 있는 슬라이드를 표시하고 클릭 시 이동
document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const nav = document.querySelector('.dot-nav');
  if (!nav || slides.length === 0) return;

  slides.forEach((slide, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `${i + 1}번 슬라이드로 이동`);
    dot.addEventListener('click', () => {
      slide.scrollIntoView({ behavior: 'smooth' });
    });
    nav.appendChild(dot);
  });

  const dots = Array.from(nav.querySelectorAll('button'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = slides.indexOf(entry.target);
          dots.forEach((d) => d.classList.remove('active'));
          if (dots[idx]) dots[idx].classList.add('active');
        }
      });
    },
    { threshold: 0.5 }
  );

  slides.forEach((slide) => observer.observe(slide));
});

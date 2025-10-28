document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(anchor.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
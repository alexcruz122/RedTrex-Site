// Contact toggle
const toggleBtn = document.getElementById('contact-toggle');
const contactPanel = document.getElementById('contact-panel');

toggleBtn.addEventListener('click', () => {
  contactPanel.classList.toggle('open');
});

// Open Legal page
const legalBtn = document.getElementById('legal-btn');
legalBtn.addEventListener('click', () => {
  window.open('legal.html', '_blank');
});

// Mobile Navbar Hide/Show on Scroll
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (window.innerWidth <= 768) {
    if (currentScroll > lastScroll && currentScroll > 50) {
      // Scrolling down -> hide nav
      nav.classList.add('hide');
    } else {
      // Scrolling up -> show nav
      nav.classList.remove('hide');
    }
  } else {
    // Always show nav on desktop
    nav.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

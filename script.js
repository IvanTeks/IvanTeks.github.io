/* =============================================
   PORTFOLIO — script.js

   What this does:
   1. Fade-up animation on scroll for key elements
   2. Contact form simulation (swap for real backend later)
   3. Nav active state on scroll
   ============================================= */

// ---- SCROLL REVEAL ----
// Adds .visible class when elements enter the viewport
// To animate a new element: give it the class "fade-up" in HTML

const revealEls = document.querySelectorAll(
  '.skill-card, .project-item, .about-big, .about-detail, .contact-heading, .contact-right'
);

revealEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // slight stagger for grid items
        entry.target.style.transitionDelay = `${i * 0.05}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));


// ---- CONTACT FORM ----
// Currently simulates a send. When you're ready to wire up a real
// backend (e.g. EmailJS, Formspree, or your own API), replace the
// setTimeout block with your actual fetch/POST call.

const form      = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // --- SWAP THIS OUT when you have a real backend ---
    setTimeout(() => {
      form.reset();
      submitBtn.style.display = 'none';
      successMsg.style.display = 'block';
    }, 1200);
    // --------------------------------------------------
  });
}


// ---- NAV: highlight active section on scroll ----
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--text)';
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => navObserver.observe(s));

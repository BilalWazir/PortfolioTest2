/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* TEXT ANIMATION CODES */

/* Typing text animation code */
const type_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      target.classList.add('typing');
      type_observer.unobserve(target);
    }
  });
});

/* This is set in place so that animated text only plays when a user scrolls down to them */
const typingTexts = document.querySelectorAll('.typing-text');
typingTexts.forEach((text) => {
  type_observer.observe(text);
});



function scrollToSection(selector) {
  document.querySelector(selector).scrollIntoView({
    behavior: 'smooth'
  });
}

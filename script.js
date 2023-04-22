
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



/* TEXT ANIMATION CODES*/


/*typing text animation code*/

const type_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('typing');
      }
  })
})


/*Sliding Text*/

const slide_observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

/*This is set in place so that animated text only plays when a user scrolls down to them*/

slide_observer.observe(document.querySelector('.animated-text'));
type_observer.observe(document.querySelector('.typing-text'));

const typingTexts = document.querySelectorAll('.typing-text');
typingTexts.forEach((text) => {
  type_observer.observe(text);
});
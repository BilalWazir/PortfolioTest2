// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Custom cursor tracking
const cursor = document.querySelector('.cursor');
const menuItems = document.querySelectorAll('nav a');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

menuItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('cursor-grow');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-grow');
  });
});

// Neon animated cursor
function initNeonCursor() {
  const neonCursor = window.neonCursor.default;
  neonCursor({
    el: document.getElementById('app'),
    shaderPoints: 16,
    curvePoints: 80,
    curveLerp: 0.5,
    radius1: 5,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
  });
}

initNeonCursor();

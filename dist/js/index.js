const navIcon = document.querySelector('#main-nav i');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-overlay a');

navIcon.addEventListener('click', () => navOverlay.classList.add('open'));

// close nav
function closeNav() {
  navOverlay.classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});

window.addEventListener('scroll', () => {
  const mainNav = document.querySelector('#main-nav');
  if(window.scrollY > 20) {
    mainNav.style.backgroundColor = 'rgba(0,0,0,0.7)';  
  } else {
    mainNav.style.backgroundColor = '#333';
  }
})



// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Sticky Header on Scroll
window.onscroll = function() {
  const header = document.querySelector('header');
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
};

// Dynamic Year in Footer
document.querySelector('footer p').innerText = `© ${new Date().getFullYear()} Rachel Clement`;

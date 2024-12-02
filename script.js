document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger-container');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-menu');
  const menuLinks = document.querySelectorAll('.menu-items a');

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking on a link
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
}); 
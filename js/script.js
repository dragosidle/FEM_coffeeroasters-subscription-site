const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.modal-menu');
const createPlanBtn = document.querySelectorAll('.create-plan-btn');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

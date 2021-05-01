const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.modal-menu');
const createPlanBtn = document.getElementById('create-plan-btn');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

createPlanBtn.addEventListener('click', () => {
  window.open('https://coffeeroastersco.netlify.app/plan.html');
});

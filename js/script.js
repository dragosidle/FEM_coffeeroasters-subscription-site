const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.modal-menu');
const createPlanBtn = document.querySelector('.create-plan-btn');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

if (createPlanBtn) {
  createPlanBtn.addEventListener('click', () => {
    window.open('https://coffeeroastersco.netlify.app/plan.html');
  });
}

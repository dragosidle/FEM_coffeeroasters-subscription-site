// navbar
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.modal-menu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

// PLAN CONSTRUCTOR OBJECT

const plan = {
  how: ['using Capsule', 'as Filter', 'as Espresso'],
  type: ['single origin', 'decaf', 'blended'],
  quantity: ['250g', '500g', '1000g'],
  grind: ['wholebean', 'filter', 'cafetiére'],
  frequency: ['every week', 'every 2 weeks', 'every month'],
};

// plan logic
const choice = document.getElementsByClassName('choice');
const questions = document.getElementsByClassName('question');
const answers = document.getElementsByClassName('answers');
const preview = document.querySelector('.order-preview');

// DECLARATION
const initialSentence = `
Customize your plan with the <span id="scroll-to-constructor">above</span> options then come back to review and confirm.`;

const summarySentence = `“I drink my coffee <span id="how">. . . </span>, with a <span id="type">. . . </span> type of bean. <span id="quantity">. . . </span> ground ala <span id="grind">. . . </span>, sent to me <span id="frequency">. . . </
span>.”`;

const capsuleSentence = `“I drink my coffee <span id="how">. . . </span>, with a <span id="type">. . . </span> type of bean. <span id="quantity">. . . </span> sent to me <span id="frequency">. . . </
span>.”`;

preview.children[1].innerHTML = initialSentence;

// OPTIONS
// how
const capsule = document.getElementById('capsule');
const filter = document.getElementById('filter');
const espresso = document.getElementById('espresso');

// type
const origin = document.getElementById('origin');
const decaf = document.getElementById('decaf');
const blended = document.getElementById('blended');

// quantity
const small = document.getElementById('250');
const medium = document.getElementById('500');
const large = document.getElementById('1000');

// grind
const wholebean = document.getElementById('wholebean');
const grindFilter = document.getElementById('grindFilter');
const cafetiere = document.getElementById('cafetiere');

// frequency
const weekly = document.getElementById('weekly');
const twoWeeks = document.getElementById('twoWeeks');
const monthly = document.getElementById('monthly');

// PREVIEW MESSAGE BUILDER
// HOW
capsule.addEventListener('click', () => {
  filter.classList.remove('answer--active');
  espresso.classList.remove('answer--active');
  capsule.classList.add('answer--active');
  wholebean.classList.remove('answer--active');
  grindFilter.classList.remove('answer--active');
  cafetiere.classList.remove('answer--active');
  choice[3].children[0].classList.add('question--disabled');
  choice[3].children[1].classList.remove('answers--open');
  choice[3].children[0].classList.remove('question--open');
  if (preview.children[1].innerHTML == initialSentence || summarySentence) {
    preview.children[1].innerHTML = capsuleSentence;
    document.getElementById('how').textContent = plan.how[0];
  } else {
    document.getElementById('how').textContent = plan.how[0];
  }
});

filter.addEventListener('click', () => {
  filter.classList.add('answer--active');
  espresso.classList.remove('answer--active');
  capsule.classList.remove('answer--active');
  choice[3].children[0].classList.remove('question--disabled');
  if (preview.children[1].innerHTML == initialSentence || capsuleSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('how').textContent = plan.how[1];
  } else {
    document.getElementById('how').textContent = plan.how[1];
  }
});

espresso.addEventListener('click', () => {
  filter.classList.remove('answer--active');
  espresso.classList.add('answer--active');
  capsule.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence || capsuleSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('how').textContent = plan.how[2];
  } else {
    document.getElementById('how').textContent = plan.how[2];
  }
});

// TYPE
origin.addEventListener('click', () => {
  origin.classList.add('answer--active');
  decaf.classList.remove('answer--active');
  blended.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('type').textContent = plan.type[0];
  } else {
    document.getElementById('type').textContent = plan.type[0];
  }
});

decaf.addEventListener('click', () => {
  origin.classList.remove('answer--active');
  decaf.classList.add('answer--active');
  blended.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('type').textContent = plan.type[1];
  } else {
    document.getElementById('type').textContent = plan.type[1];
  }
});

blended.addEventListener('click', () => {
  origin.classList.remove('answer--active');
  decaf.classList.remove('answer--active');
  blended.classList.add('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('type').textContent = plan.type[2];
  } else {
    document.getElementById('type').textContent = plan.type[2];
  }
});

// QUANTITY
small.addEventListener('click', () => {
  small.classList.add('answer--active');
  medium.classList.remove('answer--active');
  large.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('quantity').textContent = plan.quantity[0];
  } else {
    document.getElementById('quantity').textContent = plan.quantity[0];
  }
});

medium.addEventListener('click', () => {
  small.classList.remove('answer--active');
  medium.classList.add('answer--active');
  large.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('quantity').textContent = plan.quantity[1];
  } else {
    document.getElementById('quantity').textContent = plan.quantity[1];
  }
});

large.addEventListener('click', () => {
  small.classList.remove('answer--active');
  medium.classList.remove('answer--active');
  large.classList.add('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('quantity').textContent = plan.quantity[2];
  } else {
    document.getElementById('quantity').textContent = plan.quantity[2];
  }
});

// GRIND?
wholebean.addEventListener('click', () => {
  wholebean.classList.add('answer--active');
  grindFilter.classList.remove('answer--active');
  cafetiere.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('grind').textContent = plan.grind[0];
  } else {
    document.getElementById('grind').textContent = plan.grind[0];
  }
});

grindFilter.addEventListener('click', () => {
  wholebean.classList.remove('answer--active');
  grindFilter.classList.add('answer--active');
  cafetiere.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('grind').textContent = plan.grind[1];
  } else {
    document.getElementById('grind').textContent = plan.grind[1];
  }
});

cafetiere.addEventListener('click', () => {
  wholebean.classList.remove('answer--active');
  grindFilter.classList.remove('answer--active');
  cafetiere.classList.add('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('grind').textContent = plan.grind[2];
  } else {
    document.getElementById('grind').textContent = plan.grind[2];
  }
});

// FREQUENCY

weekly.addEventListener('click', () => {
  weekly.classList.add('answer--active');
  twoWeeks.classList.remove('answer--active');
  monthly.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('frequency').textContent = plan.frequency[0];
  } else {
    document.getElementById('frequency').textContent = plan.frequency[0];
  }
});

twoWeeks.addEventListener('click', () => {
  weekly.classList.remove('answer--active');
  twoWeeks.classList.add('answer--active');
  monthly.classList.remove('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('frequency').textContent = plan.frequency[1];
  } else {
    document.getElementById('frequency').textContent = plan.frequency[1];
  }
});

monthly.addEventListener('click', () => {
  weekly.classList.remove('answer--active');
  twoWeeks.classList.remove('answer--active');
  monthly.classList.add('answer--active');
  if (preview.children[1].innerHTML == initialSentence) {
    preview.children[1].innerHTML = summarySentence;
    document.getElementById('frequency').textContent = plan.frequency[2];
  } else {
    document.getElementById('frequency').textContent = plan.frequency[2];
  }
});

// CHOICE OPENER
for (let i = 0; i < choice.length; i++) {
  questions[i].addEventListener('click', () => {
    choice[i].children[0].classList.toggle('question--open');
    choice[i].children[1].classList.toggle('answers--open');
  });
}

// scroll to plan constructor
document
  .getElementById('scroll-to-constructor')
  .addEventListener('click', () => {
    document.getElementById('options').scrollIntoView({ behavior: 'smooth' });
  });

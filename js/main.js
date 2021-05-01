// navbar
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.modal-menu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
});

const choice = document.getElementsByClassName('choice');
const questions = document.getElementsByClassName('question');
const answers = document.getElementsByClassName('answers');
const individualAnswer = document.getElementsByClassName('answer');
const preview = document.querySelector('.order-preview');

const plan = {
  how: ['Capsule', 'Filter', 'Espresso'],
  type: ['Single origin', 'Decaf', 'Blended'],
  quantity: ['250g', '500g', '1000g'],
  grind: ['Wholebean', 'Filter', 'Cafetiére'],
  frequency: ['Every week', 'Every 2 weeks', 'Every month'],
};

const initialSentence = `
Customize your plan with the <span class="custom" id="scroll-to-constructor">above</span> options then come back to review and confirm.`;

const summarySentence = `“I drink my coffee <span class="variation" id="using-capsule">using</span> <span class="variation" id="as">as</span> <span class="custom" id="how">. . . </span>, with a <span class="custom" id="type">. . . </span> type of bean. <span class="custom" id="quantity">. . . </span> <span id="capsule-variation">ground ala </span><span class="custom" id="grind">. . . </span>, sent to me <span class="custom" id="frequency">. . . </span>.”`;

const sentenceModifier = function (option, value) {
  document.getElementById(option).textContent = value;
};

preview.children[1].innerHTML = initialSentence;

// **scroll to plan constructor**
document
  .getElementById('scroll-to-constructor')
  .addEventListener('click', () => {
    document.getElementById('options').scrollIntoView({ behavior: 'smooth' });
    choice[0].children[0].classList.toggle('question--open');
    choice[0].children[1].classList.toggle('answers--open');
    preview.children[1].innerHTML = summarySentence;
  });

// OPTIONS selection
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

// SHIPMENT PRICE UPDATER

const invisiblePrice = document.getElementsByClassName('invisible-price');
const weeklyPrice = document.getElementById('weekly-price');
const biweeklyPrice = document.getElementById('biweekly-price');
const monthlyPrice = document.getElementById('monthly-price');

const priceReveal = function () {
  for (let i = 0; i < invisiblePrice.length; i++) {
    invisiblePrice[i].classList.remove('invisible-price');
  }
};

small.addEventListener('click', () => {
  weeklyPrice.textContent = '$7.20';
  biweeklyPrice.textContent = '$9.60';
  monthlyPrice.textContent = '$12.00';
  priceReveal();
});

medium.addEventListener('click', () => {
  weeklyPrice.textContent = '$13.00';
  biweeklyPrice.textContent = '$17.50';
  monthlyPrice.textContent = '$22.00';
  priceReveal();
});

large.addEventListener('click', () => {
  weeklyPrice.textContent = '$22.00';
  biweeklyPrice.textContent = '$32.00';
  monthlyPrice.textContent = '$42.00';
  priceReveal();
});

// grind
const wholebean = document.getElementById('wholebean');
const grindFilter = document.getElementById('grindFilter');
const cafetiere = document.getElementById('cafetiere');

// frequency
const weekly = document.getElementById('weekly');
const twoWeeks = document.getElementById('twoWeeks');
const monthly = document.getElementById('monthly');

// QUESTIONS MAP + clear active class on each answer click
const qMap = document.querySelectorAll('.question-map');

const clearMap = function () {
  for (let i = 0; i < qMap.length; i++) {
    qMap[i].classList.remove('question-map--active');
  }
};

for (let i = 0; i < individualAnswer.length; i++) {
  individualAnswer[i].addEventListener('click', clearMap);
}

// CHOICE OPENER
for (let i = 0; i < choice.length; i++) {
  qMap[i].addEventListener('click', () => {
    qMap[0].classList.remove('question-map--active');
    qMap[1].classList.remove('question-map--active');
    qMap[2].classList.remove('question-map--active');
    qMap[3].classList.remove('question-map--active');
    qMap[4].classList.remove('question-map--active');
    qMap[i].classList.add('question-map--active');
    if (preview.children[1].innerHTML === initialSentence) {
      preview.children[1].innerHTML = summarySentence;
    }
  });
  questions[i].addEventListener('click', () => {
    if (!choice[i].children[1].classList.contains('answers--open')) {
      questions[i].scrollIntoView({ behavior: 'smooth' });
    }
    choice[i].children[0].classList.toggle('question--open');
    choice[i].children[1].classList.toggle('answers--open');
    if (preview.children[1].innerHTML === initialSentence)
      preview.children[1].innerHTML = summarySentence;
  });
  qMap[i].addEventListener('click', () => {
    questions[i].scrollIntoView({ behavior: 'smooth' });
    choice[i].children[1].classList.add('answers--open');
  });
}

// PREVIEW MESSAGE BUILDER
// HOW
capsule.addEventListener('click', () => {
  document.getElementById('grind').classList.add('variation');
  document.getElementById('grind').textContent = '. . . ';
  document.getElementById('capsule-variation').classList.add('variation');
  sentenceModifier(`how`, plan.how[0]);
  document.getElementById('using-capsule').classList.remove('variation');
  document.getElementById('as').classList.add('variation');
  filter.classList.remove('answer--active');
  espresso.classList.remove('answer--active');
  capsule.classList.add('answer--active');
  wholebean.classList.remove('answer--active');
  grindFilter.classList.remove('answer--active');
  cafetiere.classList.remove('answer--active');
  choice[3].children[0].classList.add('question--disabled');
  choice[3].children[1].classList.remove('answers--open');
  choice[3].children[0].classList.remove('question--open');
  qMap[0].classList.add('question-map--checked');
  qMap[0].classList.remove('question-map--active');
  qMap[3].classList.add('question-map--disabled');
  qMap[3].classList.remove('question-map--checked');
});

filter.addEventListener('click', () => {
  document.getElementById('grind').classList.remove('variation');
  document.getElementById('capsule-variation').classList.remove('variation');
  sentenceModifier('how', plan.how[1]);
  document.getElementById('using-capsule').classList.add('variation');
  document.getElementById('as').classList.remove('variation');
  filter.classList.add('answer--active');
  espresso.classList.remove('answer--active');
  capsule.classList.remove('answer--active');
  choice[3].children[0].classList.remove('question--disabled');
  qMap[0].classList.add('question-map--checked');
  qMap[0].classList.remove('question-map--active');
  qMap[3].classList.remove('question-map--disabled');
});

espresso.addEventListener('click', () => {
  document.getElementById('grind').classList.remove('variation');
  document.getElementById('using-capsule').classList.add('variation');
  document.getElementById('as').classList.remove('variation');
  document.getElementById('capsule-variation').classList.remove('variation');
  sentenceModifier('how', plan.how[2]);
  filter.classList.remove('answer--active');
  espresso.classList.add('answer--active');
  capsule.classList.remove('answer--active');
  qMap[0].classList.add('question-map--checked');
  qMap[0].classList.remove('question-map--active');
  qMap[3].classList.remove('question-map--disabled');
});

// TYPE
origin.addEventListener('click', () => {
  sentenceModifier('type', plan.type[0]);
  origin.classList.add('answer--active');
  decaf.classList.remove('answer--active');
  blended.classList.remove('answer--active');
  qMap[1].classList.add('question-map--checked');
  qMap[1].classList.remove('question-map--active');
});

decaf.addEventListener('click', () => {
  sentenceModifier('type', plan.type[1]);
  origin.classList.remove('answer--active');
  decaf.classList.add('answer--active');
  blended.classList.remove('answer--active');
  qMap[1].classList.add('question-map--checked');
  qMap[1].classList.remove('question-map--active');
});

blended.addEventListener('click', () => {
  sentenceModifier('type', plan.type[2]);
  origin.classList.remove('answer--active');
  decaf.classList.remove('answer--active');
  blended.classList.add('answer--active');
  qMap[1].classList.add('question-map--checked');
  qMap[1].classList.remove('question-map--active');
});

// QUANTITY
small.addEventListener('click', () => {
  sentenceModifier('quantity', plan.quantity[0]);
  small.classList.add('answer--active');
  medium.classList.remove('answer--active');
  large.classList.remove('answer--active');
  qMap[2].classList.add('question-map--checked');
  qMap[2].classList.remove('question-map--active');
});

medium.addEventListener('click', () => {
  sentenceModifier('quantity', plan.quantity[1]);
  small.classList.remove('answer--active');
  medium.classList.add('answer--active');
  large.classList.remove('answer--active');
  qMap[2].classList.add('question-map--checked');
  qMap[2].classList.remove('question-map--active');
});

large.addEventListener('click', () => {
  sentenceModifier('quantity', plan.quantity[2]);
  small.classList.remove('answer--active');
  medium.classList.remove('answer--active');
  large.classList.add('answer--active');
  qMap[2].classList.add('question-map--checked');
  qMap[2].classList.remove('question-map--active');
});

// GRIND?
wholebean.addEventListener('click', () => {
  sentenceModifier('grind', plan.grind[0]);
  wholebean.classList.add('answer--active');
  grindFilter.classList.remove('answer--active');
  cafetiere.classList.remove('answer--active');
  qMap[3].classList.add('question-map--checked');
  qMap[3].classList.remove('question-map--active');
});

grindFilter.addEventListener('click', () => {
  sentenceModifier('grind', plan.grind[1]);
  wholebean.classList.remove('answer--active');
  grindFilter.classList.add('answer--active');
  cafetiere.classList.remove('answer--active');
  qMap[3].classList.add('question-map--checked');
  qMap[3].classList.remove('question-map--active');
});

cafetiere.addEventListener('click', () => {
  sentenceModifier('grind', plan.grind[2]);
  wholebean.classList.remove('answer--active');
  grindFilter.classList.remove('answer--active');
  cafetiere.classList.add('answer--active');
  qMap[3].classList.add('question-map--checked');
  qMap[3].classList.remove('question-map--active');
});

// FREQUENCY

// shipping price calculator goes here

weekly.addEventListener('click', () => {
  sentenceModifier('frequency', plan.frequency[0]);
  weekly.classList.add('answer--active');
  twoWeeks.classList.remove('answer--active');
  monthly.classList.remove('answer--active');
  qMap[4].classList.add('question-map--checked');
  qMap[4].classList.remove('question-map--active');
});

twoWeeks.addEventListener('click', () => {
  sentenceModifier('frequency', plan.frequency[1]);
  weekly.classList.remove('answer--active');
  twoWeeks.classList.add('answer--active');
  monthly.classList.remove('answer--active');
  qMap[4].classList.add('question-map--checked');
  qMap[4].classList.remove('question-map--active');
});

monthly.addEventListener('click', () => {
  sentenceModifier('frequency', plan.frequency[2]);
  weekly.classList.remove('answer--active');
  twoWeeks.classList.remove('answer--active');
  monthly.classList.add('answer--active');
  qMap[4].classList.add('question-map--checked');
  qMap[4].classList.remove('question-map--active');
});

///////// NU STIU DE CE NU MERGE
// document.getElementById('how').addEventListener('click', () => {
//   choice[0].scrollIntoView({ behavior: 'smooth' });
//   console.log(`fucking scrolled`);
// });

const messageEl = document.getElementById('message');
const princessSection = document.getElementById('princess');
const slides = Array.from(document.querySelectorAll('.slide'));
const botText = document.getElementById('botText');

let slideIndex = 0;
let slideTimer = null;

const quietMessages = [
  'It’s okay to take a moment for yourself.',
  'Breathe gently. You are allowed to rest.',
  'You are seen, even when you are quiet.',
  'No rush. No expectations. Just being is enough.'
];

const botReplies = [
  'I’m here when you need me.',
  'You don’t have to explain anything.',
  'It’s okay to just be present with yourself.',
  'Take the quiet. I’ll stay here with you.'
];

function chooseRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function showMessage() {
  if (!messageEl) return;
  messageEl.textContent = chooseRandom(quietMessages);
  messageEl.classList.remove('hidden');
}

function hideMessage() {
  if (!messageEl) return;
  messageEl.classList.add('hidden');
}

function toggleMessage() {
  if (!messageEl) return;

  if (messageEl.classList.contains('hidden')) {
    hidePrincess();
    showMessage();
  } else {
    hideMessage();
  }
}

function showPrincess() {
  if (!princessSection || slides.length === 0) return;

  hideMessage();
  princessSection.classList.remove('hidden');
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === 0);
  });
  slideIndex = 0;

  if (!slideTimer) {
    slideTimer = setInterval(nextSlide, 4000);
  }
}

function hidePrincess() {
  if (!princessSection) return;
  princessSection.classList.add('hidden');
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
}

function togglePrincess() {
  if (!princessSection) return;

  if (princessSection.classList.contains('hidden')) {
    showPrincess();
  } else {
    hidePrincess();
  }
}

function nextSlide() {
  if (slides.length === 0) return;

  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

function botTalk() {
  if (!botText) return;
  botText.textContent = chooseRandom(botReplies);
}

window.toggleMessage = toggleMessage;
window.togglePrincess = togglePrincess;
window.botTalk = botTalk;

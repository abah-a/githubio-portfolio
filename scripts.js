function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  const phrases = ["Student", "Creative", "Programmer", "Athlete"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  typingText.innerHTML = currentPhrase.slice(0, currentLetterIndex);
  currentLetterIndex++;

  if (currentLetterIndex > currentPhrase.length) {
    currentLetterIndex = 0;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}

type();

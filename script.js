const words = ['Web developer', 'Web designer', 'Photograpgher', 'Traveler']; // Your list of words or sentences
let wordIndex = 0;
let letterIndex = 0;
let typingSpeed = 100; // Adjust typing speed as needed
let erasingSpeed = 50; // Adjust erasing speed as needed
let delayTime = 1500; // Adjust delay time before erasing as needed

function type() {
  if (letterIndex < words[wordIndex].length) {
    document.getElementById('typed-text').textContent += words[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayTime);
  }
}

function erase() {
  if (letterIndex > 0) {
    document.getElementById('typed-text').textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

setTimeout(type, delayTime);

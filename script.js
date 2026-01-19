// select all keys
const keys = document.querySelectorAll('.key');

// Listeners
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();

  
}
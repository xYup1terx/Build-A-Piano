// select all keys
const keys = document.querySelectorAll('.key');

// Listeners
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
//  get the notes letter value
    const noteAudio = document.getElementById(key.dataset.note);
    // reset the notes current time to 0
  noteAudio.currentTime = 0;

//  play the note
  noteAudio.play();

//add a class, active for styling purposes
 key.classList.add('active');
// listen for when the sound has ended and remove active class
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSoungs();

    document.getElementById(sound).play(); //* .play() to play the audio
  });

  document.getElementById('buttons').appendChild(btn);
});

const stopSoungs = () => {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);

    song.pause(); //* .pause to stop play the audio
    song.currentTime = 0; //* set currentTime prop in audio to 0;
  })
}
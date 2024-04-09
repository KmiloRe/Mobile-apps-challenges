let currentMusic= 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const nombreMusica = document.querySelector('.nombre-musica');
const nombreArtista = document.querySelector('.nombre-artista');
const disk= document.querySelector('.disk');
const tiempoActual= document.querySelector('.tiempo-actual');
const duracionCancion= document.querySelector('.duracion-cancion');
const playBtn= document.querySelector('.play-btn');
const forwardBtn= document.querySelector('.forward-btn');
const backwardBtn= document.querySelector('.backward-btn');

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play')
})

//Musica

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    nombreMusica.innerHTML = song.name;
    nombreArtista.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    tiempoActual.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        duracionCancion.innerHTML = formatTime(music.duration);
    }, 300)
    


}

setMusic(0);

// formatiando tiempo en minutos y segundos

const formatTime = (time) =>{
    let min = math.floor
}
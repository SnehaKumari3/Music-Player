const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs =[
  {
    name: "image1",
    title: "barsaat ki dhun",
    artist: "jubin nautiyal",
  },
  {
    name: "image2",
    title: "barish ban jana",
    artist: "jubin nautiyal",
  },
  {
    name: "image3",
    title: "is qadar",
    artist: "tulsi kumar & darshan raval",
  },
]

//for play function
let isPlaying = false;
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play" , "fa-pause");
  img.classList.add("anime");
};
//for pause function
 const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause" , "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click" , () => {
if(isPlaying){
  pauseMusic();
} else{
  playMusic();
}
});
//changing the music data

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "img/" + songs.name + ".jpg";
};
//loadSong(songs[1]);

songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
var el = document.getElementById("let_it_snow");
var playing = false;
var player = new Audio(
  "https://e1lias1z.github.io/XmasPage/sound/Let_It_Snow.mp3"
);

player.preload = "auto";
function playPause() {
  if (playing) {
    player.pause();
  } else {
    player.play();
  }
  playing = !playing;
}

el.addEventListener("click", playPause);

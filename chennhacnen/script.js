var audio = document.getElementById("myAudio");
audio.volume = 0.2; // thiết lập âm lượng nhạc nền là 20%

window.addEventListener('load', function() {
  audio.play();
});

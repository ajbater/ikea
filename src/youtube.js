var playButton = document.getElementById("play-button");
var videoPoster = document.getElementById("video-poster");

playButton.addEventListener("click", function(){
  playButton.style.opacity = "0";
  videoPoster.style.visibility = "hidden";
});

var playButton = document.getElementById("play-button");
var videoPoster = document.getElementById("video-poster");
var youtubeVideo = document.getElementById("youtube-video");

setYoutubeContent = function() {
  var videoPoster = document.getElementById('video-poster');
  videoWrapper.innerHTML = '<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe id="youtube-video" src="https://www.youtube.com/embed/' + pageContent.blocks[1].videoId + '" frameborder="0" allowfullscreen></iframe></div>'
  videoPoster.innerHTML = '<img src="./images/' + pageContent.blocks[1].image + '">'
}

playButton.addEventListener("click", function(){
  playButton.style.opacity = "0";
  videoPoster.style.visibility = "hidden";
});

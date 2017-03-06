$(function(){
	var playButton = $("#play-button");
  var videoPoster = $("#video-poster");
	var video = $("#youtube-video");
	playButton.click(function(ev){
    playButton.fadeOut(1000);
    videoPoster.fadeOut(1000);
		video[0].src += "?autoplay=1";
		ev.preventDefault();
  });
});

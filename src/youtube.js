$(function(){
	var playButton = $("#play-button");
  var videoPoster = $("#video-poster");
	var video = $("#youtube-video");
	playButton.click(function(ev){
    playButton.fadeOut(700);
    videoPoster.fadeOut(700);
		video[0].src += "?autoplay=1";
		ev.preventDefault();
  });
});

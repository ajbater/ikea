$(function(){
	var playButton = $("#play-button");
  var videoPoster = $("#video-poster");
	playButton.click(function(){
    playButton.fadeOut(500);
    videoPoster.fadeOut(500);
  });
});

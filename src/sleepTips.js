$(function() {
	var $blinkImage = $(".second-frame");
	setInterval(function() {
		$blinkImage.toggleClass("blink");
	}, 1000);
});

$(function() {
	var $blinkImage = $(".second-frame");
	setInterval(function() {
		$blinkImage.toggleClass("blink");
	}, 1000);
});

$(function(){
    $("#sleep-coach-carousel-container .slide:gt(0)").hide();
    setInterval(function(){
      $("#sleep-coach-carousel-container > :first-child").fadeOut(1000)
         .next(".slide").fadeIn(1000)
         .end()
         .appendTo("#sleep-coach-carousel-container");
       }, 3000);
});

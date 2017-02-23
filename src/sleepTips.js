$(function() {
	var $blinkImage = $(".second-frame");
	setInterval(function() {
		$blinkImage.toggleClass("blink");
	}, 1000);
});

$(function(){
    $("#sleep-coach-carousel-container .slide:gt(0)").hide();
    $("#next-arrow").click(function(){
      $("#sleep-coach-carousel-container > :first-child").fadeOut(500)
         .next(".slide").fadeIn(500)
         .end()
         .appendTo("#sleep-coach-carousel-container");
       });
});

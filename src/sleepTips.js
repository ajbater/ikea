$(function() {
	var $blinkImage = $(".second-frame");
	setInterval(function() {
		$blinkImage.toggleClass("blink");
	}, 1000);
});

$(function(){
    $("#carousel-container .slide:gt(0)").hide();
    $("#next-arrow").click(function(){
      $("#carousel-container > :first-child").fadeOut(700)
         .next(".slide").fadeIn(700)
         .end()
         .appendTo("#carousel-container");
       });
});

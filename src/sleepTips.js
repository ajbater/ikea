$(function() {
	var $blinkImage = $(".second-frame");
	setInterval(function() {
		$blinkImage.toggleClass("blink");
	}, 1000);
});

$(function(){
    $("#carousel-container .slide:gt(0)").hide();
    $("#next-arrow").click(function(){
      $("#carousel-container > :first-child").slideUp(300, "swing")
         .next(".slide").slideDown(300, "swing")
         .end()
         .appendTo("#carousel-container");
       });
});

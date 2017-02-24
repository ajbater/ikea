$(function() {
	var blinkImage = $(".second-frame");
	setInterval(function() {
		blinkImage.toggleClass("blink");
	}, 1000);
});

$(function(){
    $("#slide-container .slide:gt(0)").hide();
    $("#next-arrow").click(function(){
      $("#slide-container > :first-child").slideUp(300, "swing")
         .next(".slide").slideDown(300, "swing")
         .end()
         .appendTo("#slide-container");
       });
		// $("#prev-arrow").click(function(){
		// 	$("#slide-container :last-child").slideDown(300, "swing")
		// 		.prev(".slide").slideDown(300, "swing")
		// 		.end()
		// 		.insertBefore($("#slide-container :first-child").slideUp(300, "swing"));
		// });
});

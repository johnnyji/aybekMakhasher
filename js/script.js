$(window).load(function() {
	// loads fade in effects
   $('.name').fadeIn(1000);
   $('.links').delay(700).fadeIn(600);

   $('.biography').delay(600).fadeIn(600);
   $('.contact').delay(600).fadeIn(600);

   $('.footer').delay(1600).fadeIn(500);

   nav()

});

function nav() {
	$('.open_icon').click(function() {

		$(this).fadeOut(300);
		$('.close_icon').fadeIn(300);

		$('.container_frame').animate({
			left: '-200px'
		})

		$('.sidebar').animate({
			right: '0px'
		})
	}); 

	$('.close_icon').click(function() {
		$(this).fadeOut(300);
		$('.open_icon').fadeIn(300);

		$('.container_frame').animate({
			left: '0px'
		})

		$('.sidebar').animate({
			right: '-200px'
		})
	});
}
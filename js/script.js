
$(window).load(function() {
	// loads fade in effects
   $('.name').fadeIn(1000);
   $('.links').delay(700).fadeIn(600);

   $('.biography').delay(600).fadeIn(600);
   $('.resume_sheet').delay(600).fadeIn(600);
   $('.contact').delay(600).fadeIn(600);

   $('.footer').delay(1600).fadeIn(500);

   nav();
});

//loads photos from instagram using instafeed.js
var feed = new Instafeed({
        get: 'user',
        useHttp: 'true',
        userId: 1419191820,
        accessToken: '1419191820.eb4a31e.488e272886ee4a36a7731b7f87c10a80',
        limit: '15'
    });
		feed.run();

//open and close sidebar
function nav() {
	$('.open_icon').click(function() {

		$(this).fadeOut(300);
		$('.close_icon').fadeIn(300);

		$('.container_frame').animate({
			left: '-200px'
		})

		$('.container_resume').animate({
			left: '-200px'
		})

		$('.container_contact').animate({
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

		$('.container_resume').animate({
			left: '0px'
		})

		$('.container_contact').animate({
			left: '0px'
		})

		$('.sidebar').animate({
			right: '-200px'
		})
	});
}
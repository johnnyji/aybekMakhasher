$(function() {
  var $upIcon = $('.up_icon');

  // loads fade in effects
   $('.name').fadeIn(1000);
   $('.links').delay(700).fadeIn(600);

   $('.biography').delay(600).fadeIn(600);
   $('.resume_sheet').delay(600).fadeIn(600);
   $('.contact').delay(600).fadeIn(600);
   $('#instafeed').delay(600).fadeIn(600);
   $('.footer').delay(1600).fadeIn(500);

  //open and close sidebar
  $('.open_icon').on('click', function() {
    $(this).fadeOut(300);
    $('.close_icon').fadeIn(300);

    $('.container_frame').animate({ left: '-200px' });
    $('.container_resume').animate({ left: '-200px' });
    $('.container_contact').animate({ left: '-200px' });
    $('.sidebar').animate({ right: '0px' });
  }); 

  $('.close_icon').on('click', function() {
    $(this).fadeOut(300);
    $('.open_icon').fadeIn(300);

    $('.container_frame').animate({ left: '0px' });
    $('.container_resume').animate({ left: '0px' });
    $('.container_contact').animate({ left: '0px' });
    $('.sidebar').animate({ right: '-200px' });
  });


  //shows and hides up icon dependant on user scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $upIcon.fadeIn(400);
    } else if ($(window).scrollTop() < 100) {
      $upIcon.fadeOut(400);
    }
  });

//return to top icon

  $upIcon.on('click', function() {
    if ($(window).scrollTop() === 0) return;
    $('html, body').animate({ scrollTop: '0'}, 1000, "easeOutExpo");
  });

});
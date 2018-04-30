$(document).ready(function() {
  //second nav
  $('.second-nav-bar .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    } 
  });
  // search
  $("figure").mouseleave(
    function() {
  $(this).removeClass("hover");
  });
  //testimonials nav
  $('.testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
  //navbar toggle sm
	$('.navbar #nav-icon1').click(function(){
		$(this).toggleClass('open');
	});

	$('.backtotop').click(function(e){
    $('html, body').animate({scrollTop:0}, '1000');
    e.preventDefault();
  });
  $(window).scroll(function() {
    if($(this).scrollTop() > 100){
      $('.backtotop').fadeIn('2000');
    } else {
      $('.backtotop').fadeOut('500');
    }
  });
});
//loading-overlay
$(window).on('load',function(){ 
   $("body").css("overflow","auto");
   $(".loading-overlay").fadeOut();
 });
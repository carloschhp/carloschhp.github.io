jQuery(document).ready(function($) {

	var body         = $("body");
	var contactme    = $(".me");
	var open_details = $(".contact__content__open-details");
	var close        = $(".information__content__close");

	$(contactme).on('click', function(){
		$(body).addClass("overlay-active");
	});

	$(open_details).on('click', function(e){
		e.preventDefault();
		$(body).addClass("overlay-active");
	});

	$(close).on('click', function(){
		$(body).removeClass("overlay-active");
	});

	$(document).on('keyup',function(e) {
		if (e.keyCode == 27) {
			$(body).removeClass("overlay-active");
		}
	});

	// ### OWL Carousel
	jQuery(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
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

	// ### OWL Carousel - Keyboard navigation
	jQuery(document.documentElement).keyup(function (event) {    

	    var owl = jQuery(".owl-carousel");

	    if (event.keyCode == 37) {
	       console.log('Go left');
	       owl.trigger('prev.owl.carousel', [300]);
	    } else if (event.keyCode == 39) {
	       console.log('Go right');
	       owl.trigger('next.owl.carousel');
	    }

	});

});
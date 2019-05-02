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


	
});
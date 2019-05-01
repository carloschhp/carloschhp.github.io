jQuery(document).ready(function($) {

	var contact_me    = $(".contact_me");
	var content_block = $(".content");

	$(contact_me).hover(function(){
		$(content_block).toggleClass("content--bg");
	});
	
});
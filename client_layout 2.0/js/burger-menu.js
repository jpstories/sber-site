$(document).ready(function(){
	$('.burger-menu').click(function(){
		$(this).toggleClass("burger-open");
	});



	$('.burger-menu').click(function(){
	    var $menumobile = $('.menu-mobile');
	    if ($menumobile.hasClass('visible')){
	        $menumobile.animate({"left":"-105%"}, "fast").removeClass('visible').addClass('hidden');
	        $('.button-pdf').show();
	    } else {
	        $menumobile.animate({"left":"0"}, "fast").addClass('visible').removeClass('hidden');
	        $('.button-pdf').hide();
	    }
	});
});
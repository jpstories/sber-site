$(document).ready(function(){
	$('.button-pdf').on('click', function(){
		console.log('lol');
		$('.pdf-reader-mobile').css("display", "block");
		$('#shadow-box').show();
	});
	        
	$('#shadow-box-button').on('click', function(){
		$('#shadow-box').hide();
		$('.pdf-reader-mobile').hide();
	});
});
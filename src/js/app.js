
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background ="#fff" ;
    
         $(document).ready(function() {
     $(".nav-link").css("color", "#333");
     $(".top-nav").css("display", "block");  

       $(".nav-link").hover(function() {
       	 $(this).css("color","#38c172");
       }, function() {
       	 $(this).css("color","#333");

       });
        
  
			});
  } else {
    document.getElementById("navbar").style.background = "transparent";
       $(document).ready(function() {
    	 $(".nav-link").css("color", "#fff");  
        $(".top-nav").css("display", "none");
   			$(".nav-link").hover(function() {
       	 $(this).css("color","#38c172");
       }, function() {
       	 $(this).css("color","#fff");
		});	
       });
  }
}

jQuery(document).ready(function() {
	//----- OPEN
	$('[data-popup-open]').on('click', function(e) {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

		e.preventDefault();
	});

	//----- CLOSE
	$('[data-popup-close]').on('click', function(e) {
		var targeted_popup_class = jQuery(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

		e.preventDefault();
	});
});
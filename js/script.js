jQuery(document).ready(function($) {
    $('.client-carousel').owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    })
});

jQuery(document).ready(function($) {
    $("#menu-icon").click(function(){
        $(".navbar__link").slideToggle("slow");
      });
});
jQuery(document).ready(function($) {
    var $btns=$('.btn').click(function() {
        if (this.id == 'all') {
            $('#list-product >   div').fadeIn(450);
          } else {
            
            var $el = $('.' + this.id).fadeIn(450);
            $('#list-product > div').not($el).hide();
          }
          $btns.removeClass('active');
          $(this).addClass('active');
        
    });
    
});

iQuery(document).ready(function($) {
    $('.list-icon li').hover(function(){
        $(this).css("background-color", "white");
        }, function(){
        $(this).css("background-color", "white");
      });
});
jQuery(document).ready(function( $ ) {
    $('.client-say h1').hover( function() {
        $(this).css("color", "white");
    })
  });


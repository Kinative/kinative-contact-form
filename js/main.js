$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function($) {
    $(".fancybox-pop").fancybox({
        autoSize : true,
        scrolling : 'auto',
        fitToView : false,
        width : 'auto',
           closeClick  : true, // prevents closing when clicking INSIDE fancybox
    helpers     : { 
        overlay : {closeClick: true} // prevents closing when clicking OUTSIDE fancybox
    },

        maxWidth : '100%',
closeBtn: 'true',


    });
});



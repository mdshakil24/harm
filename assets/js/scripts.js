$(document).ready(function () { 
    // Mobile Menu Icon
   $(document).ready(function(){
        $('#nav-open').click(function(){
            $(this).addClass('open');
            $('.mobileMenu').slideDown();
            $('#nav-close').removeClass();
        });
        $('#nav-close').click(function(){
            $(this).addClass('open');
            $('.mobileMenu').slideUp();
            $('#nav-open').removeClass();
        });
   });
    
    // Sticky Header
    if ($(".isSticky").length > 0) {
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $(".isSticky").addClass('fixedHeader animated slideInDown');
            $(".stickyHeader03").addClass('isSticky');
        } else {
            $(".isSticky").removeClass('fixedHeader animated slideInDown');
        }
        });
    }
    // Video Popup
    if ($('.popup_video').length > 0) {
       $('.popup_video').lightcase({
          transition: 'elastic',
          showSequenceInfo: false,
          slideshow: false,
          swipe: true,
          showTitle: false,
          showCaption: false,
          controls: true
       });
    }

   // Back To Top
   function backtotop() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('#scroll_top').addClass('activate');
       } else {
          $('#scroll_top').removeClass('activate');
       }
    });
    $('#scroll_top').on('click', function () {
       $("html, body").animate({ scrollTop: 0 }, 600);
       return false;
    });
 }
    backtotop();

    // Aos Animation
    AOS.init({
        duration: 800,
    });

    
});

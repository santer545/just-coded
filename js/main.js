 $(document).ready(function() {

     // initial slider
     slider();

     // toggle navbar
     toogleNav ();

 });


 function slider() {
     //initialize swiper when document ready  
     var mySwiper = new Swiper('.swiper-container', {
         autoplay: 7000,
         fade: {
             crossFade: true
         }
     });
 }

 function toogleNav () {

    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $(this).closest('.navbar').find('ul').toggleClass('active');
    });

 }
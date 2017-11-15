 $(document).ready(function() {

     // initial slider
     slider();

     // toggle navbar
     toogleNav();

     // retina
     retinaImages();

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

 function toogleNav() {

     $('#nav-icon').click(function() {
         $(this).toggleClass('open');
         $(this).closest('.navbar').find('ul').toggleClass('active');
     });

 }

 function retinaImages() {
     if (window.devicePixelRatio > 1) {
         var lowresImages = $('img.js-retina');
         images.each(function(i) {
             var lowres = $(this).attr('src');
             var highres = lowres.replace(".", "@2x.");
             $(this).attr('src', highres);
         });
     }
 }
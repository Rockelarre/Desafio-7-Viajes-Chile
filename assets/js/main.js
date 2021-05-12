/* $(window).scroll(function() {
    $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-dark" );
  });
 */

  var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-dark" );
   } else {
      // upscroll code
      $("#navbar").removeClass( "bg-dark" ).addClass( "bg-transparent" );
   }
   lastScrollTop = st;
});

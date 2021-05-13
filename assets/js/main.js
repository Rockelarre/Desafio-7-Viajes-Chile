/* $(window).scroll(function() {
    $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-dark" );
  });
 */

  // Esta función sirve para opacar el backgrond del navbar
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


$("#btn-comenzar").click(function(){
    $("#pre-formulario").removeClass( "d-flex" ).addClass( "d-none" );
    $("#formulario").removeClass( "d-none" ).addClass( "d-flex" );
});

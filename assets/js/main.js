// Esta función sirve para opacar el backgrond del navbar
  var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
   } else {
      // upscroll code
      $("#navbar").removeClass( "bg-primary" ).addClass( "bg-transparent" );
   }
   lastScrollTop = st;
});


// Esta función sirve para hacer desaparecer la bienvenida del contacto 
// y aparecer el formulario de contacto
$("#btn-comenzar").click(function(){
    $("#pre-formulario").removeClass( "d-flex" ).addClass( "d-none" );
    $("#formulario").removeClass( "d-none" ).addClass( "d-flex" );
});

$(document).ready(function() {
      $(window).scroll(function(){
     var x=$(window).scrolltop();
    if(x>100){
           $(".header").css("backgroundcolor","white");
           $(".header").css("color","black");
           $(".logo .fa-bars").css("color","black");
}
  else{
    $(".header").css("backgroundcolor","#ffffff00");
     $(".links a").css("color","white");
 $(".logo .fa-bars").css("display","none");
}
});
    $(".fa-bars").click(function() {
   $(".links").toggleclass("showmyanchors");
       });
});
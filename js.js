function responsiveFn() {
     width = $( window ).width();
console.log(width);
  if (width < 970 || width==980 ) {
    //shifting of move div to left
     $('#move').prependTo( $('#bottom>div') );
  }
 }


  $(document).ready(function(){
//hiding the top navbar
    $(".fixed-top").hide();
    // fading effect to cards
    $('.card').css({opacity: 0.0, visibility: "visible",bottom : "-15px"}).animate({opacity: 1.0,bottom : "0px"},2000);
   $(window).ready(responsiveFn).resize(responsiveFn);


    $(function () {
        $(window).scroll(function () {
          //showing the navbar
          if ($(this).scrollTop() > 150) {
                $('.fixed-top').slideDown();
            } else {
                $('.fixed-top').slideUp('fast');
            }
        });
    });


});

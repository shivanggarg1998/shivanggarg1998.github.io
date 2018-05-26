
  $(document).ready(function(){

    $(".fixed-top").hide();
    $('.card').css({opacity: 0.0, visibility: "visible",bottom : "-10px"}).animate({opacity: 1.0,bottom : "0px"},1500);

    $(function () {
        $(window).scroll(function () {
          var scroll = $(this).scrollTop();
          console.log(scroll);
          if ($(this).scrollTop() > 150) {
                $('.fixed-top').slideDown();
            } else {
                $('.fixed-top').slideUp('fast');
            }
        });
    });


});

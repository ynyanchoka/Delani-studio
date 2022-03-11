$(document).ready(function() {

    $("#design").click(function(){
        $(".design-hidden").toggle();
        $(".design-showing").toggle();
    });

    $("#development").click(function(){
        $(".development-hidden").toggle();
        $(".development-showing").toggle();
      });

    $("#product-management").click(function(){
        $(".product-management-hidden").toggle();
        $(".product-management-showing").toggle();
    });

   
    $(".hover").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      })

    });
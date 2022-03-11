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
    $(document).ready(function(){
        $("form#form34A").submit(function(event){
          // event.preventDefault();
          var name = $("input#MERGE1").val();
          var email = $("input#MERGE0").val();
          var message = $("textarea#comment").val();
          if ($("input#MERGE1").val() && $("input#MERGE0").val()){
            alert (name + ", we have received your message. Thank you for reaching out to us.");
          }
          else {
            alert("Please enter your name and email!");
          }
          
        });
    


  });
  
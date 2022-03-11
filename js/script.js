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


// $(document).ready(function(){
//     $("#contactus").submit(function(event){
          
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var message = $("textarea#message").val();
//       if ($("input#name").val() && $("input#email").val()){
//             alert (name + ", we have received your message. Thank you for reaching out to us.");
//           }
//       else {
//             alert("Please enter your name and email!");
//           }
          
//     });
//   });


  function validate () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name == "" || email  == ""|| message  ==""){
      alert("Please enter your name, email and message!");
       return false;

    }
    else{
      alert (name + ", thank you for contacting us. We will get back to you as soon as possible.");
          }
    }
      
    
  

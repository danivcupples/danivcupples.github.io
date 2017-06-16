$(document).ready(function(){
  //provide confirmation alert when submitting form
  $("#contact").submit(function(){
    alert("Thank you for contacting me!");
  });

  //Activate carousel
  $("#myCarousel").carousel();

  //Enable carousel indicators
  $(".item").click(function(){
    $("#myCarousel").carousel(1);
  });

  //Enable carousel controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
});

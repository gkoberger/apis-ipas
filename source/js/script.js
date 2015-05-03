$(document).ready(function() {

  $(".guest-container").click(function() {
    if ( $(this).hasClass("active") ) {
      $(this).removeClass("active");
      $("#main-content").animate({bottom: -120}, "easeOutQuint");
    } else {
      var guest = $(this).data("guest");
      $(".guest-container").removeClass("active");
      $(".soundcloud").removeClass("active");
      
      $(this).removeClass("inactive").addClass("active");
      $(".soundcloud[data-guest=" + guest + "]").addClass("active");
      $("#main-content").animate({bottom: 0}, "easeOutQuint");
    }
  });

});
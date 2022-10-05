$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

jQuery(document).on('scroll', function(){
    jQuery('.h1pages').css("left", Math.max(200 - 0.2*window.scrollY, 1) + "vw");
})
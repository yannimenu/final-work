$(document).on("click","a#letsgo",function(e){
  e.preventDefault();
  var id = $(this).attr("href"), topSpace = 30;
  $('html, body').animate({
    scrollTop: $(id).offset().top - topSpace
  }, 800);
});
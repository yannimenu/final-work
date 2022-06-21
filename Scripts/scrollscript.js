$( document ).ready(function() {
    scrollFunc()
});


document.addEventListener("scroll", function () {
    scrollFunc()
});

function scrollFunc(){
   /*Apply classes for slide in bar*/
   scrollpos = window.scrollY;

   if (scrollpos > 1) {
       $("#toggleScroll").hide();
   }
   else {
       $("#toggleScroll").show();
   }
}
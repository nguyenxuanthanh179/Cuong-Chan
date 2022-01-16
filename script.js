// btn scroll top
var mybutton = document.getElementById("btnScrollToTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
btnScrollToTop.addEventListener("click", function(){
   window.scrollTo({
       top: 0,
       left: 0,
       behavior: "smooth"
   });
});

// fixed menu
// pc
window.onscroll = function() {myFunction()};
var menu = document.getElementById("scroll");
function myFunction() {
  if (window.pageYOffset > 190) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}

// mobile, tablet
window.onscroll = function() {myFunction()};
var mobile__icon = document.getElementById("nav");
function myFunction() {
  if (window.pageYOffset > 190) {
    mobile__icon.classList.add("sticky");
  } else {
    mobile__icon.classList.remove("sticky");
  }
}




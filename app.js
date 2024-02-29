
const scroll = new LocomotiveScroll({
  el: document.querySelector('.wrapper'),  
  smooth: true
});

  $("#toggle").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

document.addEventListener("DOMContentLoaded", function () {
const hero = document.querySelector(".hero");
const linksContainer = document.querySelector(".links");

hero.addEventListener("animationend", function () {
    hero.classList.add("show-links");
});
});



TweenMax.from("#brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);



new WOW().init();


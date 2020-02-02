// sns btn
let snsBtn = document.querySelector('.sns-wrap');
snsBtn.addEventListener('click', function () {
    if (!snsBtn.classList.contains('active')) {
    snsBtn.classList.add('active');
    }
    else snsBtn.classList.remove('active');
});
// header scroll event
let header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if ($(window).scrollY >= 381) {
        if (!header.classList.contains('active')) {
            header.classList.add('active');
        }
    }
    else header.classList.remove('active');
});
// nav click event
let speed = 700;

function scrolling(obj) {
    if (!obj) {
        $('html, body').animate({ scrollTop: 0 }, speed);
    } else {
        var posTop = $(obj).offset().top - 83;
        $('html, body').animate({ scrollTop: posTop }, speed)
    }
};

$("ul li a").click(function () {
    var direction = $(this).attr("href");
    scrolling(direction);
    return false;
});
// nav color event
$(document).scroll(function(){
        var sec1 = $('.section').offset().top;
        var sec2 = $('.section2').offset().top-83;
        var sec3 = $('.section3').offset().top-83;
        var sec4 = $('.section5').offset().top-83;
        var sec5 = $('.section6').offset().top-83;
        if($(this).scrollTop() == sec1){
            $('header nav li a').removeClass('active');
            $('header nav li:nth-child(1) a').addClass('active');
        } else if ($(this).scrollTop() < sec2){
            $('header nav li a').removeClass('active');
            $('header nav li:nth-child(2) a').addClass('active');
        } else if ($(this).scrollTop() < sec3){
            $('header nav li a').removeClass('active');
            $('header nav li:nth-child(3) a').addClass('active');
        } else if ($(this).scrollTop() < sec4){
            $('header nav li a').removeClass('active');
            $('header nav li:nth-child(4) a').addClass('active');
        } else if ($(this).scrollTop() < sec5){
            $('header nav li a').removeClass('active');
            $('header nav li:nth-child(5) a').addClass('active');
        } 
    }).scroll();
// menu event
let menu = document.querySelector('.menu');
let mNav = document.querySelector('.m-nav');
let close = document.querySelector('.close');
let back = document.querySelector('.m-back');
let btn2 = document.querySelector('header .contents .m-nav ul li a');

function remove() {
    mNav.classList.remove("active");
    menu.classList.remove("active");
    close.classList.remove("active");
    back.classList.remove("active");
}

menu.addEventListener("click", function () {
    menu.classList.add("active");
    mNav.classList.add("active");
    back.classList.add("active");
});
close.addEventListener("click", remove);
back.addEventListener("click", remove);
btn2.addEventListener("click", remove);

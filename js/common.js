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

// swiper 
var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
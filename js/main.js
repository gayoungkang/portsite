 // loading
 window.onload = function () {
    document.all.loading.style.display = 'none'
}
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
// motion event
var windowH = $(window).height();
var marginT = windowH / 2;

let aboutText = document.querySelector('.section2 .top');
let aboutCoLeft = document.querySelector('.section2 .col-1');
let aboutSection = document.querySelector('.section2');
let aboutColRight = document.querySelector('.section2 .col-2');
let line = document.querySelectorAll('.section2 .line');
let aboutSectionTop = aboutSection.offsetTop;

$(window).scroll(function () {
    if ($(this).scrollTop() >= aboutSectionTop - marginT) {
        if (!aboutText.classList.contains('active')) {
            aboutText.classList.add('active');
        }
        if (!aboutCoLeft.classList.contains('active')) {
            aboutCoLeft.classList.add('active');
        }
        if (!aboutColRight.classList.contains('active')) {
            aboutColRight.classList.add('active');
        }
    }
    else {
        aboutText.classList.remove('active');
        aboutCoLeft.classList.remove('active');
        aboutColRight.classList.remove('active');
    }
    for (let q = 0; q < line.length; q++) {
        let lineArray = line[q];
        if ($(this).scrollTop() >= aboutSectionTop - marginT) {
            if (!lineArray.classList.contains('active')) {
                lineArray.classList.add('active');
            }
        }
        else lineArray.classList.remove('active');
    }
});

// 카운트 올라가는 거
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
        countNum: countTo
    },
    {
        duration: 3000,
        easing:'linear',
        step: function() {
        $this.text(Math.floor(this.countNum));
        },
        complete: function() {
        $this.text(this.countNum);
        //alert('finished');
        }
    });  
});

let portfolioSection = document.querySelector('.section3');
let portfolioText = document.querySelector('.section3 .top');
let portfolioSectionTop = portfolioSection.offsetTop;

$(window).scroll(function () {
    if ($(this).scrollTop() >= portfolioSectionTop - marginT) {
        if (!portfolioText.classList.contains('active')) {
            portfolioText.classList.add('active');
        }
    }
    else {
        portfolioText.classList.remove('active');
    }
});

let serviceSection = document.querySelector('.section5');
let serviceText = document.querySelector('.section5 .text-box');
let serviceUl = document.querySelectorAll('.section5 ul li');
let serviceSectionTop = serviceSection.offsetTop;

$(window).scroll(function () {
    if ($(this).scrollTop() >= serviceSectionTop - marginT) {
        if (!serviceText.classList.contains('active')) {
            serviceText.classList.add('active');
        }
    }
    else {
        serviceText.classList.remove('active');
    }
    for (let w = 0; w < serviceUl.length; w++) {
        let serviceUlArray = serviceUl[w];
        if ($(this).scrollTop() >= serviceSectionTop - marginT) {
            if (!serviceUlArray.classList.contains('active')) {
                serviceUlArray.classList.add('active');
            }
        }
        else serviceUlArray.classList.remove('active');
    }
});

let contactSection = document.querySelector('.section6');
let contactText = document.querySelector('.section6 .top');
let contactList = document.querySelectorAll('.section6 ul li');
let contactSectionTop = contactSection.offsetTop;

$(window).scroll(function () {
    if ($(this).scrollTop() >= contactSectionTop - marginT) {
        if (!contactText.classList.contains('active')) {
            contactText.classList.add('active');
        }
    }
    else {
        contactText.classList.remove('active');
    }
    for (let r = 0; r < contactList.length; r++) {
        let contactListArray = contactList[r];
        if ($(this).scrollTop() >= contactSectionTop - marginT) {
            if (!contactListArray.classList.contains('active')) {
                contactListArray.classList.add('active');
            }
        }
        else contactListArray.classList.remove('active');
    }
});

// scrolltop event
$(document).ready(function () {
    $($(window)).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// map api
let Maplocation = new google.maps.LatLng(37.358019, 126.932969);
var mapProp = {
    center: Maplocation,
    zoom: 18,
};
var map = new google.maps.Map(document.querySelector(".map"), mapProp);
var marker;
marker = new google.maps.Marker({
    position: Maplocation, // 마커가 위치할 위도와 경도(변수)
    map: map,
    title: '서대전네거리역이지롱~' // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
});


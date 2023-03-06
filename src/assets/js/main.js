/*
::
:: Theme Name: Gazolin - Industry & Manufacturing HTML Template
:: Email: Nourramadan144@gmail.com
:: Author URI: https://themeforest.net/user/ar-coder
:: Author: ar-coder
:: Version: 1.0
:: 
*/

(function () {
    'use strict';
    
    // :: Loading
    $(window).on('load', function () {
        $('.loading').fadeOut();
    });
    
    // :: Scroll Smooth To Go Section
    $('.move-section').on('click', function (e) {
        e.preventDefault();
        var anchorLink = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchorLink.attr('href')).offset().top + 1
        }, 1000);
    });
    
    // :: Add Class Active For ('.nav-bar')
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('.all-navbar').height() + 30) {
            $('.nav-bar').addClass('active');
        } else {
            $('.nav-bar').removeClass('active');
        }
    });
    
    // :: Varables Navbar
    var headerBar = $('.nav-bar'),
        $navbarMenu = $('#open-nav-bar-menu'),
        $menuLink = $('.open-nav-bar'),
        $menuTriggerLink = $('.has-menu > a');

    // :: Add Class Active For $menuLink And $navbarMenu
    $menuLink.on('click', function (e) {
        e.preventDefault();
        $menuLink.toggleClass('active');
        $navbarMenu.toggleClass('active');
    });

    // :: Add Class Active For $menuTriggerLink
    $menuTriggerLink.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active').next('ul').toggleClass('active');
    });
    
   
    
    // :: Open And Close Menu
    $('.menu-icon.open').on('click', function () {
        $('.menu-box').fadeIn().addClass('active');
    });
    $('.menu-box').on('click', function () {
        $(this).fadeOut().removeClass('active');
    });
    $('.menu-box-icon.exit').on('click', function () {
        $('.menu-box').fadeOut().removeClass('active');
    });
    $('.menu-box .inner-menu').on('click', function (e) {
        e.stopPropagation();
    });
    

    // :: Counter Up Js
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });
    
    // :: Magnific Popup Plugin
    $('.projects-item .hover-box .projects-icon li a.popup').magnificPopup({
        type: 'image',
        projects: {
            enabled: true
        }
    });
    
    
    
    // :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });
	
	// :: Add Class Active To Gallery
    $('.projects-list .list-name-projects li').on('click', function () {
        console.log("asnd")
        $(this).addClass('active').siblings().removeClass('active');
    });
	
}());

// // :: Setup mouseenter On Department Item
// $(document).ready(function () {
//     $('.services.home-2 .services-item-img-box, .projects-item, .services.home-3 .item-box').on('mouseenter', function (e) {
//         x = e.pageX - $(this).offset().left,
//             y = e.pageY - $(this).offset().top;
//         $(this).find('span').css({
//             top: y,
//             left: x
//         });
//     });
//     $('.services.home-2 .services-item-img-box, .projects-item, .services.home-3 .item-box').on('mouseout', function (e) {
//         x = e.pageX - $(this).offset().left,
//             y = e.pageY - $(this).offset().top;
//         $(this).find('span').css({
//             top: y,
//             left: x
//         });
//     });
	
// });
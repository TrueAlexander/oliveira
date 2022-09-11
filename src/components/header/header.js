import $ from 'jquery';

//scroll/full header
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".header, .header__logo, .header__subtitle, .header__title, .header__nav, .header__nav_burger").addClass("scroll");
  }
  else {
    $(".header, .header__logo, .header__subtitle, .header__title, .header__nav, .header__nav_burger").removeClass("scroll");
  }
});

$(".header__nav_burger").click(function () {
  //lock/unlock body
  $("body").toggleClass("lock");

  if ($(window).scrollTop() < 1) {
    $(".header, .header__logo, .header__subtitle, .header__title, .header__nav, .header__nav_burger").toggleClass("scroll");
    $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
    $(".header__item").click(function () {
      $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
      $("body").removeClass("lock");
    });
  } else {
    $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
    $(".header__item").click(function () {
      $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
      $("body").removeClass("lock");
    });
  }
});
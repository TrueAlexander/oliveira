import { elementScrollIntoView } from "seamless-scroll-polyfill";
import $ from 'jquery';

const headerWithScroll = () => {

  ////
  const scrolling = () => {
    const links = document.querySelectorAll('.header__item a')
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()

        const id = link.getAttribute('href').substring(13)
        const target = document.getElementById(id)
        elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" });
      }) 
    })    
  }

  const scrollingBurger = (clickedLink) => {

      const homeLink = document.getElementById('homeLink')

      const id = clickedLink.getAttribute('href').substring(13)
      const target = document.getElementById(id)

      if (clickedLink === homeLink) {
        if (window.scrollY > 0) {
          elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
        } else {
          console.log('reload')
          window.location.reload()
        }

      } else {
        elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
      }      
  }
  ////
    //scroll/full header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header, .header__logo, .header__nav, .header__nav_burger").addClass("scroll")
    }
    else {
      $(".header, .header__logo, .header__nav, .header__nav_burger").removeClass("scroll")
    } 
  });

  
  if (visualViewport.width > 950) {

    console.log('>950');
    scrolling() 

  } else {

    console.log('<950');
    $(".header__nav_burger").click(function () {
      console.log('click');
      //lock/unlock body
      $("body").toggleClass("lock"); 

      if ($(window).scrollTop() < 1) {
        $(".header, .header__logo, .header__nav, .header__nav_burger").toggleClass("scroll");
        $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
        $(".header__item").click(function (event) {
          $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
          $("body").removeClass("lock");
          scrollingBurger(event.target)
        })

      } else {
        $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
        $(".header__item").click(function (event) {
          $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
          $("body").removeClass("lock");
          scrollingBurger(event.target)
        });
      }
    });
  }
}

export default headerWithScroll

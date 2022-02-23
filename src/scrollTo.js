import { elementScrollIntoView } from "seamless-scroll-polyfill";

const scrollTo = () => {

  const links = document.querySelectorAll('.header__item a')

  links.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault()

      const id = element.getAttribute('href').substring(13)
      
      const target = document.getElementById(id)
     

      elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" });

    })

  })
}

export default scrollTo;

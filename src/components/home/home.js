import { elementScrollIntoView } from "seamless-scroll-polyfill"


const home = () => {
  
  const arrowDown = require("../../../images/icons/arrow-down.svg")
  const arrowUp = require("../../../images/icons/arrow-up.svg")
  const box = document.querySelector('.home__box')
  const content = document.querySelector('.home__content')

  if (visualViewport.width > 1050) {

    content.insertAdjacentHTML('beforeend', `
    <p class = "home__description animate__animated animate__slideInLeft animate__slow"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção. Atuamos com excelência nas áreas de laudos extrajudiciais e autovistoria, com nossa equipe trabalhamos com dinamismo e eficiência na manutenção de condomínios e ainda oferecemos um grande portifólio de atividades. Com apoio da nossa equipe atuamos na manutenção de fachadas, adequação de barriletes de acordo com a ABNT NBR 5626 e Impermeabilização. Atendemos a todo o Rio de Janeiro com uma visão única que possibilita a todos os nossos clientes, parceiros e amigos ter segurança técnica, fundamentada nas normas vigentes atuais, e segurança financeira, tudo para que o resultado seja alcançado.</p>
      `)
  } else {
    
    content.insertAdjacentHTML('beforeend', `
        <p class = "home__description animate__animated animate__slideInLeft animate__slow"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção...</p>
        <button id = "homeBtn" class="home__btn animate__animated animate__fadeIn animate__slower"><img src=${arrowDown} alt="arrow" width="40px" height="40px"></button>
      `) 

      const buttonOpened = () => button.innerHTML = `<img src=${arrowUp} alt="arrow" width="40px" height="40px">`
      const buttonClosed = () => button.innerHTML = `<img src=${arrowDown} alt="arrow" width="40px" height="40px">`
      
      const button = document.getElementById('homeBtn')
      const description = document.querySelector('.home__description')

      button.addEventListener('click', () => {

        description.innerHTML = ''
        button.classList.toggle('opened')

        if (button.classList.contains('opened')) {
          buttonOpened()
          box.style.minHeight = '100vh'
          box.style.height = 'auto'
          box.style.paddingTop = '150px'
          description.insertAdjacentHTML('beforeend', `
              <p class = "home__description animate__animated animate__fadeIn animate__slower"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção. Atuamos com excelência nas áreas de laudos extrajudiciais e autovistoria, com nossa equipe trabalhamos com dinamismo e eficiência na manutenção de condomínios e ainda oferecemos um grande portifólio de atividades. Com apoio da nossa equipe atuamos na manutenção de fachadas, adequação de barriletes de acordo com a ABNT NBR 5626 e Impermeabilização. Atendemos a todo o Rio de Janeiro com uma visão única que possibilita a todos os nossos clientes, parceiros e amigos ter segurança técnica, fundamentada nas normas vigentes atuais, e segurança financeira, tudo para que o resultado seja alcançado.</p>
                `)
        } else {
          const target = document.getElementById('home')
          buttonClosed()
          elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
          box.style.height = '100vh'
          box.style.paddingTop = '125px'
          description.insertAdjacentHTML('beforeend', `
              <p class = "home__description animate__animated animate__fadeIn animate__slower"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção...</p>
                `) 
        } 
      })
    } 
}

export default home



  
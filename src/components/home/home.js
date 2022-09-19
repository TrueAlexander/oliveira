const box = document.querySelector('.home__box')
const content = document.querySelector('.home__content')


if (visualViewport.width > 1050) {

  content.insertAdjacentHTML('beforeend', `
  <p class = "home__description animate__animated animate__slideInLeft animate__slow"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção. Atuamos com excelência nas áreas de laudos extrajudiciais e autovistoria, com nossa equipe trabalhamos com dinamismo e eficiência na manutenção de condomínios e ainda oferecemos um grande portifólio de atividades. Com apoio da nossa equipe atuamos na manutenção de fachadas, adequação de barriletes de acordo com a ABNT NBR 5626 e Impermeabilização. Atendemos a todo o Rio de Janeiro com uma visão única que possibilita a todos os nossos clientes, parceiros e amigos ter segurança técnica, fundamentada nas normas vigentes atuais, e segurança financeira, tudo para que o resultado seja alcançado.</p>
    `)
} else {
  content.insertAdjacentHTML('beforeend', `
      <p class = "home__description animate__animated animate__slideInLeft animate__slow"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção...</p>
      <button id = "homeBtn" class="home__btn btn animate__animated animate__fadeIn animate__slower">Saber mais</button>
    `) 

    const buttonOpened = () => button.innerText = 'Fechar'
    const buttonClosed = () => button.innerText = 'Saber mais'
    
    const button = document.getElementById('homeBtn')

    const description = document.querySelector('.home__description')

    button.addEventListener('click', () => {

      description.innerHTML = ''
      button.classList.toggle('opened')

      if (button.classList.contains('opened')) {
        buttonOpened()
        description.insertAdjacentHTML('beforeend', `
            <p class = "home__description animate__animated animate__fadeIn animate__slower"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção. Atuamos com excelência nas áreas de laudos extrajudiciais e autovistoria, com nossa equipe trabalhamos com dinamismo e eficiência na manutenção de condomínios e ainda oferecemos um grande portifólio de atividades. Com apoio da nossa equipe atuamos na manutenção de fachadas, adequação de barriletes de acordo com a ABNT NBR 5626 e Impermeabilização. Atendemos a todo o Rio de Janeiro com uma visão única que possibilita a todos os nossos clientes, parceiros e amigos ter segurança técnica, fundamentada nas normas vigentes atuais, e segurança financeira, tudo para que o resultado seja alcançado.</p>
              `)
      } else {
        buttonClosed()
        description.insertAdjacentHTML('beforeend', `
            <p class = "home__description animate__animated animate__fadeIn animate__slower"> A Oliveira Serviços de Engenharia nasceu da necessidade de oferecer um serviço técnico, de qualidade, com garantia e com acompanhamento desde o início até o fim da intervenção...</p>
              `) 
      } 
    })

  }  

  // animate__animated animate__fadeInUp animate__slow
  // animate__animated animate__fadeIn animate__slower
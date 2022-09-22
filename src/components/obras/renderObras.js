const renderObras = () => {

  const obrasBox = document.querySelector('.obras__box')
    
    const obrasImages = [
      {
        title: 'Telhados',
        imgPath: 'https://i.ibb.co/qr03cYf/Telhados01.png',
        active: false,
        link: './telhados.html'
      },
      {
        title: 'Recuperação da Fachada',
        imgPath: 'https://i.ibb.co/VN0srkF/Recuperacao-de-Fachada01.png',
        active: true,
        link: './fachadas.html'
      },
      {
        title: 'Pintura',
        imgPath: 'https://i.ibb.co/bHP2yjT/Pinturas.png',
        active: false,
        link: './pinturas.html'
      },
      {
        title: 'Serviços Eletricos',
        imgPath: 'https://i.ibb.co/YL6t5k8/Servicos-Eletricos.png',
        active: false,
        link: './eletricas.html'
      },
      {
        title: 'Instalação Spa e Hidromassagens',
        imgPath: 'https://i.ibb.co/1KK5qg8/Instalacao-de-Hidro-e-Spa02.png',
        active: false,
        link: './spas.html'
      },
    ]
  
    obrasImages.forEach((item) => {
      obrasBox.insertAdjacentHTML('beforeend', `
        <div class="slide ${item.active ? 'active' : ''}" style = "background-image: url(${item.imgPath});">
          <h3>
            ${item.title}
          </h3>
          <a class="slide__link" href=${item.link}>Clique aqui para ver mais</a>
        </div>
      
      `)
    })
}

export default renderObras
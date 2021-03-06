const renderObras = () => {
  
  const obrasBox = document.querySelector('.obras__box');

  const obrasImages = [
    {
      title: 'Telhados',
      imgPath: 'https://i.ibb.co/qr03cYf/Telhados01.png',
      active: false
    },
    {
      title: 'Recuperação da Fachada',
      imgPath: 'https://i.ibb.co/VN0srkF/Recuperacao-de-Fachada01.png',
      active: true
    },
    {
      title: 'Pintura',
      imgPath: 'https://i.ibb.co/bHP2yjT/Pinturas.png',
      active: false
    },
    {
      title: 'Serviços Eletricos',
      imgPath: 'https://i.ibb.co/YL6t5k8/Servicos-Eletricos.png',
      active: false
    },
    {
      title: 'Instalação Spa e Hidromassagens',
      imgPath: 'https://i.ibb.co/1KK5qg8/Instalacao-de-Hidro-e-Spa02.png',
      active: false
    },
  ]
 
  obrasImages.forEach((item) => {
    obrasBox.insertAdjacentHTML('beforeend', `
      <div class="slide ${item.active ? 'active' : ''}" style = "background-image: url(${item.imgPath});">
        <h3>
          ${item.title}
        </h3>  
      </div>
    
    `);

  })
}

export default renderObras;
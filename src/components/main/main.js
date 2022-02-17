import load from "./modules/load";
import loadProduct from "./modules/loadProduct";

load();

setTimeout(chooseProduct, 3000)

function chooseProduct() {
  const prodItems = document.querySelectorAll('.card')

  prodItems.forEach((prodItem) => {

    prodItem.addEventListener('click', () => {

      const mission = document.querySelector('.mission');
      const opinions = document.querySelector('.opinions');
      const main = document.querySelector('.main');
      const ind = prodItem.id;
      mission.style.display = 'none'
      opinions.style.display = 'none'
      main.style.display = 'none'
      loadProduct(ind);
    })

  })

}

const buttonsNav = document.querySelectorAll('.header__item')

buttonsNav.forEach((btn) => {
  btn.addEventListener('click', () => {
    const product = document.querySelector('.product')
    const productContainer = document.querySelector('.product > .container');
    const main = document.querySelector('.main')
    product.style.display = 'none'
    productContainer.innerHTML = ''
    mission.style.display = 'block'
    opinions.style.display = 'block'
    main.style.display = 'block'
  })
})
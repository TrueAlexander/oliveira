import getData from "./getData";
import renderProduct from "./renderProduct";

const loadProduct = (index) => {

  getData().then((data) => {

    const product = document.querySelector('product')

    product.style.display = 'block'

    renderProduct(data, index);


  })

}

export default loadProduct;
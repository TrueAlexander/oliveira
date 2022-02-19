const renderProduct = (goods, index) => {

  const productContainer = document.querySelector('.product > .container');

  localStorage.setItem('goods', JSON.stringify(goods));

  goods.forEach((goodsItem) => {

    if (goodsItem.id == index) {

      productContainer.insertAdjacentHTML('beforeend', `
          <div class="product__box">
            <div class="product__card">
              <div class="product__title sectionTitle">${goodsItem.title}</div>
              <div class="product__row">
                <div class="product__photo">
                  <img src="${goodsItem.img}" alt="Foto del producto elegido">
                </div>
                <div class="product__description">
                  ${goodsItem.description}
                </div>
              </div>
              <div class="product__price sectionTitle">
                <p>Precio: </p><p class="price">${goodsItem.price}</p>
              </div>
            </div>
          </div>
      `);
    };
  })

}

export default renderProduct;
const renderGoods = (goods) => {
  const goodsWrapper1 = document.getElementById('box1');
  const goodsWrapper2 = document.getElementById('box2');

  localStorage.setItem('goods', JSON.stringify(goods));

  goodsWrapper1.innerHTML = '';
  goodsWrapper2.innerHTML = '';

  goods.forEach((goodsItem) => {

    if (goodsItem.category == 'Jabones') {
      goodsWrapper1.insertAdjacentHTML('beforeend', `
      
      <a class="main__item card" id="${goodsItem.id}">
        <div class="card__title">${goodsItem.title}</div>
        <div class="card__photo">
          <img class="card__image" src="${goodsItem.img}" alt="image#1">
        </div>
        <div class="card__description">${goodsItem.about}</div>
      </a>
      
      `);

    } else if (goodsItem.category == 'Cremas faciales') {
      goodsWrapper2.insertAdjacentHTML('beforeend', `
      
      <a class="main__item card" id="${goodsItem.id}">
        <div class="card__title">${goodsItem.title}</div>
        <div class="card__photo">
          <img class="card__image" src="${goodsItem.img}" alt="image#1">
        </div>
        <div class="card__description">${goodsItem.about}</div>
      </a>
      
      `);

    };
  })

}

export default renderGoods;
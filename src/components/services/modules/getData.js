const getData = () => {
  return fetch(`https://oliveira-db-default-rtdb.firebaseio.com/services.json`)

    .then((response) => {
      return response.json();
    })
};

export default getData;
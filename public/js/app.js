var begin = () => {
  const urlMain = 'https://api.mercadolibre.com/sites/MPE/search?category=MPE1648'; // Categoria: Computacion
  const urlSubCategory = 'https://api.mercadolibre.com/sites/MPE/search?q=';
  const $container = $('#container');

  /* Funcion - Cargar imagenes en container */
  var loadProducts = (url) => {
    $.ajax({
      url: url,
      success: (data) => {
        const dataResult = data.results;
        dataResult.forEach(element => {
          let resultID = element.id;
          let resultTitle = element.title;
          let resultPrice = element.price;
          let resultPhoto = element.thumbnail;
          let resultCurrency = element.currency_id;
          let template = `<div class="card " style="width: 18rem;" data-id="${resultID}">
                              <img class="card-img-top" src="${resultPhoto}" alt="Card image cap">
                              <div class="card-body">
                                <h5 class="card-title">${resultTitle}</h5>
                              </div>
                              <div class="allControls d-none">
                                <div class="d-flex justify-content-center">
                                  <button class="btn btn-primary controls">-</button>
                                  <p class="count">1</p>
                                  <button class="btn btn-primary controls">+</button>
                                </div>
                                <button class="btn btn-primary col-12">AGREGAR</button>
                              </div>
                            </div>`;
          $container.append(template);
        });
      }
    });
  };
  /* Carga imagenes de API - Catetegoria Computación */
  loadProducts(urlMain);
};
$(document).ready(begin);
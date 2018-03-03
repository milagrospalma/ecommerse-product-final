let begin = () => {
  const urlMain = 'https://api.mercadolibre.com/sites/MPE/search?category=MPE1648'; // Categoria: Computacion
  const urlSubCategory = 'https://api.mercadolibre.com/sites/MPE/search?q=';
  const $container = $('#container');

  /* Funcion - Cargar imagenes en container */
  let loadProducts = (url) => {
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

  /* page.js */
  page('/', index);
  page('/laptops', laptops);
  page('/cpu', cpu);
  page('/printers', printers);
  page('/keyboards', keyboards);
  page();

  let index = () => {
    $container.html('');
    loadProducts(urlMain);
  };

  let laptops = () => {
    const urlLaptops = urlSubCategory + 'laptop';
    loadProducts(urlLaptops);
    $container.text('Laptops');
  };
  let cpu = () => {
    const urlCpu = urlSubCategory + 'cpu';
    loadProducts(urlCpu);
    $container.text('CPU');
  };
  let printers = () => {
    const urlPrinters = urlSubCategory + 'impresoras';
    loadProducts(urlPrinters);
    $container.text('Impresoras');
  };
  let keyboards = () => {
    const urlKeyboards = urlSubCategory + 'teclados';
    loadProducts(urlKeyboards);
    $container.text('Teclados');
  };
};
$(document).ready(begin);
const content = document.getElementById("content");
const content2 = document.getElementById("content2");

const baseURL = `http://localhost:8080/api/producto/`;
const inputProducto = document.getElementById("productoName");
const buttonSearch = document.getElementById("searchProducto");
const buttonDelete = document.getElementById("removeProducto");

buttonSearch.addEventListener("click", BuscarProduct);
buttonDelete.addEventListener("click", deleteProduct);

function BuscarProduct() {
  window
    .fetch(`${baseURL}${inputProducto.value.toLocaleUpperCase()}`)
    .then((res) => {
      if (res.status === 400) {
        alert("Este producto no existe, pruebe con otro");
      } else {
        return res.json();
      }
    })
    .then((resJSON) => {

      resJSON.forEach((e) => {
        const product = `
        
        <div class="col-md-3  my-5">
          <div class="card card-productos">
              <img src="${e.url_image}" class="card-img-top img-productos" alt="Imagen no disponible">
              <div class="card-body">
                <h5 class="card-title title-productos">${e.name}</h5>
                <p class="card-text">'$'${e.price}</p>
                <a href="#" class="btn btn-primary">comprar</a>
              </div>
              </div>
           
      </div>
          `;
        content2.insertAdjacentHTML("beforeEnd", product);
      });
    });
}

function deleteProduct() {
  var allProduct = content2.childNodes;
  allProduct = Array.from(allProduct);

  allProduct.forEach((inputProducto) => {
    inputProducto.remove(inputProducto);
  });

  console.log("presionaste borrar");
}
const getConnection = () => {
  const URL = `http://localhost:8080/api/producto/`;

  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((e) => {
        drawProduct(e);
      });
    })
    .catch((e) => console.log(e));
};

const drawProduct = (e) => {
  const product = `
          <div class="col-md-3  my-5">
    <div class="card card-productos">
        <img src="${e.url_image}" class="card-img-top img-productos" alt="Imagen no disponible">
        <div class="card-body">
          <h5 class="card-title title-productos">${e.name}</h5>
          <p class="card-text">'$'${e.price}</p>
          <a href="#" class="btn btn-primary">comprar</a>
        </div>
        </div>
        </div>
    `;
  content.insertAdjacentHTML("beforeEnd", product);
};

getConnection();

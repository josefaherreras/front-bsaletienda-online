document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
})
const fetchData = async () => {
    try {
        const res = await fetch('http://localhost:8080/api/producto/')
        const data = await res.json()
        console.log(data)
        pintarCard(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCard = (producto) => {
    const contenido = document.querySelector('#contenido');
    producto.forEach(producto => {
        const row = document.createElement('div');
        row.classList.add('col-md-3','mt-5');
        row.innerHTML += `
        <div class="card card-productos">
        <img src="${producto.url_image}" class="card-img-top img-productos" alt="Imagen no disponible">
        <div class="card-body">
          <h5 class="card-title title-productos">${producto.name}</h5>
          <p class="card-text">$${producto.price}.-</p>
          <a href="#" class="btn btn-primary">comprar</a>
        </div>
        </div>

        `;
        contenido.appendChild(row);
    });
    

}

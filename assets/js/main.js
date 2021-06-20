

var contenido = document.querySelector('#contenido');
function traer(){
    fetch('http://localhost:8080/api/producto/')
    
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

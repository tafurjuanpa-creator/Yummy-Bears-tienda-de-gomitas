function cargarPagina(pagina){
    fetch('pages/'+ pagina)
    .then((response) => {
        if(!response.ok) {
            throw new Error('error al cargar la pagina');
        }
        return response.text();
    })
    .then(Data => {
        document.getElementById('contenido').innerHTML = Data;
        localStorage.setItem("paginaActual",pagina);
    })
    .catch(error => {
        document.getElementById('contenido').innerHTML =
        "<p>Error al cargar el contenido</p>";
        console.Error(Error);
    });
}

function cargarProductos(pagina){
    fetch('pages/'+ pagina)
    .then((response) => {
        if(!response.ok) {
            throw new Error('error al cargar la pagina');
        }
        return response.text();
    })
    .then(Data => {
        document.getElementById('productos').innerHTML = Data;
        localStorage.setItem("paginaActual",pagina);
    })
    .catch(error => {
        document.getElementById('productos').innerHTML =
        "<p>Error al cargar el contenido</p>";
        console.Error(Error);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const paginaGuardada=localStorage.getItem("paginaActual");

    if(paginaGuardada) {
        cargarPagina(paginaGuardada);
    } else {
        cargarPagina("inicio.html");
    }
});

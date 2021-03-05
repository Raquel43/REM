const buttonRest = document.getElementById("rest");

buttonRest.addEventListener("click", function (e) {
    getRest();
});

function getRest() {
    fetch('./data/restaurante.json')
        .then(response => response.json())
        .then((restaurantes) => {
            const container = document.getElementById("contenido");
            container.innerHTML = "";
            for (let rest of restaurantes) {
                container.innerHTML +=
                    `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4 film">
                           <img src="img/${rest.img}"  alt="...">
                         </div>
                         <div class="col-md-8">
                           <div class="card-body">
                             <h5 class="card-title">${rest.nombre}</h5>
                             <p class="card-text">${rest.descripcion}</p>
                             <p class="card-text">${rest.direccion}</p>
                             <p class="card-text">${rest.horario}</p>
                             <a href="${rest.telefono}">${rest.telefono}</a>
                            </div>
                         </div>
                         </div>
                         </div>`;
            }
        })
    }
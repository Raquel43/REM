const buttonFilms = document.getElementById("pelis");

buttonFilms.addEventListener("click", function (e) {
  getFilms();
});
function getFilms() {
    fetch('./data/film.json')
        .then(response => response.json())
            .then((films) => {
                const container = document.getElementById("contenido");
                container.innerHTML="";
                for (let film of films) {
                        container.innerHTML +=
                        `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                        <div class="col-md-4 film">
                           <img src="img/${film.img}"  alt="...">
                         </div>
                         <div class="col-md-8">
                           <div class="card-body">
                             <h5 class="card-title">${film.titol}</h5>
                             <p class="card-text">${film.sinopsi}</p>
                            </div>
                         </div>
                         </div>
                         </div>`;
                }
          })
        }

   
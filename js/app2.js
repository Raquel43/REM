// import {
//  users
// } from "./app.js";


window.onload=getUserFromStorage;


function getUserFromStorage() {
  console.log("estoy dentro");
  // Recupera l'item del storage i el transforma a un objecte JSON.
let userObjStorage = JSON.parse(sessionStorage.getItem("user"));
  console.log(userObjStorage);
  let container = document.getElementById("imagenUser");
  container.innerHTML = ` <a href="#"class="imagen"><img class="imagen" src="${userObjStorage.imagen}" alt="user" /></a><p id="name">${userObjStorage.name}</p>
  `;
}

const buttonRecargar = document.getElementById("principal");
buttonRecargar.addEventListener("click",recargar);

function recargar(){
  window.location.assign("./remember.html");
}

const buttonAmigos = document.getElementById("amigos");

buttonAmigos.addEventListener("click", function (e) {
  cargarUsers();
});
function cargarUsers(){
  let users = JSON.parse(localStorage.getItem("user"));
  const contenedor = document.getElementById("contenido");
  contenedor.innerHTML = "";
 for(let use of users){
    console.log(use.nombre)
  contenedor.innerHTML+=`<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
  <div class="col-md-4 film">
     <img src="${use.img}" width="50%" alt="...">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <h5 class="card-title">${use.nombre}</h5>
       <p class="card-text">${use.email}</p>
      </div>
   </div>
   </div>
   </div>`
  }
}
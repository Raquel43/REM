let users = [
  {
    nombre: "Emilio",
    email: "emilio@gmail.com",
    img: "img/emilio.jpg",
    password: "1234",
    telefono: "643211324",
  },
  {
    nombre: "Raquel",
    email: "raquel@gmail.com",
    img: "img/raquel.jpg",
    password: "raquel44",
    telefono: "643211324",
  },
  {
    nombre: "Cristina",
    email: "cristina@gmail.com",
    img: "img/cristina.jpg",
    password: "cristina20",
    telefono: "643211324",
  },
  {
    nombre: "Alex",
    email: "alex@gmail.com",
    img: "img/alex.jpg",
    password: "alex31",
    telefono: "643211324",
  },
];

const buttonAfegir = document.getElementById("afegir");

buttonAfegir.addEventListener("click",agregarUsuario);

function agregarUsuario() {
  let nombre = document.getElementById("newUser").value;
  let email = document.getElementById("mail").value;
  let img = "https://thispersondoesnotexist.com/image";
  let password = document.getElementById("paso").value;
  let telefono = document.getElementById("tel").value;

  let usuarios = {
    nombre: nombre,
    email: email,
    img: img,
    password: password,
    telefono: telefono,
  };
  users.push(usuarios);
  console.log(users);
  GuardaUsuarios();
}

const buttonAdd = document.getElementById("btn-enviar");
buttonAdd.addEventListener("click", function (e) {
  getUsers();
});
function getUsers() {
  const inputName = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  let usuario = users.find((user) => user.nombre == inputName);
  if (usuario && usuario.password == contrasena) {
    saveUserInStorage();
    alert("usuario registrado");
    window.location.assign("./remember.html");
  } else {
    alert("usuario no registrado o contraseña incorrecta");
  }
  function saveUserInStorage() {
    // Comprovar en primer lloc si l'objecte Storage es troba definit al motor del navegador
    if (typeof Storage == "undefined") {
      alert("sessionStorage no soportado por el navegador");
    } else {
      // LocalStorage disponible
      // Guardar i extreure objectes json del Storage:
      let userObj = {
        name: document.getElementById("usuario").value,
        imagen: usuario.img,
      };
      sessionStorage.setItem("user", JSON.stringify(userObj));
      console.log("Datos guardados correctamente");
      //entrar();
    }
  }
}
//   function entrar() {
//     console.log("entrar");
//  let ruta = "./prueba.html";
//     window.location.href=ruta;
//   }
// }

//keyup

function GuardaUsuarios() {
  // Comprovar en primer lloc si l'objecte Storage es troba definit al motor del navegador
  if (typeof Storage == "undefined") {
    alert("Localstore no soportado por el navegador");
  } else {
    console.log("Estoy guardando usuarios");
    // LocalStorage disponible
    // Guardar i extreure objectes json del Storage:
    let userObj = users;
    
    localStorage.setItem("user", JSON.stringify(userObj));
    console.log("Datos guardados correctamente");
    //entrar();
  }
}
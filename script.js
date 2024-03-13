//alert("Hola este es mi Javascript");

//let nombre_variable = "mi nombre";
//const nombre_constante = "mi nombre";
//var nombre_global = "mi nombre";


//console.log(nombre_variable);
//console.log(nombre_constante);
//console.log(nombre_global);



//SELECCIONAR ELEMENTOS
//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(".nombreTitulo")


//CONDICIONALES
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);


//if (textoTitulo == "Nombre"){
   // titulo.innerHTML = "Otro";
//} else {
    //console.log("No se cumple");
//}

//No salió uu

//FUNCIONES
//let nombre1 = "Nadiezhda";
//let ciudad1 = "Jauja";
//let gusta1 = "cantar";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusta){
   // let contenido = `Me llamo ${nombre}, nací en ${ciudad} y sigo viviendo aquí. Me gusta ${gusta} y salir con mis amigos/as. Me encantaría aprender a programar para hacer un mundo más accesible digitalmente.`;

    //return contenido;
//};

//parrafo.innerText = cambiarTexto(nombre1, ciudad1, gusta1);


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
    alert("Enviado");
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

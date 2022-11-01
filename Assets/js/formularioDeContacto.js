var form = document.querySelector("#formularioDeContacto");
form.addEventListener("submit", handleSubmit);

/*
la funcion es asincrona por el delay debido a la conexión con el sitio web que envía los mails
*/
async function handleSubmit(event) {
  
  /*
  evitamos que se haga el submit antes de ejecutar el javascript para:
  1)hacer nosotros la validacion de los campos
  2) evitamos que despues del submit quede en la pagina de formspree
  */
  event.preventDefault();

  //TO DO
  // Validar los campos del formulario que tienen estructura compleja
  // Si la validacion es exitosa continuar con el submit
  // sino mostrar un mensaje de error poner el foco en el campo que produjo el error

  let nombre = document.querySelector("#nombre");
  let apellido = document.querySelector("#apellido");
  let comentarios = document.querySelector("#comentarios");
  let email = document.querySelector("#email");
  let cemail = document.querySelector("#cemail");
  let email_exp = /^\w+([\.-]\w+?)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  // validar si los emails se corresponden con un formato válido
  let validation_status = "";
  if (nombre.value.length === 0)
    validation_status += `Debe completar el campo "Nombre" <br>`;

  if (apellido.value.length === 0)
    validation_status += `Debe completar el campo "Apellido" <br>`;

    if (comentarios.value.length < 20)
    validation_status += `El campo "Comentarios" debe tener una longitud mínima de 20 caracteres<br>`;


  let email1_valid = email_exp.test(email.value);
  if (!(email1_valid))
    validation_status += `El formato del "Email" es incorrecto <br>`;

  let email2_valid = email_exp.test(cemail.value);
    if (!(email2_valid))
    validation_status += `El formato de la confirmación del "Email" es incorrecto <br>`;

  // si los dos emails son validos los comparamos:
  if (email1_valid && email2_valid) {
    if (!(email.value === cemail.value)) {
      validation_status += `Las direcciones de mail no coinciden! <br>`;
    }
  }

  // Si se produjo algun error de validacion, mostrarlo y no hacer submit

  if (!(validation_status == "")) {
    var p = document.querySelector("#validation_result");
    p.innerHTML = validation_status;
  }
  else
  // enviar el mail via formspree
  {
    var p = document.querySelector("#validation_result");
    p.innerHTML = "";
    /* usamos el campo del formulario status para mostrar los mensajes de resultado */
    var status = document.getElementById("result-msg"); 

    var data = new FormData(form); 
    
  // PARA TESTEAR DEJAR ESTA LINEA COMENTADA (para no gastar los mails gratis de formspree):
    await fetch("https://formspree.io/f/xgeqyddv", {  
  //PARA PRODUCCION DESCOMENTAR LA LINEA DE ARRIBA Y COMENTAR LA DE ABAJO:
    // await fetch("", {  
      /*
    action: formspree...
    method: post
    body: FormData
    headers: formato de la respuesta que espero (en este caso JSON)
    */
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
          status.innerHTML = "Gracias por contactarnos! Te responderemos a la brevedad."
        form.reset()  /* limpiamos los campos del formulario */
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Se produjo un error al enviar el formulario."
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Se produjo un error al enviar el formulario."
    });
  }

  /* clear a form after submission */
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

}

//-----------------------------------------------------------------------------------------------VARIABLES
let txtNombre = document.getElementById("NombreForm");
let email = document.getElementById("EmailForm");
let txtNumber = document.getElementById("TelefonoForm");
let asunto = document.getElementById("AsuntoForm");
let mensaje = document.getElementById("MensajeForm");
const btn = document.getElementById("btnEnviar");

//-----------------------------------------------------------------------------------------------VALIDACIONES
function validarNombre(){
    if( txtNombre.value == null || txtNombre.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtNombre.value))) { 
        return false;
    }
    return true;
}//validarNombre

function validarCorreo(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(email.value)){
        return false;
    }
    return true;
}//validarCorreo

function telefono(){
    if(txtNumber.value>9999999999 || (!(/^[1-9]\d*$/.test(txtNumber.value)))){ 
        return false;
    }
    return true;
}//funcion telefono

function validarAsunto(){
    if( asunto.value == null || asunto.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(asunto.value))) { 
        return false;
    }
    return true;
}//validarNombre

function validarMensaje(){
    if (mensaje.value==0){
        return false;
    }//mensaje 0
    return true;
}//validarMensaje

//-----------------------------------------------------------------------------------------------BOTÓN ENVIAR
document.getElementById('form')
.addEventListener('submit',function(event){
    let isValid = true;
    event.preventDefault();
    txtNombre.style.border="solid thin green";
    email.style.border="solid thin green";
    txtNumber.style.border="solid thin green";
    asunto.style.border="solid thin green";
    mensaje.style.border="solid thin green";

    if (! validarMensaje()){
        Swal.fire({
            title: 'El campo "Mensaje" es necesario',
            text: 'Por favor no olvides escribir el mensaje de tu correo.',
            icon: 'error',
            confirmButtonColor: "#97B770",
            confirmButtonText: 'Lo checo, gracias'
          })
        mensaje.style.border="solid thin red";
        isValid = false;
    }//If validarMansaje <3

    if (! validarAsunto()){
        Swal.fire({
            title: 'El campo "Asunto" es necesario',
            text: 'Por favor escribe el asunto a tratar.',
            icon: 'error',
            confirmButtonColor: "#97B770",
            confirmButtonText: 'Lo checo, gracias'
          })
        asunto.style.border="solid thin red";
        isValid = false;
    }//Asunto

    if (! telefono()){
        Swal.fire({
            title: 'El campo "Teléfono" es necesario',
            text: 'Por favor escribe tu teléfono únicamente con 10 números, recuerda no empezar con cero.',
            icon: 'error',
            confirmButtonColor: "#97B770",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtNumber.style.border="solid thin red";
        isValid = false;
    }//telefono

    if (! validarCorreo()){
        Swal.fire({
            title: 'El campo "E-mail" es necesario',
            text: 'Por favor escribe tu e-mail en el siguiente formato: tu_correo@dominio.com',
            icon: 'error',
            confirmButtonColor: "#97B770",
            confirmButtonText: 'Lo checo, gracias'
          })
        email.style.border="solid thin red";
        isValid = false;
    }//If txtNombre <3

    if (! validarNombre()){
        Swal.fire({
            title: 'El campo "Nombre completo" es necesario',
            text: 'Por favor escribe tu nombre únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#97B770",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtNombre.style.border="solid thin red";
        isValid = false;
    }//Nombre

    let completo = ((validarNombre())+(telefono())+(validarCorreo())+(validarMensaje()));
    if (!completo){
        Swal.fire({
            title: 'No puedo enviar nada, disculpa',
            text: 'No olvides llenar todos los campos antes de enviar.',
            icon: 'error',
            confirmButtonColor: "#97B770",
            confirmButtonText: 'Lo checo, gracias'
          })
    }

    if (isValid){
        //btn.value = "Enviando...";
       const serviceID = 'default_service';
       const templateID = 'template_i0ciivg';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          //btn.value = 'Send Email';
          Swal.fire({
            title: 'Enviado, gracias',
            text: 'Te contactaremos pronto.',
            icon: 'success',
            confirmButtonColor: "#97B770",
            confirmButtonText: '¡Gracias!'
          })
        }, (err) => {
          //btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });

        txtNombre.value="";
        email.value="";
        txtNumber.value="";
        asunto.value="";
        mensaje.value="";
        }//isValid
    });//btn "enviar"
//Termina formulario de contacto

//-----------------------------------------------------------------------------------------------MENSAJE PREVIEW
function nombretxt(){
    let nombre = document.getElementById("NombreForm").value;
    let email = document.getElementById("EmailForm").value;
    document.getElementById("nombrePrevw").innerHTML = "De: "+"<strong>"+nombre+"</strong>"+"<br>"+" E-mail: "+"<strong>"+email+"</strong>";
}//nombretxt
function asuntotxt(){
    let asunto = document.getElementById("AsuntoForm").value;
    document.getElementById("asuntoPrevw").innerHTML = "Asunto: "+"<strong>"+asunto+"</strong>";
}//asuntotxt
function mensajetxt(){
    let telefono = document.getElementById("TelefonoForm").value;
    let mensaje = document.getElementById("MensajeForm").value;
    document.getElementById("mensajePrevw").innerHTML = "Datos: "+"<strong>"+telefono+"</strong>"+"<br>"+" Mensaje: "+"<strong>"+mensaje+"</strong>";
}//mensajetxt

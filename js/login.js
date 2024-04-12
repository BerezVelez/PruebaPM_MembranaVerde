document.getElementById('Registro')
.addEventListener('click',function(event){
    let inicioS = document.getElementById('contenedor-Log');
    inicioS.classList.add('contenedor-Log');
    let registro = document.getElementById('contenedor-Reg');
    registro.classList.remove('contenedor-Reg');

});//Ventana de Registro

document.getElementById('InicioSesion')
.addEventListener('click',function(event){
    let inicioS = document.getElementById('contenedor-Log');
    inicioS.classList.remove('contenedor-Log');
    let registro = document.getElementById('contenedor-Reg');
    registro.classList.add('contenedor-Reg');

});//Ventana de Registro
//Scroll de NavBar para contraste
window.addEventListener("scroll", function(){
    var navegador = document.getElementById("navegador");
    navegador.classList.toggle("nav-verde", window.scrollY>300);
    var logo = document.getElementById("logo");
    logo.classList.toggle("logo-peque", window.scrollY>300)
    var menu = document.getElementById("menu");
    menu.classList.toggle("obscuro", window.scrollY>300)
})
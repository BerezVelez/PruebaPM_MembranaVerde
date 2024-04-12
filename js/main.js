//Scroll de NavBar para contraste
window.addEventListener("scroll", function(){

    //Agrega clases para modificar el nav-bar al deslizar hacia abajo
    
    var navegador = document.getElementById("navegador");
    navegador.classList.toggle("nav-verde", window.scrollY>300);

    var logo = document.getElementById("logo");
    logo.classList.toggle("logo-peque", window.scrollY>300)

    var menu = document.getElementById("menu");
    menu.classList.toggle("obscuro", window.scrollY>300)
})

//CONSUMO DE API PARA SECCIÓN DE PLANTAS EN CATÁLOGO
//Enviamos el arreglo al localStorage
var plantas = [
    {
        "id": 1,
        "name": "Golden Violin",
        "diametro": "12 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250934_2.jpg?01-04-2024",
        "price": "$270.00"
    },
    {
        "id": 2,
        "name": "Philodendron mayoi",
        "diametro": "15 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250936_1.jpg?27-03-2024",
        "price": "$425.00"
    },
    {
        "id": 3,
        "name": "White Princess",
        "diametro": "12 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250933_1.jpg?26-03-2024",
        "price": "$270.00"
    },
    {
        "id": 4,
        "name": "Pastazanum",
        "diametro": "15 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250938_1.jpg?26-03-2024",
        "price": "$430.00"
    },
    {
        "id": 5,
        "name": "Prince of Orange",
        "diametro": "12 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250929_2.jpg?25-03-2024",
        "price": "$270.00"
    },
    {
        "id": 6,
        "name": "Atabapoense",
        "diametro": "12 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250928_1.jpg?26-03-2024",
        "price": "$270.00"
    },
    {
        "id": 7,
        "name": "Henri-pittieri",
        "diametro": "12 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250927_1.jpg?26-03-2024",
        "price": "$270.00"
    },
    {
        "id": 8,
        "name": "Billietiae",
        "diametro": "15 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250930_1.jpg?26-03-2024",
        "price": "$270.00"
    },
    {
        "id": 9,
        "name": "Philodendron mayoi",
        "diametro": "15 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250936_1.jpg?27-03-2024",
        "price": "$425.00"
    },
    {
        "id": 10,
        "name": "White Princess",
        "diametro": "12 cm",
        "ambiente": "Luz indirecta",
        "img": "https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250933_1.jpg?26-03-2024",
        "price": "$270.00"
    }
    
];
localStorage.setItem("plantas", JSON.stringify(plantas));

function addCards(){
plantas.forEach((item) => {
    
        var producto =
        `
        <div class="col-md-6 col-lg-2">
          <div class="card">
            <div class="imagen">
              <img src="${item.img}" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h6 class="card-title">${item.name}</h6>
              <p class="card-text">Diámetro de maceta:${item.diametro} Planta de:${item.ambiente}</p>
              <a target="_blank" href="https://wa.me/15529603732?text=¡Hola!%20Escribo%20para%20Preguntar%20sobre%20la%20planta"  id="BotonCard" class="btn row"><p>Pedidos a: <img src="./src/iconos/whatsapp.png" alt="WhatsApp"></p></a>
            </div>
          </div>
        </div>    
        `
        const itemsContainer = document.getElementById("plantas_cards");
        itemsContainer.innerHTML += producto;
    
})//forEach
}//función addCards 

window.addEventListener("load", function(){
    addCards();
});



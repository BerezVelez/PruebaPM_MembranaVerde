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
const plantasApi = async() => {
    const respuesta = await fetch ('http://localhost/api/plantas');
    const data = await response.json();
    console.log(data)
    }
    
/*
    var filas = ``;
    data.forEach((element, index) => {
        if (index > 4) {
            return;
          }
            let no = index + 1;
            filas += `
            <tr>
                <th scope="row"> ${no} </th>
                <td> ${element.dateChecked} </td>
                <td> ${element.states} </td>
                <td> ${element.positive} </td>
                <td> ${element.negative} </td>
                <td> ${element.death} </td>
                <td> ${element.hospitalized} </td>
                <td> ${element.totalTestResults} </td>
            </tr>`
        
    });
    document.getElementById("FilasTrack").innerHTML = filas;
}
window.addEventListener("load", function(){
    CovidTrack();
});*/
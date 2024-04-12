//agregar la librería express ya instalada
const express = require('express');
//variable de tipo express
const app = express();

//Para definir los datos en formato json:
app.use(express.json());

const plantas = [
{   id:1,
    name:'Golden Violin',
    diametro:'12 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250934_2.jpg?01-04-2024',
    price:'$270.00',
},
{   id:2,
    name:'Philodendron mayoi',
    diametro:'15 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250936_1.jpg?27-03-2024',
    price:'$425.00',
},
{   id:3,
    name:'White Princess',
    diametro:'12 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250933_1.jpg?26-03-2024',
    price:'$270.00',
},
{   id:4,
    name:'Philodendron pastazanum',
    diametro:'15 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250938_1.jpg?26-03-2024',
    price:'$430.00',
},
{   id:5,
    name:'Prince of Orange',
    diametro:'12 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250929_2.jpg?25-03-2024',
    price:'$270.00',
},
{   id:6,
    name:'Philodendron atabapoense',
    diametro:'12 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250928_1.jpg?26-03-2024',
    price:'$270.00',
},
{   id:7,
    name:'Philodendron henri-pittieri',
    diametro:'12 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250927_1.jpg?26-03-2024',
    price:'$270.00',
},
{   id:8,
    name:'Philodendron billietiae',
    diametro:'15 cm',
    ambiente:'Luz indirecta',
    img:'https://res.cloudinary.com/fronda/image/upload/f_auto,q_auto,c_lpad,b_auto,w_615,h_615/productos/fol/11250/11250930_1.jpg?26-03-2024',
    price:'$270.00',
},
];//plantas


//Declarar las acciones CRUD

//READ - GET
app.get('/',(req, res)=>{
res.send('Node JS API-MembranaVerde');
});//get request

//obtener todas las plantas
app.get('/api/plantas',(req, res)=>{
res.send(plantas);
});//get todas las plantas

//CREATE - GET
app.get('/api/plantas/:id',(req, res)=>{
const planta = plantas.find(c => c.id === parseInt(req.params.id));
if (!planta) return res.status(404).send('No encontramos esa planta');
else res.send(planta);
});//get plantas por su id

//UPDATE - POST
app.post('/api/plantas', (req, res) => {
const planta = 
{
id: plantas.length + 1,
name: req.body.name,
diametro: req.body.diametro,
ambiente: req.body.ambiente,
img: req.body.img,
price: parseInt(req.body.price)
}

plantas.push(planta);
res.send(planta);
});//post agregar plantas nuevas

//DELETE - DELETE
app.delete('/api/plantas/:id', (req,res)=>{
const planta = plantas.find(c => c.id === parseInt(req.params.id));
if (!planta) return res.status(404).send('No encontramos esa planta');

 const index = plantas.indexOf(planta);
 plantas.splice(index,1);
 res.send(planta);
});//delete, eliminar estudiantes

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port} ...`));

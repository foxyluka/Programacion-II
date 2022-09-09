//vamos a crear un objeto 
let datos_personales ={
    nombre: 'pepito',
    apellido: 'rodriguez',
    dni:44987654,
    correos:{
        gmail:'pepito@gmail.com',
        outlook:'pepis@outlook.com',
        yahoo:'pepe@gmail.com.ar'
    }
}
//forma 1
/*const gmail =datos_personales.correos.gmail
const outlook= datos_personales.correos.outlook
const yahoo= datos_personales.correos.yahoo*/

//forma 2 - destructuring objet
const {gmail, yahoo, outlook} =datos_personales.correos

console.log(`
    gmail: ${gmail}
    outlook:${outlook}
    yahoo: ${yahoo}
`)
//consumo de api
async function consumir_API(){
     //realiza por defecto un solicitud HTTP a traves del metodo GET
    let publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')
    let publicaciones_definitiva= await publicaciones.json()
    publicaciones_definitiva.forEach(element => {
        console.log(element.title)
        });
 }
 consumir_API()
import Persona from "./cliente.js"

// funcion flecha
const mostrar = ()=>{
    const nombre = document.getElementById("Nombre").value
    const apellido = document.getElementById("Apellido").value
    const DNI = document.getElementById("DNI").value

    let persona = new Persona(nombre,apellido,DNI)
    persona.mostrar_datos()
    
}

document.getElementById("btn_mostrar").addEventListener("click", mostrar)
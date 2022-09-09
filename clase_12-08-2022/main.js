import Vehiculo from "./vehiculos.js"

// funcion flecha
const mostrar = ()=>{
    const km = document.getElementById("inp_km").value

    let vehiculo = new Vehiculo(km)
    vehiculo.mostrar_kilometraje()
}
document.getElementById("btn_mostrar").addEventListener("click", mostrar)



//forma 2 de enviar datos a la clase
const mostrar_forma2 = () => {
    const modelo = document.getElementById("inp_modelo").value

    let vehiculo= new Vehiculo()
    vehiculo.modelo=modelo
    vehiculo.mostrar_modelo()
}

document.getElementById("btn_modelo").addEventListener("click",mostrar_forma2)

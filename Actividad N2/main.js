import Pitagoritas from "./pitagoritas.js"


const mostrar =()=>{
    
    const co=document.getElementById("C.O").value
    const ca=document.getElementById("C.A").value


    let pitagoritas = new Pitagoritas()

    pitagoritas.cateto_opuesto = co
    pitagoritas.catetop_adyacente = ca

    pitagoritas.mostrar_hipotenusa()
}

document.getElementById("btn_mostrar").addEventListener("click", mostrar)
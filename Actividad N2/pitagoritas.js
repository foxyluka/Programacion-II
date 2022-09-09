
export default class Pitagoritas{
   
    cateto_opuesto;
    catetop_adyacente;

    constructor(){}

    mostrar_hipotenusa(){

        let bloque1= Math.pow(this.cateto_opuesto,2) + Math.pow(this.catetop_adyacente,2)

        let hipotenusita= Math.sqrt(bloque1)
        console.log(hipotenusita)
    }
}
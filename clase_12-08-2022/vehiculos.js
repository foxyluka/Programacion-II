export default class Vehiculo{
    modelo=''
    constructor(kilometraje)
    {
        this.km=kilometraje
    }
    mostrar_kilometraje()
    {
        console.log(`le kilometraje de mi vehiculo es ${this.km}`)
    }
    mostrar_modelo()
    {
        console.log(this.modelo)
    }
}
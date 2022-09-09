export default class Persona{
    mostrar=''
    constructor(nombrar,bautisar,DNIsar)
    {
        this.nombre=nombrar
        this.apellido=bautisar
        this.DNI=DNIsar
    }
    mostrar_datos()
    {
        console.log(`el nombre de la persona es ${this.nombre}`)
        console.log(`el apellido de la persona es ${this.apellido}`)
        console.log(`el DNI de la persona es ${this.DNI}`)
    }












}
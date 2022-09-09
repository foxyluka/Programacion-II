async function obtener_usuario(){
let usuario = await fetch('https://jsonplaceholder.typicode.com/users')
let usuario_perfecto = await usuario.json()
let items =[]
usuario_perfecto.forEach(element => {
    let item =`<li class="list-group-item">${element.username}</li>`
    items.push(item)
});
document.getElementById("lista_usuarios").innerHTML=items.join("")



}
obtener_usuario()
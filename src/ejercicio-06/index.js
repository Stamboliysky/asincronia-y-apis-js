// Ejercicio 6: Llamada a una API con fetch()

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((data) =>{
    console.log(data)
})













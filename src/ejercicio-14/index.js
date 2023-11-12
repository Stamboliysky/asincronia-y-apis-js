// Ejercicio 14: Encadenamento de Promises con manipulacion de datos

fetch('https://jsonplaceholder.typicode.com/posts')
.then((responce) =>
responce.json())
.then((data) =>{
    return data.map ((post) =>post.title.toUpperCase())
})

.then((titles) => {
    console.log('Titulos en mayusculas:',titles)
})
.catch((error) =>{
    console.error
    ('Error:',error)
})

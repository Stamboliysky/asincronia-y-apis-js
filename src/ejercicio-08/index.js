// Ejercicio 8: Manipulacion de datos de una API

fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) =>
   response.json())
   .then((data) =>{
    const filteredPost =
    data.filter((post) =>post.title.startsWith('A'))
    console.log(filteredPost)
   })

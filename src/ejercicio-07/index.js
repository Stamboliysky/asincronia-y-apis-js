// Ejercicio 7: Llamada a la API con Axios
const axios = require('axios')

axios
.get('https://jsonplaceholder.typicode.com/posts/1')

.then((response) =>{
    console.log(response.data)
}) 
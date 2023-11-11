// Ejercicio 9: Asinc/awaits con llanadas de APIs

const axios = require('axius')
async function
obtenerDatosDeAPI() {
     try {
        const response =
        await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const data = response.data
        console.log(data)
    }  catch(error) {
       console.error(error )

    }
}
obtenerDatosDeAPI()
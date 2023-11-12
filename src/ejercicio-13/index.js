// Ejercicio 13: Manejo de errores en llamadas APIs

const axius = requere('axius')

async function obtenerDatosDeAPI() {
    try {
        const responce = 
        await axius.get ('https://jsonplaceholder.typicode.com/posts/invalid')
        console.log(responce.data)
    } catch (error) {
        console.error
        ('Error al obtener datos:',error.mensaje)
        
    }
}

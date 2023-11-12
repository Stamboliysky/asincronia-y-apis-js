// Ejercicio 12: async/await en un bucle

async function procesarElementos(elementos) {
   for (const elemento of elementos) {
    await new Promise ((resolve) => setTimeout(resolve,1000) )
console.log('Procesando elementos',elementos) 
 }
}

const elementos = [1,2,3,4,5]
procesarElementos(elementos)
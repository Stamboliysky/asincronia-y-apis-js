// Ejercicio 4: Manejo de errores con promesas
const 
miPromesaRechasada = new 
Promise((resolve,rejet) => {
    setTimeout(() =>{
        rejet('Promise rechasada')
    },2000)
})

miPromesaRechasada.catch((error) => {
    console.log('Error:',error)
})
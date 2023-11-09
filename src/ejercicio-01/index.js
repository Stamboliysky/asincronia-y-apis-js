// Ejercicio 1: Callbachs

function 
imprimirHolaMunduConCollback(collback) {
    setTimeout(function() 
        
     {
        collback('Hola,mundo')
    }, 2000)
}

imprimirHolaMunduConCollback(function(mensaje) {
    console.log(mensaje)
}) 


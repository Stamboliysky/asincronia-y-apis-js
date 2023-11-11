// Ejercicio 10: Pmise.all()

const promisei1 = new Promise((resolve) =>
setTimeout(() =>
resolve(1), 1000))
const promisei2 = new Promise((resolve) =>
setTimeout(() =>
resolve(2), 2000))
const promisei3 = new
Promise((resolve)=>
setTimeout(() =>
resolve(3), 1500))

Promise.all([promisei1,promisei2,promisei3]).
then((resultados) =>{
    console.log('Todas las Promises se han resuelto: ',resultados)
})
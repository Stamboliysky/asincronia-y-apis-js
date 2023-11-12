// Ejercicio 11: Promise.allSettled()
const Promise1 = new
Promise((resolve) =>
setTimeout(() =>
resolve(1),1000))
const Promise2 = new
Promise((resolve,reject) =>
setTimeout(() =>reject('Error en Promise 2'),2000 ))
const  promise3= new Promise ((resolve) =>
setTimeout(() => resolve(3),1500 ))

Promise.allSettled
([Promise1, Promise2,promise3]).then
((resultados) => {
    console.log('Estado de todas las Promices:', resultados)
})
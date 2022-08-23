
// const persona = { nombre: "Nico"}
// let {nombre } = persona

// // let nombreCompleto = nombre + "Cabot"

// // console.log(nombreCompleto)



// // //=============
// // let x = 0;

// // if (x === 0) {
// //     console.log("Es igual a 0")
// // } else {
// //     console.log("No se puede creer pero no es igual a 0")
// // }


// // // sintaxis de un IF-ELSE
// // x === 0 
// //     ? console.log("Es igual a 0")
// //     : console.log("No se puede creer pero no es igual a 0")


// // //====================


// //funcion comun
// function sumar(a,b) {
//     let resultado = a + b
//     return resultado;
// }

// console.log(sumar(10,20))

// //Misma funcion pero sinaxis arrow
// const sumar = (a, b) => {
//     let resultado = a + b
//     return resultado;
// }


// //otra forma de escribir la arrow (Si la funcion tiene una sola linea, se pueden sacar las {})
// // el return esta implicito, no se escribe pero se ejecuta
// const sumar = (a,b) => a + b;

// // si recibe un solo parametro no hace falta poner parentesis
// const multiplicar = a => a*2;


//==CLASE 2 CLASE 2, EMPIEZA EL HTML

const startTime = performance.now()
let x = 0
for (let i = 0; i < 1000; i++) {
    x++;
    document.getElementById("test").innerHTML =+ x;
}

const endTime = performance.now()


console.log(endTime - startTime)

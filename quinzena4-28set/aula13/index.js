//Exercício 1
//a.
//> 10
//> 50
// b. Não apareceria nada
//  
// Exercíco 2
// a. São impressos no console o nome dos professores 
// b. Somente vai ser impresso esses 2 novos nomes
// 
// Exercício 3
// Dado um array essa função retorna outro array com os números pares q haviam dentro do argumento

//Exercício 4
//a.
// function euzinha () {
//     console.log("Eu sou Paula, tenho 34 anos, moro em João Pessoa e sou um amor de pessoa...");
// }

// //b.
// function todomundo (nome, idade, cidade, estudante) {
//     let e = ""
//     if (estudante) {
//         e = "sou"
//     } else {
//         e = "não sou"
//     }
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${e} um amor de pessoa..`);
// }

// todomundo("Fulano", 18, "Coxixola", false)

//Exercício 5
//a.
// function soma (a, b) {
//     return a+b
// }

// console.log(soma(1,2));

//b.
// function maior(a,b) {
//     if (a>=b) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(maior(2,2));

//c.
// function aloka (eoq) {
//     for (let i = 0; i < 10; i++) {
//         console.log(eoq)        
//     }
// }

// aloka ("\"Puuuta q paril belíiiisimaaaaa\" Close, Samira. 2020")

//Exercício 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//a.
// const quant = function (array) {
//     return array.length
// }
// console.log(quant(array));
//b.
// function par(i) {
//     if (i%2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// //c e d
// function arraypar(array) {
//     let cont = 0
//     for (const i of array) {
//         if (par(i)){
//             cont++
//         }
//     }
//     return cont
// }
// console.log(arraypar(array)); 

//Desafio 1
// let imprime = (texto) => {
//     console.log(texto);
// }

// let soma = (a,b) => {
//     imprime(a+b)
// }

// soma(1,2)

//Desafio 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
//a.
// function paresx2 (array) {
//     let pares = []
//     for (const i of array) {
//         if ( i%2 === 0 ) {
//             pares.push(i*2)
//         }
//     }
//     return pares   
// }

//b.
// function maior(array) {
//     let maior = array[0]
//     for (const i of array) {
//         if ( i > maior) {
//             maior = i
//         }
//     }
//     return maior
// }

//c.
// function indice(array) {
//     let maior = array[0]
//     let indice = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//             indice = i
//         }        
//     }
//     return indice
// }

//d.
// function inverte(array) {
//     let invertido = []
//     for (let i = array.length-1; i >= 0; i--) {
//         invertido.push(array[i])        
//     }
//     return invertido
// }


// console.log(inverte(numeros)); 

// Exercícios de interpretação
//1. supondo q a cotação digitada pelo usuário seja 5
//      > R$ 500

//2.    > 165
//      > TIPO DE INVESTIMENTO INFORMADO INCORRETO!

//3.    > 14
//      > 6
//      > 8

//4.    > 1
//      > 1590

//1.
// const array = [10,20,30,40,50,60,70,80,90,100]
// // ver aula de laços
// for (const a of array) {
//     console.log(a);    
// }
// let i = 0
// while (i<10){
//     console.log(array[i]);    
//     i++;
// }

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
    
// }

//2. 
// a. false
// b. false
// c.true
// d. true
// e. true

// 3.
// Entra em loop infinito pela falta do implemento do i. Como i começa em zero o certo seria i < quantidadeDeNumerosPares

//4.
// function triangulos(a,b,c) {
//     if (a===b && b===c) {
//         return "equilátero"
//     } else {
//         if (a===b || a===c || b===c) {
//             return "Isósceles"
//         } else {
//             return "escaleno"
//         }
//     }
// }

// console.log(triangulos(2,2,2)); 

//5. 
// function maiorDeDois(a,b) {
//     console.log("O maior é:", a > b? a : b);
//     console.log(a,`${a%b===0? " é ": "não é "}divisível por `, b);
//     console.log(b,`${b%a===0? " é ": "não é "}divisível por `, a);      
//     console.log("A diferença entre eles é de", Math.abs(a-b));
// }
// maiorDeDois(15,30);

//Exercícios de Funções
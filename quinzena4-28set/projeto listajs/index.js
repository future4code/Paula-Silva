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
//1.
// const array = [10,20,30,40,50,60,70,80,90,100]
// function segundoMenorMaior (array) {
//     let maior = Number.MIN_VALUE, 
//         auxMaior = Number.MIN_VALUE,
//         menor = Number.MAX_VALUE, 
//         auxMenor = Number.MAX_VALUE;
//     for (const a of array) {
//         if (a > auxMaior) {
//             if (a > maior) {
//                 auxMaior = maior
//                 maior = a
//             } else {
//                 auxMaior = a
//             }
//         }
//         if (a < auxMenor) { 
//             if (a < menor) {
//                 auxMenor = menor
//                 menor = a
//             } else {
//                 auxMenor = a
//             }
//         }       
//     }
//     console.log("2º Menor: ", auxMenor, "\n2º Maior: ", auxMaior);
// }

// segundoMenorMaior(array)

//2.
// const alerta = () => {
//     alert("Hello, Stranger!")
// }
// alerta()

//Exercícios de Objetos
//1. Array é uma coleção de dados quaisquer. Objeto é um modelo de dados complexo mais próximo da realidade. 

//2.
// function criaRetangulo(l1, l2) {
//     return retangulo = {
//         largura : l1,
//         altura : l2,
//         perimetro: 2*(l1+l2),
//         area : l1*l2
//     }
// }

// console.log(criaRetangulo(2,3)); 

//3. 
// const filme = {
//     titulo: "Avatar",
//     ano: 2009,
//     diretor: "James Cameron",
//     elenco: ["Sam Worthington", "Zoe Saldaña"]
// }

// console.log("Venha assistir ao filme " + filme.titulo + " de " + filme.ano + " dirigido por " + filme.diretor + " e estrelado por " + filme.elenco)

//4.
// const pessoa = {
//     nome: "Zezin",
//     idade: 21,
//     email: "ze@pilinta.com",
//     endereco: "nemdigo,66"
// }

// const anonimizarPessoa = (pessoa) => {
//     return {...pessoa, nome : "ANÔNIMO"}
// }

// const novaPessoa = anonimizarPessoa(pessoa)

// console.log(pessoa, novaPessoa);

//Exercicios de Funções de Array
//1.
const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//a.

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
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]
//a.
// const adultos = pessoas.filter(
//     (p) => {
//        return p.idade >=20; 
//     }
// )

// console.log(adultos);
//b.
// const criancas = pessoas.filter(
//     (p) => {
//         return p.idade < 20
//     }
// )

// console.log(criancas);

//2.
//const array = [1, 2, 3, 4, 5, 6]
//a.
// const vezes2 = array.map(
//     (num) => {
//         return num*2
//     }
// ) 
// console.log(vezes2);

//b.
// const vezes3 = array.map(
//     (num) => {
//         return JSON.stringify(num*3)
//     }
// )
// console.log(vezes3);

//c.
// const parImpar = array.map(
//     (num) => {
//         return `${num} é ${(num%2===0? "par" : "ímpar")}`
//     }
// )
// console.log(parImpar);

//3.
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]
//a.
// const montanhaRussa = pessoas.filter(
//     (p) => {
//         return (p.altura >= 1.5 && p.idade > 14 && p.idade < 60)
//     }
// )
// console.log(montanhaRussa);
//b.
// const noMontanhaRussa = pessoas.filter(
//     (p) => {
//         return !(p.altura >= 1.5 && p.idade > 14 && p.idade < 60)
//     }
// )
// console.log(noMontanhaRussa);

//4.
// const consultas = [
//     { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
//     { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
//     { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
//     { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]
// const emails = []

// consultas.forEach(p => {
//     if (p.cancelada) {
//         emails.push({
//             ...p,
//             email: `Olá, ${p.genero === 'masculino' ? 'Sr.' : 'Sra.'} ${p.nome}. Infelizmente, sua consulta marcada para o dia ${p.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//         })
//     } else {
//         emails.push({
//             ...p,
//             email: `Olá, ${p.genero === 'masculino' ? 'Sr.' : 'Sra.'} ${p.nome}. Estamos enviando esta mensagem para ${p.genero == 'masculino' ? 'lembrá-lo' : 'lembrá-la'} da sua consulta no dia ${p.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//         })
//     }
// })

// console.log(emails);

//5.
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach( c => {
    let descontos = 0
    for (let i = 0; i < c.compras.length; i++) {
        descontos += c.compras[i];        
    }
    c.saldoTotal = c.saldoTotal - descontos
})

console.log(contas);
// Exercício 1
// O Código testa se um número é par ou ímpar
// Números pares passam no teste
// Números ímpares não passam

// Exercício 2
// a. Exibe o preço da fruta escolhida
//b. O preço da fruta Maçã é 2.25
//c. O preço exibido seria 5

//Exercício 3
//a. Armazenando na variável número o valor convertido digitado pelo usuário
//b. Esse número passou no teste. Se fosse menos -10 daria erro
//c. O erro da variável mensagem não ter sido definida pq ela foi criada só dentro do escopo do IF

//Exercício 4
// let idade = Number(prompt("Idade: "))
// if (idade >= 18) {
//     console.log("Você pode dirigir");
// } else {
//     console.log("Você não pode dirigir");
// }

//Exercício 5
//let turno = prompt("Turno(M/V/N):").toUpperCase()
// if (turno=="M") {
//     console.log("Bom dia!");
// } else if ( turno == "V") {
//     console.log("Boa Tarde!");
// } else if ( turno == "N") {
//     console.log("Boa Noite!");
// } else {
//     console.log("Meu amigo, vá estudar!");
// }

//Exercício 
// switch (turno) {
//     case "M":
//         console.log("Bom dia!");
//         break;
//     case "V":
//         console.log("Boa Tarde!");
//         break;
//     case "N":
//         console.log("Boa Noite!");
//         break;
//     default:
//         console.log("Meu amigo, vá estudar!");
//         break;
// }

//Exercício 7
// let genero = prompt("Gênero do filme:")
// let preço = Number(prompt("Preço:"))
// if (genero==="fantasia" && preço <=15) {
//     console.log("Bom filme!");
// } else {
//     console.log("Escolha outro filme :(");
// }

// DESAFIO 1
// let genero = prompt("Gênero do filme:")
// let preço = Number(prompt("Preço:"))
// let snack = prompt("Snack:")
// if (genero==="fantasia" && preço <=15) {
//     console.log("Bom filme!");
//     console.log("... com ", snack);
// } else {
//     console.log("Escolha outro filme :(");
// }

//DESAFIO 2
/* Entrada de dados e declarações */
let nome = "zezin"
let jogo = "IN" //DO
let etapa = "SF" // DT FI
let categoria = 3 // 2 3 4
let quantidade = 2
/* variáveis auxiliares */
let ingresso = etapa+categoria
let valor = 0
/* baseado no valor formado em INGRESSO determinar o valor do ingresso */
switch (ingresso) {
    case "SF1":
        valor = 1320;         
        break;
    case "SF2":
        valor = 880; 
        break;
    case "SF3":
        valor = 550; 
        break;
    case "SF4":
        valor = 220; 
        break;
    case "DT1":
        valor = 660; 
        break;
    case "DT2":
        valor = 440; 
        break;
    case "DT3":
        valor = 330; 
        break;
    case "DT4":
        valor = 170; 
        break;
    case "FI1":
        valor = 1980; 
        break;
    case "FI2":
        valor = 1320; 
        break;
    case "FI3":
        valor = 880; 
        break;
    case "FI4":
        valor = 330; 
        break;                
}
/* baseado no tipo de jogo determinar o valor final */
let valorf
if (jogo === "DO") {
    valorf = valor * quantidade
} else if (jogo === "IN") {
    valorf = valor * quantidade * 4.1
}
/* "traduzir" as opções de entrada nos textos de saída */
let jogoe
switch (jogo) {
    case "DO":
        jogoe = "Nacional"
        break;
    case "IN":
        jogoe = "Internacional"
        break;
}

let etapae
switch (etapa) {
    case "SF":
        etapae = "Semifinais"
        break;
    case "DT":
        etapae = "Decisão do 3ºlugar"
        break;
    case "FI":
        etapae = "Final"
        break;
}
/* Impressão do ingresso */
console.log("---Dados da compra---");
console.log("Nome do cliente:  "+ nome);
console.log("Tipo do jogo:  "+ jogoe);
console.log("Etapa do jogo:  "+ etapae);
console.log("Categoria:  "+ categoria);
console.log("Quantidade de Ingressos:  "+quantidade+" ingressos");
console.log("---Valores--- ");

if (jogo=== "DO") {
    console.log("Valor do ingresso:  R$ "+valor);
    console.log("Valor total:  R$ "+valorf);
} else if (jogo=== "IN") {
    console.log("Valor do ingresso:  U$ "+valor*4.1);
    console.log("Valor total:  U$ "+valorf);    
}





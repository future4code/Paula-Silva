/*  
1.
a. false
b. false
c. true
e. boolean
2.
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

//Questão 1
//user = Number(prompt("sua idade: "));
//amigo = Number(prompt("Idade do seu amigo: "))
//console.log("Sua idade é maior do q a do seu melhor amigo?", user > amigo);
//console.log(user - amigo);

//Questão2
//let num = Number(prompt("numero par:"))
//console.log(num%2);
//c. Notei q sempre dá 0
//d. o resultado dá 1

//QUestão 3
//let listaDeTarefas = []
//listaDeTarefas.push(prompt("Digite uma tarefa:"))
//listaDeTarefas.push(prompt("Digite uma tarefa:"))
//listaDeTarefas.push(prompt("Digite uma tarefa:"))
//console.log(listaDeTarefas);
//listaDeTarefas.splice(Number(prompt("índice:")),1)
//console.log(listaDeTarefas);

//Questão 4
//let nome = prompt("Nome:")
//let email = prompt("E-mail:")
//console.log("O email "+ email + " foi cadastrado com sucesso. Seja bem-vindo(a), "+ nome + "!");

//Desafio 1
//let f = 77;
//let k = (f - 32)*5/9 + 273.15
//console.log(f + "°F = " + k+ "°K");
//
//let c = 80
//f = c*9/5 + 32
//console.log(c + "°C = "+ f + "°F");
//
//c = 30
//f = c*9/5 + 32
//k = (f - 32)*5/9 + 273.15
//console.log(c + "°C = "+ f + "°F = " + k+ "°K");

//Desafio 2
//let qh = 280
//let desc = 0.15
//let valor = qh * 0.05
//console.log(qh+"kWh = R$ " + valor);
//valor = valor - (valor * desc)
//console.log("Com desconto de 15% = R$ " +valor);

//Desafio 3
//let lb = 20
//console.log(lb + "lb equivalem a " + lb * 0.45 + "kg");
//
//let oz = 10.5
//console.log(oz + "oz equivalem a " + oz * 0.028 + "kg");
//
//let mi = 100
//console.log(mi + "mi equivalem a " + mi * 1609.34 + "m");
//
//let ft = 50
//console.log(ft + "ft equivalem a " + ft * 0.3048 + "m");
//
//let gal = 103.56
//console.log(gal + "gal equivalem a " + gal * 4.54 + "l");
//
//let xic = 450
//console.log(xic + "xic equivalem a " + xic * 0.028 + "l");
//
let xic = Number(prompt("Xícaras:"))
console.log(xic + "xic equivalem a " + xic * 0.028 + "l");
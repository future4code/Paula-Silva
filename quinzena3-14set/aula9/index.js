/*interpretação
1.
10
10 5

2. 
10 10 10
*/

let nome;
let idade;

console.log(typeof(nome));
console.log(typeof(idade));

// "por que esse tipo foi impresso? " Pq as variaveis n tem nenhum valor ainda

nome = prompt("Qual o seu nome?");
idade = prompt("Qual o seu idade?");

console.log(typeof(nome));
console.log(typeof(idade));

// ambas são string pq o comando prompt só retorna strings
console.log("Olá, ", nome, "! você tem", idade, " anos");

let questao = prompt("1. Qual a cor do cavalo branco de Napoleão?");
console.log ("1. Qual a cor do cavalo branco de Napoleão?\n", questao);
questao = prompt("2. Pq o barco a vela faltou melancia no espaço");
console.log ("2. Pq o barco a vela faltou melancia no espaço?\n", questao);
questao = prompt("3. Pq galinha entrou na igreja?");
console.log ("3. Pq galinha entrou na igreja?\n", questao);
questao = prompt("4. O q é um pontinho preto no microscópio?");
console.log ("4. O q é um pontinho preto no microscópio?\n", questao);
questao = prompt("5. Pq vc atravessou a rua?");
console.log ("5. Pq vc atravessou a rua? \n", questao);

let comidas = ["Chocolate", "Choco", "late", "Kitkat black","Bolo de chocolate"]
console.log(comidas)
console.log("Essas são minhas comidas preferidas: \n", comidas[0],"\n",comidas[1],"\n",comidas[2],"\n",comidas[3],"\n",comidas[4],"\n")
comidas[1] = prompt("Qual sua comida preferida?")
console.log(comidas)

let perguntas = ["Já jantou?", "Tava gostoso?", "Quer jantar dnv?"]
let respostas = []
console.log(perguntas)
respostas[0] = prompt(perguntas[0])
respostas[1] = prompt(perguntas[1])
respostas[2] = prompt(perguntas[2])

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])

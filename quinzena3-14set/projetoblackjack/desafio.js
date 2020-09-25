/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
 *    
 * 
 */   

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer jogar?")) {
   //comprando cartas
   let jogador = [comprarCarta(),comprarCarta()]
   let banca = [comprarCarta(),comprarCarta()]
   
   //totalizando valores
   let jogadorp = jogador[0].valor + jogador[1].valor
   let bancap = banca[0].valor + banca[1].valor
   
      // regra dos As
   while (jogadorp === 22 || bancap === 22) {
      //tira de novo
      jogador = [comprarCarta(),comprarCarta()]
      banca = [comprarCarta(),comprarCarta()]
      //soma de novo
      jogadorp = jogador[0].valor + jogador[1].valor
      bancap = banca[0].valor + banca[1].valor
   }

   //monta o texto pra exibir as cartas  
   let jogadorc = ""
   let bancac = ""    
   for (const [i,carta] of jogador.entries()) {
      jogadorc += `${jogador[i].texto} `
   }
   for (const [i,carta] of banca.entries()) {
      bancac += `${banca[i].texto} `
   }
   //Jogador comprar mais cartas
   while ( jogadorp < 21 && confirm(`Usuário: ${jogadorc}.\nComputador: ${banca[0].texto}.\nDeseja comprar mais uma carta?`)) { 
      //compra, soma e adiciona na string
      jogador.push(comprarCarta())
      jogadorp += jogador[jogador.length-1].valor 
      jogadorc += `${jogador[jogador.length-1].texto} `       
   } 

   //Computador comprar mais cartas
   while ( jogadorp < 21 && bancap < 21 && bancap <= jogadorp) { 
      //compra, soma e adiciona na string
      banca.push(comprarCarta())
      bancap += banca[banca.length-1].valor 
      bancac += `${banca[banca.length-1].texto} `       
   } 

   //dizendo quem venceu
   let vencedor = ""
   //Usuario vence: POntos < 21 E pontos > banca OU banca passa de 21
   if ((jogadorp < 21 && jogadorp > bancap) || bancap > 21) {
      vencedor = "O usuário ganhou!"
   //Banca vence: POntos < 21 E pontos > usuario OU usuario passa de 21
   } else if ((bancap < 21 && jogadorp < bancap) || jogadorp > 21) {
      vencedor = "O computador ganhou!"
   } else {
      vencedor = "Empate!"
   }

   //mostrando resultado
   alert(`Usuário - cartas: ${jogadorc} - pontuação ${jogadorp}
   Computador - cartas: ${bancac} - pontuação ${bancap}
   ${vencedor}`);

   console.log(vencedor);

} else {
   console.log("coé pcr tá me tirano?!");
}


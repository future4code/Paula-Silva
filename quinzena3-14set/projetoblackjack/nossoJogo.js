/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
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
   //imprimindo jogo
   console.log(`Usuário - cartas: ${jogador[0].texto} ${jogador[1].texto} - pontuação ${jogadorp}`);
   console.log(`Computador - cartas: ${banca[0].texto} ${banca[1].texto} - pontuação ${bancap}`);
   //dizendo quem venceu
   if (jogadorp > bancap) {
      console.log("O usuário ganhou!");
   } else if (jogadorp < bancap) {
      console.log("O computador ganhou!");
   } else {
      console.log("Empate!");
   }
} else {
   console.log("coé pcr tá me tirano?!");
}


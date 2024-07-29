export default function ComoJogar(){

  return (
    <div className="Como Jogar">
      <h1>Como Jogar UNO</h1>
      <h2>Iniciando o Jogo</h2>
      <p>Distribua 7 cartas para cada jogador. Coloque o restante das cartas no centro para formar a pilha de compras. Vire a primeira carta para iniciar a pilha de descarte.</p>

      <h2>Turnos</h2>
      <p>Em seu turno, um jogador deve jogar uma carta que corresponda à cor ou ao número da carta no topo da pilha de descarte. Se um jogador não puder jogar, deve comprar uma carta da pilha de compras. Se puder jogar essa carta, ele pode imediatamente fazê-lo, caso contrário, passa a vez.</p>

      <h2>Vencendo o Jogo</h2>
      <p>O primeiro jogador a descartar todas as suas cartas vence a rodada. Os pontos são contados com base nas cartas que os outros jogadores ainda têm em suas mãos. O primeiro jogador a alcançar 500 pontos vence o jogo.</p>
    </div>
  );
}


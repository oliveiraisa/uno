export default function Regras(){

  return (
    <div className="Regras">
      <h1>Regras do UNO</h1>
      <h2>Regras Básicas</h2>
      <p>O objetivo do jogo é ser o primeiro jogador a alcançar 500 pontos. Pontos são obtidos descartando todas as cartas na mão antes dos outros jogadores.</p>
      <p>Cada jogador começa com 7 cartas. O restante das cartas forma a pilha de compras. A carta do topo da pilha de compras é virada para formar a pilha de descarte.</p>

      <h2>Cartas Especiais</h2>
      <ul className="regras especiais">
        <li><strong>+2</strong>: O próximo jogador compra 2 cartas e perde a vez.</li>
        <li><strong>Inverter</strong>: Inverte a ordem do jogo.</li>
        <li><strong>Pular</strong>: O próximo jogador perde a vez.</li>
        <li><strong>Curinga</strong>: O jogador escolhe a cor que continuará a jogar.</li>
        <li><strong>Curinga +4</strong>: O jogador escolhe a cor que continuará a jogar e o próximo jogador compra 4 cartas e perde a vez.</li>
      </ul>
    </div>
  );
}


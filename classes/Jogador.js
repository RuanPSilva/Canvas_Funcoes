class Jogador {
 constructor() {
    this.pontuacao = 0;
    this.vida = 3;
 }

 movimentar(direcao) {
    console.log(`Movendo para ${direcao}`);
 }

 gerenciarVida(dano) {
    this.vida -= dano;
    if (this.vida <= 0) {
      console.log("Jogador morreu!");
    } else {
      console.log(`Vida restante: ${this.vida}`);
    }
 }
}

const jogador1 = new Jogador();
jogador1.movimentar("Direita");
jogador1.gerenciarVida(20);
jogador1.gerenciarVida(20);
jogador1.gerenciarVida(60);
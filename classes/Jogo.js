class Jogo {
 constructor() {
    this.obstaculo = 0;
 }

 mostrarPontos() {
    console.log(`Pontos:Cronometragem`);
 }

 tempo() {
    console.log('Cronometragem');
 }

 gerarObst() {
    const min = 1;
    const max = 5;
    this.obstaculo = Math.floor(Math.random() * (max - min + 1)) + min;
 }

 recortarDeFundo() {}
}

let jogo = new Jogo();
jogo.tempo();
jogo.gerarObst();
jogo.mostrarPontos();
jogo.recortarDeFundo();

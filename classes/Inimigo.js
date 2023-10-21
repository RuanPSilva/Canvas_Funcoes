class Inimigo {
    constructor(tamanho, velocidade, direcao) {
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.direcao = direcao;
    }

    aumentarVelo() {
        this.velocidade++;
    }

    movimento() {
        console.log(`Inimigo movendo-se na direção ${this.direcao} com velocidade ${this.velocidade}`);
    }

    atacar() {
        console.log("Inimigo atacando!");
    }
}

const inimigo1 = new Inimigo(5, 2, "Direita");
inimigo1.aumentarVelo();
inimigo1.movimento();
inimigo1.atacar();
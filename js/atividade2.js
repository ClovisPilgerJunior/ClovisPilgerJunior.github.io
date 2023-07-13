function verificarParImpar() {
    let numero = Number(prompt("Digite para verificar se é par ou ímpar"));
    if (isNaN(numero)) {
        if (numero % 2 == 0) {
            alert(numero + " é par")
        } else {
            alert(numero + " é ímpar")
        }
    }
}

function produtoDesconto() {

    let preco = Number(prompt("Digite o preço do produto"));
    preco *= 0.9;
    alert(preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}

function ePrimo(valor) {
    let numero = Number(prompt("Digite um número"));
    let contador = 0;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return valor;
        }
        return valor;
    }
    if (valor) {
        alert(numero + " é primo")
    } else {
        alert(numero + " não é primo")
    }
}

function solicitarTelefone() {
    let numero = Number(prompt("Digite um número"));
    if (length.numero == 9) {
        alert(numero + " Número inválido")
    } else {
        // 
    }
}

function verficarParLoop() {

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i + " é par")
        }
    }
}

function mediaAluno() {

    let soma = 0
    let nota = 0

    for (let i = 1; i <= 3; i++) {
        do {
            nota = Number(prompt("Digite a nota " + i + ":"));
        } while ((nota > 10 || nota < 1))
        soma += nota

    }

    const media = soma / 3

    let resultado = media >= 7 ? 'Aprovado' : media < 5 ? 'Reprovado' : 'Recuperação'
    console.log("Sua media foi: " + media)
    console.log("Resultado: " + resultado)
}

function contagemRegressiva() {
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
}

function verificarLetra() {
    let letra = '';
    do {
        letra = prompt("Digite uma letra");
    } while (letra.length != 1)
    let palavra = prompt("Digite uma palavra");
    if (letra.search(letra) >= 0) {
        alert("A letra " + letra + " está presente em " + palavra);
    } else {
        alert("A letra " + letra + " não está presente em " + palavra);
    }
}



function letraMaiuscula() {
    let texto = prompt("Digite uma palavra");
    texto = texto.toUpperCase();
    console.log(texto);

}

function enquanto() {

    let i = 1;
    while (i <= 20) {
        if (i % 2 != 0) {
            console.log(i);
        }
        i++;
    }
    alert("Fim");
}

function mediaVetor() {
    let vetor = [1.5, 2.6, 3.2, 4.1, 5.6, 6.6, 7.8, 8.6, 9.2, 10.2];
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    const media = soma / vetor.length;
    console.log(media);
}

function gameEnquanto() {
         let game = Math.floor(Math.random() * 100) + 1;
         let contador = 0;
         let chance = 0;
         alert("Vamor brincar de adivinhe o número entre 1 até 100!! você tem 5 tentativas")

        do {
            chance = Number(prompt("Digite um número: "))
            contador++;
            if (chance >= game) {
                alert("O número que você escolheu foi " + chance + "\n O número é menor")
            } else {
                alert("O número que você escolheu foi " + chance + "\n O número é maior")
            }
            
        } while (chance == game || contador < 5);

        if (contador == 5) {
            alert("Infelizmente você errou!!! o número era: " + game)
        } else {
            alert("Parábens você acertou!!!!!!!")
        }
    
}

function somarVetor100(){
    
}

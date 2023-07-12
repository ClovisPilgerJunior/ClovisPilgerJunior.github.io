function media() {
        const nota = Number(prompt("Digite a nota 1: "));
        const nota2 = Number(prompt("Digite a nota 2: "));
        const nota3 = Number(prompt("Digite a nota 3: "));

        const media = (nota + nota2 + nota3) / 3;

        alert("Sua média foi: " + media);
}

function conversorTemp() {
        let temperatura = prompt("Digite ");

        function converterGF(temperatura) {
                let valor = temperatura * 9 / 5 + 32;
                return valor;
        }

        alert("Conversão de " + temperatura + "° Celsius em " + converterGF(temperatura) +"° fahrenheit");
}

function calcularArea() {
        let altura = Number(prompt("Digite a altura: "));
        let largura = Number(prompt("Digite a largura:"));

        function areaRetangulo(altura, largura) {
                return altura * largura;
        }

        alert(areaRetangulo(altura, largura));
}

function imc() {
        let peso = Number(prompt("Digite o seu peso: "));
        let altura = Number(prompt("Digite a sua altura: "));

        function getIMC(peso, altura) {
                let imc = peso / (altura * altura);
                return imc;
        }

        alert("Seu IMC é: " + getIMC(peso, altura));
}

function conversorHorasMinutos() {
        let horas = Number(prompt("Digite a quantidade de horas: "));

        function convertHorasMin(horas) {
                let minutos = horas * 60;
                return minutos;
        }

        alert(convertHorasMin(horas));
}

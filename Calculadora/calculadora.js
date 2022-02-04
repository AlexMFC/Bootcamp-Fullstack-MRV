function calculadora() {
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));


    if (!operacao || !operacao >= 7) {
        alert("Erro - operaçao inválida");
        calculadora();
    }
    else {
        let numero1 = Number(prompt("Digite o primeiro valor:"));
        let numero2 = Number(prompt("Digite o segundo valor: "));
        let resultado;

        if (!numero1 || !numero2) {
            alert("Erro - parametros invalidos");
            calculadora();
        }
        else {
            function soma() {
                resultado = numero1 + numero2;
                alert('${numero1}+&{numero2} = ${resultado}');
                novaOperacao();
            }
            function subtracao() {
                resultado = numero1 - numero2;
                alert('${numero1}-${numero2} = ${resultado}');
                novaOperacao();
            }

            function multiplicacao() {
                resultado = numero1 * numero2;
                alert('${numero1}*${numero2} = ${resultado}');
                novaOperacao();
            }

            function divisao() {
                resultado = numero1 / numero2;
                alert('${numero1}/&{numero2} = ${resultado}');
                novaOperacao();
            }

            function divIinteira() {
                resultado = numero1 % numero2;
                alert('O resto da divisao entre${numero1} e &{numero2} é ${resultado}');
                novaOperacao();
            }

            function potencia() {
                resultado = numero1 ** numero2;
                alert('${numero1} elevado a &{numero2} é ${resultado}');
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja fazer nova operaçao? \n 1 - SIM \n 2 - NAO");

                if (opcao == 1) {
                    calculadora();
                }
                else if (opcao == 2) {
                    alert("Fechando calculadora")
                }
                else
                    alert("Digite uma opção válida")
                novaOperacao();
            }

            if (operacao == 1) {
                soma();
            }
            else if (operacao == 2) {
                subtracao();
            }
            else if (operacao == 3) {
                multiplicacao();
            }
            else if (operacao == 4) {
                divisao();
            }
            else if (operacao == 5) {
                divIinteira();
            }
            else if (operacao == 6) {
                potencia();
            }
            else
                console.log("Entrada inválida, tente novamente")
        }
    }
}
calculadora();
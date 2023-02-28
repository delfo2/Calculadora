function zerarTela () {
    tela.value = '0';
    total1 = '';
    total2 = '';
    zeraNumerosSelecionados();
}
function atualizarTela (valor) {
    tela.value = valor;
}
function atualizarValor (valor) {
    return valor = valor + numerosSelecionados[0];
}
function zeraNumerosSelecionados () {
    numerosSelecionados.splice(0);
}
function corrigirErros (valor) {
    if(valor == "undefined" || valor == isNaN || valor == null || valor == ''){
        valor = '0';
    }
    return valor;
}
function verificaOperacao () {

}

let tela = document.querySelector('.calculadora__cabecalho-display');
let botoes = document.querySelectorAll('.calculadora__botoes-botao');
let numerosSelecionados = [];
let total1 = '';
let total2 = '';
let resultado = '';
let chaveResultado = false;
let chave = false;
let operaçãoEscolhida = '';

zerarTela();

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function () {
        chaveResultado = false;

        if(botoes[i].innerHTML == 'C'){
            numerosSelecionados.splice(0);
            zerarTela();
            chave = false;
        }
        if(botoes[i].innerHTML <= 9){
            numerosSelecionados.push(botoes[i].innerHTML);
        }

        if(chave == false){
            total1 = atualizarValor(total1);
            zeraNumerosSelecionados();
            total1 = corrigirErros(total1);
            atualizarTela(total1);

            if(botoes[i].innerHTML == '+'){
                operaçãoEscolhida = botoes[i].innerHTML;
                atualizarTela(operaçãoEscolhida);
                chave = true;
            }
        
        } else {
            total2 = atualizarValor(total2);
            zeraNumerosSelecionados();
            total2 = corrigirErros(total2);

            if(botoes[i].innerHTML == '+'){
                alert('essa calculadora não suporta mais uma soma! use o igual ou limpe o valor atual.');
            }
            if(botoes[i].innerHTML == '='){
                chaveResultado = true;
            }
            atualizarTela(total2);
        }

        if(chaveResultado == true) {
            resultado = parseInt(total1) + parseInt(total2);
            atualizarTela(resultado);
        }
    }
}
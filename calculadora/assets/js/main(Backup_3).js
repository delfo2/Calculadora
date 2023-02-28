function zerarTela () {
    tela.value = '0';
    valoresTela = [''];
    indiceValores = 0;

    zeraNumerosSelecionados();
}
function atualizarTela (valor) {
    tela.value = valor;
}
function atualizarValor (valor) {
    if(numerosSelecionados[0] == '+' 
        || numerosSelecionados[0] == '0' 
            || numerosSelecionados[0].startsWith('0')
                || numerosSelecionados[0].startsWith('undefined')) {
        
        numerosSelecionados[0] = '0';
    }
    return valor = valor + numerosSelecionados[0];
}
function zeraNumerosSelecionados () {
    numerosSelecionados.splice(0);
}
function corrigirErros (valor) {
    if(valor == "undefined" 
        || valor == isNaN 
            || valor == null 
                || valor.startsWith('undefined')){
        
        valor = '0';
    }
    return valor;
}
function verificaOperacao () {
    //em projeto
}

let tela = document.querySelector('.calculadora__cabecalho-display');
let botoes = document.querySelectorAll('.calculadora__botoes-botao');

let numerosSelecionados = [];
let valoresTela = [''];
let indiceValores = 0;
let adicionarNumero = true;

let resultado = '';

let operaçãoEscolhida = '';
let apertouSimbolo = false;
let zerouTela = false;

zerarTela();

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function () {

        if(botoes[i].innerHTML == 'C'){
            zeraNumerosSelecionados();
            zerarTela();
            zerouTela = true;
            adicionarNumero = true;
        }
        if(botoes[i].innerHTML == '+'){
            operaçãoEscolhida = botoes[i].innerHTML;
            atualizarTela(operaçãoEscolhida);
            
            apertouSimbolo = true;
            adicionarNumero = true;
            
            valoresTela.push('');
            indiceValores++;
        }
        if(botoes[i].innerHTML == '='){
            adicionarNumero = false;
        }

        if(botoes[i].innerHTML <= 9){
            numerosSelecionados.push(botoes[i].innerHTML);
        }
        
        if(adicionarNumero == true && zerouTela == false && apertouSimbolo == false){
            valoresTela[indiceValores] = atualizarValor(valoresTela[indiceValores]);

            zeraNumerosSelecionados();

            valoresTela[indiceValores] = corrigirErros(valoresTela[indiceValores]);

            atualizarTela(valoresTela[indiceValores]);
        }
        if(adicionarNumero == false) {
            for(let i = 0; i < valoresTela.length; i++){
                valoresTela[i] = parseInt(valoresTela[i]);
            }
            resultado = valoresTela.reduce((acc,item) => acc + item, 0);
            atualizarTela(resultado);
        }
        if(zerouTela == true){
            zerouTela = false;
        }
        if(apertouSimbolo == true){
            apertouSimbolo = false;
        }
    }
}
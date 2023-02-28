function zerarTela () {
    console.log(valoresTela + 'antes de zerar');

    tela.value = '0';
    valoresTela = [''];
    zeraNumerosSelecionados();

    console.log(valoresTela + 'zeeerou');
}
function atualizarTela (valor) {
    tela.value = valor;
}
function atualizarValor (valor) {
    console.log(valoresTela + 'atualizando valor');

    if(numerosSelecionados[0] == '+' 
        || numerosSelecionados[0] == '0' 
            || numerosSelecionados[0].startsWith('0')
                || numerosSelecionados[0].startsWith('undefined')) {
        
        numerosSelecionados[0] = '';
    }
    console.log(valoresTela + 'atualizando valor2');
    
    return valor = valor + numerosSelecionados[0];
}
function zeraNumerosSelecionados () {
    numerosSelecionados.splice(0);
}
function corrigirErros (valor) {
    console.log(valoresTela + 'correcao de erro');
    if(valor == "undefined" 
        || valor == isNaN 
            || valor == null 
                || valor == ''
                    || valor.startsWith('undefined')){
        
        valor = '0';
    }
    console.log(valoresTela + 'correcao de erro2');
    return valor;
}
function verificaOperacao () {

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
            console.log(valoresTela + 'antes colocar espaço');
            valoresTela.push('');
            console.log(valoresTela + 'dps colocou espaço');
            indiceValores++;
        }
        if(botoes[i].innerHTML == '='){
            adicionarNumero = false;
        }

        if(botoes[i].innerHTML <= 9){
            numerosSelecionados.push(botoes[i].innerHTML);
        }
        
        if(adicionarNumero == true && zerouTela == false && apertouSimbolo == false){
            console.log(valoresTela + 'antes atualizar no if');
            valoresTela[indiceValores] = atualizarValor(valoresTela[indiceValores]);
            console.log(valoresTela + 'dps atualizar no if');

            zeraNumerosSelecionados();

            //concertar o corrigir erros, provavelmente = 'Includes';
            valoresTela[indiceValores] = corrigirErros(valoresTela[indiceValores]);
            console.log(valoresTela + 'dps de corrigir valor');

            atualizarTela(valoresTela[indiceValores]);
        }
        if(adicionarNumero == false) {
            console.log(valoresTela + 'entrou no igual');
            for(let i = 0; i < valoresTela.length; i++){
                console.log(valoresTela + 'entrou no for do igual, e tá no: ' + [i]);
                valoresTela[i] = parseInt(valoresTela[i]);
            }
            console.log(valoresTela + 'saiu do for do igual, antes do reduce');

            //parseint não ta funcionando direito
            //reduce tá juntando tudo em uma string
            resultado = valoresTela.reduce((acc,item) => acc + item, 0);
            console.log(valoresTela + 'dps do reduce');
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
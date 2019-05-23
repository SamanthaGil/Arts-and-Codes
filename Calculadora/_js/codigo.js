// puxando as classes do html para o js

const calculadora = document.querySelector('.calculadora');
const botoes = calculadora.querySelector('.botoes');
const display = document.querySelector('.display');

// adicionando um escutador de evento click nos botoes

botoes.addEventListener('click', e=>{
    if(e.target.matches('button')){
        //declarando as variaveis
        const botao = e.target; // Botão será o evento em que foi clicado.
        const acao = botao.dataset.acao; // Armazena as ações de botão.
        const conteudoBotao = botao.textContent; // Armazena o conteudo do botão clicado.
        const nDisplay = display.textContent; // Armazena o valor que estiver no display da calculadora. 
        const botaoAnterior = calculadora.dataset.botaoAnterior; // Quando o usuário usar um operador, será armazenado nessa variável.
        
        // Remover a classe .clicado de todos os botoes.
        Array.from(botao.parentNode.children)
        .forEach(k => k.classList.remove('clicado'));

        if(!acao){ // Caso o botão clicado não tenha a propriedade acao no html, ativará esse if.
            if(nDisplay === '0' || botaoAnterior === 'operador' || botaoAnterior === 'resultado'){ // nesses casos, o display será substituido pelo número que o usuário escolher.
                display.textContent = conteudoBotao;
            } else { // Caso contrário, o numero escolhido pelo usuário será acrescentado ao display.
              console.log(nDisplay)
              console.log(conteudoBotao)
              display.textContent = nDisplay+conteudoBotao
            }
          calculadora.dataset.botaoAnterior = 'numero';
        }

        if (acao === 'virgula') { 
          if (!nDisplay.includes('.')) { // caso já não tenha virgula, será adicionada.
            display.textContent = nDisplay + '.';
          } else if (
            botaoAnterior === 'operador' ||
            botaoAnterior === 'resultado'
          ) {
            display.textContent = '0.';
          }
          calculadora.dataset.botaoAnterior = 'virgula';
        }

        if (
            acao === 'adicao' ||
            acao === 'sub' ||
            acao === 'mult' ||
            acao === 'divisao' ||
            acao === 'porcentagem' ||
            acao === 'raiz' ||
            acao === 'exponencial'
          ) {

            const primeiroValor = calculadora.dataset.primeiroValor;
            const operador = calculadora.dataset.operador;
            const segundoValor = nDisplay;

            if (
              primeiroValor &&
              operador &&
              botaoAnterior !== 'operator' &&
              botaoAnterior !== 'resultado'
            ) {
              const calcValor = calculo(primeiroValor, operador, segundoValor);
              display.textContent = calcValor;
              calculadora.dataset.primeiroValor = calcValor
            } else {
              calculadora.dataset.primeiroValor = nDisplay;
            }

            botao.classList.add('clicado'); // Ao clicar em algum operador, o botão será enfatizado ao adicionar a classe .clicado
            calculadora.dataset.botaoAnterior = 'operador';
            calculadora.dataset.operador = acao;
        }

          if (acao === 'apaga') {
            calculadora.dataset.primeiroValor = '';
            calculadora.dataset.modValue = '';
            calculadora.dataset.operador = '';
            calculadora.dataset.botaoAnterior = '';

            display.textContent = 0;
            calculadora.dataset.botaoAnterior = 'apaga';
          }

          if (acao === 'resultado') {
            let primeiroValor = calculadora.dataset.primeiroValor // Armazena o primeiro valor do usuário
            const operador = calculadora.dataset.operador
            let segundoValor = nDisplay // Armazena o segundo valor do usuário

            if (primeiroValor) {
              if (botaoAnterior === 'resultado') {
                  primeiroValor = nDisplay;
                  segundoValor = calculadora.dataset.outroValor;
              }
              
              display.textContent = calculo(primeiroValor, operador, segundoValor);
          }
          // Atribuindo o valor a outroValor.
          calculadora.dataset.outroValor = segundoValor;
          calculadora.dataset.botaoAnterior = 'resultado';

          }
    }
});

function calculo(n1, operador, n2){ // Função responsável pelos cálculos da calculadora
  const x1 = parseFloat(n1);
  const x2 = parseFloat(n2);

  if (operador === 'adicao') return x1 + x2; 
  if (operador === 'sub') return x1 - x2;
  if (operador === 'mult') return x1 * x2
  if (operador === 'divisao') return x1 / x2;
  if (operador === 'porcentagem') return x2 / 100;
  if (operador === 'raiz') return Math.sqrt(x2);
  if (operador === 'exponencial') return Math.exp(x2);
}
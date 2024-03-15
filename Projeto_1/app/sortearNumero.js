const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio ();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(`Número Secreto é ${numeroSecreto}`);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMiorValor = document.getElementById('maior-valor');
elementoMiorValor.innerHTML = maiorValor;
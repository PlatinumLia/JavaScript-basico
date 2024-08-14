// Variáveis

// tipo Number (int)
// pode realizar operações como: soma, subtração, multiplicação, divisão

const meuNumero = 6;
const numeroUM = 1;
const numeroDois = 3;

const soma = 3 + 6;
console.log(soma);

const subtracao = meuNumero - numeroDois;
console.log(subtracao)

const multiplicacao = meuNumero * 3;
console.log(multiplicacao);

const divisao = numeroDois / numeroDois;
console.log(divisao)

// outros tipos: 

// float (decimal)

const numeroTres = 3.3;
const numeroQuatro = .5; // mesma coisa que 0.5
const operacaoMult = numeroTres * numeroQuatro;

console.log(operacaoMult)

// Not a Number (NaN)

const operacaoN = "a" * meuNumero;
console.log(operacaoN);

const novaOperacao = "a" + meuNumero;
console.log(novaOperacao) // acontece concatenação

// string (texto)

const meuNome = "Lia";
const frase = "Meu nome é: ";
const issoNaoEUmNumero = "50";

const minhaFrase = frase + meuNome;
console.log(minhaFrase);

const operacao0 = issoNaoEUmNumero + meuNumero;
console.log(operacao0);

// boolean
// true (verdadeiro) e false (false)

const comparacao = 6 === meuNumero;
console.log(comparacao)

const comparacaoDois = "6" === meuNumero; // === indica que é identico (mesmo tipo)
console.log(comparacaoDois)

const comparacaoTres = "6" == meuNumero; // == indica que tem semelhança
console.log(comparacaoTres)
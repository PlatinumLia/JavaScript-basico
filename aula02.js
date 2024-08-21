// var -> Criando uma variável 

// var altura = 5;
// var comprimento = 8;

// var area = altura * comprimento;
// console.log(area);

// let -> Cria uma variável ( forma mais atualizada de criar uma variável )

let altura = 5;
let comprimento = 8;
let forma = "retângulo";
let area;

if(forma === "retângulo"){
    area = altura * comprimento
} else if (forma === "triângulo") {
    area = (altura * comprimento) / 2
} else {
    console.log ("Deveria ser uma")
}

console.log(area);

// const -> Utilizada para criar "variáveis" que são fixas, que não se alteram
// Condições booleanas (Truly ou falsy)
// 0 = false
// 1 = true

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false); // true
console.log(contaPaga == 0); // true
console.log(contaPaga === 0); // false
console.log("" == false); // true
console.log(1 == true); //true

// Nulo e indefinido
// nulo -> vazio ou nada 

let li;
let hy = null;
let numero = 3;
let texto = "Eu gosto de programação <3";

// Consultando tipo de variáveis

console.log(typeof li);
console.log(typeof hy);
console.log(typeof numero);
console.log(typeof texto);

// Conversão de variáveis

const numeroNumber = 225;
const numeroStr = "225";

console.log(numeroNumber == numeroStr); // comapara apenas o valor
console.log(numeroNumber === numeroStr); // compara também o tipo
console.log(numeroNumber + numeroStr); // concatenação
console.log(numeroNumber + Number(numeroStr)); // soma de números
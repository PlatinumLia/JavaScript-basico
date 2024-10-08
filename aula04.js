// Funcões

let x = "Nada"; // aparece no console
console.log(x);
x = "Oi"; // não aparece no console
y = "Tchau"

// Declaração de função

imprimeTexto(y);

// 1) Declara a função (function)

function imprimeTexto(texto) 
    {
        console.log(texto);
    }

// 2) Chamar/executar a função 

imprimeTexto(x);
imprimeTexto("Eu sou aluna")

function soma()
    {
        return 2 + 2;
    }

// console.log(soma());
imprimeTexto(soma());
imprimeTexto(somaDeNumeros(4, 5))
imprimeTexto(somaDeNumeros(11, 12))

function somaDeNumeros (num1, num2)
    {
        return num1 + num2;
    }

function nomeIdade(nome, idade) 
    {
        return `Meu nome é ${nome} e minha idade é ${idade}`;
    }

// A ordem dos parâmetros é importante
imprimeTexto(nomeIdade("Lia", 17));
imprimeTexto(nomeIdade(17, "Lia"));

// Você pode definir um parâmetro inicial
function multiplicacao(num3 = 2, num4 = 2)
    {
        return num3 * num4;
    }

imprimeTexto(multiplicacao())

imprimeTexto(multiplicacao(somaDeNumeros(3, 4), somaDeNumeros(5, 10)));

// Expressão de função

const constanteSoma = function(nume1, nume2) {return nume1 + nume2};
    console.log(constanteSoma(3, 6));
    imprimeTexto(constanteSoma(3, 9));

// Funções e var são "listadas" no topo do arquivo

// Arrow function

const apresentaArrow = nome => `Meu nome é ${nome}`;
const somaEmFlecha = (nu1, nu2) => nu1 + nu2;

    console.log(apresentaArrow("Lia"))
    console.log (somaEmFlecha(5, 6));

const somaNumerosPequenos = (numer1, numer2) => 
    {
        if(numer1 > 10 || numer2 > 10)
        {
            return "Essa função é apenas para números pequenos"  
        }
        else
        {
            return numer1 + numer2;
        }
    }

console.log(somaNumerosPequenos(2, 5));
// Alguns erros comuns

// const numero; Primero: erro não declarar uma constante

const minhaVar = "Oi"; // Segundo erro: Não declarar uma variável e chamar no console
console.log(minhaVar) // Exemplo: Chamar a "minhaVar" com o V minúsculo

console.error("Isso está errado, corrija"); // Terceiro "Erro": você pode declarar erro com o "console.erro"

// Condicional abreviada if() {}

let idadeMinima = 18;
let idadeCliente = 16;

if(idadeCliente >= idadeMinima) 
    {
        console.log("Cerveja")
    } 
    else 
    {
        console.log("Nescau")
    }

// Valor ternário
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");
// Modo ternário, utilizando a estrutura _____ >= _____ ? ___ : ___
// Modo ternário, utilizando a estrutura _____ <= _____ ? ___ : ___
// Modo ternário, utilizando a estrutura _____ == _____ ? ___ : ___

// Template string

const nome = "Lia";
const idade = 17;
const cidadeNatal = "Foz do Iguaçu";

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal;
console.log(apresentacao);

// Template string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatal}`;
console.log(apresentacao2);
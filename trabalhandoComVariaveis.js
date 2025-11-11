//Console.log("Trabalhando com variáveis");
console.log("Trabalhando com variáveis");
// JS é case sensitive

const idade = 30;
Idade = 40;
const nome = "Taiane";

console.log(idade);
console.log(Idade);
//Má prática colocar variáveis muito parecidas mudando apenas o maiusculo inicial. Porque fica difícil de identificar qual variável está sendo usada.

//Não podemos criar variáveis com palavras reservadas
//Exemplo de palavras reservadas: let, console, var, if, etc

//Não podemos começar o nome de uma variável com um número
//Exemplos:
//1idade = 30; (Inválido)
//idade1 = 30; (Válido)

//Não podemos colocar espaços ou traços no nome das variáveis
//Exemplos:
//idade do cliente = 30; (Inválido)
//idade_do_cliente = 30; (Válido)
//idade-do-cliente = 30; (Inválido)

//Utilizamos camelCase para nomear nossas variáveis
//Exemplo:
let idadeDoCliente = 30;

//Podemos utilizar _ ou $ no nome das variáveis
let _idade = 30;
let $idade = 30;

//Não podemos redeclarar variáveis com let
//Exemplo:
//let idade = 30;
//let idade = 40; (Inválido)
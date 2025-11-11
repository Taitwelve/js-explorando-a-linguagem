console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log(`Destinos possíveis: `);
console.log(salvador, saoPaulo, rioDeJaneiro);
// criar uma lista com variáveis separadas não é uma boa prática, o ideal é usar arrays

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // removendo o item do índice 1 (São Paulo)
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // acessando o item do índice 1 (Rio de Janeiro)
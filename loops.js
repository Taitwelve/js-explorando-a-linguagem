console.log(`Trabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhado = true;
let passagemComprada = false;
const destino = "São Paulo";

console.log(`\n Destinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true; 

let contador = 0;
while (contador < 3) {
    console.log(listaDeDestinos[contador]);
    contador += 1;
}    
// {
//     console.log(`Passagem vendida com sucesso`);
//     listaDeDestinos.splice(1,1);
//     passagemComprada = true;
// } else {
//     console.log(`Comprador menor de idade e sem acompanhante. Não é possível vender a passagem!`);
//     passagemComprada = false;
// }
// console.log(listaDeDestinos);

// console.log(`Checagem de embarque:`);
// if (passagemComprada && idadeComprador >= 18) {
//     console.log(`Embarque liberado. Boa viagem!`);
// } else {
//     console.log(`Você não pode embarcar!`);
// }
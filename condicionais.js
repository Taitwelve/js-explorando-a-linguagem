console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 20;
const estaAcompanhado = true;
const passagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log(`Passagem vendida com sucesso`);
    listaDeDestinos.splice(1,1);
} else {
    console.log(`Comprador menor de idade e sem acompanhante. Não é possível vender a passagem!`);
}
console.log(listaDeDestinos);

console.log(`Checagem de embarque:`);
if (passagemComprada && idadeComprador >= 18) {
    console.log(`Embarque liberado. Boa viagem!`);
} else {
    console.log(`Você não pode embarcar!`);
}
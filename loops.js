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
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`Passagem para ${destino} encontrada`);
        destinoExiste = true;
         break;
    }    
    contador += 1;  
}    

console.log("Destino existe: ", destinoExiste);
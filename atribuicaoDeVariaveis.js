console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const primeiroNome = "Taiane";
const sobrenome = "Nascimento Santos";
console.log("Nome completo:", primeiroNome + " " + sobrenome);
console.log(primeiroNome,sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);
const nomeCompleto = primeiroNome + sobrenome; 
console.log(nomeCompleto);

//O ideal é reduzir o uso de variáveis mutáveis (let) ao máximo, preferindo sempre o uso de constantes (const)
// O uso do let é indicado quando sabemos que o valor da variável irá mudar ao longo do tempo e que ela precisa ser mutável
let idadeSomada = 29;
idadeSomada += 2; // idadeSomada = idadeSomada + 2
console.log(idadeSomada);
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo';

const senha = "senhaSuperSegura123456!"
const stringDeNumeros = "1234567";

const citacao = "Meu nome é ";
const meuNome = "Sérgio";

// concatenacao (+)

console.log(citacao + meuNome)

// template string OU template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// JavaScript diferencia minúsculas e maiúsculas,
//  tanto nos valores dos dados quanto no código
// que escrevemos.

 // transformando todos os caracteres
 // em letras minúsculas.

 const cidade = "belo horizonte";
 const input = "Belo Horizonte";

 const inputMinusculo = input.toLowerCase();

 console.log(cidade == inputMinusculo); // true

 const senha1 = "minhaSenha123";
 console.log(senha1.length)  // 13 caracteres

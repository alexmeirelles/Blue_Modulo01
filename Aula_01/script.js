var prompt = require('prompt-sync')();

/*const nome = "Alexandre";
console.log(nome);

let nome = "Alexandre";
console.log(nome);

nome = "Eduarda";
console.log(nome);

const string = 'Blue EdTech';
const numberInt = 10;
const numberFloat = 10.5;
const boolean = true;


const entrada = prompt(`Qual o seu nome? `);
console.log(`Olá ` + entrada);


const numero = prompt('Digite um número ');
console.log(`O número digitado foi: ${numero}`); // Outra forma de colocar uma variável junto de uma string
console.log();
console.log(typeof(numero)); // typeof nos mostra qual o tipo da variável armazenada.  

const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

console.log(num1 + num2);
*/

/*Exercícios de Fixação
1 - Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média do aluno, 
sabendo que a nota A tem peso 4 e a nota B tem peso 6.

var nota01 = +prompt("Qual a primeira nota? ");
var nota02 = +prompt("Qual a segunda nota? ");

var media = nota01*0.4 + nota02*0.6

console.log(`A média é: ${media}`);

2 - Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
o nome de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

var nome = prompt("Qual é a peça'? ");
var numero = +prompt("Quantas peças serão? ");
var valor = +prompt("Qual o valor unitário da peça? ");

var nome2 = prompt("Qual é a segunda peça'? ");
var numero2 = +prompt("Quantas peças serão? ");
var valor2 = +prompt("Qual o valor unitário dessa peça? ");

total = numero*valor;
total2 = numero2*valor2;

totalfinal = numero*valor;

console.log(`O valor total é: ${totalfinal}`);

Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. Calcule e exiba o 
total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e 
todo mês com 30 dias.

var anos = +prompt("Quantos anos? ");
var meses = +prompt("Quantos meses? ");
var dias= +prompt("Quantos dias? ");

anos = anos*365
meses = meses*30

total = anos+meses+dias;

console.log(`Você já viveu ${total} dias. Aproveite o resto!`);

Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, 
meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

var x = +prompt("Quantos dias você tem de vida? ");

anos = Math.floor(x/365);
y = x%360;

meses = Math.floor(y/30);

dias = (y%30);

console.log(`Você já viveu ${anos} anos, ${meses} meses e ${dias} dias. Aproveite o resto!`);

*/



var dias= +prompt("Quantos dias você tem de vida? ");
dias2 = dias;

dias = Math.floor(dias/365)

dias2 = (dias2%365)/30

total = dias2+dias;

console.log(`Você já viveu ${total} anos, ${dias2} meses e dias. Aproveite o resto!`);
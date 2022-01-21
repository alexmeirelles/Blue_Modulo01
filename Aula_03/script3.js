var prompt = require('prompt-sync')();
/*
let compara = 5 > 3;
console.log(compara);
console.log(typeof(compara));



let compara1 = 50 == '50';
let compara2 = 50 == 50;

console.log(compara1);
console.log(compara2);


let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

if (num1 == num2){
    console.log('Os números são iguais. A condição é verdadeira.');
}



const nome = prompt('Digite seu nome: ');
const idade = +prompt('Digite sua idade: ');

if (idade >= 18){
    console.log('Pode beber.');
} else {
    console.log(' Não Pode beber.');
}


const dia = +prompt('Digite o numero do dia: ');

if (dia <= 31){
    console.log(`Janeiro`);
} else if(dia <= 59) {
    console.log(`Fevereiro`);
} else if(dia <= 90) {
    console.log(`MArço`);
} else if(dia <= 120) {
    console.log(`Abril`);
} else if(dia <= 151) {
    console.log(`Maio`);
} else if(dia <= 181) {
    console.log(`Junho`);
} else if(dia <= 212) {
    console.log(`Julho`);
} else if(dia <= 243) {
    console.log(`Setembro`);
} else if(dia <= 273) {
    console.log(`Outubro`);
} else if(dia <= 304) {
    console.log(`Outubro`);
} else if(dia <= 334) {
    console.log(`Novembro`);
} else {
    console.log(`Dezembro`);
}


Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.


var num1 = +prompt('Digite um número: ');
var num2 = +prompt('Digite outro número: ');

if (num1 > num2){
    console.log(`O número 1 é maior. ${num1}.`);
} else if (num1 < num2){
    console.log(`O número 2 é maior. ${num2}.`);
} else {
    console.log(`Os números são iguais.`);
}


/*


3 - Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.

const nota1 = +prompt('Digite a nota1: ');
const nota2 = +prompt('Digite a nota2: ');
const nota3 = +prompt('Digite a nota3: ');
const nota4 = +prompt('Digite a nota4: ');

notat = (nota1 + nota2 + nota3 + nota4)/4

if (notat >= 7){
    console.log(`Aprovado. Nota : ${notat}`);
} else if( notat >= 5 && notat < 7) {
    console.log(`Em Recuperação. Nota : ${notat}`);
} else {
    console.log(`Reprovado.Nota : ${notat}`);
}

3 - Faça um programa que leia um número, e informe se ele é par ou impar

var num1 = +prompt('Digite um número: ');

if (num1%2 == 0){
    console.log(`O número é par.`);
} else {
    console.log(`O número é impar.`);
}


4 - Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem 
"Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si. 
Exemplo:
*/


var num1 = +prompt('Digite um número: ');
var num2 = +prompt('Digite outro número: ');


if (num1%num2 == 0 || num2%num1 == 0){
    console.log(`O número é multiplo.`);
} else {
    console.log(`O número nao é multiplo.`);
}


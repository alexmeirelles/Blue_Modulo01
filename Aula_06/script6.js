var prompt = require('prompt-sync')();

/*
Exercícios de fixação

1 Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR
 e os números IMPARES no array IMPAR. Imprima os três vetores.



2 Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. 
Imprima a média de idade e de altura.



3 Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de 
cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente 
de cada aluno, e a média total da notas.



4 Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um 
array. Depois, mostre quantas vezes cada valor foi conseguido.
*/

var par = [];
var impar = [];
var numeros = [];
i= 0;

while (i < 20){
num = +prompt.ParseInt("Digite 20 numeros inteiros: ");

if (num%2=0){
    num.push = par;
} else {
    num.push = impar;
}    

i++;

}

console.log =(par + impar);
console.log =(par);
console.log =(impar);




var prompt = require('prompt-sync')();

let cont = 0;
const numeros = [];
const pares = [];
const impares = []; 

while(cont < 20){
    numeros.push(+prompt(`${cont+1} - Digite um numero inteiro: `));
    if(numeros[cont]%2 === 0 ){
        pares.push(numeros[cont]);
    }else{
        impares.push(numeros[cont]);
    }
    cont++;
}

console.log("Original: ");
console.log(numeros);
console.log(`Pares - total: ${pares.length}`);
console.log(pares);
console.log(`Impares - total: ${impares.length}`);
console.log(impares);


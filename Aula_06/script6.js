var prompt = require('prompt-sync')();

/*
Exercícios de fixação

1 Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR
 e os números IMPARES no array IMPAR. Imprima os três vetores.

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

2 Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. 
Imprima a média de idade e de altura.

const prompt = require('prompt-sync')();

let idade = [];
let altura = [];
let cont = 0;
let mediaI = 0;
let mediaA = 0;

while(cont < 5){
    idade.push(+prompt(`${cont+1} - Digite sua idade:`));
    altura.push(+prompt(`${cont+1} - Digite a sua altura:`));
    mediaI += idade[cont];
    mediaA += altura[cont];
    cont++;
}

mediaI = mediaI/idade.length;
console.log(`Média de idade: ${parseInt(mediaI)} anos!`);

mediaA = mediaA/altura.length;
console.log(`Média de altura: ${parseFloat(mediaA)} metros!`);

3 Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de 
cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente 
de cada aluno, e a média total da notas.


   
const prompt = require('prompt-sync')();

console.log("Cadastro de alunos!");

const numAlunos = +prompt("Digite o numero de alunos que deseja cadastrar: ");
let nomes = [];
let notas = [];
let media = 0;
let cont = 0;

while(cont < numAlunos){
    nomes.push(prompt(`${cont+1} - Digite o nome do aluno:`));
    notas.push(+prompt(`${cont+1} - Digite a nota do aluno:`));
    media += notas[cont];
    cont++;
}

cont = 0;

while(cont < numAlunos){
    console.log(`Nome: ${nomes[cont]} - Nota: ${notas[cont]}`);
    cont++;
}
console.log(`Media geral: ${(media/notas.length).toFixed(2)}`);

4 Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um 
array. Depois, mostre quantas vezes cada valor foi conseguido.
*/

let num = 0;
let min = 1;
let max = 7;
min = Math.ceil(min);
max = Math.floor(max);

let vezes = [];

let um = 0;
let dois = 0;
let tres = 0;
let quatro = 0;
let cinco = 0;
let seis = 0;

let cont = 0;

while(cont < 100){
    num = Math.floor(Math.random() * (max - min)) + min;
    vezes.push(num);
    if(num == 1){
        um++;
    }else if(num == 2){
        dois++;
    }
    else if(num == 3){
        tres++;
    }
    else if(num == 4){
        quatro++;
    }
    else if(num == 5){
        cinco++;
    }
    else if(num == 6){
        seis++;
    }
    cont++;
}

console.log(vezes);
console.log(`um - ${um} / dois - ${dois} / tres - ${tres}`);
console.log(`quatro - ${quatro} / cinco - ${cinco} / seis - ${seis}`);
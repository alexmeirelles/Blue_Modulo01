var prompt = require('prompt-sync')();

/*

Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido
Todos os números ímpares do 0 ao número escolhido


Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa quantidade de notas em um array. Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).


Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.


Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.



var a = 0;
var par = [];
var impar = [];
var count = 0;

var a = +prompt("Digite um número para criar as listas par e impar");

while (count < a){
    if (a%2 == 0){
      par[count] = a-count;  
    } else {
       impar[count] = a-count;
  
    }
    
    count++
}

console.log(par);
console.log(impar);




const listPares = [];
const listimpares = [];
const numero = [];
let cont = 0;

let num = +prompt('Digite um numero inteiro: ');

while (cont <= num) {
   numero.push(cont);
   if (numero[cont] % 2 == 0 ) {
    listPares.push(numero[cont]);         
} else {
   listimpares.push(numero[cont]);        
}
   cont++; 
}
console.log(`Os numeros gerados são : ${numero}`);
console.log(`Os numeros Pares sao: ${listPares}`);
console.log(`Os numeros Impares sao: ${listimpares}`);


....

Faça um programa que peça um número inteiro e crie arrays com:
Todos os números pares de 0 ao número escolhido
Todos os números ímpares do 0 ao número escolhido
*/
const listaPar = [];
const listaImpar = [];
const numero = [];
var cont = 0;

var num = +prompt("Digite o Numero inteiro Final: ")

while (cont < num){
   numero.push(cont);
   if(numero[cont] % 2 == 0){
      listaPar.push(numero[cont]);
   } else {
      listaImpar.push(numero[cont]);
   }
   cont++;
}

console.log(`Os numeros gerados são : ${numero}`);
console.log(`Os numeros Pares sao: ${listaPar}`);
console.log(`Os numeros Impares sao: ${listaImpar}`);
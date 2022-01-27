var prompt = require('prompt-sync')();

/*
Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]


Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
var valor = +prompt("Fatorial de qto?");
let num = 1;
for (let i = valor; i > 1; i--){
num *= i;
}
console.log(num)


Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista 
com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro 
de combustível. Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância 
de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.


const linha = [];
const coluna = [];

var x = +prompt("Quantas linhas?");
var y = +prompt("Quantas colunas?");

for(let i = 0; i < x; i++){
    linha.push(i);
}
for(let i = 0; i < y; i++){
    coluna.push(i);;
}

console.log(linha);
console.log(coluna);


/ Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade 
//Assim, a fórmula a seguir define a sequência: 
//Fn = Fn - 1 + Fn - 2



*/


let fibo = [0, 1]; 

for (let i = 2; i < 10; ++i) {
    
    fibo[i] = fibo[i - 2] + fibo[i - 1];
}

console.log(fibo); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



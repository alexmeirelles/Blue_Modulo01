var prompt = require('prompt-sync')();
//if a.trim().toLowerCase() != "blue"//
/*
let num = 0;

while (num < 1 || num > 100){
    num = +prompt("Digite um numero correto: ");

}
console.log("Agora digitou certo. ")
/*
/*Exercícios de fixação

Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome 
do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

var a = prompt("Qual o seu nome? ");
var b = prompt("Qual a sua senha? ");

while(b==a){
    var b = prompt("Digite uma senha diferente do seu nome ");
}

console.log("prossiga no cadastro ")


Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Estado Civil: 's', 'c', 'v', 'd';

Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
var a = +prompt("Digite um numero par ");

while(a%2!=0){
    var a = +prompt("Falei numero par imbecil ");
}

console.log("Parabens genio")


Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro 
entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o 
número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário 
encontrou o número, e mostrar a quantidade de palpites que foi necessária.

const pc = Math.floor(Math.random() * 10)

*/

var nome = prompt("Digite o nome ");
while (nome.lenght < 4){
    var a = prompt("Digite um nome maior ");
}

console.log("ok")

var idade = +prompt("Digite a idade ");
while (idade < 0 || idade > 150){
    var a = +prompt("Idade de pessoa viva ");
}

console.log("ok")

var sal = +prompt("Digite o salario ");
while (sal < 0){
    var sal = +prompt("Tá pagando pra trabalhar? ");
}

console.log("ok")

var civil = ""
while (civil != "s"  || civil != "c" || civil != "v" || civil != "d" && civil != ""){
    var civil = prompt("Digite o estado civil 's', 'c', 'v', 'd' ");
}

console.log("Cadastro finalizado")

// Faça um programa, com uma função que necessite de três argumentos: 
//dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer 
// o cálculo indicado pelo operador usando os dois número passados.
/*
var prompt = require('prompt-sync')();
var final = 0;

function operacao(num, num2, operador){
    if (operador == "+"){
        return num + num2;
    } else if (operador == "-"){
        return num - num2;
    } else if (operador == "*"){
        return num * num2;
    } else {
        return num/num2;
    
    }
}

final = operacao(15,20,"-");
console.log(final)
*/
//Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma 
//string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL 
//caso a data seja inválida.

var meses = ["Janeiro", "Fereveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

function data(dia, mes, ano){
    var ParseInt(mes) = 
    for(mes in meses){
        return mes
    }

}

var datafinal = data(05,02,1985)
console.log(datafinal)

//Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos:
// um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em
// Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 
// escalas e perguntar qual valor quer retornar.
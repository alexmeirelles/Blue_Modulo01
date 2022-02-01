var prompt = require('prompt-sync')();
/*Peça para o usuario digitar o nome de 5 times de futebol, der a pontuação aleatoria para cada time
e mostre o vencedor;
*/

const time = [];
const pontos = [];
let x = 0;
let ganhador = 0;

for(let x=0;x<5;x++){
    time[x]=prompt("Digite o nome do time que deseja incluir: ");  // vai incluir no máximo 5 times
    console.log(time[x]);
    pontos[x]= Math.floor(Math.random()*(24 - 0)+0);
}
x = 0;
for(const p of pontos){
    if (p > x ){
     ganhador = p;
     x = p
    }
}


console.log(ganhador);
console.log (time);
console.log(pontos);
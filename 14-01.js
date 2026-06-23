let Qcaixas= [];
let soma= 0;
for(let i=1; i<=8; i++){
    Qcaixas[i]= Number (prompt(`Digite o número de caixas do produto ${i}: `));

    soma= soma+Qcaixas[i];
}


console.log(`A soma de todo o estoque é: ${soma}`)
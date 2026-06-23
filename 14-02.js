let tempM=[];
let maior= 0;
for(let i=1; i<=10; i++){
    tempM[i]= Number (prompt(`Digite a média da temperatura do dia ${i}: `))
    if(tempM[i]>maior){
        maior=tempM[i];
    }
}
console.log(`A maior temperatura registrada foi: ${maior} `);

    


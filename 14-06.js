let matriz= [];
for(let l= 0; l<=2; l++){
    matriz[l]=[];
    for(let c=0; c<=3; c++){
        matriz[l][c]= Number(prompt(`Digite o valor da posição [${l}] ${c}: `));
    }
}
console.log("Matriz:");

for(let l= 0; l<= 2; l++){
    let texto = "";

    for(let c =0; c<= 3; c++){
        texto += matriz[l][c] + " ";
    }

    console.log(texto);
}
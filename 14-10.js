let matrizA= [];
for(let l= 0; l<2; l++){
    matrizA[l]=[];
    for(let c=0; c<=3; c++){
        matrizA[l][c]= Number(prompt(`Digite o valor da posição [${l}] [${c}]: `));
    }
}
console.log("Matriz A:");

for(let l= 0; l<2; l++){
    let texto = "";

    for(let c =0; c<3; c++){
        texto += matrizA[l][c] + " ";
    }

    console.log(texto);
}
let matrizB= [];
for(let l= 0; l<2; l++){
    matrizB[l]=[];
    for(let c=0; c<3; c++){
        matrizB[l][c]= Number(prompt(`Digite o valor da posição [${l}] [${c}]: `));
    }
}
console.log("Matriz B:");

for(let l= 0; l<2; l++){
    let texto = "";

    for(let c =0; c<3; c++){
        texto += matrizB[l][c] + " ";
    }

    console.log(texto);
}
let matrizC=[];
for(let l=0;l<2;l++){

    matrizC[l] = [];

    for(let c=0;c<3;c++){

        matrizC[l][c] =
        matrizA[l][c] + matrizB[l][c];

    }
}

console.log("Matriz Soma:")
for(let l=0;l<2;l++){

    let texto = "";

    for(let c=0;c<3;c++){

        texto += matrizC[l][c] + " ";

    }

    console.log(texto);
}

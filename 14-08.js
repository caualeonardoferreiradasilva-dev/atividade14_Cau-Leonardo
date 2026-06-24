let matriz=[];
for(let l=0; l<=4; l++){
    matriz [l]=[];
    for(let c=0; c<=4;c++){
        if(l===c){
            matriz[l][c]=1;
        }
        else{
            matriz[l][c]=0;
        }
    }
}
for(let l = 0; l < 4; l++){

    let linha = "";

    for(let c = 0; c < 4; c++){
        linha += matriz[l][c] + " ";
    }

    console.log(linha);
}
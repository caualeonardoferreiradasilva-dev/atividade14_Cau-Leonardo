let matriz=[];


for(let l=0;l<3; l++){
    matriz[l]=[];
    let maiorP=0;
    for(let c=0;c<4;c++){
    matriz[l][c]= Number (prompt(`Digite a produção da equipe ${l+1} no ${c+1}º trimestre`))
   if(matriz[l][c]>maiorP){
        maiorP = matriz[l][c];
        
   }
    }
     console.log(`A maior pontuação da equipe ${l+1} foi ${maiorP}`)
    }
    
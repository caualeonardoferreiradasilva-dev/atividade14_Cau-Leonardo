let soma=0;
let matriz= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
    
    for(let l = 0; l < 3; l++) {
        for(let c = 0; c < 3; c++) {
      if(l === c) {
soma= soma+matriz[l][c];
      }
}}
console.log(`Soma da diagonal principal:${soma}`);
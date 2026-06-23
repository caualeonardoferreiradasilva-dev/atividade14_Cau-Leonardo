let codigo=[];
let enconrado= false;
for(let i=0;i<=9;i++){
    codigo[i]= Number(prompt(`Digite o valor da posição ${i} do vetor: `))
}
let busca=  Number(prompt("Qual código você deseja rastrear?"));
for(let i = 0; i < 10; i++){
    if(codigo[i] === busca){
        console.log(`Código encontrado na ${i}ª posição`);
        encontrado = true;
        break; 
    }
}
if(encontrado === false){
    console.log("Código não cadastrado");
}
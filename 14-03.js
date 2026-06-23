let nomes= [];
for(let i=1; i<=6; i++){
    nomes[i]= (prompt(`Digite o ${i}º nome`))
}
console.log("Nomes Invertidos:")
for(let i=6; i>=1; i--){
    console.log(nomes[i])
}
let nota=[];
let soma=0;
let acimaMedia=0;
for(let i=1;i<=5; i++){
    nota[i]= Number (prompt(`Digite a nota do ${i}º aluno`))
    soma= soma+nota[i]
    }
     let media= soma/5
    for(let i=1; i<=5; i++){
    if(nota[i]>media){
        acimaMedia++
    }
    
}
console.log(`A média das notas do cinco alunos foi: ${media}`)
console.log(`O total de alunos que estão acima da média é: ${acimaMedia}`)
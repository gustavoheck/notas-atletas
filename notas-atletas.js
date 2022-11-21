
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
    let nomeAtletas = atletas.map(function(nomes){
        return nomes.nome
    })
    let notasObtidas = atletas.map(function(notas){
        let organiza = notas.notas
        organiza.sort(function(a, b){
          return a - b
        })
        return organiza
    })
    notasSomadas = notasObtidas.map(function(nota){
      return nota.reduce(function(total,  atual){
        return total + atual
      }, 0) 
    }) 
      let media = notasSomadas.map(function(nota){
        return nota / atletas[0].notas.length 
      })
      
     for (let i = 0; i < atletas.length; i++){
      console.log(`Atleta: ${nomeAtletas[i]}`)
      console.log(`Notas Obtidas: ${notasObtidas[i]}`)
      console.log(`Media Valida: ${media[i]}`)
      console.log(`---`)
      console.log("Atleta Nao Cadastrado")
     }  
       


    
 
    
    













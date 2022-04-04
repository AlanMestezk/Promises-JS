/*Sempre que criamos uma promisse, 
estamos esperando algo acontecer no código

para criar uma promessa 
instaciamos a classe Promisse

que leva dois argumentos:
RESOLVE (solução) e reject (erro)

para encadear mais processos 
utilizamos o metodo then
*/


//criando uma promessa


const myPromisse = new Promise(

    (resolve, reject)=>{

        const nome = 'Alan'

        if(nome==='Alan'){

            resolve('Usuário ',nome,' encontrado')

        }else{
            reject('Não foi encontrado o usuário ', nome)
        }

    }
)

myPromisse.then((data)=>{
    console.log(data)
})

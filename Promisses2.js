//criação de promisse

const myPromisse = new Promise(

    (resolve, reject)=>{

        const nome = 'Alan'

        if(nome==='Alan'){

            resolve('Usuário ALAN encontrado')

        }else{
            reject('Não foi encontrado o usuário ', nome)
        }

    }
)

myPromisse.then((data)=>{
    console.log(data)
})

//Encadeamento de then's
const minhaPromise = new Promise(

    (resolve, reject)=>{

        const nome = 'Alanzinho10'

        if(nome==='Alanzinho10'){

            resolve('Usuário ALANZINHO10 encontrado')

        }else{
            reject('Não foi encontrado o usuário ')
        }

    }
)

minhaPromise
.then((data)=>{
    return data.toLowerCase()
})
.then((stringModificada)=>{
    console.log(stringModificada)
})


// retorno do catch

const minhaPromise2 = new Promise(

    (resolve, reject)=>{

        const nome = 'Alan'

        if(nome==='Alanzinho10'){

            resolve('Usuário ALANZINHO10 encontrado')

        }else{
            reject('não foi encontrado o usuário')
        }

    }
)

minhaPromise2
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log('Aconteceu um erro, '+err)
    })


//resolver várias promessas com all

const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('P4 ok! TimeOut')
    }, 2000)
})


const p1 = new Promise(
   (resolve, reject) =>{
       resolve("P1 ok!")
   }
)

const p2 = new Promise(
    (resolve, reject) =>{
        resolve("P2 ok!")
    }
 )

 const p3 = new Promise(
    (resolve, reject) =>{
        resolve("P3 ok!")
    }
 )


const resolver = Promise.all(
    [p1, p2, p3, p4]
).then((data)=>{
    console.log(data)
})

console.log('Depois do all()')

//Varias promessas com race
const x1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('x1 ok! TimeOut')
    }, 1000)
})


const x2 = new Promise(
   (resolve, reject) =>{
       resolve("x2 ok!")
   }
)

const x3 = new Promise(
    (resolve, reject) =>{
        resolve("x3 ok!")
    }
 )

 const x4 = new Promise(
    (resolve, reject) =>{
        resolve("x4 ok!")
    }
 )


const resolve = Promise.race(
    [x1, x2, x3, x4]
).then((data)=>{
    console.log(data)
})

// Fetch request na API GitHub
// Fetch API

const userName = 'AlanMestezk'

fetch(`http://api.github.com/users/${userName}`, {
    method: 'GET',
    headers:{
        Accept: 'application/vnd.github.v3+json',
    }
}).then((response)=>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(`O nome do usuário é: ${data.name}`)
}).catch((err)=>{
    console.log(`Houve algum erro: ${err}`)
})

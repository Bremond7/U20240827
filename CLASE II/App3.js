let readline = require('readline')

let rl = readline.createInterface(

    process.stdin,
    process.stdout
    
)
rl.question('Ingrese un mensaje:', (mensaje)=>{
    const numCaracteres=mensaje.length
    console.log (`El numero de ecaracteres del mensaje es:, ${numCaracteres}`)
    process.exit()
})
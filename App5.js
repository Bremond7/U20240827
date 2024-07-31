let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una frase:', (frase) => {
    rl.question('Ingrese la palabra a reemplazar:', (palabraARemplazar) => {
        rl.question('Ingrese la nueva palabra:', (nuevaPalabra) => {
            const fraseModificada = frase.split(palabraARemplazar).join(nuevaPalabra);
            console.log(`La frase modificada es: ${fraseModificada}`);
            process.exit();
        });
    });
});


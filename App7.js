let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una frase:', (frase) => {
    const numPalabras = frase.trim().split(/\s+/).length;
    console.log(`El número de palabras en la frase es: ${numPalabras}`);
    process.exit();
});

let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una palabra:', (palabra) => {

    const palabraNormalizada = palabra.toLowerCase();


    const vocales = 'aeiou';
    let contadorVocales = 0;

    for (let i = 0; i < palabraNormalizada.length; i++) {
        if (vocales.includes(palabraNormalizada[i])) {
            contadorVocales++;
        }
    }

    console.log(`El número de vocales en la palabra es: ${contadorVocales}`);
    process.exit();
});

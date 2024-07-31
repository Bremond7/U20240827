let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una cadena:', (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('');
    console.log(`La cadena invertida es: ${cadenaInvertida}`);
    process.exit();
});


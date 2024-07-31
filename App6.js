let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una cadena:', (cadena) => {
    rl.question('Ingrese la posición inicial de la subcadena:', (inicio) => {
        rl.question('Ingrese la longitud de la subcadena:', (longitud) => {
            const subcadena = cadena.substr(parseInt(inicio), parseInt(longitud));
            console.log(`La subcadena es: ${subcadena}`);
            process.exit();
        });
    });
});

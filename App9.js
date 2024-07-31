let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una palabra:', (palabra) => {
   
    const palabraNormalizada = palabra.toLowerCase();

    const palabraInvertida = palabraNormalizada.split('').reverse().join('');
    
    if (palabraNormalizada === palabraInvertida) {
        console.log('La palabra es un palíndromo.');
    } else {
        console.log('La palabra no es un palíndromo.');
    }
    
    process.exit();
});

/*  6. Palíndromos: Pide al usuario ingresar una palabra y determina si es un
palíndromo (se lee igual al derecho y al revés).  */ 


let palabra = prompt("Ingresa una palabra:");
palabra = palabra.toLowerCase().replace(/\s+/g, '');
let palabraInvertida = palabra.split('').reverse().join('');


if (palabra === palabraInvertida) {
    console.log("La palabra es un palíndromo.");
} else {
    console.log("La palabra no es un palíndromo.");
}


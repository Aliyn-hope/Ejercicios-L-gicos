/* 2. Verificación de edad: Pide al usuario su edad y muestra si es mayor de edad o menor de edad */

let edad = prompt("Ingresa tu edad:");
edad = Number(edad);

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else if (edad > 0 && edad < 18) {
    console.log("Eres menor de edad.");
} 
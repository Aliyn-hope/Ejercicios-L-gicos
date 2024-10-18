/*  4. Conversión de temperaturas: Crea un programa que convierta grados Celsius
a Fahrenheit.  */ 

let celsius = prompt("Ingresa la temperatura en grados Celsius:");
celsius = Number(celsius);

// Fórmula de conversión de Celsius a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");

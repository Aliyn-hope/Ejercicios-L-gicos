/* 3. Número par o impar: Escribe un programa que pida un número al usuario y
diga si es par o impar.  */


let numero = prompt("Ingresa un número:")
numero = Number(numero)

if (numero % 2 === 0) {
    console.log("El número "  + numero + " es un numero par.");

} else if (numero % 2 !== 0) {
    console.log("El número " + numero + " es impar.")
} 

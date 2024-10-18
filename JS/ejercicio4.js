/*  4. Condicionales: Crea un programa que verifique si un número es positivo,
negativo o cero, e imprima el resultado. 
 */

let num = prompt("Ingresa un número:")
num = Number(num)

if (num > 0) {
    console.log("El número es positivo")
} else if (num < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

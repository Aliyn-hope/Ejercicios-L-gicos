/*  5. Comparaciones: Escribe un programa que compare dos números y diga cuál
es mayor o si son iguales. */ 

let num1 = prompt("Ingresa el primer número:")
let num2 = prompt("Ingresa el segundo número:")

num1 = Number(num1)
num2 = Number(num2)

console.log("Ingresa el primer número:" + num1)
console.log("Ingresa el segundo número:" + num2 )

if (num1 > num2) {
    console.log("El primer número es mayor")
} else if (num1 < num2) {
    console.log("El segundo número es mayor")
} else {
    console.log("Ambos números son iguales")
}

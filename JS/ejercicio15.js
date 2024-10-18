/* 5. Validación de entrada: Pide al usuario que ingrese un número y verifica si es
realmente un número. Si no lo es, muestra un mensaje de error.  */ 


let entrada = prompt("Por favor, ingresa un número:");

if (!isNaN(entrada) && entrada.trim() !== "") {
    console.log("Has ingresado un número válido: " + entrada);
} else {
    console.log("Error: La entrada no es un número válido.");
}

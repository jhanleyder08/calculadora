// Paso 1: Declaración de Variables
let num1 = 10;
let num2 = 5;
let operacion = "suma";

// Funciones básicas de operaciones
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

// Paso 2 y 3: Función principal con validaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "division" && num2 === 0) {
        return "Error: No se puede dividir por cero";
    }
    
    if (operacion === "suma") {
        return sumar(num1, num2);
    } else if (operacion === "resta") {
        return restar(num1, num2);
    } else if (operacion === "multiplicacion") {
        return multiplicar(num1, num2);
    } else if (operacion === "division") {
        return dividir(num1, num2);
    } else {
        return "Error: Operación no válida";
    }
}

// Paso 4: Bucle para múltiples operaciones
function iniciarCalculadora() {
    let continuar = true;
    
    while (continuar) {
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        let operacion = prompt("Ingrese la operación o 'salir':");
        
        if (operacion === "salir") {
            alert("¡Hasta luego!");
            continuar = false;
        } else {
            let resultado = realizarOperacion(num1, num2, operacion);
            alert("Resultado: " + resultado);
        }
    }
}
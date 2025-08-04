// Paso 1: Declaración de Variables
let num1 = 10;
let num2 = 5;
let operacion = "sumar";

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

function realizarOperacion(num1, num2, operacion) {
    // Paso 3: Validación división por cero
    if (operacion == "dividir" && num2 == 0) {
        return "Error: No se puede dividir por cero";
    }
    
    if (operacion == "sumar") {
        return sumar(num1, num2);
    } else if (operacion == "restar") {
        return restar(num1, num2);
    } else if (operacion == "multiplicar") {
        return multiplicar(num1, num2);
    } else if (operacion == "dividir") {
        return dividir(num1, num2);
    } else {
        alert("operacion no valida");
        return "operacion no valida";
    }
}

function probarCalculadora() {
    num1 = parseInt(prompt("ingrese el primer numero"));
    num2 = parseInt(prompt("ingrese el segundo numero"));
    operacion = prompt("ingrese la operacion a realizar sumar, restar, dividir, multiplicar");
    resultado = realizarOperacion(num1, num2, operacion);
    alert("el resultado es " + resultado);
}

// Paso 4: Bucle para múltiples operaciones
function iniciarCalculadora() {
    let continuar = true;
    
    while (continuar) {
        num1 = parseInt(prompt("ingrese el primer numero"));
        num2 = parseInt(prompt("ingrese el segundo numero"));
        operacion = prompt("ingrese la operacion a realizar sumar, restar, dividir, multiplicar o 'salir'");
        
        // Paso 5: Condición de salida
        if (operacion == "salir") {
            alert("¡Gracias por usar la calculadora! Hasta luego 👋");
            continuar = false;  // Termina el bucle inmediatamente
        } else {
            resultado = realizarOperacion(num1, num2, operacion);
            alert("el resultado es " + resultado);
            
            // Solo pregunta si quiere continuar cuando NO es "salir"
            let seguir = confirm("¿Desea realizar otra operacion?");
            if (!seguir) {
                alert("¡Gracias por usar la calculadora!");
                continuar = false;
            }
        }
    }
}


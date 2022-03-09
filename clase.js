//Solución clase

//Obtener el botón del DOM
let button = document.querySelector("#btn");

console.log("Valor de button", button);

//asociar evento click
button.addEventListener("click", function () {
  let randomColor = generateRandomHexColor();
    document.querySelector("body").style.backgroundColor = generateRandomHexColor();

    document.querySelector("#hex-value").textContent = randomColor;
    
    //No escatimar en console.log para detectar errores
    console.log("Has hecho click en el botón");
});

//calcular un color hexadecimal aleatório
function generateRandomHexColor() {
    // Todos los valores posibles que puede tener un dígito hexadecimal
    let hexadecimalValues = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // El número máximo de dígitos de un color en hexadecimal. Fíjate que utilizamos la palabra 'const', pues es un valor que nunca va a cambiar
    const hexDigits = 6;
    // Según la especificación de CSS, los colores hexadecimales tienen el formato '#123456'
    let hexColor = '#';

    // Este bucle se ejecuta 6 veces. Construimos carácter a carácter el color hexadecimal
    for (let i = 0; i < hexDigits; i++) {

        hexColor = hexColor + getRandomValueFromArray(hexadecimalValues);
    }

    return hexColor;
}

/**
 * Obtiene un valor aleatório del array
 * 
 * @param {array} arr Array del cual obtener el valor 
 * @returns 
 */
function getRandomValueFromArray(arr) {
    let numElements = arr.length
    let randomIndex = Math.floor(Math.random() * numElements)

    return arr[randomIndex]
}

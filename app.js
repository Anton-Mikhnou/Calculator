// let firstNumber = parseInt(prompt ('First Namber'))
// let operator = prompt('add | subtract | multiply | divide','add subtract multiply divide' )
// let secondNumber = parseInt(prompt ('Second Number'))

function add (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNamber){
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

// add(firstNumber, secondNumber)
// subtract(firstNumber, secondNumber)
// multiply(firstNumber, secondNumber)
// divide(firstNumber, secondNumber)

function operate(firstNumber, operator, secondNumber) {
    if (operator === "add"){
        return add(firstNumber, secondNumber) 
    } else if (operator === "subtract"){
        return subtract(firstNumber, secondNumber)
    } else if (operator === "multiply"){
        return multiply(firstNumber, secondNumber) 
    } else if (operator === "divide"){
        return divide(firstNumber, secondNumber) 
    }
}
console.log("1:", operate(firstNumber, operator, secondNumber))
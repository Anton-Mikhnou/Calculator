const display = document.querySelector('.valueDisplay');
let displayResult = display.textContent = 0;
// output botton's value
const valueButton = document.querySelectorAll('.item')
valueButton.forEach(valueButton => {
    valueButton.addEventListener('click', (event) =>{
        const target = event.target;
        display.textContent = target.textContent 
    })
})

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
// console.log("1:", operate(firstNumber, operator, secondNumber))
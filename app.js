const display = document.querySelector('.valueDisplay');
let firstNumber = 0;
let secondNamber = 0;
let operator;
display.textContent = 0;
let isFirstNumber = true;
// output botton's value

const sign = document.querySelectorAll('.operator');
sign.forEach(sign =>{
    sign.addEventListener('click', ()=>{
        isFirstNumber = false;
        display.textContent += sign.textContent
    })
}) 

const valueButton = document.querySelectorAll('.item')
valueButton.forEach(valueButton => {
    valueButton.addEventListener('click', (event) =>{
        const target = event.target;
        if(isFirstNumber){
            if(firstNumber === 0){
                firstNumber ='';
            }
            firstNumber += target.textContent;
            display.textContent = firstNumber
            console.log('1:', firstNumber);
        } else{
            if(secondNamber === 0){
                secondNamber ='';
            }
            secondNamber += target.textContent;
            display.textContent = secondNamber
            console.log('2:', secondNamber);
        }
    })
})




// const sum = document.querySelector('#add');
// sum.addEventListener('click', () => {
//     const result = operate(firstNumber, "add", secondNumber);
//     display.textContent = result;
//     console.log(display.textContent = result) 
// });

function add (firstNumber, secondNumber){
    let result = firstNumber + secondNumber;
    return display.textContent = result;
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
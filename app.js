const display = document.querySelector('.valueDisplay');
let firstNumber = [0];
let secondNumber = [0];
let operator;
display.textContent = 0;
let isFirstNumber = true;
// output botton's value
const output = document.querySelector('.output');

// operator button
const sign = document.querySelectorAll('.operator');
sign.forEach(sign =>{
    sign.addEventListener('click', ()=>{
        isFirstNumber = false;
        display.textContent += sign.textContent
        operator = sign.textContent;
        console.log('op:', operator)
        console.log(isFirstNumber)
    })
}) 

//click on the number's button
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
            if(secondNumber === 0){
                secondNumber ='';
            }
            secondNumber += target.textContent;
            display.textContent = secondNumber
            console.log('2:', secondNumber);
        }
    })
})

// EventListener botton '=' 
const equal = document.querySelector('.itemEqual')
equal.addEventListener('click', () => {
    const result = operate(firstNumber, operator, secondNumber);
    display.textContent = result;
    output.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    secondNumber = 0;
    firstNumber = result
    console.log('res:',display.textContent)
})

// Clear button
const clear = document.querySelector('.itemClear');
clear.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    display.textContent = 0;
    output.textContent = '';
    isFirstNumber = true;
})

//Wipe button
const wipe = document.querySelector('.wipe')
wipe.addEventListener('click', () => {
    if(isFirstNumber){
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = firstNumber;
        console.log(firstNumber)
        console.log(isFirstNumber)
    } else{
        console.log(isFirstNumber)
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = secondNumber;
        console.log(secondNumber)
    }
})



function add (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) + parseFloat(secondNumber);
    if(res % 1 !== 0){
        return res.toFixed(2);
    } else{
        return res;
    }
}

function subtract (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) - parseFloat(secondNumber);
    if(res % 1 !== 0){
        return res.toFixed(2);
    } else{
        return res;
    }
}

function multiply (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) * parseFloat(secondNumber);
    if(res % 1 !== 0){
        return res.toFixed(2);
    } else{
        return res;
    }
}

function divide (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) / parseFloat(secondNumber);
    if(res % 1 !== 0){
        return res.toFixed(2);
    } else{
        return res;
    }
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+'){
        return add(firstNumber, secondNumber) 
    } else if (operator === '-'){
        return subtract(firstNumber, secondNumber)
    } else if (operator === '*'){
        return multiply(firstNumber, secondNumber) 
    } else if (operator === '/'){
        return divide(firstNumber, secondNumber) 
    }
}

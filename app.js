const valueDisplay = document.querySelector('.valueDisplay');
let startValue = 0;
valueDisplay.textContent = startValue;
let firstNumber = [];
let secondNumber = [];
let operator;
let operation = [];
let isFirstNumber = true;
let isOperatorSelect = false; 
console.log(operation)


function updateDisplay(){
    valueDisplay.textContent = operation;
}
//number button
const valueButton = document.querySelectorAll('.item');
valueButton.forEach(valueButton => {
    valueButton.addEventListener('click', (event) =>{
        const target = event.target;
        let count = target.textContent;
        // startValue = target.textContent;
        if(isFirstNumber){
            firstNumber += count;
            operation[0] = firstNumber;
            updateDisplay();
            console.log('1:', firstNumber)
        } else{
            secondNumber += count;
            operation = secondNumber;
            updateDisplay();
            console.log('2:', secondNumber)
        }
    })
})

//button operator 
const operatorBtn = document.querySelectorAll('.operator')
operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('.click', (event) => {
        const target = event.target;
        let oper = target.textContent; 
        isFirstNumber = false
        isOperatorSelect = true;
        operator = oper;
        operation[1] = operator;
        console.log('oper:',operator)
        updateDisplay()
    })
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




const valueDisplay = document.querySelector('.valueDisplay');
let startValue = [0];
valueDisplay.textContent = startValue;
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result;
let isFirstNumber = true;
let isOperatorSelect = false;
let isEqualSelect = false;

function updateDisplay (){
    valueDisplay.textContent = startValue.join('');
}

//number button
const valueButton = document.querySelectorAll('.item');
valueButton.forEach(valueButton => {
    valueButton.addEventListener('click', (event) =>{
        const target = event.target;
        if(isFirstNumber === true){
            firstNumber += target.textContent;
            startValue[0] = firstNumber;
            console.log('1:',firstNumber);
            updateDisplay();
        } else {
            secondNumber += target.textContent;
            startValue[2] = secondNumber;
            console.log('2:',secondNumber);
            updateDisplay();
        }
    })
})

//button operator 
const operatorBtn = document.querySelectorAll('.operator')
operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (event) => {
        isOperatorSelect = true;
        isFirstNumber = false;
        const target = event.target;
        operator = target.textContent;
        startValue[1] = operator;
        updateDisplay();
        console.log(operator);
    })
})

//button '=' 
const equal = document.querySelector('.itemEqual');
equal.addEventListener('click', () => {
    isFirstNumber = false;
    isEqualSelect = true;
    operate(firstNumber, operator, secondNumber)
    console.log(operate(firstNumber, operator, secondNumber))
    result = operate(firstNumber, operator, secondNumber);
    firstNumber = result;
    startValue[0] = firstNumber;
    secondNumber = '';
    startValue[2] = secondNumber;
    operator = '';
    startValue[1] = '';
    console.log('oper:',operator)
    updateDisplay();
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




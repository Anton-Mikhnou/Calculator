const valueDisplay = document.querySelector('.valueDisplay');
let firstNumber = [];
let secondNumber = [];
let operator;
let result;
let startValue = [0];
valueDisplay.textContent = startValue;
let isFirstNumber = true; 
isOperatorSelect = false;
isEqualSelect = false;

function updateDisplay() {
    if(isEqualSelect){
        valueDisplay.textContent = result;
        isEqualSelect = false;
    } else{
        valueDisplay.textContent = startValue.join('');
    }
    // for(let i = 0; i < startValue.length; i++){
    //     valueDisplay.textContent = startValue[i]
    // }
    // valueDisplay.textContent = startValue[0] + startValue[1] + startValue[2];
}

//Operator button
const sign = document.querySelectorAll('.operator');
sign.forEach(sign => {
    sign.addEventListener('click', (event) => {
        const target = event.target;
        isFirstNumber = false;
        if(!isOperatorSelect){
            operator = target.textContent;
            startValue[1] = operator;
            updateDisplay()
            console.log(startValue)
            isOperatorSelect = true;
        } else {
            return;
        }
    })
})

// number's button
const item = document.querySelectorAll('.item')
item.forEach(item => {
    item.addEventListener('click', (event) => {
        const target = event.target;
        if (isFirstNumber){
            firstNumber += target.textContent;
            startValue[0] = firstNumber;
            console.log(startValue)
            updateDisplay();
        } else {
            secondNumber += target.textContent;
            startValue[2] = secondNumber;
            console.log(startValue)
            updateDisplay();
        }
    })
});

// Button result '='
const equal = document.querySelector('.itemEqual');
equal.addEventListener('click', () => {
    result = operate(firstNumber, operator, secondNumber);
    isEqualSelect = true;
    firstNumber = result;
    startValue[0] = result;
    secondNumber = [];
    startValue[2] = '';
    isFirstNumber = false;
    isOperatorSelect = false;
    updateDisplay();
    console.log(firstNumber);
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

const valueDisplay = document.querySelector('.valueDisplay');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result;
let startValue = [0];
valueDisplay.textContent = startValue;
let isFirstNumber = true; 
let isOperatorSelect = false;
let isEqualSelect = false;
let isPointSelect = false;

function updateDisplay() {
    if (isEqualSelect){
        valueDisplay.textContent = result;
        isEqualSelect = false;
    } else {
        valueDisplay.textContent = startValue.join('');
    }
}

// Operator button
const sign = document.querySelectorAll('.operator');
sign.forEach(sign => {
    sign.addEventListener('click', (event) => {
        const target = event.target;
        isFirstNumber = false;
        if(valueDisplay.textContent !== 'Error'){
            if (!isOperatorSelect) {
                isOperatorSelect = true;
                operator = target.textContent;
                startValue[1] = operator;
                updateDisplay();
            } else {
                if (secondNumber !== '') {
                    firstNumber = operate(firstNumber, operator, secondNumber);
                    if (firstNumber == Infinity){
                        isInfinity();
                    } else {
                        startValue[0] = firstNumber;
                        operator = target.textContent;
                        startValue[1] = operator;
                        secondNumber = '';
                        startValue[2] = '';
                        updateDisplay();
                    }
                }
            }
        } else {
            isFirstNumber = true;
            isOperatorSelect = false;
            isEqualSelect = false;
        }
    })
})

// Point button
const point = document.querySelector('.point');
point.addEventListener('click', () => {
    if (!String(firstNumber).includes('.') && isFirstNumber === true){
        if (firstNumber === ''){
            startValue[0] = 0;
            firstNumber = 0;
        }
        firstNumber += point.textContent;
        startValue[0] += point.textContent;
        updateDisplay();
    }
    if (!String(secondNumber).includes('.') && isFirstNumber === false){
        if (secondNumber === ''){
            startValue[2] = 0;
            secondNumber = 0;
        }
        secondNumber += point.textContent;
        startValue[2] += point.textContent;
        updateDisplay();
    }
})

// Number's button
const item = document.querySelectorAll('.item');
item.forEach(item => {
    item.addEventListener('click', (event) => {
        const target = event.target;
        if (isFirstNumber){
            firstNumber += target.textContent;
            startValue[0] = firstNumber;
            updateDisplay();
        } else {
            secondNumber += target.textContent;
            startValue[2] = secondNumber;
            updateDisplay();
        }
    })
});

// Button result '='
const equal = document.querySelector('.itemEqual');
equal.addEventListener('click', () => {
    result = operate(firstNumber, operator, secondNumber);
    if(valueDisplay.textContent !== 'Error' && valueDisplay.textContent !== '0') {
        if (firstNumber === ''){
            if (operator === '*' || operator ==='/'){
                isFirstNumber = true;
                isEqualSelect = true;
                isOperatorSelect = false;
                result = 0;
                firstNumber = '';
                operator = '';
                startValue[1] = operator;
                secondNumber = '';
                startValue[2] = '';
                updateDisplay();
            } else {
                isFirstNumber = true;
                isEqualSelect = true;
                isOperatorSelect = false;
                result = secondNumber;
                firstNumber = secondNumber;
                startValue[0] = secondNumber;
                secondNumber = '';
                startValue[2] = '';
                updateDisplay();
            }
        } else if (firstNumber !== '' && secondNumber === ''){
            isEqualSelect = true;
            isFirstNumber = true;
            isOperatorSelect = false;
            result = firstNumber;
            startValue[0] = result;
            operator = '';
            startValue[1] = operator;
            secondNumber = '';
            startValue[2] = secondNumber;
            updateDisplay();
        } else {
            isEqualSelect = true;
            isFirstNumber = true;
            isOperatorSelect = false;
            if (result == Infinity){
                isInfinity();
            } else {
                firstNumber = result;
                startValue[0] = firstNumber;
                operator = '';
                startValue[1] = operator;
                secondNumber = '';
                startValue[2] = secondNumber;
                updateDisplay();
            }
        }
    } else{
        isFirstNumber = true;
        isOperatorSelect = false;
        isEqualSelect = false;
    }
})

// Wipe button  
const wipe = document.querySelector('.wipe');
wipe.addEventListener('click', () => {
    if( valueDisplay.textContent === 'Error'){
        startValue[0] = 0;
        updateDisplay();
    } else if(startValue[0] !== 0){
        if (isFirstNumber){
            if (firstNumber.length === 1){
                firstNumber = '';
                startValue[0] = 0;
                updateDisplay();
            } else{
                firstNumber = firstNumber.slice(0, -1);
                startValue[0] = firstNumber;
                updateDisplay();
            }
        } else {
            if (operator !== '' && secondNumber === '' || startValue.length === 2 ){
                isOperatorSelect = false;
                operator = '';
                startValue[1] = operator;
                isFirstNumber = true;
                updateDisplay();
            }
            secondNumber = secondNumber.slice(0, -1);
            startValue[2] = secondNumber;
            updateDisplay();
        }
    } else {
        return;
    }
})

//Zero button
const zero = document.querySelector('.itemZero');
zero.addEventListener('click', () => {
    if (isFirstNumber) {
        if (firstNumber === '0') {
            firstNumber = '0';
        } else {
            firstNumber += '0';
        }
        startValue[0] = firstNumber;
        updateDisplay();
    } else {
        if (secondNumber === '0') {
            secondNumber = '0';
        } else {
            secondNumber += '0';
        }
        startValue[2] = secondNumber;
        updateDisplay();
    }
});

// Clear All 'AC'
const clear = document.querySelector('.itemClear');
clear.addEventListener('click', () => {
    isFirstNumber = true;
    isOperatorSelect = false;
    isEqualSelect = false;
    isPointSelect = false;
    firstNumber = '';
    startValue[0] = 0;
    operator = '';
    startValue[1] = operator;
    secondNumber = '';
    startValue[2] = secondNumber;
    valueDisplay.textContent = 0;
})

function isInfinity(){
    isFirstNumber = true; 
    isOperatorSelect = false;
    isEqualSelect = false;
    isPointSelect = false;
    valueDisplay.textContent = 'Error'
    firstNumber = '';
    startValue[0] = firstNumber;
    operator = '';
    startValue[1] = operator
    secondNumber = '';
    startValue[2] = '';
}

function add (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) + parseFloat(secondNumber);
    if(res % 1 !== 0){
        return parseFloat(res.toFixed(2));
    } else{
        return parseFloat(res);
    }
}

function subtract (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) - parseFloat(secondNumber);
    if(res % 1 !== 0){
        return parseFloat(res.toFixed(2));
    } else{
        return parseFloat(res);
    }
}

function multiply (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) * parseFloat(secondNumber);
    if(res % 1 !== 0){
        return parseFloat(res.toFixed(2));
    } else{
        return parseFloat(res);
    }
}

function divide (firstNumber, secondNumber){
    let res = parseFloat(firstNumber) / parseFloat(secondNumber);
    if(res % 1 !== 0){
        return parseFloat(res.toFixed(2));
    } else{
        return parseFloat(res);
    }
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+'){
        return add(firstNumber, secondNumber);
    } else if (operator === '-'){
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*'){
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/'){
        return divide(firstNumber, secondNumber);
    }
}
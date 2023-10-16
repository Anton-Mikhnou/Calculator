const valueDisplay = document.querySelector('.valueDisplay');
let firstNumber = [];
let secondNumber = [];
let operator;
let result;
let startValue = [0];
valueDisplay.textContent = startValue;
let isFirstNumber = true; 
let isOperatorSelect = false;
let isEqualSelect = false;
let isPointSelect = false;
console.log(startValue)

function updateDisplay() {
    if(isEqualSelect){
        valueDisplay.textContent = result;
        isEqualSelect = false;
    } else{
        valueDisplay.textContent = startValue.join('');
    }
}

//Operator button
const sign = document.querySelectorAll('.operator');
sign.forEach(sign => {
    sign.addEventListener('click', (event) => {
        const target = event.target;
        isFirstNumber = false;
        if (!isOperatorSelect) {
            operator = target.textContent;
            startValue[1] = operator;
            updateDisplay();
            isOperatorSelect = true;
        } else {
            if (secondNumber !== '') {
                firstNumber = operate(firstNumber, operator, secondNumber);
                startValue[0] = firstNumber;
                operator = target.textContent;
                startValue[1] = operator;
                secondNumber = '';
                startValue[2] = '';
                updateDisplay();
            }
        }
        console.log(startValue)
    })
})

const point = document.querySelector('.point');
point.addEventListener('click', () => {
    if(!firstNumber.includes('.')){
        firstNumber += point.textContent;
        startValue[0] += point.textContent;
        updateDisplay();
    }
    if(!secondNumber.includes('.') && isFirstNumber === false){
        secondNumber += point.textContent;
        startValue[2] += point.textContent;
        updateDisplay();
    }
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

//Wipe button  
const wipe = document.querySelector('.wipe');
wipe.addEventListener('click', () => {
    if(startValue[0] !== 0){
        if(isFirstNumber){
            if(firstNumber.length === 1){
                firstNumber = '';
                startValue[0] = 0;
                updateDisplay();
            } else{
                firstNumber = firstNumber.slice(0, -1);
                startValue[0] = firstNumber;
                console.log(isFirstNumber);
                updateDisplay();
            }
        } else{
            if (operator !== '' && secondNumber === '' || startValue.length === 2 ){
                isOperatorSelect = false;
                operator = '';
                startValue[1] = operator;
                isFirstNumber = true;
                updateDisplay();
            }
            secondNumber = secondNumber.slice(0, -1);
            startValue[2] = secondNumber;
            console.log(isFirstNumber);
            console.log(startValue)
            updateDisplay();
        }
    } else{
        return;
    }
})


// Clear All 'AC'
const clear = document.querySelector('.itemClear');
clear.addEventListener('click', () => {
    isFirstNumber = true;
    isOperatorSelect = false;
    isEqualSelect = false;
    firstNumber = '';
    startValue[0] = firstNumber;
    operator = '';
    startValue[1] = operator;
    secondNumber = '';
    startValue[2] = secondNumber;
    valueDisplay.textContent = 0;
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
        return add(firstNumber, secondNumber);
    } else if (operator === '-'){
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*'){
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/'){
        return divide(firstNumber, secondNumber);
    }
}
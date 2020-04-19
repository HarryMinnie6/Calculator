//number buttons
// let oneBtn = document.querySelector('#one-btn')
// let twoBtn = document.querySelector('#two-btn')
// let threeBtn = document.querySelector('#three-btn')
// let fourBtn = document.querySelector('#four-btn')
// let fiveBtn = document.querySelector('#five-btn')
// let sixBtn = document.querySelector('#six-btn')
// let sevenBtn = document.querySelector('#seven-btn')
// let eightBtn = document.querySelector('#eight-btn')
// let nineBtn = document.querySelector('#nine-btn')
// let zeroBtn = document.querySelector('#zero-btn')

//"other buttons"
let decimalBtn = document.querySelector('#decimal-btn')
let clearBtn = document.querySelector('#clear-btn')
let backspaceBtn = document.querySelector('#backspace-btn')
let displayValueElement = document.querySelector('#display-value')


//variables to be able to loop over all the buttons
const numberButtons = document.getElementsByClassName('number-btn')
const operationButtons = document.getElementsByClassName('operation-btn')

let displayValue = '0';
let pendingVal;
let evaluateString = []

// making the buttons that are clicked on show in the "display div"
 function updateDisplay(e) {
    var buttonText= e.target.innerText;
    if (displayValue ==='0')
        displayValue = ' ';
        displayValue += buttonText;
        displayValueElement.innerText = displayValue
}

//to be able to click on the buttons and their values displayed
for (let i = 0; i < numberButtons.length; i++ ) {
    numberButtons[i].addEventListener('click', updateDisplayVal, false)
}
for (let i = 0; i < operationButtons.length; i++ ) {
    operationButtons[i].addEventListener('click', mathsPart, false)
}

//what happens when you click on the Clear button ("AC")
function clear(){
    displayValue='0'
    pendingValue = undefined
    evaluateString = []
    displayValueElement.innerText = displayValue
}
//event listener for the clear button
clearBtn.addEventListener('click', clear)

//what happens when you click on the back space button ("AC")
function backSpace(){
    let display = displayValue.length
    displayValue = displayValue.slice(0, display-1)
    if (displayValue ==='')
        displayValue = '0';
    displayValueElement.innerText = displayValue    
}
//event listener for the back Space button
backspaceBtn.addEventListener('click', backSpace)

//what happens when you click on the decimal button
function decimal() {
    if(!displayValue.includes('.'))
    displayValue += '.' 
    displayValueElement.innerText = displayValue
}

//event listener for the decimal button
decimalBtn.addEventListener('click', decimal)

//updating the display
function updateDisplayVal(e) {
    let text= e.target.innerText;
    if (displayValue ==='0')
        displayValue = ' ';
        displayValue += text;
        displayValueElement.innerText = displayValue
}

// doing the calculations
function mathsPart(event){
     let operand =event.target.innerText;
     switch(operand){
        case '+':
            pendingValue = displayValue;
            displayValue='0'
            displayValueElement.innerText = displayValue
            evaluateString.push(pendingValue);
            evaluateString.push('+')
        break;
        case '-':
            pendingValue = displayValue;
            displayValue='0'
            displayValueElement.innerText = displayValue
            displayValue='0'
            evaluateString.push(pendingValue);
            evaluateString.push('-')            
        break;         
        case 'X':
            pendingValue = displayValue;
            displayValue='0'
            displayValueElement.innerText = displayValue
            evaluateString.push(pendingValue);
            evaluateString.push('*')            
        break;
             case '÷':
            pendingValue = displayValue;
            displayValue='0'
            displayValueElement.innerText = displayValue
            evaluateString.push(pendingValue);
            evaluateString.push('/')            
        break;
             case '%':
                evaluateString.push(displayValue);
                let percentage =  eval(evaluateString.join(''))  
                displayValue = percentage * 100
                displayValueElement.innerText = `${displayValue}%`       
                evaluateString =  [];
                displayValue='0'           
        break;
        case '=':
            evaluateString.push(displayValue);
            let evaluation =  eval(evaluateString.join(''))  
            displayValue = evaluation 
            displayValueElement.innerText = displayValue       
            evaluateString =  [];
            displayValue='0'
        break;                                                         
     }
 }


 






// let bracketsBtn = document.querySelector('#brackets-btn')

// let includesBracket = false;

//     function brackets(){
//         var prac;
//         if(includesBracket){
//             prac = "("
//         } else {
//             prac = ")"
//         };   
//         includesBracket = !includesBracket;
//         displayValue+=prac;
//         displayValueElement.innerText = displayValue
    
// }







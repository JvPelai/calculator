var numbers = document.querySelectorAll(".number");
let screen = document.querySelector("#screen");
let clearBtn = document.getElementById("ac");
let eraseBtn = document.getElementById("CE");
let screenContent = [];
screen.textContent = screenContent;
eraseBtn.addEventListener('click',erase);
clearBtn.addEventListener('click', clear);
var operators = document.querySelectorAll(".operator");
var displayResultBtn = document.querySelector('#equals');
displayResultBtn.addEventListener('click',displayResult)

for(let number of numbers){
    number.addEventListener('click', hello);
}

for(let operator of operators){
    operator.addEventListener('click', operate)
}
    
function hello(){
    screenContent = screenContent.toString().split('');
    const numValue = event.target.innerText;
    screenContent.push(numValue);
    screenContent = screenContent.join("")
    screen.textContent = screenContent;
}
function erase(){
    screenContent = screenContent.toString().split('');
    screenContent.pop();
    screenContent = screenContent.join('');
    screen.textContent = screenContent;
}

function clear(){
    screenContent = [];
    screen.textContent = screenContent;
}

function operate(){
    let operatorValue = event.target.value;
    if(typeof(screenContent)== "object"){
        screenContent.push(operatorValue);
        screenContent = screenContent.join("")
        screen.textContent = screenContent;
    }
    else{
        screenContent += operatorValue;
        screen.textContent = screenContent;
    }
}

function displayResult(){
    screenContent = eval(screenContent);
    screen.textContent = screenContent;
    return screenContent
}


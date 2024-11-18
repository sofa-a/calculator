function add(string1, string2) { 
    let num1 = parseInt(string1);
    let num2 = parseInt(string2);
    return num1 + num2; 
}
function subtract(string1, string2) { 
    let num1 = parseInt(string1);
    let num2 = parseInt(string2);
    return num1 - num2 
}
function multiply(string1, string2) { 
    let num1 = parseInt(string1);
    let num2 = parseInt(string2);
    return num1 * num2; 
}
function divide(string1, string2) { 
    let num1 = parseInt(string1);
    let num2 = parseInt(string2);
    return num1 / num2;
}

function operate(operator, num1, num2) {
    let result;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function addElement(element) {
    const container = document.querySelector("#display");
    const div = document.createElement("div");
    div.textContent = element;
    div.classList.add("element");
    div.color = "white";
    div.backgroundColor = "black";
    container.appendChild(div);
}

function clearDisplay() {
    const container = document.querySelector("#display");
    container.replaceChildren();
}

function checkOperatorPresent() {
    const operators = ["*", "/", "+", "-"];
    const array = display.querySelectorAll(".element");
    for(let i=0; i<array.length; i++) {
        let text = array[i].textContent.trim();
        console.log(array[i].textContent);
        if (operators.includes(text)) {
            return true;
        }
    }
    return false;
}

function getNumbers() {
    let operator = null;
    const temp = [];
    const operators = ["*", "/", "+", "-"];
    const array = display.querySelectorAll(".element");
    for(let i=0; i<array.length; i++) {
        let text = array[i].textContent.trim()
        if (operators.includes(text)) {
            operator = array[i].textContent.trim();
        }
        temp.push(text);
    }
    const newArray = temp.join("");
    if (operator) {
        const numbers = newArray.split(operator);
        console.log("operator" + operator);
        console.log("num1" + numbers[0]);
        console.log("num2" + numbers[1]);
        result = operate(operator, numbers[0], numbers[1]); 
        clearDisplay()
        addElement(result);
    }
}

function handleClick() {
    const element = this.getAttribute("id");

    switch (element) {
        case "clear":
            clearDisplay();
            break;
        case "=":
            if (checkOperatorPresent()) {
                getNumbers();
                console.log("1");
            }        
            break;
        case "+": case "-": case "*": case "/":
            if (!checkOperatorPresent()) {
                addElement(element);
            }        
            else {
                getNumbers();
                addElement(element);
            }
            break;
        default:
            addElement(element);
            break;
    }
}

function main() {
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.addEventListener("click", handleClick);
    }
    
}

main();

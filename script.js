function add() {
    
}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate(operator, num1, num2) {
    case(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

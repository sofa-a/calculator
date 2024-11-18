function add() { return num1 + num2; }
function subtract() { return num1 - num2 }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2;}

function operate(operator, num1, num2) {
    let result;
    case(operator) {
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

function handleClick(e, array) {
    let element = e.target.getAttribute("id");
    case (element) {
        case "clear":
            break;
        case "=":
            break;
        default:
            const div = document.createElement("div");
            div.textContent = element;
            div
            break;
    }
}

function main() {
    const array = [];
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.addEventListener("click", (e) => handleClick(e, array));
    }
    
}

main();

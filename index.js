function operate(leftNum, operator, rightNum) {
    if (operator == "+") {
        return leftNum + rightNum;
    }
    else if (operator == "-") {
        return leftNum - rightNum;
    }
    else if (operator == "*") {
        return leftNum * rightNum;
    }
    else if (operator == "/") {
        return leftNum / rightNum;
    }
    else {
        return NaN;
    }
}

let leftNum = 0, operator = null, rightNum = null;
let displayValue = "0";
let overwrite = true;

const display = document.querySelector(".display");
display.textContent = displayValue;

const numButtons = document.querySelectorAll(".number-button");
for (const button of numButtons) {
    button.addEventListener("click", () => {
        let num = parseInt(button.textContent);
        if (operator == null) {
            if (overwrite) {
                leftNum = num;
                overwrite = false;
            }
            else {
                leftNum = leftNum * 10 + num;
            }
            displayValue = leftNum;
        }
        else {
            rightNum = rightNum * 10 + num;
            displayValue = rightNum;
        }
        display.textContent = displayValue;
    });
}

const opButtons = document.querySelectorAll(".operator-button");
for (const button of opButtons) {
    button.addEventListener("click", () => {
        op = button.textContent
        if (rightNum != null) {
            leftNum = operate(leftNum, operator, rightNum);
            rightNum = null;
            displayValue = leftNum;
        }
        operator = op;
        display.textContent = displayValue;
    });
}

const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click", () => {
    if (rightNum != null) {
        leftNum = operate(leftNum, operator, rightNum);
    }
    operator = null;
    rightNum = null;
    overwrite = true;
    displayValue = leftNum;
    display.textContent = displayValue;
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    leftNum = 0;
    operator = null;
    rightNum = null;
    displayValue = leftNum;
    display.textContent = displayValue;
});
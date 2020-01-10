var display = document.getElementById("txtDisplay");
var prevNumber = null;
var currentOp = null;

function resetCalc() {
    prevNumber = null;
    currentOp = null;
    display.value = "";
}

function pressNum(num) {
    display.value = display.value + num;
}

function pressOp(op) {
    currentOp = op;
    prevNumber = parseInt(display.value);
    display.value = "";
}

function executeCalc() {
    var currentNumber = parseInt(display.value);
    var result;

    switch (currentOp) {
        case '+':
            result = prevNumber + currentNumber;
            break;
        case '-':
            result = prevNumber - currentNumber;
            break;
        case '/':
            result = prevNumber / currentNumber;
            break;
        case '*':
            result = prevNumber * currentNumber;
            break;
    }
    display.value = result;
}
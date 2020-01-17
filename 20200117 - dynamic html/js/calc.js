var display = document.getElementById("txtDisplay");
var btnReset = document.getElementById("btnReset");
var btnExecute = document.querySelector("#btnExecute");
var btnNumList = document.querySelectorAll(".btnNum");
var btnOpList = document.querySelectorAll(".btnOp");

var prevNumber = null;
var currentOp = null;

for (let i = 0; i < btnNumList.length; i++) {
    const btn = btnNumList[i];
    btn.addEventListener("click", function () {
        var number = this.innerHTML;
        display.value = display.value + number;
    });
}

for (let i = 0; i < btnOpList.length; i++) {
    const btn = btnOpList[i];
    btn.addEventListener("click", function () {
        var op = this.innerHTML;
        prevNumber = parseInt(display.value);
        currentOp = op;
        display.value = "";
    })
}

btnExecute.addEventListener("click", function () {
    var result;
    var currentNumber = parseInt(display.value);
    switch (currentOp) {
        case "+":
            result = prevNumber + currentNumber;
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
    }
    display.value = result;
});

btnReset.addEventListener("click", function(){
    display.value = "";
    prevNumber = null;
    currentOp = null;
})


// alert("ok");
// console.log("ciao");
/* commento  */


// Variabili

var productId = 12;
var name = "Andrea";
var surname = 'Dottor';
var isValid = false;
var test;

test = 123;
test = "pippo";
test = null;

var message1 = "Il campo 'testo' è obbligatorio";
var message2 = "Il campo \"testo\" è obbligatorio";
var message3 = 'Il campo "testo" è obbligatorio';


var r = 0.1 + 0.2;
console.log(r);

console.log(parseFloat("12.34"));
console.log(parseInt("12.34"));

console.log(myTemp3);

if(true){
    var myTemp = "pippo";
    let myTemp2 = "pippo 2";
    var myTemp3 = "pippo 3";
}


console.log(myTemp);
//console.log(myTemp2);


// Array

var list1 = ["ciao", "sono", "Andrea", false, null, 123 , [1 ,2, 3]];

var list2 = new Array();
list2[0] = "ciao";
list2[1] = "sono";
list2[15] = "Andrea";

var list3 = new Array();
list3.push("ciao");
list3.push("sono");
//list3.push("Andrea");
list3[list3.length] = "Andrea";

console.log("La lista 1 è lunga " + list1.length + " elementi");
console.log("La lista 2 è lunga " + list2.length + " elementi");
console.log("La lista 3 è lunga " + list3.length + " elementi");
console.log("Lista 2 posizione 10: " + list2[10]);

/*
if(list1.length > 0){
    console.log("List 1 NON è vuoto");
} else {
    console.log("List 1 è vuoto");
}

if(list1.length > 0)
    console.log("List 1 NON è vuoto");
else
    console.log("List 1 è vuoto");

if(list1.length > 0)
    console.log("List 1 NON è vuoto");

if(list1.length > 0){
    console.log("List 1 NON è vuoto");
}*/

var a1 = 3;
var a2 = "3";

if(a1 == a2)
    console.log("TEST 1 - UGUALE");
else
    console.log("TEST 1 - DIVERSO");

if(a1 === a2)
    console.log("TEST 2 - UGUALE");
else
    console.log("TEST 2 - DIVERSO");


// Funzioni

function add(num1, num2){
    console.log("ADD - num1=" + num1);
    console.log("ADD - num2=" + num2);
    return num1 + num2;
}

var resultAdd1 = add(12, 77);
var resultAdd2 = add(1, 2);
var resultAdd3 = add("1", "2");

function writeLog(message){
    console.log("MESSAGGIO: " + message);
}




var count = 0;
var txt = document.getElementById("txtInput");
var pnl = document.getElementById("pnlOutput");

function moveText(){
    count++; // count = count +1;
    var text = txt.value;
    pnl.innerHTML = text + " count: " +  count;
    txt.value = "";
}

var mioValore = "a"
switch (mioValore) {
    case "a":
        console.log("hai digitato 'a'");
        break;
    case "b":
        console.log("hai digitato 'b'");
        break;
    default:
        console.log("lettera non valida");
        break;
}

if(mioValore == "a")
    console.log("hai digitato 'a'");
else if(mioValore == "b")
    console.log("hai digitato 'b'");
else
    console.log("lettera non valida");
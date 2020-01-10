var txt = document.getElementById("txtInput");
var btn = document.querySelector("#btnGo");
var panels = document.querySelectorAll(".pnl-output");

// SAMPLE 1
/*
btn.addEventListener("click", function(){
    var t = txt.value;

    for (let i = 0; i < panels.length; i++) {
        const pnl = panels[i];
        pnl.innerHTML = t;
    }
});
txt.addEventListener("change", function(){
    var t = txt.value;

    for (let i = 0; i < panels.length; i++) {
        const pnl = panels[i];
        pnl.innerHTML = t;
    }
});
*/

// SAMPLE 2

// function update(){
var update = function(e){
    //alert(e.target.id);
    //alert(this.id);
    
    // this.style.color = "red";
    // this.style.border = "1px solid red";
    this.classList.add("color-red");

    var t = txt.value;

    for (let i = 0; i < panels.length; i++) {
        const pnl = panels[i];
        pnl.innerHTML = t;
    }
}

btn.addEventListener("click", update);
txt.addEventListener("change", update);
//txt.addEventListener("keypress", update);
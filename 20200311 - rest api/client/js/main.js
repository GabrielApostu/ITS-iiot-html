var txt = document.getElementById("txtAuthor");
var pnl = document.getElementById("pnlOutput");
function getItems() {
    pnl.innerHTML = "";
    fetch("http://localhost:3000/items").then(function (response) {
        return response.json();
    }).then(function (data) {
        data.forEach(function (item) {
            var p = document.createElement("p");
            var date = new Date(item.creationDate);
            var dateTxt = date.toLocaleString();
            p.innerHTML = item.author + " - " + item.description + " - (" + dateTxt + ")";
            pnl.appendChild(p);
        });
    });
}
function getItemsByAuthor() {
    if (!txt.value) {
        alert("inserire un filtro");
        return;
    }
    var author = encodeURIComponent(txt.value);
    pnl.innerHTML = "";
    fetch("http://localhost:3000/items/" + author).then(function (response) {
        return response.json();
    }).then(function (data) {
        data.forEach(function (item) {
            var p = document.createElement("p");
            var date = new Date(item.creationDate);
            var dateTxt = date.toLocaleString();
            p.innerHTML = item.author + " - " + item.description + " - (" + dateTxt + ")";
            pnl.appendChild(p);
        });
    });
}
function insertItem() {
    var item = new ToDoItemNew();
    item.author = txt.value;
    item.description = "Descrizione di prova";
    item.creationDate = new Date();
    item.status = "created";
    fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then(function (response) {
        if (response.status == 204)
            alert("Inserito!");
    });
}
var ToDoItem = /** @class */ (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
var ToDoItemNew = /** @class */ (function () {
    function ToDoItemNew() {
    }
    return ToDoItemNew;
}());

var txt = document.getElementById("txtAuthor") as HTMLInputElement;
var pnl = document.getElementById("pnlOutput") as HTMLDivElement;

function getItems(){
    pnl.innerHTML = "";
    fetch("http://localhost:3000/items").then(response=> {
        return response.json();
    }).then((data: ToDoItem[]) => {
        data.forEach(item => {
            let p = document.createElement("p");
            let date = new Date(item.creationDate);
            let dateTxt = date.toLocaleString();
            p.innerHTML = `${item.author} - ${item.description} - (${dateTxt})`;
            pnl.appendChild(p);
        });
    });
}

function getItemsAuth(){
    let token = "token jwt sample";
    pnl.innerHTML = "";

    let headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": "bearer " + token,
    });
    var myInit = { 
        method: 'GET',
        headers: headers
     };
    fetch("http://localhost:3000/items", myInit).then(response=> {
        return response.json();
    }).then((data: ToDoItem[]) => {
        data.forEach(item => {
            let p = document.createElement("p");
            let date = new Date(item.creationDate);
            let dateTxt = date.toLocaleString();
            p.innerHTML = `${item.author} - ${item.description} - (${dateTxt})`;
            pnl.appendChild(p);
        });
    });
}

function getItemsByAuthor(){
    if(!txt.value){
        alert("inserire un filtro");
        return;
    }

    var author = encodeURIComponent(txt.value);

    pnl.innerHTML = "";
    fetch("http://localhost:3000/items/" + author).then(response=> {
        return response.json();
    }).then((data: ToDoItem[]) => {
        data.forEach(item => {
            let p = document.createElement("p");
            let date = new Date(item.creationDate);
            let dateTxt = date.toLocaleString();
            p.innerHTML = `${item.author} - ${item.description} - (${dateTxt})`;
            pnl.appendChild(p);
        });
    });
}

function insertItem(){
    let item = new ToDoItemNew();
    item.author = txt.value;
    item.description = "Descrizione di prova";
    item.creationDate = new Date().getTime();
    item.status = "created";

    fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    }).then(response => {
        if(response.status == 204)
            alert("Inserito!");
    });
}

class ToDoItem{
    author: string;
    description: string;
    status: string;
    creationDate: number;
}

class ToDoItemNew{
    author: string;
    description: string;
    status: string;
    creationDate: number;
}



var token : string = null;

function test(){

    // memorizzazione valore
    localStorage.setItem("key", "valore");
    // recupero del valore
    var key = localStorage.getItem("key");

    localStorage.clear();
    // cancellazione di una chiave
    localStorage.removeItem("key")
    // localStorage.setItem("key", null);


    sessionStorage.setItem("token", "jwt");
    var token = sessionStorage.getItem("token");
    if(!token){
        location.href = "/login.html";
    }


}
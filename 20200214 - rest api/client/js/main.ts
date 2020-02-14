
var txtId = document.getElementById("") as HTMLInputElement;
var txtName = document.getElementById("") as HTMLInputElement;

function addToBasket() {
    let p = new Product();
    p.id = parseInt(txtId.value);
    p.name = txtName.value;

    fetch("http://localhost:3000/api/products",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(p)
        })
        .then(res =>{
            return res.json();
        }).then(data => {
            txtId.value ="";
            txtName.value = "";
            alert("prodotto inserito");
        });
}


function getTotals() {

    fetch("http://localhost:3000/api/products").then((response) => {
        return response.json();
    }).then((data: Product[]) => {
        for (let i = 0; i < data.length; i++) {
            const p = data[i];

        }
    });
}


class Product {
    public id: number;
    public name: string;
}
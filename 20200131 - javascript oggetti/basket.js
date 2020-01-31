var sel = document.getElementById("selType");
var txt = document.getElementById("txtQuantity");
var pnl = document.getElementById("pnlResults");

function Item(type, quantity){
    this.type = type;
    this.quantity = quantity;
}

function Basket(){
    this._items = [];
    this.add= function(item){
        this._items.push(item);
    }
    this.getTotalItems = function(){
        var list = [];
        

        for (let i = 0; i < this._items.length; i++) {
            const item = this._items[i];
            
            var exist = false;

            for (let j = 0; j < list.length; j++) {
                const element = list[j];
                if(element.type == item.type){
                    exist = true;
                    element.quantity += item.quantity;
                }
            }

            if(!exist)
                list.push(new Item(item.type, item.quantity));
        }
        return list;
    }
}
var basket = new Basket();

function addItem(){
    var item = new Item(sel.value, parseInt(txt.value));
    basket.add(item);
    sel.value = "";
    txt.value = "1";
}

function getTotals(){
    var list = basket.getTotalItems();
    pnl.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        
        var p = document.createElement("p");
        p.innerHTML = item.type + ": " + item.quantity;
        pnl.appendChild(p);
    }
}
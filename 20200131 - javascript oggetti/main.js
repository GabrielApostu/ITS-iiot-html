var u1 = new Object();
u1.name = "Andrea";
u1.surname = "Dottor";

var u2 = new Object();
u2.name = "Lorenzo";
u2.surname = "Dottor";

function User(firstName, lastName){
    this._age = 123;
    this.name = firstName;
    this.surname = lastName;
    this.getFullName = function(){
        return this.name + " " + this.surname;
    }
}

User.prototype.getDescrition = function(prefix){
    return prefix + " " + this.name + " " + this.surname;
}

var u3 = new User("Tommaso", "Dottor");
var u3desc = u3.getFullName();
var u3desc2 = u3.getDescrition("Ciao");

// da oggetto a stringa json
var u3json = JSON.stringify(u3);
console.log(u3json)

// da stringa json a oggetto
var u3clone = JSON.parse(u3json);
//console.log(u3clone.getFullName());


var u4 = {
    name: "Andrea",
    surname: "Dottor",
    getFullName: function(){
        return this.name + " " + this.surname;
    }
};

var u5 = {
    name: "Andrea2",
    surname: "Dottor2"
};


var list1 = new Array();
list1.push("ciao");
list1.push("its");

var list2 = ["ciao", "its"];


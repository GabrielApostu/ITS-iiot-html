// npm install underscore
// npm install @types/underscore

var s1 = "ciao";
var n1: number = 12;
var b1: boolean = true;

var s2: string;

s2 = "aaa";

// function add(x: number, y: number){
//     return x + y;
// }
//var add = function(x: number, y: number){
//     return x + y;
// }
// var add = (x: number, y: number) => {
//     return x +y;
// }
var add = (x: number, y: number) => x + y;

var result = add(11, 12);



// oggetti
class User {
    constructor(
        public name: string,
        public surname: string) {

    }

    getFullName = () => {
        return this.name + " " + this.surname;
    }
}
var u1 = new User("Andrea", "Dottor");

class SuperUser extends User {
    constructor(public name: string,
        public surname: string,
        public power: string) {
        super(name, surname);
    }
}

var list : User[] = [];
list.push(new User("Andrea", "Dottor"));
list.push(new SuperUser("Lorenzo", "Dottor", "volo"));

var uX = _.find(list, (u)=> u.name == "Andrea");
console.log(uX.getFullName());

var txt = document.getElementById("txtInput") as HTMLInputElement;
var btn = document.getElementById("btnGo") as HTMLButtonElement;
var pnl = document.getElementById("pnlResult") as HTMLDivElement;

btn.addEventListener("click", () => {
    pnl.innerHTML = txt.value;
    pnl.style.color = "red";
});
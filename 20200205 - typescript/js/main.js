// npm install underscore
// npm install @types/underscore
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var s1 = "ciao";
var n1 = 12;
var b1 = true;
var s2;
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
var add = function (x, y) { return x + y; };
var result = add(11, 12);
// oggetti
var User = /** @class */ (function () {
    function User(name, surname) {
        var _this = this;
        this.name = name;
        this.surname = surname;
        this.getFullName = function () {
            return _this.name + " " + _this.surname;
        };
    }
    return User;
}());
var u1 = new User("Andrea", "Dottor");
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name, surname, power) {
        var _this = _super.call(this, name, surname) || this;
        _this.name = name;
        _this.surname = surname;
        _this.power = power;
        return _this;
    }
    return SuperUser;
}(User));
var list = [];
list.push(new User("Andrea", "Dottor"));
list.push(new SuperUser("Lorenzo", "Dottor", "volo"));
var uX = _.find(list, function (u) { return u.name == "Andrea"; });
console.log(uX.getFullName());
var txt = document.getElementById("txtInput");
var btn = document.getElementById("btnGo");
var pnl = document.getElementById("pnlResult");
btn.addEventListener("click", function () {
    pnl.innerHTML = txt.value;
    pnl.style.color = "red";
});

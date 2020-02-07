
function check(num : number){
    if(num < 0)
        throw "Numero non valido";
}


export function add(num1: number, num2: number){
    check(num1);
    check(num2);
    return num1 + num2;
}
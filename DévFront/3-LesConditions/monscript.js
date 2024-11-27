/*
let number = 5;
let text = '5';
let isRainingToday = true;

console.log(number == text);
console.log(number === text);
if (isRainingToday) {
    console.log("Where is my umbrella?");
}
*/

let age = prompt("Quel âge as-tu ?");
while (isNaN(age) || age < 0 || age =="" ) {
    age = prompt("Ce n'est pas un age valide ! Quel âge as-tu ?");
}
/*
if (age < 18) {
    alert(`L'utilisateur a ${age}, il est mineur`);
} else if (age>62){
    alert(`L'utilisateur a ${age}, il est majeur et retraité`);
} else {
    alert(`L'utilisateur a ${age}, il est majeur`);
}
*/
/*
if (Number(age) == 18) {
        alert("Il vient d'être majeur");
} else if (Number(age) == 25) {
        alert("Il a un quart de siècle");
} else if (Number(age) == 50) {
        alert("Il a un demi siècle");
} else if (Number(age) == 62) {
        alert("Il vient d'être à la retraite");
} else if (Number(age) == 100) {
        alert("Il vient d'être centenaire");
}
*/


switch (Number(age)) {
    case 18:
        alert("Il vient d'être majeur");
        break;
    case 25:
        alert("Il a un quart de siècle")
        break;
    case 50:
        alert("Il a un demi siècle")
        break;
    case 62:
        alert("Il vient d'être à la retraite")
        break;
    case 100:
        alert("Il vient d'être centenaire")
        break;
}



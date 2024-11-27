let nomJour = "Lundi";
let numJour = 12;
let nomMois = "Août";
let isHiver = false;
let tabJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche" ]
let tabMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

console.log(nomJour, numJour, nomMois, isHiver)

let maDateV1 = {
    jour: "Lundi",
    mois: "Août",
}

let maDateV2 = {
    jour: tabJours[0],
    mois: tabMois[7],
}
let today = new Date()
let maDateV3 = {
    nomJour: tabJours[today.getDay()],
    jour: today.getDate(),
    mois: tabMois[today.getMonth()],
    annee: today.getFullYear(),
}

console.log(maDateV1, maDateV2, maDateV3)

let nbr1 = 3;
let nbr2 = 7;
let nbr3 = 8;
let nbr4 = 21;

console.log(nbr1 + nbr2)
console.log(nbr4 - nbr3)
nbr2 = nbr1 * nbr2
console.log(nbr2)
nbr2++
console.log(nbr2)
console.log(nbr4 / nbr1)
console.log(nbr4%nbr1)

let nomSerie = prompt("Quelle est ta série préférée ?")
let nomPerso = prompt("Quel est ton personnage préféré ?")

alert("Ma série préférée est " + nomSerie + " et mon personnage préféré est " + nomPerso)
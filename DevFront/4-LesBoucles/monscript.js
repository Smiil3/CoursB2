//tp10
let nbr = 0
let i = 0
while(i <100) {
    i++
    nbr=nbr+i
}
console.log(nbr)

let limite;
do {
limite = prompt("Choisi un nombre entre 1 et 100")
} while(isNaN(limite) || limite < 1 || limite > 100)
limite =Number(limite)

let i2 = 0
let nbr2 = 0
do {
    i2++
    nbr2=nbr2+i2
} while (i2 <limite)
console.log(nbr2)

//tp11
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 8; i++) {
    console.log(tab[i]);
}
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}
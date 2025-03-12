// NE PAS TOUCHER
const ships = ['XL', 'M', 'XS', 'M', 'XL', 'XL', 'M', 'L', 'M', 'L', 'XS', 'XL', 'XL', 'S', 'L', 'XL', 'M', 'XS', 'M', 'M', 'XS', 'XS', 'XL', 'XS', 'XS', 'XL', 'M', 'XS', 'XL', 'M', 'XL', 'XL', 'M', 'L', 'XL', 'XL', 'S', 'XS', 'XS', 'L', 'XS', 'L', 'L', 'S', 'L', 'XL', 'M', 'S', 'L', 'XL', 'S', 'S', 'XL', 'M', 'L', 'S', 'M', 'L', 'XS', 'S', 'XS', 'M', 'L', 'L', 'L', 'M', 'S', 'S', 'M', 'L', 'XL', 'XS', 'L', 'S', 'L', 'L', 'XL', 'XL', 'M', 'XS', 'M', 'XS', 'M', 'XS', 'L', 'L', 'M', 'L', 'M', 'S', 'S', 'L', 'L'];
// NE PAS TOUCHER

let counts = {};
let maxSize = '';
let maxCount = 0;

for (let ship of ships) {
    counts[ship] ? counts[ship] += 1 : counts[ship]=1;
    if (counts[ship] > maxCount) {
        maxSize = ship;
        maxCount = counts[ship];
    }
}

console.log(`${maxSize}_${maxCount}`);

// NE PAS TOUCHER
const sizes = [1, 7, 1, 8, 6, 4, 9, 6, 8, 9, 7, 4, 5, 9, 6, 10];
const maxCapacity = 88;
// NE PAS TOUCHER

let currentCapacity = 0;
let count = 0;

for (let i = 0; i < sizes.length; i++) {
    if (currentCapacity + sizes[i] <= maxCapacity) {
        currentCapacity += sizes[i];
        count++;
    }
}

console.log(`${count}_${maxCapacity - currentCapacity}`);

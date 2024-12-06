console.log('it works')

/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (banned.includes(i)) {
            continue; 
        }
        if (sum + i > maxSum) {
            break; 
        }
        sum += i;
        count++;
    }
    return count;
};

console.log(maxCount([1,6,5], 5, 6))
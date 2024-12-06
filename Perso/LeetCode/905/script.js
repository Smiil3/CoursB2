console.log('it works')
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let sortedTable = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0) {
            sortedTable.unshift(nums[i])
        } else {
            sortedTable.push(nums[i])
        }
    }
    return sortedTable
};
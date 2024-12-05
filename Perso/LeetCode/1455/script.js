console.log('it works')
var isPrefixOfWord = function(sentence, searchWord) {
    let index = 1
    let ans = []
    sentence.split(" ").forEach(element => {
        let word = ""
        for (let i = 0; i < element.length; i++) {
            word= word + element[i]
            if (word===searchWord) {
                ans.push(index)
            }
        }
        index++
    });
    if(ans.length!=0) {
        return ans[0]
    }
    return -1
};

console.log(isPrefixOfWord("i love eating burger", "burg") === 4)
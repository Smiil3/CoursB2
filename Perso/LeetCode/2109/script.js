console.log('it works')
// var addSpaces = function(s, spaces) {
//     let a = s.split("")
//     let newS = ""
//     for (let i = 0; i< a.length ;i++) {
//         if (spaces.includes(i)) {
//             newS+=" "
//         } 
//             newS+=s[i]
        
//     }
//     return newS
// };
var addSpaces = function(s, spaces) {
    index = 0
    for(let i = 0; i< spaces.length ;i++) {
       s =  s.substring(0, spaces[i]+index) +" "+ s.substring(spaces[i]+index)
       index++
    }
    return s
};


console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15]))
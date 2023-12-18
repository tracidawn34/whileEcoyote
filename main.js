function numberDoubler(num) {
    while(num < 100){
      num *= 2
    } 
    return num// Your code here
}

function stringRepeater(str) {
    let str2 = ''
    while(str2.length < 10){
        str2 = str + str2
    }
        return str2
        // Your code here
}

function makeDivisible(x, y) {
    while(x % y !== 0){
x++
    }
return x    
    // Your code here
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};
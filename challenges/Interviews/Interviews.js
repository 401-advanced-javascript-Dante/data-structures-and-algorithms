'use strict';



// to get the summition of arrays in the array
function summer(arrOfArr) {
    let result = new Array(arrOfArr.length);
    for (let i = 0; i < arrOfArr.length; i++) {
        let totalx = 0;
        for (let x = 0; x < arrOfArr[i].length; x++) {
            totalx += arrOfArr[i][x]
        }
        result[i] = totalx
    }
    return result;
}



// to find the fibo number at spacific index 
function fibo(target) {
    let result = 0;
    let n1 = 0;
    let n2 = 1;
    let counter = 0;
    if (target === 0) {
        return 0;
    } else if (target === 1) {
        return 1;
    }
    while (counter < target) {
        result = n1 + n2;
        n1 = n2
        n2 = result;
        counter++;
    }
    return n1;
}




module.exports = {summer , fibo}


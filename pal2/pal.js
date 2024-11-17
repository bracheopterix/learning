// /*  Situation:
//     we have a string like 'sldjdslfjhdaflsdfkhdsfhjdsfhds'
//     we need to check if first half equals the last half in backwards order 

//     Steps:
// o   so we take arraylength/2 - its ok if it not even, the last char would be just an axis of symmetry
// o   so we break an array on two halfes (minus the axis-char) 
// 0   we reverse the second array  
// 0   we feed two array to FOR and iterate by index

//  */


// // functions

// function checkEven(array) {
//     let result;
//     if (array.length % 2 == 0) {
//         result = true;
//     }
//     else {
//         result = false;
//     }
//     return result;
// }

// function cutArray(array) {
//     const clonedArray = array;
//     let half = Math.floor(array.length / 2);
//     // console.log(half);
//     const subArr1 = clonedArray.splice(0, half)
//     // console.log(clonedArray);
//     let subArr2 = clonedArray;    
//     if (checkEven(array) == true) {
//         // console.log("true");
//         subArr2.shift();
//     }
//     else {
//         // console.log("false");
//     }
//     const result = [subArr1, subArr2];
//     console.log(result);
//     return result;

// }


// console.log(checkEven([1, 2, 3, 'a', 'i']));
// cutArray([1, 2, 3, 'a', 'i']);

// console.log(checkEven([1, 2, 3, 'z', 'a', 'i']));
// cutArray([1, 2, 3, 'z', 'a', 'i']);

// // var leftSide = arrayName.splice(0, Math.floor(arrayName.length / 2));

// // cutArray([1, 2, 3, 4, 5]);





function palindrome(s) {
    const sLongth = s.length - 1;
    console.log("slongth = ", sLongth);
    for (let i = 0; i < s.length/2;i++) {
        if (s[i] == s[sLongth-i]) {
            console.log(`s ${i} = ${s[i]} vs s${sLongth-i} = ${s[sLongth-i]}`);
        }
        else{
            return false;
        }
    }
    return true;
}


module.exports = {
    // checkEven,
    // cutArray,
    palindrome
}
/*  Situation:
    we have a string like 'sldjdslfjhdaflsdfkhdsfhjdsfhds'
    we need to check if first half equals the last half in backwards order 

    Steps:
o   so we take arraylength/2 - its ok if it not even, the last char would be just an axis of symmetry
o   so we break an array on two halfes (minus the axis-char) 
0   we reverse the second array  
0   we feed two array to FOR and iterate by index

 */


// functions

function checkEven(array) {
    let result;
    if (array.length % 2 == 0) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}

function cutArray(array) {
    let half = Math.floor(array.length / 2);
    console.log(half);
    const subArr1 = array.splice(0, half)
    console.log(array);
    let subArr2=array;
    if (checkEven(array) !== true) {
        subArr2.shift();
    }
    else {
    }
    const result = [subArr1, subArr2];
    console.log(result);
    return result;

}

cutArray([1, 2, 3, 'a', 'i']);
cutArray([1, 2, 3, 'z', 'a', 'i']);

// var leftSide = arrayName.splice(0, Math.floor(arrayName.length / 2));

// cutArray([1, 2, 3, 4, 5]);


module.exports = {
    checkEven,
    cutArray
}

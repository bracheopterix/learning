/* 
we have a string like 'sldjdslfjhdaflsdfkhdsfhjdsfhds'
we need to check if first half equals the last half in backwards order 
so we take arraylength/2 - its ok if it not even, the last char would be just an axis of symmetry

so we break an array on two halves (minus the axis-char) 
we reverse the second array
we feed two array to FOR and iterate by index
 */



function reverseArr(array) {
    const result = array.reverse();
    return result;
    // expecting result [1,2,3] to [3,2,1]
}

const arr = [1, 2, 3];
reverseArr(arr);

module.exports = {
    reverseArr
}



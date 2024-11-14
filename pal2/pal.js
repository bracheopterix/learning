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




module.exports = {
    checkEven
}

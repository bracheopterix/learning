/* 
    we have a string like 'sldjdslfjhdaflsdfkhdsfhjdsfhds'
    we need to check if first half equals the last half in backwards order 
    so we take arraylength/2 - its ok if it not even, the last char would be just an axis of symmetry

    so we break an array on two halves (minus the axis-char) 
+   we reverse the second array  
    we feed two array to FOR and iterate by index
 */


// functions
function reverseArr(array) {
    const result = array.reverse();
    return result;
    // expecting changing item order: [1,2,3] to [3,2,1]
}


function compareArr(arr1, arr2) {
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            counter = counter + 1;
        }
        else { }
    }
    if (counter == arr1.length) {
        return true;
    }
    else {
        return false;
    }
}



// export
module.exports = {
    reverseArr,
    compareArr
}

// app














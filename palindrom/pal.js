/*  Situation:
    we have a string like 'sldjdslfjhdaflsdfkhdsfhjdsfhds'
    we need to check if first half equals the last half in backwards order 

    Steps:
o   so we take arraylength/2 - its ok if it not even, the last char would be just an axis of symmetry
o   so we break an array on two halves (minus the axis-char) 
+t  we reverse the second array  
+t  we feed two array to FOR and iterate by index

 */


// functions

function checkEven (array) {
    const newArray = array;
    if(array.length%2==0){
        return ('even');
    }
    else{
        
    }
}


function cutArray (array){

}



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
        // expecting if arrays have the same index values to give true
    }
    else {
        return false; 
        // expecting if arrays don't have the same index values to give false
    }
}





// export
module.exports = {
    reverseArr,
    compareArr
}

// app














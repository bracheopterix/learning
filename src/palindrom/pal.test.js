const { reverseArr, compareArr } = require('./pal'); // importing file with functions to use them

const arr1 = [1, 2, 3]; // standart array
const arr2 = [1, 2, 3]; // "the same" array
const arr3 = [3, 2, 1]; // reversed arr, also "not the same" array

test('reverseArr test - this mf reversing an array order, so [1,2,3] becoming [3,2,1]', () => {

    let superArr = reverseArr(arr1);
    for (let i = 0; i < superArr.length; i++) {
        expect(superArr[i]).toBe(arr3[i]);
    }
    // reverseArr([1,2,3]).toBe([3,2,1]);    
    // two objects instances would never be equal
})


test('compareArr test - this mf compare two arrays by inddex value and returns true if they are the same', () => {

    expect(compareArr(arr1, arr2)).toBe(true);
    expect(compareArr(arr1, arr3)).toBe(false);
})




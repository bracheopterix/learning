const { reverseArr, compareArr } = require('./pal');


test('reverseArr test - this mf reversing an array order, so [1,2,3] becoming [3,2,1]', () => {

    const protoArr = [1, 2, 3];
    let superArr = reverseArr(protoArr);
    const expectArr = [3, 2, 1];

    for (let i = 0; i < superArr.length; i++) {
        expect(superArr[i]).toBe(expectArr[i]);

        // superArr[i] == expectArr[i];
    }
    // reverseArr([1,2,3]).toBe([3,2,1]);    
    // two objects instances would never be equal
})


test('compareArr test - this mf compare two arrays by inddex value and returns true if they are the same', () => {
    const arr1 = [2, 3, 4];
    const arr2 = [2, 3, 4];
    const arr3 = [3, 4, 5];

    expect(compareArr(arr1, arr2)).toBe(true);
    expect(compareArr(arr1, arr3)).toBe(false);
})




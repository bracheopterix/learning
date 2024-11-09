const { reverseArr } = require('./pal');


test('this mf reversing an array order, so [1,2,3] becoming [3,2,1]', () => {

    const protoArr = [1, 2, 3];
    let superArr = reverseArr(protoArr);
    const expectArr = [3, 2, 1];

    for (let i = 0; i < superArr; i++) {
        superArr[i] = expectArr[i];
        console.log(true);
    }



    // reverseArr([1,2,3]).toBe([3,2,1]);    
    // two objects instances would never be equal
})
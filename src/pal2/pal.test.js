// const { checkEven, cutArray } = require('./pal');

const { palindrome } = require('./pal');

// const arr1 = [1, 2, 3, 'z', 'a', 'i'];
// const arr2 = arr1;
// const arr3 = ['i', 'a', 'z', 3, 2, 1]

// test('checkEven - if the array have even number of letters', () => {
//     expect(checkEven(arr1)).toBe(true);
//     expect(checkEven(arr1.pop())).toBe(false);
//     console.log(arr1,checkEven(arr1));
// })

// test ('cutArrat - if two parts of array are normal',()=>{
// expect(cutArray(arr1)).toBe([[1,2,3],['z', 'a', 'i']])
// })


test('palindrome test checks palindrome expects false', () => {
    expect(palindrome('abca')).toBe(false);
})


test('palindrome test checks palindrome expects true', () => {
    expect(palindrome('zaiiaz')).toBe(true);
})

test('pal test checks pal with not even number of chars',()=>{
    expect(palindrome('zaiziaz')).toBe(true);
})
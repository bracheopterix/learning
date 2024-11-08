const sum = require('./sum');  //inserting a file from our folder that has exporting line as a sum

test('adds 1+2 equals 3', () =>{   // here is a name for me personally to know what is this test actually doing with what
    expect(sum (1,2)).toBe(3);     // there is a exact data we are testin the function on. we are expecting return of a function sum of 1 and 2 to be 3
})

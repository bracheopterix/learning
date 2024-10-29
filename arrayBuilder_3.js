function arrayBuilder(a, b, c) {
    var arraySum = [];
    arraySum.push(a);
    arraySum.push(b);
    arraySum.push(c);
    return arraySum;
}
var finalArray = arrayBuilder(1, 'two', 'car');
console.log(finalArray);

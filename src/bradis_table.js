var Pi = Math.PI;

// calculates radians from degrees
function radissimise(n) {
    var rad = n * Pi / 180;
    return rad;
}


// calculating number in power (stepen')
function exp(n, pow) {
    var expResult = 1;

    for (var i = 1; i <= pow; i++) {
        expResult = expResult * n;
    }
    return expResult;
}

// calculating factorial
function fac(n) {
    var factorial = 1;
    for (var k = 1; k <= n; k++) {
        factorial = factorial * k;
    }
    return factorial;
}

////

// calculating sin
function sin(z) {
    var sinResult = 0;
    for (var k = 0; k < 10; k++) {
        var x_k = exp(-1, k) * (exp(z, 2 * k + 1)) / fac(2 * k + 1);
        sinResult += x_k;
    }
    return sinResult;
}

// calculating cos
function cos(z) {
    var cosResult = 0;
    for (var k = 0; k < 10; k++) {
        var x_k = exp(-1, k) * exp(z, 2 * k) / fac(2 * k);
        cosResult += x_k;
    }
    return cosResult;
}

//calculating tan
function tan(z) {
    var tanResult = sin(z) / cos(z);
    return tanResult;
}

//calculating cotan
function cotan(z) {   /// sin/cos = a   cos/sin =1/a
    var cosResult = 1 / tan(z);
    return cosResult;
}


////
var n = 91;             //this is our max degree. We are looking from 0 to 90 degrees.

function sinuses() {                   // data calculation
    var sinArray = [];
    for (var i = 0; i < n; i++) {      // goes by every angle from the array
        var radCalc = radissimise(i);  // radissimise every angle
        var sinCalc = sin(radCalc);    // calculates sin from every angle
        // console.log(i, sinCalc);
        sinArray.push(sinCalc);
    }
    return sinArray
}

function cosinuses() {                   // data calculation
    var cosArray = [];
    for (var i = 0; i < n; i++) {      // goes by every angle from the array
        var radCalc = radissimise(i);  // radissimise every angle
        var cosCalc = cos(radCalc);    // calculates sin from every angle
        cosArray.push(cosCalc);
    }
    return cosArray
}

function tangenses() {
    var tanArray = [];
    for (var i = 0; i < n; i++) {
        var tanCalc = radissimise(i);
        tanArray.push(tan(tanCalc));
    }
    return tanArray;
}

function cotangenses() {
    var cotArray = [];
    for (var i = 0; i < n; i++) {
        var cotCalc = radissimise(i);
        cotArray.push(cotan(cotCalc));
    }
    return cotArray;
}

var sinArrayFinal = sinuses(); //data visual output
var cosArrayFinal = cosinuses(); //data visual output
var tanArrayFinal = tangenses();
var cotArrayFinal = cotangenses();

console.log('Bradis table');

for (var i = 0; i < n; i++) {
    console.log(`sin(${i}) = ${sinArrayFinal[i].toFixed(10)}\tcos(${i}) = ${cosArrayFinal[i].toFixed(10)}\ttan(${i}) = ${tanArrayFinal[i].toFixed(10)}\tcot(${i}) = ${cotArrayFinal[i].toFixed(10)}`);     // .toFixed(10) выводит первые 10 знаков.  \t = tab
}
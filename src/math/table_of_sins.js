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

// calculating sin
function sin(z) {
    var sinResult = 0;
    for (var k = 0; k < 10; k++) {
        var x_k = exp(-1, k) * (exp(z, 2 * k + 1)) / fac(2 * k + 1);
        sinResult += x_k;
    }
    return sinResult;
}

var n = 91;             //this is our max degree. We are looking from 0 to 90 degrees.

function sinuses (){                   // data calculation
    var sinArray = [];
    for (var i = 0; i < n; i++) {      // goes by every angle from the array
        var radCalc = radissimise(i);  // radissimise every angle
        var sinCalc = sin(radCalc);    // calculates sin from every angle
        // console.log(i, sinCalc);
        sinArray.push(sinCalc);
    }
    return sinArray
}

var sinArrayFinal=sinuses(); //data visual output
console.log('Sin list:');
for (var i=0;i<n;i++){
// console.log('sin (',i,') =',sinArrayFinal[i]);       //this is not so pretty
    console.log(`sin(${i}) = ${sinArrayFinal[i]}`);     // use ` instead of ', and with ${something} something is conveerted to string so everything is pretty.
}
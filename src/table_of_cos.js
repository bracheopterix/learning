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

// calculating cos
function cos(z) {
    var cosResult = 0;
    for(var k=0;k<10;k++) {
        var x_k = exp(-1,k)*exp(z,2*k)/fac(2*k);
        cosResult += x_k;
    }
    return cosResult;
}


///
var n = 91;             //this is our max degree. We are looking from 0 to 90 degrees.

function cosinuses (){                   // data calculation
    var cosArray = [];
    for (var i = 0; i < n; i++) {      // goes by every angle from the array
        var radCalc = radissimise(i);  // radissimise every angle
        var cosCalc = cos(radCalc);    // calculates sin from every angle
        cosArray.push(cosCalc);
    }
    return cosArray
}

var cosArrayFinal=cosinuses(); //data visual output
console.log('Cos list:');
for (var i=0;i<n;i++){
    console.log(`cos(${i}) = ${cosArrayFinal[i].toFixed(10)}`);     // .toFixed(10) выводит первые 10 знаков.
}
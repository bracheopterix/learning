
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
function cos(z) {
    var sinResult = 0;
    for (var k = 0; k < 10; k++) {
        var x_k = exp(-1, k) * (exp(z, 2 * k + 1))/fac(2*k+1);
        sinResult += x_k;
    }
    return sinResult;
}

console.log(cos(1.57));
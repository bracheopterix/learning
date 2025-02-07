function a() {
    console.log("a");
    return 1;
}

function b() {
    console.log("b");
    return 2;
}

function f(a, b) {
    console.log("f");
    return a + b;
}

function g(f, b) {
    console.log(f, b);
}

g(f(a(), b()), b())

//the output would be like this, cause while outputting the COMP would first calculate (that means execution of insides of functions 
//with console.logs from here), basic operator would be calculated first and then ерушк super operator f. f and b are on the same level 
//so they would be calculated from left to right. And then we given the results.

//вызов функции вычисляется слева-направо, сначала вычисляются аргументы функции, а затем она вызывается. здесь правило работает рекурсивною

//a
//b
//f
//b
//3,2



var compose = function(functions) {
    return functions.reduce((f,g) => {
        console.log(f, g);
        return x => f(g(x));
    }, x => x)
};

let fff = compose([x => x, x => x]);
console.log(fff);
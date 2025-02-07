// 1 key should be a string
// 2 key should fully save and represent input values to check if they are unique

function distance(p1, p2) {
    let dx = p2.x - p1.x;
    let dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function factorial(n) {
    var factorial = 1;

    for (var k = 1; k <= n; k++) {

        factorial = factorial * k;

    }
    return factorial;
}

function memoize(fn) {
    const usedP = {};
    
    return function (...args) {
        const key = collapseToKey(...args);
        if (usedP[key] !== undefined) {
            console.log("memoized data");
            return usedP[key];
        }

        const answer = count(fn, ...args);
        usedP[key] = answer;
        console.log("new data");
        return answer;
    }
}

function count(fn, ...args) {
    const num = fn(...args);
    return num;
}

function collapseToKey(...args) {
    return JSON.stringify(args); // in string
}

// ----------- infra - do not touch!

// ["call","call","getCallCount","call","getCallCount"]

function test(fn, args1, args2) {
    let count = 0;
    let testFn = memoize((...args) => {
        console.log(...args);
        count++;
        return fn(...args);
    });

    testFn(...args1);
    testFn(...args1);
    if (count !== 1) {
        throw new Error("Count A")
    }
    testFn(...args1);
    if (count !== 1) {
        throw new Error("Count B")
    }

    // now test with argss2

    testFn(...args2);
    if (count !== 2) {
        throw new Error("Count C")        
    }
    testFn(...args2);
    testFn(...args2);
    if (count !== 2) {
        throw new Error("Count D")
    }
}


test(distance, [{"x":5,"y":10},{"x":5,"y":5}], [{"x":100,"y":10},{"x":100,"y":5}]);

// test(factorial, [5], [10])

[]
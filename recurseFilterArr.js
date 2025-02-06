

function compactObject(obj) {
    for (let el in obj) {
        if (Array.isArray(obj[el])) {         // is object's el an Arr?
            obj[el] = deeper(obj[el]);        // go to infinite filter
        }
        else {                                // no?
            if (!obj[el]) {                   // falsey?
                delete obj[el];               // deleting you!
            };
        };
    };

    if (Array.isArray(obj)) {                // obj - Array?
        obj = obj.filter(Boolean);           // filter you!
    }
    return obj;
};

function deeper(array) {                     // I am a filter recursion! I eat arrays!

    for (let el of array) {                  // I take every element of arr 
        if (Array.isArray(el)) {
            el = el.filter(Boolean);
            el = deeper(el);                 // array? - go to the filter again, return filtered
        }
        else {
        };
    };
    return array.filter(Boolean);            // returns filtered array
}


// TEST // 

const obj = [0, 1, 0, [[[null, 0], false], false], false];
console.log(JSON.stringify(compactObject(obj)));
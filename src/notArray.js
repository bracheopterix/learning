// function filter (arr, fn) {
//     return arr.filter((element)=>element>3);
// };

function* filter(arr, fn) {
    for (let element of arr) {
        if (fn(element)) {
            yield element;
        }
    }
};

// const gen = filter();

for (let x of filter([1, 2, 3, 4, 5, 6], x => x > 3)) {
    console.log(x);
}





// const filteredArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const newEl = fn(arr[i], i);
//         if (!!newEl) {
//             filteredArray.push(arr[i]);
//         };
//     }
//     return filteredArray;
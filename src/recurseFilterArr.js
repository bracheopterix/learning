

// function compactObject(obj) {
//     for (let el in obj) {
//         if (Array.isArray(obj[el])) {         // is object's el an Arr?
//             obj[el] = deeper(obj[el]);        // go to infinite filter
//         }
//         else {                                // no?
//             if (!obj[el]) {                   // falsey?
//                 delete obj[el];               // deleting you!
//             };
//         };
//     };

//     if (Array.isArray(obj)) {                // obj - Array?
//         obj = obj.filter(Boolean);           // filter you!
//     }
//     return obj;
// };

// function deeper(array) {                     // I am a filter recursion! I eat arrays!

//     for (let el of array) {                  // I take every element of arr 
//         if (Array.isArray(el)) {
//             el = el.filter(Boolean);
//             el = deeper(el);                 // array? - go to the filter again, return filtered
//         }
//         else {
            
//         };
//     };
//     return array.filter(Boolean);            // returns filtered array
// }

// function calling(obj){
//     const result = deeper(obj);
//     return result;
// }

// function deeper2(obj){
//     for (let key in obj){ 
//         console.log(typeof obj[key]);
//         if(typeof obj[key]==='object'||Array.isArray(obj[key])){
//             obj = deeper(obj[key]);
//         }
//         if(!obj[key]){
//                 delete obj[key];
//             }
//     }
//     if(Array.isArray(obj)){
//         obj = obj.filter(Boolean);
//     }
//     return obj
// }

// TEST // 







// const obj = [0, 1, 0, [[[null, 0], false], false], false];
// console.log(JSON.stringify(compactObject(obj)));
// console.log(calling(obj));

// binary tree


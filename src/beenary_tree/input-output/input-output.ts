//npx ts-node input-output.ts            

type T = null | boolean | number;

let data:T = false;

const type = typeof data;
let result:T = false;
switch (type) {
    case 'object':
        result = -1;
        break;
    case 'boolean':
        if(data){
            result = -5;
        }
        else{
            result = -10;
        }
        break;
    case 'number':
        result = Math



        break;
}
console.log(result);

// function input (data:T):T {
//     const type = typeof data;
//     let result:T = false;
//     switch (type) {
//         case 'object':
//             result = -1;
//             break;
//         case 'boolean':
//             if(type){
//                 result = -5;
//             }
//             else{
//                 result = -10;
//             }
//             break;
//         case 'number':
//             result = -100;
//             break;
//     }
//     return result;
// }

// console.log(input(3));
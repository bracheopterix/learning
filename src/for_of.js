//Destructing data and using it in loops

// ! objects are not iterable 
// if we use this on objects, it would give an error

// const car = { 
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
//} 



// arrays ARE iterable so we would get output
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}


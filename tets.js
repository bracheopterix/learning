

arr = [{"x":5,"y":10},{"x":5,"y":5}];
const usedP = {};
usedP[arr]=0;

console.log(usedP);
const keys = Object.keys(usedP);
console.log("type of usedP's key [0] = ",typeof keys[0]);
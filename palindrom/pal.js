/* 
we have a string like 'sldjdslfjhdaflsdfkhdsfhjdsfhds'
we need to check if first half equals the last half in backwards order 
so we take arraylength/2 - its ok if it not even, the last char would be just an axis of symmetry

so we break an array on two halves (minus the axis-char) 
we reverse the second array
we feed two array to FOR and iterate by index
 */



function reverseArr(array) {
const result = reverse(array);
return result;
}
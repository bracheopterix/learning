// watch how to get random number from 1 to 10


function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())


/// classes and super.varians of methods
class Electronics {
    heating(){ 
        console.log ('heat nearby objects')
    }
}
class Videocard extends Electronics {
    heating() {
    super.heating
    console.log('cooling other side')
    }
}
class Stove extends Electronics {
    heating() {
        console.log('warm your food')
    }
}
var Nvidia = new Videocard();
var Tanur = new Stove();
Nvidia.heating();
Tanur.heating();
///

/// toggle booleans
var boolean1 = true;
boolean1 = !boolean1;
console.log(boolean1);

//randomly chooses one or another option to write in
var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }


// output random parameter from the object in the example higher
console.log(drone[dynamicKey]);


//spread operator ...
const array = ['one','two','kettle'];
console.log(array[0],array[1],array[2]);
console.log(...array);


//using de-construction and rest to manipulate an array values through it`s first value

function addToTaxPrices (taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate*item);
    }

    let shoppingCart = addToTaxPrices(1.1, 46, 89, 35, 79)
    console.log(shoppingCart);
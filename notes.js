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
//we making a class to create country flags and raise them

function Flag(country) {
    this.country = country;                                         // the country input to () replaces the name of parameter in Flag template
    this.raise = function () {                                      // we can add a functions too     
        return 'the flag of ' + this.country + ' is raised';        // and acces object's parameters using this.
    }
}

let russianFlag = new Flag('Russia');                               //creating a new object from a template 
let israelFlag = new Flag('Israel');                                
console.log(russianFlag.country,'/', israelFlag.raise());           // outputting first object's parameter country (undefined cause we didn't define it) 
                                                                    //and second parameter's function raise


//// creating our first tree of Tree class.

class Tree {
constructor(type, age){
this.type = type;
this.age = age;
}
}

var tree1 = new Tree('birch',15);
console.log(tree1);
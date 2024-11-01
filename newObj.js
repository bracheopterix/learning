//we 

function Flag(country) {
    this.country = country;                                         // the country input to () replaces the name of parameter in Flag template
    this.raise = function () {                                      // we can add a functions too
        console.log('the flag of', this.country, 'is raised');      // and acces object's parameters using this.
    }
}

let russianFlag = new Flag('Russia');                               //creating a new object from a template 
let israelFlag = new Flag('Israel');                                
console.log(russianFlag.country, israelFlag.raise());               // outputting first object's parameter country (undefined cause we didn't define it) and second parameter's function raise

// Questions:
// Why russianFlag.country is undefined
// Why israelFlag.raise() goes before russian output, while being wroote second
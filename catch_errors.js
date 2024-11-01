function addTwoNums (a,b) {
    try {                                                                       // here we are saying in what code part we want to prevent mistakes.
        if(typeof(a)!='number'){                                                // we do a check for both variables if they are not a number
            throw new ReferenceError('the first argument is not a number');     // if not - try block would throw a ERROR to the catch block
        }   
        else if (typeof(b)!='number'){
            throw new ReferenceError('the second argument is not a number');
        }
        else{                                                                   // and if both are numers - we are on track
      console.log(a+b);
      }
    } catch(err){
      console.log(err)
    }
  }
  
  addTwoNums ('d',6);                                                            // this is what we wanted in the end
  

  // second thing

  function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;               // checking if 'word' is string and long enough
    var condition2 = typeof(match) == 'string' && match.length==1;               // checking if 'match' to find is really just one letter
    if (condition1==true && condition2==true){                                   //both condition should be true to the following code to be executed
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
    }
    else{
        console.log('please pass correct arguments to the function')
    }
}
letterFinder('cat','c');

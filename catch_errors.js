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
  
  addTwoNums ('d',6);
  
var counter = 3;

function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;          // stops function on this line
    example();                          // recall example function one more time
}
example();

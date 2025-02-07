for (let i = 1; i < 101; i++) {
    const result3 = i % 3;
    const result5 = i % 5;

    if (result3 === 0 && result5 === 0) {
        console.log("fizz and buzz");
    }
    else if (result3 === 0) {
        console.log("fizz");
    }
    else if (result5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
};


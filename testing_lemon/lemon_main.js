// In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.

// You will need to write a function declaration which will be able to do two things:

//     If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

//     If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

// The expected outcome is that all the dishes' names and prices will be shown in the console output.

// The text below shows the output that your code should produce:

// Prices with 20% tax:
// Dish: Italian pasta Price (incl.tax): $ 11.46
// Dish: Rice with veggies Price (incl.tax): $ 10.38
// Dish: Chicken with potatoes Price (incl.tax): $ 18.66
// Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

// Prices without tax:
// Dish: Italian pasta Price (incl.tax): $ 9.55
// Dish: Rice with veggies Price (incl.tax): $ 8.65
// Dish: Chicken with potatoes Price (incl.tax): $ 15.55
// Dish: Vegetarian Pizza Price (incl.tax): $ 6.45



//
// function lemonmon(boo) {
//     switch (boo) {
//         case true:
//             console.log('Prices with 20% tax:');
//             for (let i = 0; i < menu.length; i++) {
//                 let dish = menu[i];
//                 dish[1] = dish[1] +(dish[1]* 0.2);
//                 console.log('Dish: ', dish[0], 'Price: (incl.tax): $', dish[1]);
//                 return 0;
//             }
//             break;
//         //
//         case false:
//             console.log('Prices without tax:');
//             for (let i = 0; i < menu.length; i++) {
//                 let dish = menu[i];
//                 console.log('Dish: ',dish[0], 'Price (incl.tax): $', dish[1]);
//                 return 1;
//             }
//             break;
//     }
// }
// module.exports = lemonmon;


function calcTaxes(price){
    // const newPrice=price+(price*0.2);
    let newPrice = price+price;
    console.log(newPrice);
    return newPrice;
}
module.exports = calcTaxes;

calcTaxes(0);
// let menu = [['Italian pasta', 9.55],['Rice with veggies',8.65],['Chicken with potatoes',15.55],['Vegetarian Pizza',6.45]];
// lemonmon(false);
// //


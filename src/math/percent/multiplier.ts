////npx ts-node multiplier.ts  


// считать сколько со сложными процентами (compound percents)
// есть сумма и множитель (1.2 - для 20%)
// есть три аргумента - изначальная сумма, какой множитель и сколько периодов (циклов торговли)


// recursion 
function percent2(value:number, multiplier:number, cycle:number):number {
    if (cycle !== 0) {
        value = value * multiplier;
        cycle -= 1;
        return percent2(value, multiplier, cycle);
    }
    else {
        return value;
    }
}


// simple formula
function percent(value:number, multiplier:number, cycle:number):number {
    return value * (multiplier ** cycle);
}


// print multiple results
// for (const value of [1, 100, 200]) {
//     for (const multiplier of [1, 1.1, 1.2]) {
//         for (const cycle of [0,1,2,3]) {
//             console.log(`percent(${value}, ${multiplier}, ${cycle}) = `, percent(value, multiplier, cycle));
//         }
//     }
// }

console.log(percent(40, 1.2, 13));



// fr = value * (multuplyer^cycles)



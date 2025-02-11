//npx ts-node input-output.ts            

type Typ = null | boolean | number | Typ[] | { [key: string]: Typ };  /// !! arrays

function foo(data: Typ,): Typ {
    switch (typeof data) {
        case 'object':
            if (data === null) {
                return -1;
            }
            else {
                if (Array.isArray(data)) {
                    console.log('arr');
                    const result: Typ[] = [];
                    for (let el of data) {
                        result.push(foo(el));
                    }
                    console.log('arr', result);
                    return result;
                }
                else {
                    console.log('obj');
                    const obj: { [key: string]: Typ } = {};
                    for (let key in data) {
                        let newKey: string = key.toString();
                        obj[newKey] = foo(data[key]);
                    }
                    return obj;
                }

            }
        case 'boolean':
            if (data) {
                return -5;
            }
            else {
                return -10;
            }
            break;
        case 'number':
            if (data == 0) {
                return 1;
            }
            else {
                const el = foo(data - 1);
                if (typeof el === 'number') {
                    return data * el;
                }
                else {
                    throw new Error('error in returning number in number case');
                }
            }
        default:
            return false;
    }
}
//



console.log(foo({"a":1,"b": 2,"6": 3}));

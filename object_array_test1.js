var arrProps = ['name', 'age', 'pet'];

var user = {
    name: 'John',
    age: 35,
    pet: 'Tooki',
}
var i='';
for (var i = 0; i < arrProps.length; i++) {
    console.log(user[arrProps[i]]);
    i=i+user[arrProps[i]];
    if(i<arrProps.length-1){
        i=i+', ';
    };
}
console.log(user);
console.log(i);


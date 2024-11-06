function getInputElement() {
    return document.getElementById('input-text');
}

function onClick() {
    const inputField = getInputElement();
    inputField.value = ' ';


}


function letItGo(firstElement, ...rest) {
    console.log(firstElement);
    return rest;
}

// readonly check
// function opacityLoop (parent){
//     const allChildren = parent.childNodes;
//     for(let i=0; i<allChildren.length;i++){
//         allChildren[i].opacity = i+1*10;
//         return allChildren;
//     }
//}


function textEnter() {
    // alert('ujuju')
    let inputField = getInputElement();
    let text = "You shoud have written something..."
    text = inputField.value;
    const historyElement = document.getElementById('history-list');
    if (historyElement.children.length > 7) {
        historyElement.removeChild(historyElement.firstElementChild);
    }
    else { }

    // opacityLoop(historyElement);
    
    

    const newP = document.createElement('p');
    newP.innerHTML = text;
    newP.id = 'text-line';
    historyElement.append(newP);
    inputField.value = ' ';
    return false;

}


/*

element.style.opacity = element.style.opacity-10
for (let i=0;i<8;i=+){
console.log(historyElement[i]);
}


*/

/*


The easiest way to erase a first item from an array - is using shift(). If you have an array, the shift function shifts everything to the left.

var arr = [1, 2, 3, 4]; 
var theRemovedElement = arr.shift(); // theRemovedElement == 1
console.log(arr); // [2, 3, 4]

*/

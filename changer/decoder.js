
function getInputWindow() {
    return document.getElementById('input-window');
}


function getOutputWindow() {
    return document.getElementById('output-window');
}


function onClick() {
    const inputWindow = getInputWindow()
    inputWindow.value = ' ';
}




function change() {
    let inputWindow = getInputWindow()
    let outputWindow = getOutputWindow()
    let freeChair = inputWindow.id;
    inputWindow.id = outputWindow.id;
    outputWindow.id = freeChair;
}


function textEnter() {
    const inputWindow = getInputWindow()
    const outputWindow = getOutputWindow()
    let text = "You shoud have written something...";
    text = inputWindow.value;
    // const parse = JSON.parse(text);
    // outputWindow.value = parse;
}
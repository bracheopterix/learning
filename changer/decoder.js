
function getInputWindow() {
    return document.getElementById('input-window');
}

function getOutputWindow() {
    return document.getElementById('output-window');
}


function onClick() {
    const inputWindow = getInputWindow()
    if (inputWindow.value == 'Enter text here'){
    inputWindow.value = ' ';
    }
    else if (inputWindow.value == ''|| inputWindow.value == ' ' ) {
        inputWindow.value = 'Enter text here';
        
    } 
    else{};
}


function textEnter() {
    const inputWindow = getInputWindow()
    const outputWindow = getOutputWindow()
    let text = "You shoud have written something...";
    text = inputWindow.value;
    let jsonString = JSON.stringify(text);
    outputWindow.value = jsonString;
    let avatar = document.getElementById('avatar');
    avatar.background-image == 'url("./avatars/ok.png")';

}
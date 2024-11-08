function getInputWindow() {
    return document.getElementById('input-window');
}

function getOutputWindow() {
    return document.getElementById('output-window');
}

function onClick() {
    const inputWindow = getInputWindow();
    if (inputWindow.value == 'Enter text here') {
        inputWindow.value = ' ';
    }
    else if (inputWindow.value == '' || inputWindow.value == ' ') {
        inputWindow.value = 'Enter text here';
    }
    else { };
    avatar.src = "./avatars/start.png"
}

function textEnter(event) {
    const inputWindow = getInputWindow()
    const outputWindow = getOutputWindow()
    let text = "text";
    text = inputWindow.value;
    let newText = JSON.stringify(text);
    outputWindow.innerText = newText;
    let avatar = document.getElementById('avatar');
    avatar.src = "./avatars/ok.png"
    event.preventDefault();
}
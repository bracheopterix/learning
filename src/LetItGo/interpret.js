// doing html
const html = new HTMLElement();
html.head = new HTMLHeadElement();
html.head.link = new HTMLLinkElement();
html.head.link.rel = 'stylesheet';
html.head.link.href = 'violet.css';

html.head.script = new HTMLScriptElement();
html.head.script.type = 'text/javascript';
html.head.script.src = 'history.js';

// const inputField = document.getElementById('input-text') -> null
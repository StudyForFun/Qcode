(function () {
    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            insertStyle();
            hello();
        }
    })

})();


function insertStyle() {
    var styleEl = document.createElement('style');
    var firstNode = document.body.firstElementChild;
    document.body.insertBefore(styleEl, firstNode);
    styleEl.innerHTML = getBaseCss();
}

function getBaseCss() {
    return '.hello{color:#333}';
}


function hello() {
    var parentBot = document.createElement('div');
    parentBot.id = "inject-Bot";
    parentBot.innerHTML = indexTpl();
    document.body.appendChild(parentBot);
}

function indexTpl() {
    return '<div id="hello" class="hello">Hello</div>';
}
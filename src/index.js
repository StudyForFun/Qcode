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
    return '__inline(../dest/index.min.css)';
}


function hello() {
    console.log('hello');
    var str = indexTpl();
    document.body.appendChild(str);
}

function indexTpl() {
    return '__inline(../dest/index.min.tpl)';
}
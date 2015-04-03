(function () {
    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            insertStyle();
            doInject();
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


function doInject() {
    getAdress();
    //console.log('hello');
    //var str = indexTpl();
    //document.body.appendChild(str);
}

function indexTpl() {
    return '<div id="hello" class="hello">Hello</div>';
}

function getAdress(){
    var aTags = document.getElementsByTagName('a');
    console.log(aTags);
}
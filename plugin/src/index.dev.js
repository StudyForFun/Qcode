(function () {
    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            insertStyle();
            console.log('I AM go');
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
}

function indexTpl() {
    return '<div id="hello" class="hello">Hello</div>';
}

function getAdress(){
    var aTags = document.getElementsByTagName('a');
    console.log(aTags);
}
/*
function InsertFunc(tabId, changeInfo, tab){
	//让用户界面执行代码。
	// chrome.tabs.executeScript(tabId, {
	// 	code: "alert('看看这是那个页面弹出的！');"
	// });
	//让用户界面执行一个文件的JS。
	console.log(changeInfo.status);
	if (changeInfo.status == "complete") {
      	*/
/* checking & injecting stuff *//*

		chrome.tabs.executeScript(tabId, {
		    file: "./src/inject.dev.js"
		});
	}


}
 //注册事件的响应函数
chrome.tabs.onUpdated.addListener(InsertFunc);*/

/**
 * 注册标签页更新时的事件
 * 这里调用了initialize()事件，把func.js注入当前标签页中
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    initialize(tabId);
});

/**
 * 注册切换标签页时的事件
 * 这里调用了initialize()事件，把func.js注入当前标签页中
 */
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
    initialize(tabId);
});

/**
 * 初始化方法 ，注入func.js事件
 * @param {Object} tabId
 */
function initialize(tabId){
    chrome.tabs.executeScript(tabId, {file: "src/index.dev.js", allFrames: true});
    /*chrome.tabs.executeScript(tabId, {file: "jquery-2.0.2.js", allFrames: true});*/
}

/**
 * 启动一个chrome.extension.onRequest事件监听器用来处理消息
 */
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.executeScript(null, {code: "switchLight("+ request +");", allFrames: true});
    });
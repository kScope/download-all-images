chrome.browserAction.onClicked.addListener(function(tab) {
    /*
    var images = document.getElementsByTagName('img');

    chrome.browserAction.setBadgeBackgroundColor({
        color: '#ff0000'
    });

    chrome.browserAction.setBadgeText({
        text: 'Hey'
    });

	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "http://dev.opera.com"
		});
    });
    */

    chrome.tabs.executeScript(tab.id,{file:"injected-script.js"});
});
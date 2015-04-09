function getPageDetails(callback) {
    chrome.tabs.executeScript(null, { file: 'finder.js' });

    chrome.runtime.onMessage.addListener(function(message)  {
        callback(message);
    });
}

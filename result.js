function showResult(pageDetails) {
    document.getElementById('full_path').innerHTML = pageDetails.full_path;
}

window.addEventListener('load', function(evt) {
    chrome.runtime.getBackgroundPage(function(eventPage) {
        eventPage.getPageDetails(showResult);
    });
});

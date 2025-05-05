chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({
        url: chrome.runtime.getURL("setup/setup.html")
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == "privlink") {
        chrome.tabs.create({
            url: message.url
        });
    }
});
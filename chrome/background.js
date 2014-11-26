// Copyright (c) 2014 Romain MATON. All rights reserved.
chrome.tabs.onUpdated.addListener(function (tab_id, data, tab) {
    if (tab.url.indexOf("http://www.arretsurimages.net/articles/") != -1) {
        chrome.pageAction.show(tab_id);
    }
});
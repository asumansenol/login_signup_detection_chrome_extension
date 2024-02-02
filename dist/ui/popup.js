let currentTab;

function updatePageType(){
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    currentTab = tabs[0];
    const tabId = currentTab.id;
    console.log("currentTab", tabId);
    const tabIdStr = tabId.toString();
    chrome.storage.local.get([tabIdStr], function (results) {
      let pageTypeText = "";
      let result = results[tabIdStr];
      if (result.isLogin) {
        pageTypeText = "Detected Login page.";
        document.getElementById("ml_result").innerHTML = pageTypeText;
      } else if (result.isSignup) {
        pageTypeText = "Detected Signup page.";
        document.getElementById("ml_result").innerHTML = pageTypeText;
      } else {
        pageTypeText = "No data found for this page.";
        document.getElementById("ml_result").innerHTML = pageTypeText;
      }
    });
  });
}

updatePageType();


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.messageType === "page_storage_cleared") {
    updatePageType();
  }
});


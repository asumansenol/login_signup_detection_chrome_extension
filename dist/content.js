function sendPageSignals() {
  const pageSignals = getSignalsAndConvertToBinary();
  chrome.runtime.sendMessage(
    { messageType: "page_signals", pageSignals },
    function (response) {
      console.log("Sent page signals.");
    }
  );
}

// On page load, send the page signals to the background script
window.addEventListener("load", function () {
  setTimeout(sendPageSignals, 2000);
});

// On single page applications, the page load event is not triggered, so we need to listen to the message from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'pageUpdated') {
    // Send the extracted information to the background script
    setTimeout(sendPageSignals, 2000);
    }
  });






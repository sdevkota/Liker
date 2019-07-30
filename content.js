chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.arg1 && request.arg2)
        var element = document.getElementsByClassName(request.arg1 );
        for (i = 0; i < element.length; i++) {
            if (!element[i].classList.contains(request.arg2)) {
                document.getElementsByClassName(request.arg1)[i].click();
                sendResponse({message: "success"});
            }
        }
});



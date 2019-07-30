document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('btn');
    // onClick's logic below:
    link.onclick = function () {
        var selectorClass = document.getElementById('clickClass').value;
        var likedClass = document.getElementById('likedClass').value;
        if (selectorClass && likedClass) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { arg1:selectorClass,arg2:likedClass }, function (response) {
                   if(response.message=="success");
                });
            });
        }
        else {
            alert("You must provide before select and after select CSS class selectors.");

        }


    }
});




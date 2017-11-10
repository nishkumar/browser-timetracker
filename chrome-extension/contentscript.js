function getDistractingList() {
    return [
        'https://www.facebook.com/'
    ];
}

chrome.runtime.onMessage.addListener(
    function (msgReceived, sender, sendResponse) {
        console.log("content.script received: ", msgReceived);
        if (getDistractingList().indexOf(msgReceived.currentTab.url) > -1) {
            console.log("Now redirecting: ", msgReceived.currentTab.url);
            chrome.runtime.sendMessage({action: "redirect", tabToRedirect: msgReceived.currentTab});
        }
    });

function dimPage() {
    var dimmerId = "beetrackerDimmer";

    // first remove any existing dimmer
    var elemDiv = document.getElementById(dimmerId);
    if (elemDiv) {
        console.log("removing dimmer for elemDiv: ", elemDiv);
        elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, 0);';
        document.body.appendChild(elemDiv);
    }

    // apply dimmer
    elemDiv = document.createElement('div');
    elemDiv.setAttribute("id", dimmerId);
    document.body.appendChild(elemDiv);

    setTimeout(function () {
        elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .1);';
        document.body.appendChild(elemDiv);
    }, 5000);

    // setTimeout(function () {
    //     elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .3);';
    //     document.body.appendChild(elemDiv);
    // }, 7000);

    // setTimeout(function () {
    //     elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .5);';
    //     document.body.appendChild(elemDiv);
    // }, 9000);
    //
    // setTimeout(function () {
    //     elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .7);';
    //     document.body.appendChild(elemDiv);
    // }, 10000);
    //
    // setTimeout(function () {
    //     elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;top:0;z-index:999;background:rgba(255, 255, 255, .9);';
    //     document.body.appendChild(elemDiv);
    // }, 12000);
}

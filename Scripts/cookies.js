var allStates = ['firefox', 'chrome', 'opera'];
var imgs = {0: 'firefox.png', 1: 'chrome.svg', 2: 'opera.png'};
var states = {0: 'firefox', 1: 'chrome', 2: 'opera'};
var current = 99999999901;

$(document).on("click","#imgLeft",function(e){
    current--;
    displayText();
});


$(document).on("click","#imgRight",function(e){
    current++;
    displayText();
});

function displayText() {
    var idx = getIdx();

    var toTake = states[idx];

    var img1 = imgs[getIdx(-1)];
    var img2 = imgs[idx];
    var img3 = imgs[getIdx(+1)];

    $("#img1").attr("src",`./Images/SVG/${img1}`);
    $("#img2").attr("src",`./Images/SVG/${img2}`);
    $("#img3").attr("src",`./Images/SVG/${img3}`);

    $(`#txt${toTake}`).show();

    allStates.filter(s => s != toTake)
        .forEach((s) => {
            $(`#txt${s}`).hide();
        });
}

function getIdx(nbr = 0) {
 return (current + nbr) % 3;
}
var allStates = ['brave', 'duckduckgo', 'firefox'];
var stateDescr = {0: 'Brave', 1: 'DuckDuckGo', 2: 'Firefox'};
var states = {0: 'brave', 1: 'duckduckgo', 2: 'firefox'};
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

    var img1 = states[getIdx(-1)];
    var img2 = states[idx];
    var img3 = states[getIdx(+1)];

    $("#img1").attr("src",`./Images/SVG/${img1}.png`);
    $("#img2").attr("src",`./Images/SVG/${img2}.png`);
    $("#img3").attr("src",`./Images/SVG/${img3}.png`);

    $("#downloadTxt").html(stateDescr[idx]);
    $("#descrField").html(stateDescr[idx]);

    $(`#txt${toTake}`).show();

    allStates.filter(s => s != toTake)
        .forEach((s) => {
            $(`#txt${s}`).hide();
        });

    $(`#arts${toTake}`).show();

    allStates.filter(s => s != toTake)
        .forEach((s) => {
            $(`#arts${s}`).hide();
        });
}

function getIdx(nbr = 0) {
 return (current + nbr) % 3;
}
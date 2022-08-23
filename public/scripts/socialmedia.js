var allStates = ['twitter', 'facebook', 'instagram'];
var states = {0: 'twitter', 1: 'facebook', 2: 'instagram'};
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

    $("#img1").attr("src",`./images/SVG/new/Icon awesome-${img1}.svg`);
    $("#img2").attr("src",`./images/SVG/new/Icon awesome-${img2}.svg`);
    $("#img3").attr("src",`./images/SVG/new/Icon awesome-${img3}.svg`);

    $(`#txt${toTake}`).show();

    allStates.filter(s => s != toTake)
        .forEach((s) => {
            $(`#txt${s}`).hide();
        });
}

function getIdx(nbr = 0) {
 return (current + nbr) % 3;
}
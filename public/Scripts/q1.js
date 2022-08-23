var colorActive = "#012030";
var colorInActive = "white";
var colorTxtActive = "white";
var colorTxtInActive = "black";
var btn = '';

$(document).on("click","#1",function(e){
    updateToActive($(e.currentTarget));
    updateToInActive($("#2"));
    btn = '1';
});

$(document).on("click","#2",function(e){
    updateToActive($(e.currentTarget));
    updateToInActive($("#1"));
    btn = '2';
});

$(document).on("click","#3",function(e){
    if (btn == '1') {
        window.location.href = "./q1yes";
    }

    if (btn == '2') {
        window.location.href = "./q1no";
    }
});

function updateToActive(el) {
    el.css("background-color", colorActive);
    $(el.find("span")[0]).css("color", colorTxtActive);
    activateBtn()
}


function updateToInActive(el) {
    el.css("background-color", colorInActive);
    $(el.find("span")[0]).css("color", colorTxtInActive);
    activateBtn()
}

function activateBtn() {
    $("#3").removeClass( "opacity-40" );
}
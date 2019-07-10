
document.getElementById("zom").innerHTML="Organic Food Is <br> Good For Health";

function prepareEventHandlers(){
    var button = document.getElementById("bbt");
    button.onclick = function(){
        alert("you clicked in this button");

    }
}

window.onload = function(){

    prepareEventHandlers();
}

/*var secondRemaining;
var intervalHandle;

function  countDown(){
    document.getElementById("tt");
}

var time = Math.floor(secondRemaining / 60);
var sec = secondRemaining - (min * 60);

for( time = 0; time < 26; time++){
    sec += time;
} */







// console.log(localStorage.getItem("appName"));



function go_for_ascii() {
    $("#appDiv").append("<div><button id='play_button'>Playground</button><button id='learn_button'>Understand</button><br><br></div>");
    $("#appDiv").append("<div id='app-container'>STUFF</div>");
    $('#play_button').on("click", function(e) { play_ascii(); });
    $('#learn_button').on("click", function(e) { learn_ascii(); });
}


function play_ascii() {
    alert("play!");
    $("#app-container").empty();
    $("#app-container").append();
}

function learn_ascii() {
    alert("learn!");
}

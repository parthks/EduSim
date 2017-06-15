$(function() {
    $("#calc").resizable().draggable();

    $("#summ-text").resizable().draggable();
    $("#learn").resizable().draggable();

    $("#sample-prob").resizable().draggable();
    $("#tough-prob").resizable().draggable();

    $("#connect").resizable().draggable();
    $("#extras").resizable().draggable();
    $("#www").resizable().draggable();
});

var my_index = 100;

function sendontop(div_id) {
    ele = document.getElementById(div_id.id);
    ele.style.zIndex = my_index++;
}

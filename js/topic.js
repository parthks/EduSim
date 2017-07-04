$(function() {
    console.log("run")
    $("#calc").resizable().draggable();

    $("#summ-text").resizable().draggable();
    $("#learn").resizable().draggable();

    $("#sample-prob").resizable().draggable();
    $("#tough-prob").resizable().draggable();

    $("#connect").resizable().draggable();
    $("#extras").resizable().draggable();
    $("#www").resizable().draggable();

    $("#topics").selectmenu();

    $("#content").hide()

    obj = $("#all-content")
    obj.append('<div id="TEST" class="row"><div>')
    obj.append('<div id="APPLICATION" class="row"><div>')
    addTextBoxes($("#all-content"))

    // $("#all-content").append(addSummaryTextBox());
});

var my_index = 100;

var selectedTextBox = true
var selectedVideoBox = false
var selectedTestBox = false
var selectedAppBox = false


function sendontop(div_id) {
    ele = document.getElementById(div_id.id);
    ele.style.zIndex = my_index++;
}


function allContent() {
    if (!selectedTextBox && !selectedVideoBox && !selectedTestBox && !selectedAppBox) {
        $("#content").show()
    } else {
        $("#content").hide()
    }
}

function clickText() {
    selectedTextBox = !selectedTextBox
    allContent()
    if ($("#TextButton").hasClass("active")) {
        deleteTextBoxes()
    } else {
        addTextBoxes($("#all-content"))
    }
}

function clickVid() {
    selectedVideoBox = !selectedVideoBox
    allContent()
    if ($("#VideoButton").hasClass("active")) {
        deleteVideoBoxes()
    } else {
        addVideoBoxes($("#all-content"))
    }
}

function clickTest() {
    selectedTestBox = !selectedTestBox
    allContent()
    if ($("#TestButton").hasClass("active")) {
        deleteVideoBoxes()
    } else {
        addTestBoxes($("#all-content"))
    }

}

function clickApp() {
    selectedAppBox = !selectedAppBox
    allContent()

}



function deleteVideoBoxes() {
    $("#VIDEO").remove()
}

function addVideoBoxes(obj) {
    obj.prepend('<div id="VIDEO" class="row"><div>')
    videoDiv = $("#VIDEO")
    videoDiv.empty()
    addVideoBox(videoDiv)
}

function addVideoBox(obj) {
    obj.append(
        '<div class = "col-md-2"></div>' +
        '<div class = "col-md-8">' +
        '<div id="videoDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Learn</h3>' +
        '</div>' +
        '</div>' +
        '<div class = "col-md-2"></div>'
    )
}





function deleteTextBoxes() {
    $("#TEXT").remove()
}

function addTextBoxes(obj) {
    obj.prepend('<div id="TEXT" class="row"><div>')
    textDiv = $("#TEXT")
    textDiv.empty()
    addSummaryTextBox(textDiv)
    addReviewTextBox(textDiv)
}

function addReviewTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "rev-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Review Concepts </h3>' +
        '<p id = "rev-text-content" >' + ReviewText() + '</p >' +
        '</div>' +
        '</div>'
    )
    $("#rev-text").resizable().draggable();

}

function ReviewText() {
    return "this is some review text"
}

function addSummaryTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "summ-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Summary Text </h3>' +
        '<p id = "summ-text-content" >' + summaryText() + '</p >' +
        '</div>' +
        '</div>'
    )
    $("#summ-text").resizable().draggable();

}

function summaryText() {
    return "this is summary Text"
}

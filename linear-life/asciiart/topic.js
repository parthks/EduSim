$(function() {
    console.log("run");
    $("#calc").resizable().draggable();

    $("#summary-text").resizable().draggable();
    $("#learn").resizable().draggable();

    $("#sample-prob").resizable().draggable();
    $("#tough-prob").resizable().draggable();

    $("#connect").resizable().draggable();
    $("#extras").resizable().draggable();
    $("#www").resizable().draggable();

    $("#topics").selectmenu();

    $("#content").hide();

    obj = $("#all-content");
    obj.append('<div id="TEST" class="row"><div>');
    obj.append('<div id="APP" class="row"><div>');
    addTextBoxes($("#all-content"))
    alert("hi");
    // $("#all-content").append(addSummaryTextBox());
});

var my_index = 100;

var selectedTextBox = true;
var selectedVideoBox = false;
var selectedTestBox = false;
var selectedAppBox = false;


function sendontop(div_id) {
    ele = document.getElementById(div_id.id);
    ele.style.zIndex = my_index++;
}


function allContent() {
    if (!selectedTextBox && !selectedVideoBox && !selectedTestBox && !selectedAppBox) {
        $("#content").show();
    } else {
        $("#content").hide();
    }
}

function clickText() {
    selectedTextBox = !selectedTextBox
    allContent();
    if ($("#TextButton").hasClass("active")) {
        deleteTextBoxes();
    } else {
        addTextBoxes($("#all-content"));
        //goToByScroll("TEXT")
    }
}

function clickVid() {
    selectedVideoBox = !selectedVideoBox
    allContent();
    if ($("#VideoButton").hasClass("active")) {
        deleteVideoBoxes();
    } else {
        addVideoBoxes($("#all-content"));
        //goToByScroll("VIDEO")
    }
}

function clickTest() {
    selectedTestBox = !selectedTestBox
    allContent();
    if ($("#TestButton").hasClass("active")) {
        deleteTestBoxes();
    } else {
        addTestBoxes($("#all-content"));
        goToByScroll("TEST");
    }

}

function clickApp() {
    selectedAppBox = !selectedAppBox;
    allContent();
    if ($("#AppButton").hasClass("active")) {
        deleteAppBoxes();
    } else {
        addAppBoxes($("#all-content"));
        goToByScroll("APP");
        go_for_ascii();
    }

}



function goToByScroll(id) {
    // Scroll
    $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        },
        'slow');
}




function deleteAppBoxes() {
    $("#APP").remove();
}

function addAppBoxes(obj) {
    obj.prepend('<div id="APP" class="row"><div>');
    appDiv = $("#APP");
    appDiv.empty();
    addAppBox(appDiv);
    $("#connect").resizable().draggable();
    $("#appDiv").resizable().draggable();
}

function addAppBox(obj) {
    obj.append(
        '<div class = "col-md-3">' +
        '<div id="connect" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Connections</h3>' +
        '</div>' +
        '<div id="extras" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Extra Info</h3>' +
        '</div>' +
        '</div>' +
        '<div class = "col-md-9">' +
        '<div id="appDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Application</h3>' +
        '</div>' +
        '</div>'
    );

}












function deleteTestBoxes() {
    $("#TEST").remove();
}

function addTestBoxes(obj) {
    obj.prepend('<div id="TEST" class="row"><div>');
    testDiv = $("#TEST");
    testDiv.empty();
    addTestBox(testDiv);
    $("#calcDiv").resizable().draggable();
    $("#sampleProbDiv").resizable().draggable();
    $("#toughProbDiv").resizable().draggable();
}

function addTestBox(obj) {
    obj.append(
        '<div class="col-md-5">' +
        '<div id="calcDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Calculator</h3>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-7">' +
        '<div id="sampleProbDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Sample Problem</h3>' +
        '</div>' +
        '<div id="toughProbDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Ready Player One</h3>' +
        '</div>' +
        '</div>'
    );
}






function deleteVideoBoxes() {
    $("#VIDEO").remove();
}

function addVideoBoxes(obj) {
    obj.prepend('<div id="VIDEO" class="row"><div>');
    videoDiv = $("#VIDEO");
    videoDiv.empty();
    addVideoBox(videoDiv);
    $("#videoDiv").resizable().draggable();
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
    );
}





function deleteTextBoxes() {
    $("#TEXT").remove();
}

function addTextBoxes(obj) {
    obj.prepend('<div id="TEXT" class="row"><div>')
    textDiv = $("#TEXT")
    textDiv.empty()
    addSummaryTextBox(textDiv)
    addReviewTextBox(textDiv)
    $("#summ-text").resizable().draggable();
    $("#rev-text").resizable().draggable();
}

function addReviewTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "rev-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Review Concepts </h3>' +
        '<p id = "rev-text-content" >' + ReviewText() + '</p >' +
        '</div>' +
        '</div>'
    );
}

function ReviewText() {
    return "this is some review text";
}

function addSummaryTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "summ-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Summary Text </h3>' +
        '<p id = "summ-text-content" >' + summaryText() + '</p >' +
        '</div>' +
        '</div>'
    );
}

function summaryText() {
    return "Images can easily be represented using alphabets, letter and symbols!<br><br> " +
        "Since pixels in the image matrix are simply numbers, based on the pixel value we can convert each pixel into some character.<br>" +
        "Where this really gets cool, is when we convert ascii-fy video or gifs!";
}

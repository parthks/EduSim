$(function() {
    console.log("run")
    $("#calc").resizable().draggable();

    $("#summary-text").resizable().draggable();
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
    obj.append('<div id="APP" class="row"><div>')
    addTextBoxes($("#all-content"))

    if (localStorage.getItem("appName") == 'Linear_Magic' ||
        localStorage.getItem("appName") == 'Digits_Magic' ||
        localStorage.getItem("appName") == 'Matrix_Magic') {
        $('#AppButton').click();
    }

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
            //goToByScroll("TEXT")
    }
}

function clickVid() {
    selectedVideoBox = !selectedVideoBox
    allContent()
    if ($("#VideoButton").hasClass("active")) {
        deleteVideoBoxes()
    } else {
        addVideoBoxes($("#all-content"))
            //goToByScroll("VIDEO")
    }
}

function clickTest() {
    selectedTestBox = !selectedTestBox
    allContent()
    if ($("#TestButton").hasClass("active")) {
        deleteTestBoxes()
    } else {
        addTestBoxes($("#all-content"))
        goToByScroll("TEST")
    }

}

function clickApp() {
    selectedAppBox = !selectedAppBox
    allContent()
    if ($("#AppButton").hasClass("active")) {
        deleteAppBoxes()
    } else {
        addAppBoxes($("#all-content"))
        goToByScroll("APP")
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
    $("#APP").remove()
}

function addAppBoxes(obj) {
    obj.prepend('<div id="APP" class="row"><div>')
    appDiv = $("#APP")
    appDiv.empty()
    addAppBox(appDiv)
    $("#connect").resizable().draggable();
    $("#extras").resizable().draggable();
    $("#appDiv").resizable().draggable();
}

function addAppBox(obj) {
    var html = '<div class = "col-md-3">' +
        '<div id="connect" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Connections</h3>' +
        Connections() +
        '</div>' +
        '<div id="extras" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Extra Info</h3>' +
        Extra_Info() +
        '</div>' +
        '</div>' +
        '<div class = "col-md-9">' +
        '<div id="appDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> !Application!</h3>';

    if (localStorage.getItem("appName") == 'Matrix_Magic') {
        html += '<iframe width=100% height=100% src="magic3.html"></iframe>';
    } else if (localStorage.getItem("appName") == 'Digits_Magic') {
        html += '<iframe width=100% height=100% src="magic2.html"></iframe>';
    } else {
        html += '<iframe width=100% height=100% src="magic1.html"></iframe>';
    }
    localStorage.setItem("appName", '0');

    html += '</div>' + '</div>';


    obj.append(html);

}

function Extra_Info() {
    var html = '<p>In linear algebra, the variables in the linear equations are often matrices and other powerful structures!</p>';
    html += '<br><p>Try to make your own linear equation and convert it to magic!</p>'

    return html;
}

function Connections() {
    var html = '<p>Linear equations is the start to linear systems!</p>'
    html += '<p>The process of solving mutiple linear equations is what linear algebra is all about!</p>'
    html += '<p>We use Matrices to solve these linear equations and that is why they are so important and are used everywhere!</p>'

    return html;
}









function deleteTestBoxes() {
    $("#TEST").remove()
}

function addTestBoxes(obj) {
    obj.prepend('<div id="TEST" class="row"><div>')
    testDiv = $("#TEST")
    testDiv.empty()
    addTestBox(testDiv)
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
    )
}






function deleteVideoBoxes() {
    $("#VIDEO").remove()
}

function addVideoBoxes(obj) {
    obj.prepend('<div id="VIDEO" class="row"><div>')
    videoDiv = $("#VIDEO")
    videoDiv.empty()
    addVideoBox(videoDiv)
    $("#videoDiv").resizable().draggable();
}

function addVideoBox(obj) {
    obj.append(
        '<div class = "col-md-2"></div>' +
        '<div class = "col-md-8">' +
        '<div id="videoDiv" onclick="sendontop(this);" class="ui-widget-content box">' +
        '<h3 class="ui-widget-header"> Learn</h3>' +
        "<p>No Video for this section. ¯\\_(ツ)_/¯</p>" +
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
    $("#summ-text").resizable().draggable();
    $("#rev-text").resizable().draggable();
}

function addReviewTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "rev-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Review Concepts </h3>' +
        '<div id = "rev-text-content">' +
        ReviewText() +
        '</div>' +
        '</div>' +
        '</div>'
    )
}

function ReviewText() {
    var html = '<p> Nothing to review for now! </p>';
    html += '<p>Congratulations on starting your Linear Algebra Journey!!';
    return html;
}

function addSummaryTextBox(obj) {
    obj.append(
        '<div class = "col-md-6">' +
        '<div id = "summ-text" onclick = "sendontop(this);" class = "ui-widget-content box" >' +
        '<h3 class = "ui-widget-header" > Summary Text </h3>' +
        '<div id = "summ-text-content" >' +
        summaryText() +
        '</div' +
        '</div>' +
        '</div>'
    )
}

function summaryText() {
    var html = '<p>Linear Algebra is simply algebra with "linear" terms! It is that simple :P</p>';
    html += '<p>When thinking of linear terms, think line. Constant terms and single variables to the first power</p>';
    html += '<p>Bascially, no funny business! Just simple terms and with simple operations!</p>'
    return html;
}

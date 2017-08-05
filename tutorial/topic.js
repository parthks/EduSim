var noteFireTitle = "tutorial";
var prevUnit = "tutorial";
var nextUnit = "tutorial";
var unitTitle = "Getting Started";


var summaryText = function () {
    var html = '<p>These boxes will contain a brief summary of the unit</p>'
    
    return html;
}

var reviewText = function () {
    var html = '<p>These boxes will contain a brief review of all the units till now</p>';
    return html;
}

var addVideoDetails = function(){
  var html = "<p>These boxes will contain a short animated video of the unit</p>";

  return html;
}

var extraInfo = function() {
    var html = '<p>These boxes will provide some extra information about the unit</p>';
    
    return html;
}

var connections = function() {
    var html = '<p>These boxes will provide some information on how this unit connects to other units</p>';
    
    return html;
}

var addAppDetails = function(){
  var html = '<p>These boxes will contain a Real World scenario where this unit is used.</p>';
  html += '<p>It will explain how the material in the unit is used in the scenario.</p>';
  html += '<p>You will also get a chance to play around and experiment with different variables affecting that scenario!</p>';

  return html;
}

var addCalculatorInApplication = false;

var Hello_World_Details = function(){return true}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}










function tutorialContent(){
  var html = '';

  if (tutorialStep == 0) {
    html = '<br><p>This is your personalized landing page for every unit';
    html += ' and its where all the learning happens!</p><br><br>';
    html += '<button class="btn btn-primary" onclick="tutorialStep=1;tutorial();">Next</button>';
  }

  if (tutorialStep == 1) {
    html = '<br><p>The top bar contains all the buttons to control and personalize your enviroment.</p>';
    html += '<p>The first three buttons, on the top left, show simple layouts with specific learning tools.</p><br>';
    html += '<p>Click the buttons to view those layouts. To return back to this page simply click the button of the current layout!</p><br>';
    html += '<p>Try this Now!</p>';
  }


  if (tutorialStep == 2 && !builderBoxShown) {
    html = '<br>';
    html += '<p>You can build your own personalized immersive learning enviroment!</p><br>';
    html += '<p>To get started simply click on the builder icon on the top right.</p><br>';
    html += '<p>Try this Now!</p>';
  }

  if (clickTopics != 0 && tutorialStep < 2) {
    tutorialStep = 2;
    html = '<br><p>Great!</p>';
    html += '<p>Besides those three default layouts, you can build your own for each unit!</p><br>';
    html += '<p>To get started simply click on the builder icon on the top right.</p><br>';
    html += '<p>Try this Now!</p>';
  }

  if (tutorialStep == 2 && builderBoxShown) {
    html = '<br>';
    html += '<p>Using the builder bar, you can create your own personalized learning enviroment!</p><br>';
    html += '<p>Click on one of the categories and then click on the box you want!</p><br>';
    html += '<p>Try this Now!</p>';
  }

  if (tutorialStep == 3) {
    html = '<br><p>Nice Choice! The '+clickedCustomBox+' box is very useful!</p>';
    html += '<p>You can add as many boxes as you want!</p><br>';
    html += '<p>Each box can also be resized and moved around the screen. And the overall layout of all the boxes are automatically saved</p><br>';
    html += '<p>Try moving and resizing the '+clickedCustomBox+' box this Now!</p>';
  }

  if (tutorialStep == 4) {
    html = '<br><p>You can build your layouts for every unit and they will automatically be saved!</p>';
    html += '<p>To move between units click the "Prev Unit" and "Next Unit" buttons.</p><br>';
    html += '<button class="btn btn-primary" onclick="tutorialStep=42;tutorial();">Finish</button>';
  }

  if (tutorialStep == 42) {
    html = '<br><p>Now you know how to use this platform!</p>';
    html += '<p>This project is a work in progress. Any and all Feedback is valuable! Simply click the "Give Feedback" button on the top right. Thanks!</p>';
    html += '<p>Continue on here to build your default layout that will be used as a start for all the units! and explore all the different boxes!</p>';
    html += '<p>Or click the Home button and start learning!</p><br>';
    html += '<button class="btn btn-primary" onclick="tutorialStep=420;tutorial();">Close Tutorial</button>';
  }



  return html;
}


var tutorialStep = 420;
var clickTopics = 0;
var clickedCustomBox = 'hi';
var builderBoxShown = false;


function tutorial(){
  $('#tutorialBox').remove();
  if (tutorialStep != 420) {
    var html = '<div id="tutorialBox" class="box tut ui-widget-content">' +

    '<div class = "ui-widget-header">'+
    '<h3 > Tutorial </h3>' +
    //'<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
    '</div>'+
    '<div id="tutorialContent" class="center">'+
    tutorialContent();
    '<div>'+
    '</div>';

    $('#content').append(html);
  }
  //var html = '<div id="tutorial" onclick="sendontop(this);" class="ui-widget-content big-boy">' +
  
}











var my_index = 100;

var selectedTextBox = false;
var selectedVideoBox = false;
var selectedTestBox = false;
var selectedAppBox = false;

//var gettingStartedBool = false


// function startUpStuff(){
//   console.log("run")
//     $("#calc").resizable().draggable();

//     $("#summary-text").resizable().draggable();
//     $("#learnBigBoy").draggable().resizable();

//     $("#sample-prob").resizable().draggable();
//     $("#tough-prob").resizable().draggable();

//     $("#connectBigBoy").resizable().draggable();
//     $("#extrasBigBoy").resizable().draggable();
//     $("#wwwBigBoy").resizable().draggable();

//     $("#topics").selectmenu();
//     $("#noteBigBoy").resizable().draggable();
// }

function Hello_World(){
  console.log("Hello_World");
    setBuilderBoxHeading();
    setRowHeading();
    setFeedbackModal();
    $('#content').empty();
    
    
    customButtonImageListeners();
    customBoxBarListener();

    $('#customBoxes').hide();
    $('#customBoxesBreak').hide();
    

    //addTextBoxes($("#all-content"))
    console.log('CHECK FOR LAYOUT!');
    if (Hello_World_Details()){
        console.log('GO FOR LAYOUT!');
        goForCustomLayout();
    }

    
}






function setBuilderBoxHeading(){
  var html = '<br id="customBoxesBreak">'+
    '<div id="customBoxes" class="row heading">'+
        '<div id="CustomBoxesTitle" class="col-md-2 center">'+
            '<h5 style="padding-top: 5px">Boxes to chose from: </h5>'+
        '</div>'+

         '<div id="CustomTextButton" class="col-md-1 center">'+
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Overview</button>'+
        '</div>'+
        '<div id="CustomVideoButton" class="col-md-1 center">'+
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Video</button>'+
        '</div>'+
        
        '<div id="CustomAppButton" class="col-md-2 center">'+
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Real World Scenario</button>'+
        '</div>'+
        '<div id="CustomExtraSpace" class="col-md-5 center"></div>'+

        '<div class="col-md-1 center">'+
            
            '<img id="trash-image" style="width: 35px; padding-top: 2px;" src="../external/trash-icon.png"  alt="trash layout">'+
        '</div>'+

    '</div>';
    $('body').prepend(html);
}


function setRowHeading(){
  var html = '<div class="row heading">'+
        '<div class="col-md-1 center">'+
            '<button id="TextButton" type="button" data-toggle="button" aria-pressed="true" autocomplete="off" class="btn btn-secondary" onclick="clickText();">Overview</button>'+
        '</div>'+
        '<div class="col-md-1 center">'+
            '<button id="VideoButton" type="button" data-toggle="button" aria-pressed="true" autocomplete="off" class="btn btn-secondary" onclick="clickVid();">Video</button>'+
        '</div>'+
        
        '<div class="col-md-2 center">'+
            '<button id="AppButton" type="button" data-toggle="button" aria-pressed="true" autocomplete="off" class="btn btn-secondary" onclick="clickApp();">Real World Scenario</button>'+
        '</div>'+
        '<div class="col-md-3 center">'+
            '<h3>'+unitTitle+'</h3>'+
        '</div>';

        var col = 1;
        if (!(prevUnit && nextUnit)) {col = 2;}
        
        if (prevUnit) {
          html += '<div class="col-md-'+col+' center">'+
                      '<button onclick="window.top.location = '+"'/"+prevUnit+"'"+'" class="btn btn-primary">Prev Unit</button>'+
                  '</div>';
        }


        if (nextUnit) {
          html += '<div class="col-md-'+col+' center">'+
                    '<button onclick="window.top.location = '+"'/"+nextUnit+"'"+'" class="btn btn-primary">Next Unit</button>'+
                  '</div>';
        }
            
        

         html += '<div class="col-md-1 center">'+
            '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#myFeedbackModal">'+
                'Give Feedback'+
            '</button>'+
              '</div>'+
        
        '<div class="col-md-2 right">'+
            '<img id="buildBoxBarButton" style="width: 35px;" src="../external/build-custom-boxes.png"  alt="custom boxes"> &nbsp &nbsp'+
            '<button onclick="window.top.location = '+"'"+'/home'+"'"+'" class="btn btn-primary">Home</button>'+
        '</div>'+
    '</div>';

  $('body').prepend(html);

}





function setFeedbackModal(){
  var html = '<div class="modal fade" id="myFeedbackModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<h5 class="modal-title" id="exampleModalLabel">Give Feedback</h5>'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                  '<span aria-hidden="true">&times;</span>'+
                '</button>'+
              '</div>'+
              '<div class="modal-body">'+
                '<textarea id="feebackBox" style="height: 300px;"></textarea>'+
                '<p>If you could also fill out this <a target="_blank" href="https://goo.gl/forms/EpSkZEedTfppOK3g1">short survey</a> that would be awesome!</p>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                '<button type="button" onclick="giveFeddback'+
                     "($('#feebackBox').val(), "+
                     "function(){"+
                     "$('#feebackBox').val('');"+
                      "$('#myFeedbackModal').modal('hide');"+
                    "});" +
                  '" class="btn btn-primary">Submit</button>'+
              '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    $('body').prepend(html);

}












function sendontop(div_id) {
    ele = document.getElementById(div_id.id);
    ele.style.zIndex = ++my_index;
}

function CustomCloseBox(ele) {
    var bigBoy = $(ele).parent().parent().parent();
    bigBoy.attrchange('remove');
    console.log('deleteee  '+bigBoy.attr('id'));
    deleteLayout(bigBoy.attr('id'));
    bigBoy.remove();
}

function customBoxBarListener(){
  $('#buildBoxBarButton').click(function(){
    if ($('#customBoxes').css('display') != 'none') {
      console.log('hide');
      builderBoxShown = false;
      $('#customBoxes').hide();
      $('#customBoxesBreak').hide();

      // if (gettingStartedBool) {
      //   $('#content').empty();
      //   $('#content').append("<div><h1>Looks like you don't have a Custom Layout!</h1><br>"+
      //   "<h1>Click the Builder Icon on the top right to get started!</h1></div>")
      // }

    } else {
      console.log('show');
      builderBoxShown = true;
      $('#customBoxes').show();
      $('#customBoxesBreak').show();

      // if (gettingStartedBool) {
      //   $('#content').empty()
      //   $('#content').append("<h1>Select a box from the Builder Box Menu Bar to add it your Layout!</h1>")
      // }

    }
    if (tutorialStep != 420) {tutorial();}
  });
}

function goForCustomLayout() {
    tutorial();
    //$("#content").empty();
    console.log('hiiii');
    $('#content').append('<div id="loader"></div>');
    getMyLayout();
    console.log('got layout?');
    getNoteData();
    //$('#customBoxes').show();
    //$('#customBoxesBreak').show();
    $('.close-button-right').show();
    $('#buildBoxBarButton').show();
    
}

function hideCustomLayout(){
  $("#content").empty();
  $('#customBoxes').hide();
  $('#customBoxesBreak').hide();
  $('.close-button-right').hide();
  $('#buildBoxBarButton').hide();
}

function deselectAllBoxes(){
  selectedTextBox = false;
  selectedVideoBox = false;
  selectedTestBox = false;
  selectedAppBox = false;
  deleteTextBoxes();
  deleteVideoBoxes();
  deleteTestBoxes();
  deleteAppBoxes();
  $("#TextButton").removeClass("active");
  $("#VideoButton").removeClass("active");
  $("#TestButton").removeClass("active");
  $("#AppButton").removeClass("active");
}


function saveLayoutListiner(id){
  $(id).attrchange({
  trackValues: true, 
  callback: function (event) {
  //event.attributeName - Attribute Name
  //event.oldValue - Prev Value
  //event.newValue - New Value

  if (event.attributeName == "style"){
        console.log(event.target.id);
        console.log(event.newValue);
        
        if (tutorialStep != 420) {
          var w = $(id).css('width');
          var h = $(id).css('height');
          var l = $(id).css('left');
          var t = $(id).css('top');
          left = '20px';
          top = '15px';
          width = '420px';
          height = '350px';
          console.log(w,h,l,t);
          if (w != width && h != height && l != left && t != top) { 
            tutorialStep = 4; 
            tutorial();
          }
        }
        

        saveLayout(event.target.id, event.newValue);
    }
  }
});

}

function customButtonImageListeners(){
  $('#trash-image').click(function(){
    $('#content').empty();
    deleteAllLayout();
    //location.reload();
  });
}

function getMyLayout(){
  getLayout(function(result){
      console.log('got layout!');
      //console.log($('#all-content').html());
      if ($('#all-content').html() != '') {return;}
      if (!result) {
        $('#loader').css('display', 'none')
        tutorialStep = 0;
        tutorial();
        // if (localStorage.getItem("gettingStartedBool") == null){
        //   gettingStartedBool = true;
        // }
        // if (gettingStartedBool) {
        //   $('#content').append("<div><h1>Looks like you don't have a Custom Layout!</h1><br>"+
        //   "<h1>Click the Builder Icon on the top right to get started!</h1></div>")
        // }
        ;return;
      }
      tutorialStep = 420;
      Object.keys(result).forEach(function(currentKey) {
        console.log(currentKey, result[currentKey]);
        switch (currentKey){

          case 'noteBigBoy':
            addCustomBox('#'+currentKey, CustomNotesButton());
            $('#'+currentKey).attr('style',result[currentKey]);  
            break;

          case 'summTextBigBoy':
            addCustomBox('#'+currentKey, getSummaryTextBox());  
            $('#'+currentKey).attr('style',result[currentKey]); 
            break;  

          case 'revTextBigBoy':
            addCustomBox('#'+currentKey, getReviewTextBox());
            $('#'+currentKey).attr('style',result[currentKey]);
            break

          case 'videoDivBigBoy':
            addCustomBox('#'+currentKey, getVideoBox());
            $('#'+currentKey).attr('style',result[currentKey]);
            break;

          case 'appDivBigBoy':
            addCustomBox('#'+currentKey, getApplicationBox());
            $('#'+currentKey).attr('style',result[currentKey]);
            break;

          case 'calculatorDivBigBoy':
            addCustomBox('#'+currentKey, getCalculatorBox());
            $('#'+currentKey).attr('style',result[currentKey]);
            break;

          case 'connectBigBoy':
            addCustomBox('#'+currentKey, getConnectionsBox());
            $('#'+currentKey).attr('style',result[currentKey]);
            break;

          case 'extrasBigBoy':
            addCustomBox('#'+currentKey, getExtraInfoBox());
            $('#'+currentKey).attr('style',result[currentKey]);
            break;

         
          

          }

        if(parseInt($('#'+currentKey).css("z-index")) >= my_index){
          my_index = parseInt($('#'+currentKey).css("z-index"));
        }
      });

      $('#loader').css('display', 'none');
    });
}






















function customGoBackButton() {
  $('#go-back').click(function(){
    $('#customCurrentTitle').remove();
    $('#customOptions').remove();
    $('#goBack').remove();
    var html = '<div id="CustomTextButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Overview</button>' +
        '</div>' +

        '<div id="CustomVideoButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Video</button>' +
        '</div>' +
        
        '<div id="CustomAppButton" class="col-md-2 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Real World Scenario</button>' +
        '</div>' +
        '<div id="CustomExtraSpace" class="col-md-5 center"></div>';

    $('#CustomBoxesTitle').after(html);
  });
}




function clickCustomButton(ele){

  var textNames = ['Summary Text', 'Review Text', 'My Notes'];
  var videoNames = ['Video'];
  var appNames = ['Application', 'Calculator', 'Connections', 'Extra Info'];
  var names;
  switch ($(ele).text()) {
    case 'Overview': names = textNames; break;
    case 'Video': names = videoNames; break;
    case 'Real World Scenario': names = appNames; break;
  }
  

  var html = '<div id="customCurrentTitle" class="col-md-3 center">' +
            '<h3 style="padding-top: 3px">'+$(ele).text()+': </h3>'+
         '</div>'+
        '<div id="customOptions" class="col-md-5 center">';

  for (var i = 0; i < names.length; i++) {
    html += '<button onclick="CustomBoxButton(this);" class="btn btn-secondary">'+names[i]+'</button>'+
            '&nbsp';
  }

  html += '</div>'+
        '<div id="goBack" class="col-md-1 center">'+
            '<img id="go-back" style="width: 32px; padding-top: 3px" src="../external/go-back-icon.png"  alt="go back">'+
        '</div>';


  $('#CustomTextButton').remove();
  $('#CustomVideoButton').remove();
  $('#CustomTestButton').remove();
  $('#CustomAppButton').remove();
  $('#CustomExtraSpace').remove();

  $('#CustomBoxesTitle').after(html);
  customGoBackButton();

}


function CustomBoxButton(ele){

  // if (gettingStartedBool) {
  //     $('#content').empty();
  //     $('#content').append(
  //       '<div class="gettingStarted" style="width: 8000px; height: 8000px; z-index: 110; background: lightblue; position: fixed; top: 120px"></div>'+
  //       '<h1 class=gettingStarted style="position: relative; z-index: 112; background: lightblue"> All boxes can be moved around and resized to create your own learning enviroment!</h1><br>'+
  //       '<h1 class=gettingStarted style="position: relative; z-index: 112; background: lightblue"> Goodluck...</h1><br>'
  //       );
  //     gettingStartedBool = false;
  //     setTimeout(function(){$('.gettingStarted').remove();localStorage.setItem("gettingStartedBool", 'done');}, 5500);
  // }

  var id;
  var method;
  if (tutorialStep != 420) {
    clickedCustomBox = $(ele).text();
    tutorialStep = 3;
    tutorial();
  }
  
  switch ($(ele).text()){
    
    case 'Summary Text': id='#summTextBigBoy'; method=getSummaryTextBox(); break;
    case 'Review Text': id='#revTextBigBoy'; method=getReviewTextBox(); break;
    case 'My Notes': id='#noteBigBoy'; method='Imma NOTE :P'; break;
    case 'Video': id='#videoDivBigBoy'; method=getVideoBox(); break;
    case 'Application': id='#appDivBigBoy'; method=getApplicationBox(); break;
    case 'Connections': id='#connectBigBoy'; method=getConnectionsBox(); break;
    case 'Extra Info': id='#extrasBigBoy'; method=getExtraInfoBox(); break;
    case 'Calculator': id='#calculatorDivBigBoy'; method=getCalculatorBox(); break;
  }

  addCustomBox(id, method);
}

function addCustomBox(id, method){

  var left = getRandomInt(0, 1100);
  var top = getRandomInt(0, 350);
  var width = getRandomInt(300, 500);
  var height = getRandomInt(300, 500);

  if (tutorialStep < 4) {
    left = 20;
    top = 15;
    width = 420;
    height = 350;
  }
  

  if ($(id).length == 0) {
      if (id == '#noteBigBoy') {
          CustomNotesButton(); 
          $(id).css('position','absolute');
          $(id).css('width',width+'px');
          $(id).css('height',height+'px');
          $(id).css('left',left+'px');
          $(id).css('top',top+'px');
          $(id).css('z-index',++my_index);
          return;
      } //need to fix this :/

    
      $('#content').prepend(method);
      $(id).resizable().draggable();
      

      $(id).css('position','absolute');
      $(id).css('width',width+'px');
      $(id).css('height',height+'px');
      $(id).css('left',left+'px');
      $(id).css('top',top+'px');
      $(id).css('z-index',++my_index);

      if (id=='#appDivBigBoy') {
        $(id).css('width','500px');
        $(id).css('height','500px');
      }

      if (id == '#calculatorDivBigBoy') {
        $(id).css('width','329px');
        $(id).css('height','471px');
        calculator();
      }

      saveLayoutListiner(id);

  }
}


function CustomNotesButton(){
  if ($('#noteBigBoy').length == 0) {
    addNotesTextBox($('#content'), 'prepend');
    $('#noteBigBoy').resizable().draggable();
    saveLayoutListiner('#noteBigBoy')
  }
}

















function clickText() {
    clickTopics += 1;
    if(selectedTextBox){
      selectedTextBox = false;
      deleteTextBoxes();
      goForCustomLayout();
    } else {
      hideCustomLayout();
      deselectAllBoxes();
      addTextBoxes($("#all-content"))
      selectedTextBox = true;
      $('.close-button-right').hide();
    }
}

function clickVid() {
    clickTopics += 1;
    if(selectedVideoBox){
      selectedVideoBox = false;
      deleteVideoBoxes();
      goForCustomLayout();
    } else {
      hideCustomLayout();
      deselectAllBoxes();
      addVideoBoxes($("#all-content"));
      saveLayoutListiner();
      selectedVideoBox = true;
      $('.close-button-right').hide();
    }
}

function clickTest() {
    alert("Coming Soon...");

    // selectedTestBox = !selectedTestBox
    // allContent()
    // if ($("#TestButton").hasClass("active")) {
    //     //deleteTestBoxes()
    // } else {
    //     //addTestBoxes($("#all-content"))
    // }


}

function clickApp() {
    clickTopics += 1;
    if(selectedAppBox){
      selectedAppBox = false;
      deleteAppBoxes();
      goForCustomLayout();
    } else {
      hideCustomLayout();
      deselectAllBoxes();
      addAppBoxes($("#all-content"))
      selectedAppBox = true;
      $('.close-button-right').hide();
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
    obj.prepend('<div id="APP" class="row"></div>')
    appDiv = $("#APP")
    appDiv.empty()
    addAppBox(appDiv)
    //$("#connectBigBoy").resizable().draggable();
    //$("#extrasBigBoy").resizable().draggable();
    $("#appDivBigBoy").resizable().draggable();

    if(addCalculatorInApplication){
      $('#calculatorDivBigBoy').resizable().draggable();
      calculator();
    }

    
}


function getConnectionsBox(){
     return '<div id="connectBigBoy" onclick="sendontop(this);" class="ui-widget-content big-boy">' +
        '<div id="connect" class="box">' +

        '<div class = "ui-widget-header">'+
        '<h3 > Connections </h3>' +
        '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
        '</div>'+
        connections() +

        '</div></div>';
        
}


function getExtraInfoBox(){
  return '<div id="extrasBigBoy" onclick="sendontop(this);" class="ui-widget-content big-boy">' +
        '<div id="extras" class="box">' +

        '<div class = "ui-widget-header">'+
        '<h3 > Extra Info </h3>' +
        '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
        '</div>'+
        extraInfo() +
        '</div></div>';
}

function getApplicationBox(){
      return '<div id="appDivBigBoy" onclick="sendontop(this);" class="ui-widget-content big-boy">' +
        '<div id="appDiv" class= box">'+
        '<div class = "ui-widget-header">'+
        '<h3 > !Application! </h3>' +
        '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
        '</div>'+
        addAppDetails() +

        '</div></div>';
}

function addAppBox(obj) {
    // var html = '<div class = "col-md-3">' +
    //     getConnectionsBox()+
    //     '<br>' +
    //     getExtraInfoBox()+
    //     '</div>';
    var html = '';
    addNotesAppBox(obj);


        if (addCalculatorInApplication){
          html += '<div class = "col-md-6">';
        } else {
          html += '<div class = "col-md-8">'
        }

    html += getApplicationBox();
    html += '</div>';

    if (addCalculatorInApplication){
      html += '<div class = "col-md-3">' + getCalculatorBox() +'</div>';
    }

  
    obj.append(html);
    

}

function addNotesAppBox(obj){
      var html;
      if (addCalculatorInApplication) {
          html = '<div class = "col-md-3">';
      } else {
          html = '<div class = "col-md-4">';
      }
        
      html += '<div id = "noteVidBigBoy" onclick = "sendontop(this);" class = "ui-widget-content big-boy">' +
        '<div id = "note" class="box">'+
        '<h3 class = "ui-widget-header" > My Notes </h3>' +
        '<div style="height: calc(100% - 28px);">'+
        '<textarea class="text_edit" id="my_app_text">'+
        'Loading your saved text...\nPlease wait!' +
        '</textarea>' +
        '</div>'+
        '</div>' +
        '</div>' +
        '</div>';

      obj.append(html);
      getNoteData('my_app_text');

      
}



function getCalculatorBox(){
    return '<div id="calculatorDivBigBoy" onclick="sendontop(this);" class="ui-widget-content big-boy">'+
            '<div id="calculatorDiv" class="box">'+
            '<div class = "ui-widget-header">'+
              '<h3 > Calculator </h3>' +
              '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
            '</div>' +
            '<br>'+
            '<div class="input" id="input"></div>'+
              '<div class="butt">'+
                '<div class="operators">'+
                  '<div>+</div>'+
                  '<div>-</div>'+
                  '<div>&times;</div>'+
                  '<div>&divide;</div>'+
                '</div>'+
                '<div class="leftPanel">'+
                  '<div class="numbers">'+
                    '<div>7</div>'+
                    '<div>8</div>'+
                    '<div>9</div>'+
                  '</div>'+
                  '<div class="numbers">'+
                    '<div>4</div>'+
                    '<div>5</div>'+
                    '<div>6</div>'+
                  '</div>'+
                  '<div class="numbers">'+
                    '<div>1</div>'+
                    '<div>2</div>'+
                    '<div>3</div>'+
                  '</div>'+
                  '<div class="numbers">'+
                    '<div>0</div>'+
                    '<div>.</div>'+
                    '<div id="clear">C</div>'+
                  '</div>'+
                '</div>'+
                '<div class="equal" id="result">=</div>'+
            '</div>';
            
}






















function deleteTestBoxes() {
    $("#TEST").remove();

}

function addTestBoxes(obj) {
    obj.prepend('<div id="TEST" class="row"><div>')
    testDiv = $("#TEST")
    testDiv.empty()
    addTestBox(testDiv)
    $("#calcTestDivBigBoy").resizable().draggable();
    $("#sampleProbDivBigBoy").resizable().draggable();
    $("#toughProbDivBigBoy").resizable().draggable();
}

function addTestBox(obj) {
    obj.append(
        '<div class="col-md-5">' +
        '<div id="calcTestDivBigBoy" onclick="sendontop(this);" class="ui-widget-content big-boy">' +
        '<div id="calcTestDiv" class="box">' +
        '<h3 class="ui-widget-header"> Calculator</h3>' +
        '</div>' +
        '</div>' +
        '<div class="col-md-7">' +
        '<div id="sampleProbDivBigBoy" onclick="sendontop(this);" class="ui-widget-content big-boy">' +
        '<div id="sampleProbDiv" class="box">' +
        '<h3 class="ui-widget-header"> Sample Problem</h3>' +
        '</div>' +
        '<div id="toughProbDivBigBoy" onclick="sendontop(this);" class="ui-widget-content big-boy">' +
        '<div id="toughProbDiv" class="box">' +
        '<h3 class="ui-widget-header"> Ready Player One</h3>' +
        '</div>' +
        '</div>'
    )
}














function deleteVideoBoxes() {
    $("#VIDEO").remove();
}

function addVideoBoxes(obj) {
    obj.prepend('<div id="VIDEO" class="row"><div>');
    videoDiv = $("#VIDEO");
    videoDiv.empty();
    addNotesVideotBox(videoDiv);
    videoDiv.append('<div class = "col-md-8">'+getVideoBox()+'</div>');
    $("#videoDivBigBoy").resizable().draggable();
    $('#noteVidBigBoy').resizable().draggable();
}

function getVideoBox() {
    return '<div id="videoDivBigBoy" onclick="sendontop(this);" class="big-boy ui-widget-content">'+
        '<div id="videoDiv" class="box">' +
        '<div class = "ui-widget-header">'+
        '<h3 > Learn </h3>' +
        '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
        '</div>' +
        addVideoDetails() + 
        '</div>'+
        '</div>';
}

function addNotesVideotBox(obj){

    obj.append(
        '<div class = "col-md-4">' +
        '<div id = "noteVidBigBoy" onclick = "sendontop(this);" class = "ui-widget-content big-boy">' +
        '<div id = "note" class="box">'+
        '<h3 class = "ui-widget-header" > My Notes </h3>' +
        '<div style="height: calc(100% - 28px);">'+
        '<textarea class="text_edit" id="my_vid_text">'+
        'Loading your saved text...\nPlease wait!' +
        '</textarea>' +
        '</div>'+
        '</div>' +
        '</div>' +
        '</div>'
    );

    getNoteData('my_vid_text');   
}















function deleteTextBoxes() {
    $("#TEXT").remove();
}

function addTextBoxes(obj) {
    obj.prepend('<div id="TEXT" class="row"><div>');
    var textDiv = $("#TEXT");
    textDiv.empty();
    textDiv.append('<div class = "col-md-6">'+getSummaryTextBox()+'</div>');
    textDiv.append('<div class = "col-md-6">'+getReviewTextBox()+'</div>');
    addNotesTextBox(textDiv, 'append');
    $("#summTextBigBoy").resizable().draggable();
    $("#revTextBigBoy").resizable().draggable();
    $("#noteBigBoy").resizable().draggable();
    
}


function addNotesTextBox(obj, type){
    console.log(type);

    if (type == 'prepend') {
      obj.prepend(
        '<div id = "noteBigBoy" onclick = "sendontop(this);" class = "ui-widget-content big-boy" >' +
        '<div id = "note" class="box">'+
        '<div class="ui-widget-header">'+
        '<h3> My Notes </h3>' +
        '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
        '</div>'+
        '<div style="height: calc(100% - 28px);">'+
        '<textarea class="text_edit" id="my_text">'+
        'Loading your saved text...\nPlease wait!' +
        '</textarea>' +
        '</div>'+
        '</div>' +
        '</div>' +
        '</div>'
      );
      //$('#noteBigBoy').attr('style','width: 648px; height: 353px; z-index: 101; left: 117px; top: -10px;');
      console.log('type');
    } else {
        obj.append(
        '<div class = "col-md-12">' +
        '<br>'+
        '<div id = "noteBigBoy" onclick = "sendontop(this);" class = "ui-widget-content big-boy" >' +
        '<div id = "note" class="box">'+
        '<h3 class = "ui-widget-header" > My Notes </h3>' +
        '<div style="height: calc(100% - 28px);">'+
        '<textarea class="text_edit" id="my_text">'+
        'Loading your saved text...\nPlease wait!' +
        '</textarea>' +
        '</div>'+
        '</div>' +
        '</div>' +
        '</div>'
      );
    }

    getNoteData('my_text');   
}

function getNoteData(id){
  getSaveNote(noteFireTitle, function(result){
        if ($('#'+id).length == 0) {return;} //this is prolly not needed lol
        $('#'+id).val(result);
        
        $('#'+id).bind('input propertychange', function() {
            console.log('saved!');
            saveNote($('#'+id).val(), noteFireTitle);
        });
    });
}

function getReviewTextBox() {return '<div id = "revTextBigBoy" onclick = "sendontop(this);" class = "ui-widget-content big-boy" >' +
    '<div id = "revtext" class = "box" >' +
    '<div class = "ui-widget-header">' +
    '<h3> Review Concepts </h3>' +
    '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>' +
    '</div>' +
    reviewText() +
    '</div>' +
    '</div>';        
    
}


function getSummaryTextBox() {
    return '<div id = "summTextBigBoy" onclick = "sendontop(this);" class = "ui-widget-content big-boy" >' +
        '<div id = "summText" class = "box" >' +
        '<div class = "ui-widget-header">' +
        '<h3 > Summary Text </h3>' +
        '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>' +
        '</div>' +
        summaryText() +
        '</div' +
        '</div>';
        
    
}
























function calculator() {
    var input = document.getElementById('input'), // input/output button
        number = document.querySelectorAll('.numbers div'), // number buttons
        operator = document.querySelectorAll('.operators div'), // operator buttons
        result = document.getElementById('result'), // equal button
        clear = document.getElementById('clear'), // clear button
        resultDisplayed = false; // flag to keep an eye on what output is displayed

    // adding click handlers to number buttons
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener("click", function(e) {
            console.log('CLICKZED NUM!');
            // storing current input string and its last character in variables - used later
            var currentString = input.innerHTML;
            var lastChar = currentString[currentString.length - 1];

            // if result is not diplayed, just keep adding
            if (resultDisplayed === false) {
                input.innerHTML += e.target.innerHTML;
            } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
                // if result is currently displayed and user pressed an operator
                // we need to keep on adding to the string for next operation
                resultDisplayed = false;
                input.innerHTML += e.target.innerHTML;
            } else {
                // if result is currently displayed and user pressed a number
                // we need clear the input string and add the new input to start the new opration
                resultDisplayed = false;
                input.innerHTML = "";
                input.innerHTML += e.target.innerHTML;
            }

        });
    }

    // adding click handlers to number buttons
    for (var i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function(e) {

            // storing current input string and its last character in variables - used later
            var currentString = input.innerHTML;
            var lastChar = currentString[currentString.length - 1];

            // if last character entered is an operator, replace it with the currently pressed one
            if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
                var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
                input.innerHTML = newString;
            } else if (currentString.length == 0) {
                // if first key pressed is an opearator, don't do anything
                console.log("enter a number first");
            } else {
                // else just add the operator pressed to the input
                input.innerHTML += e.target.innerHTML;
            }

        });
    }

    // on click of 'equal' button
    result.addEventListener("click", function() {

        // this is the string that we will be processing eg. -10+26+33-56*34/23
        var inputString = input.innerHTML;

        // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
        var numbers = inputString.split(/\+|\-|\×|\÷/g);

        // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
        // first we replace all the numbers and dot with empty string and then split
        var operators = inputString.replace(/[0-9]|\./g, "").split("");

        console.log(inputString);
        console.log(operators);
        console.log(numbers);
        console.log("----------------------------");

        // now we are looping through the array and doing one operation at a time.
        // first divide, then multiply, then subtraction and then addition
        // as we move we are alterning the original numbers and operators array
        // the final element remaining in the array will be the output

        var divide = operators.indexOf("÷");
        while (divide != -1) {
            numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
            operators.splice(divide, 1);
            divide = operators.indexOf("÷");
        }

        var multiply = operators.indexOf("×");
        while (multiply != -1) {
            numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
            operators.splice(multiply, 1);
            multiply = operators.indexOf("×");
        }

        var subtract = operators.indexOf("-");
        while (subtract != -1) {
            numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
            operators.splice(subtract, 1);
            subtract = operators.indexOf("-");
        }

        var add = operators.indexOf("+");
        while (add != -1) {
            // using parseFloat is necessary, otherwise it will result in string concatenation :)
            numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
            operators.splice(add, 1);
            add = operators.indexOf("+");
        }

        input.innerHTML = numbers[0]; // displaying the output

        resultDisplayed = true; // turning flag if result is displayed
    });

    // clearing the input on press of clear
    clear.addEventListener("click", function() {
        input.innerHTML = "";
    });
}



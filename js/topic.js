var noteFireTitle = "";
var prevUnit = "";
var nextUnit = "";
var unitTitle = "Default Name"

var summaryText = function () {
    var html = '<p>Linear Algebra is simply algebra with "linear" terms! It is that simple :P</p>';
    html += '<p>When thinking of linear terms, think line. Constant terms and single variables to the first power</p>';
    html += '<p>Bascially, no funny business! Just simple terms and with simple operations!</p>'
    return html;
}

var reviewText = function () {
    var html = '<p> Nothing to review for now! </p>';
    html += '<p>Congratulations on starting your Linear Algebra Journey!!';
    return html;
}

var addVideoDetails = function(){
  var html = "<p>No Video for this section. ¯\\_(ツ)_/¯</p>";
  return html;
}

var extraInfo = function() {
    var html = '<p>In linear algebra, the variables in the linear equations are often matrices and other powerful structures!</p>';
    html += '<br><p>Try to make your own linear equation and convert it to magic!</p>'

    return html;
}

var connections = function() {
    var html = '<p>Linear equations is the start to linear systems!</p>'
    html += '<p>The process of solving mutiple linear equations is what linear algebra is all about!</p>'
    html += '<p>We use Matrices to solve these linear equations and that is why they are so important and are used everywhere!</p>'

    return html;
}

var addAppDetails = function(){
  var html = '';
  if (localStorage.getItem("appName") == 'Matrix_Magic') {
        html += '<iframe width=100% height=100% src="magic3.html"></iframe>';
    } else if (localStorage.getItem("appName") == 'Digits_Magic') {
        html += '<iframe width=100% height=100% src="magic2.html"></iframe>';
    } else {
        html += '<iframe width=100% height=100% src="magic1.html"></iframe>';
    }
    localStorage.setItem("appName", '0');

    return html;
}

var addCalculatorInApplication = true;

var Hello_World_Details = function(){
  if (localStorage.getItem("appName") == 'Linear_Magic' ||
        localStorage.getItem("appName") == 'Digits_Magic' ||
        localStorage.getItem("appName") == 'Matrix_Magic') {
        $('#AppButton').click();
    }
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}




















var my_index = 100;

var selectedTextBox = false;
var selectedVideoBox = false;
var selectedTestBox = false;
var selectedAppBox = false;

var modalAccept = '';

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


function Hello_World() {
  StartMeUp(function(){
    Hello_World_Fire();
  });
}

function Hello_World_Fire(){
    console.log("Hello_World");
    TrackAction('Welcome to unit ' + unitTitle);
    setBuilderBoxHeading();
    setRowHeading();
    setFeedbackModal();
    setTrashButtonModal();
    setSocialButtonModal();
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
            '<h5 id="CBTitle" style="padding-top: 5px">Box Categories: </h5>'+
        '</div>'+

         '<div id="CustomTextButton" class="col-md-1 center">'+
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Overview</button>'+
        '</div>'+
        // '<div id="CustomVideoButton" class="col-md-1 center">'+
        //     '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Video</button>'+
        // '</div>'+

         '<div id="CustomAppButton" class="col-md-2 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Real World Scenario</button>' +
        '</div>' +
        
        '<div id="CustomSocialButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Social</button>' +
        '</div>' +

        '<div id="CustomMyBoxesButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">My Boxes</button>' +
        '</div>' +

        '<div id="CustomDownloadedButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Downloaded</button>' +
        '</div>' +


        '<div id="CustomExtraSpace" class="col-md-2 center"></div>'+

            

        '<div class="col-md-2 right">'+
            '<img id="world-image" class="pointer" style="width: 25px; padding-top: 2px;" src="../external/images/world-image.png"  alt="to store">'+
            '&nbsp &nbsp &nbsp<img id="add-image" class="pointer" style="width: 25px; padding-top: 2px;" src="../external/images/add.png"  alt="add box">'+
            '&nbsp &nbsp &nbsp<img id="trash-image" class="pointer" style="width: 35px; padding-top: 2px;" src="../external/trash-icon.png"  alt="trash layout">'+
        '&nbsp </div>'+

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
            '<img id="buildBoxBarButton" class="pointer" style="width: 35px;" src="../external/build-custom-boxes.png"  alt="custom boxes"> &nbsp &nbsp'+
            '<button onclick="TrackAction('+"'"+'Go Home'+"'"+'); window.top.location = '+"'"+'/home'+"'"+'" class="btn btn-primary">Home</button>'+
        '</div>'+
    '</div>';

  $('body').prepend(html);

}


function setFeedbackModal(){
  var html = '<div class="modal fade" id="myFeedbackModal" tabindex="-1" role="dialog" aria-labelledby="feedbackModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<h5 class="modal-title" id="feedbackModalLabel">Give Feedback</h5>'+
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


function setTrashButtonModal(){
  var html = '<div class="modal fade" id="myTrashModal" tabindex="-1" role="dialog" aria-labelledby="trashModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<h5 class="modal-title" id="trashModalLabel">Are you sure you want to delete this Box?</h5>'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                  '<span aria-hidden="true">&times;</span>'+
                '</button>'+
              '</div>'+
              '<div class="modal-body">'+
                '<p>Deleting the box, will delete all its content forever!</p>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                '<button type="button" data-dismiss="modal" onclick=" modalAccept(); modalAccept = 0;"'+
                  '" class="btn btn-danger">Delete</button>'+
              '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    $('body').prepend(html);

}


function setSocialButtonModal(){
  var html = '<div class="modal fade" id="mySocialModal" tabindex="-1" role="dialog" aria-labelledby="socialModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<h5 class="modal-title" id="socialModalLabel">Are you sure you want to Share this?</h5>'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                  '<span aria-hidden="true">&times;</span>'+
                '</button>'+
              '</div>'+
              '<div class="modal-body">'+
                '<p>Everyone in class will be able to download this content and learn from it!</p>'+
                '<b>Please do not spam or share duplicate content! You have been warned!</b>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                '<button type="button" data-dismiss="modal" onclick=" modalAccept(); modalAccept = 0;"'+
                  '" class="btn btn-success">Share</button>'+
              '</div>'+
            '</div>'+
        '</div>'+
    '</div>';

    $('body').prepend(html);

}















function sendontop(div_id) {
    ele = document.getElementById(div_id.id);
    ele.style.zIndex = ++my_index;
    TrackAction('Sent box with id '+div_id.id+' on top');
}

function CustomCloseBox(ele) {

    var bigBoy = $(ele).parent().parent().parent();
    bigBoy.attrchange('remove');
    var id = bigBoy.attr('id');
    //console.log('deleteee  '+id);
    TrackAction('Closed box with id '+id);
    deleteLayoutBox(unitTitle, id);
    //console.log('#'+id+'CustomButton');
    $('#'+id+'CustomButton').removeClass("active");
    bigBoy.remove();

}

function customBoxBarListener(){
  $('#buildBoxBarButton').click(function(){
    if ($('#customBoxes').css('display') != 'none') {
      console.log('hide');
      $('#customBoxes').hide();
      $('#customBoxesBreak').hide();
      TrackAction('Hide builder bar');
    } else {
      console.log('show');
      $('#customBoxes').show();
      $('#customBoxesBreak').show();
      TrackAction('Show builder bar');
    }
  });
}

function goForCustomLayout() {
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
        saveLayout(unitTitle, event.target.id, event.newValue);
    }
  }
});

}


function customButtonImageListeners(){
  $('#trash-image').click(function(){
    $('#content').empty();
    deleteFullLayout(unitTitle);
    
    //location.reload();
  });

  $('#add-image').click(function(){
    addNewBox();
  });

  $('#world-image').click(function(){
    localStorage.setItem('storeLocation', unitTitle);
    console.log(localStorage.getItem('storeLocation')); //so u cn com bk
    //alert('store!');
    TrackAction('Going to Store');
    window.top.location = '/store';
  });
}





function addNewBox(){
  var id = addBox(unitTitle);
  TrackAction('Added new box with id '+id);

  makeNewBigBoy('boxes', id);
  makeBoxEditable('boxes', id);
  $("#"+id).css('position','absolute');
  $("#"+id).css('width',500+'px');
  $("#"+id).css('height',300+'px');
  $("#"+id).css('left',450+'px');
  $("#"+id).css('top',100+'px');
  
}

function makeNewBigBoy(getType, id){
  var html = '<div id="'+id+'" onclick="sendontop(this);" class="big-boy ui-widget-content">'+
  '<div class="box">' +
  '<div class = "ui-widget-header">'+
  '<h3 id="'+id+'Title"> Click here to edit Title! </h3>' +
  '<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
  '<button onclick="makeBoxEditable('+"'"+getType+"'"+", '"+id+"'"+')" class="edit-button">E</button>'+
  '<button onclick="modalAccept = function() {shareToStore('+"'"+getType+"'"+", '"+unitTitle+"'"+", '"+id+"'"+');};" data-toggle="modal" data-target="#mySocialModal" class="share-button">S</button>'+
  '<img id="'+id+'TrashBox" class="pointer trashBox" src="../external/trash-icon.png"  alt="trash box">'+
  '</div>'+
  '<textarea id="'+id+'Content">' +
  'Click here to edit the text!'+
  '</textarea><br>'+
  '</div></div>';
  $('#content').append(html);

 $("#"+id+'Content').prop('disabled', true);

  saveLayoutListiner('#'+id);

  var left = getRandomInt(0, 1100);
  var top = getRandomInt(0, 350);
  var width = getRandomInt(500, 600);
  var height = getRandomInt(300, 500);

  $("#"+id).css('position','absolute');
  $("#"+id).css('width',width+'px');
  $("#"+id).css('height',height+'px');
  $("#"+id).css('left',left+'px');
  $("#"+id).css('top',top+'px');
  $("#"+id).css('z-index',++my_index);

  $("#"+id).resizable().draggable();


  $('#'+id+'TrashBox').click(function(ele){
    ele = ele.target;
    ele = $(ele).parent().parent().parent();
    var id = ele.attr('id');
    console.log('boomm what -- '+id);
    $('#myTrashModal').modal('show')
    modalAccept = function() { deleteBox(unitTitle, id); ele.remove();};
    


  });



}

function makeBoxEditable(getType, id){

  if (document.getElementById(id+"Title").contentEditable == 'true') {return;}

  TrackAction('Editing box with id '+id);

  $("#"+id).resizable("disable").draggable("disable");
  $('#'+id).attrchange('disconnect');
  document.getElementById(id+"Title").contentEditable = "true";
  //document.getElementById(id+"Content").contentEditable = "true";
  $("#"+id+'Content').prop('disabled', false);

  $('#'+id+'Content').parent().prepend('<div id="'+id+'EditingMessage"><b>You can now edit the content and title in this box! When you are done, click the Save button at the bottom of this box.</b><br><br></div>');

  $('#'+id+'Content').parent().append('<div class="center">'+
    '<button id="'+id+'InsertLink" class="btn btn-secondary">Put a Video in this box!</button>'+
    '&nbsp&nbsp&nbsp<button id="'+id+'SaveEditBox" class="btn btn-primary">Save</button>'+
    '</div>');


  if ($('#'+id+'VideoLink').length != 0) {
    $('#'+id+'InsertLink').text('Delete Video');
  }


  $('#'+id+'InsertLink').click(function(ele) {
    console.log('hiiiiii');
    ele = ele.target;
    ele = $(ele).parent().parent().parent();
    var id = ele.attr('id');
    if ($('#'+id+'InsertLink').text() == 'Put a Video in this box!'){
      $('#'+id+'SaveEditBox').parent().prepend('<input id="VideoLinkByUser" style="width: 80%;" placeholder="Insert Youtube embeded link here"><br class="tempBreak"><br class="tempBreak">');
      $('#'+id+'InsertLink').text("Done Inserting Link");

    } else if ($('#'+id+'InsertLink').text() == 'Done Inserting Link'){
      var link = $('#VideoLinkByUser').val();
      link = link.replace('watch?v=', 'embed/');
      //$('#'+id+'Content').append('<span>'+link+'</span>');
      $('#'+id+'SaveEditBox').parent().before('<p id='+id+"VideoLink"+'>'+link+'</p>');
      $('#'+id+'Content').after('<iframe id="'+id+'VideoIFrame" width="560" height="315" src="'+link+'" frameborder="0" allowfullscreen></iframe>');
      $('#'+id+'InsertLink').text("Delete Video");
      $('#VideoLinkByUser').remove();
      $('.tempBreak').remove();

    } else if ($('#'+id+'InsertLink').text() == 'Delete Video') {
      $('#'+id+'VideoIFrame').remove();
      $('#'+id+'VideoLink').remove();
      $('#'+id+'InsertLink').text("Put a Video in this box!");

    }
  
    
  });


  $('#'+id+'SaveEditBox').click(function(ele){

    console.log(ele.target);
    ele = ele.target;
    var link = '0';
    //console.log($(ele).parent().parent().parent().attr('id'));
    ele = $(ele).parent().parent().parent();
    var id = ele.attr('id');
    TrackAction('Saved edit box with id '+id);

    if ($('#'+id+'VideoLink').length != 0) {
      link = $('#'+id+'VideoLink').text();
    }

    setInfoOfBox(getType, unitTitle, id, $('#'+id+"Title").text(), $('#'+id+"Content").val(), link);
    document.getElementById(id+"Title").contentEditable = "false";
    //document.getElementById(id+"Content").contentEditable = "false";
    $("#"+id+'Content').prop('disabled', true);
    $('#'+id+'SaveEditBox').parent().remove();
    $('#'+id+'EditingMessage').remove();
    
    $("#"+id).resizable("enable").draggable("enable");
    $('#'+id).attrchange('reconnect');

  });

}



function PutCustomBox(getType, id, style=false){
  
  if ($('#'+id).length != 0) {return;}

  TrackAction('Added box with id '+id+' to layout');

  if (getType == 'both') {
    doTheWork('boxes', id);
    doTheWork('downed', id);
  } else {
    doTheWork(getType, id);
  }



  function doTheWork(getType, id){
    getMyBox(getType, unitTitle, id, function(result){
      var title = result['title'];
      var content = result['content'];
      var link = result['link'];
      makeNewBigBoy(getType, id);
      $('#'+id+'Title').text(title);
      $('#'+id+'Content').text(content);

      if (link != '0') {
        $('#'+id+'Content').after('<iframe id="'+id+'VideoIFrame" width="560" height="315" src="'+link+'" frameborder="0" allowfullscreen></iframe>');
        $('#'+id+'VideoIFrame').after('<p id="'+id+'VideoLink">'+link+'</p>');
      }

      $('#'+id+'CustomButton').addClass('active');

      if (style) {
         $('#'+id).attr('style',style);
      }

      if(parseInt($('#'+id).css("z-index")) >= my_index){
            my_index = parseInt($('#'+id).css("z-index"));
      }

  });
  }
  
}















function getMyLayout(){
  getLayout(unitTitle, function(result){
      TrackAction('Getting all saved layout boxes!');
      console.log('got layout!');
      //console.log($('#all-content').html());
      if ($('#all-content').html() != '') {return;}
      if (!result) {
        TrackAction('No saved layout boxes :(');
        $('#loader').css('display', 'none')
        $('#customBoxes').show();
        $('#customBoxesBreak').show();
        $('#all-content').append('<h1 id="AddSomeYo">Add Some Boxes!</h1>');
        ;return;
      }
      $('#AddSomeYo').remove();
      

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

         default: 
            PutCustomBox('both', currentKey, result[currentKey]); 
            break;
          

          }

        if(parseInt($('#'+currentKey).css("z-index")) >= my_index){
          my_index = parseInt($('#'+currentKey).css("z-index"));
        }
      });

      $('#loader').css('display', 'none');
      TrackAction('Got all saved layout boxes :)');
    });
}






















function customGoBackButton() {
  $('#go-back').click(function(){
    TrackAction('Go back on builder bar - to Box Categories');
    stopGetting(unitTitle);
    $('#customCurrentTitle').remove();
    $('#allOptions').remove();
    $('#goBack').remove();
    var html = '<div id="CustomTextButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Overview</button>' +
        '</div>' +

        // '<div id="CustomVideoButton" class="col-md-1 center">' +
        //     '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Video</button>' +
        // '</div>' +
        
        '<div id="CustomAppButton" class="col-md-2 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Real World Scenario</button>' +
        '</div>' +

        '<div id="CustomSocialButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Social</button>' +
        '</div>' +

        '<div id="CustomMyBoxesButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">My Boxes</button>' +
        '</div>' +

        '<div id="CustomDownloadedButton" class="col-md-1 center">' +
            '<button class="btn btn-secondary" onclick="clickCustomButton(this);">Downloaded</button>' +
        '</div>' +


        '<div id="CustomExtraSpace" class="col-md-2 center"></div>';

    $('#CustomBoxesTitle').after(html);
    $('#CBTitle').text('Box Categories: ');
   
  });
}




function clickCustomButton(ele){
  $('#AddSomeYo').remove();
  TrackAction('Clicked '+ $(ele).text() +' box categorie');

  var NameToID = {
    'Summary Text': 'summTextBigBoy',
    'Review Text': 'revTextBigBoy',
    'My Notes' : 'noteBigBoy',
    'Video': 'videoDivBigBoy',
    'Application': 'appDivBigBoy',
    "Calculator": 'calculatorDivBigBoy',
    'Connections': 'connectBigBoy',
    'Extra Info': 'extrasBigBoy'
  };

  var textNames = ['Summary Text', 'Review Text', 'My Notes', 'Video'];
  var appNames = ['Application', 'Calculator', 'Connections', 'Extra Info'];
  var myBoxes = 'Getting';
  
  var names;
  var go = false;
  switch ($(ele).text()) {
    case 'Overview': names = textNames; break;
    case 'Real World Scenario': names = appNames; break;
    case 'Social': names = ['Would you like a way to chat with your classmates? - Give Feedback']; break;
    default: go = true;
  }
  
 
  

  var html = '<div id="customCurrentTitle" class="col-md-3 left">' +
            '<h3 style="padding-top: 3px">'+$(ele).text()+': </h3>'+
         '</div>'+
         '<div id="allOptions" class="col-md-4 center">'+
        '<div id="customOptions">';

  html += '</div></div>'+
        '<div id="goBack" class="col-md-1 center">'+
            '<img id="go-back" class="pointer" style="width: 32px; padding-top: 3px" src="../external/go-back-icon.png"  alt="go back">'+
        '</div>';


  $('#CustomTextButton').remove();
  $('#CustomVideoButton').remove();
  $('#CustomAppButton').remove();
  $('#CustomSocialButton').remove();
  $('#CustomMyBoxesButton').remove();
  $('#CustomDownloadedButton').remove();

  $('#CustomExtraSpace').remove();

  $('#CustomBoxesTitle').after(html);

  
  $('#CBTitle').text('Boxes to choose from: ');
  customGoBackButton();



  if (go) {populateCustomBarWith($(ele).text()); return;}
  


  var html = '';
  for (var i = 0; i < names.length; i++) {
    var id = NameToID[names[i]];
    var buttonID = id+"CustomButton";
    var active = '';
    if ($('#'+id).length != 0) {active = 'active';}
    html += '<button id="'+buttonID+'" onclick="CustomBoxButton(this);" class="btn btn-secondary custom '+active+'">'+names[i]+'</button>'+
            '&nbsp';
  }
  $('#customOptions').append(html);

  // for (var i = 0; i < names.length; i++) {
  //   var buttonID = NameToID[names[i]]+"CustomButton";
  //   $(ele).attr("id",buttonID);
  // }

  //make it scroll
  $("#customOptions").wrapInner("<table cellspacing='30'><tr>");
  $(".custom").wrap("<td></td>");
  $("customOptions").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
  });

  

}


function CustomBoxButton(ele){

  //if ($(ele).hasClass("active")) {return;}
  $('#AddSomeYo').remove();

  var id;
  var method;
  switch ($(ele).text()){
    case 'Summary Text': id='summTextBigBoy'; method=getSummaryTextBox(); break;
    case 'Review Text': id='revTextBigBoy'; method=getReviewTextBox(); break;
    case 'My Notes': id='noteBigBoy'; method='Imma NOTE :P'; break;
    case 'Video': id='videoDivBigBoy'; method=getVideoBox(); break;
    case 'Application': id='appDivBigBoy'; method=getApplicationBox(); break;
    case 'Connections': id='connectBigBoy'; method=getConnectionsBox(); break;
    case 'Extra Info': id='extrasBigBoy'; method=getExtraInfoBox(); break;
    case 'Calculator': id='calculatorDivBigBoy'; method=getCalculatorBox(); break;
  }
  
  addCustomBox('#'+id, method);
}


function addCustomBox(id, method){

  TrackAction('Added box with id '+id+' to layout');

  var left = getRandomInt(0, 1100);
  var top = getRandomInt(0, 350);
  var width = getRandomInt(300, 500);
  var height = getRandomInt(300, 500);

  if ($(id).length == 0) {
  $(id+'CustomButton').addClass('active');

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

      saveLayoutListiner(id);

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


  }
}


function CustomNotesButton(){
  if ($('#noteBigBoy').length == 0) {
    addNotesTextBox($('#content'), 'prepend');
    $('#noteBigBoy').resizable().draggable();
    saveLayoutListiner('#noteBigBoy')
  }
}






function populateCustomBarWith(text){

  if (text == "My Boxes") {
    getMyBoxes('boxes', unitTitle, function(result){
      if (!result) {$('#customOptions').empty();return;}
      if ($('#customCurrentTitle').find("h3").text() != "My Boxes: ") {console.log('Oh dear!'); return;}
      $('#customOptions').empty();
      var html = '';
      Object.keys(result).forEach(function(currentKey) {
        var active = '';
        console.log(currentKey);
        if ($('#'+currentKey).length != 0) {active = 'active';}
        html += '<button id="'+currentKey+'CustomButton" onclick="PutCustomBox('+"'boxes', '"+currentKey+"'"+');" class="btn btn-secondary custom '+active+'">'+result[currentKey]['title']+'</button>'+
            '&nbsp';
      });
      $('#customOptions').append(html);
      doStuff()
  
    });
  }
  else if (text == "Downloaded") {
    getMyBoxes('downed', unitTitle, function(result){
      if (!result) {$('#customOptions').empty();return;}
      if ($('#customCurrentTitle').find("h3").text() != "Downloaded: ") {console.log('Oh dear!'); return;}
      $('#customOptions').empty();
      var html = '';
      Object.keys(result).forEach(function(currentKey) {
        var active = '';
        console.log(currentKey);
        if ($('#'+currentKey).length != 0) {active = 'active';}
        html += '<button id="'+currentKey+'CustomButton" onclick="PutCustomBox('+"'downed', '"+currentKey+"'"+');" class="btn btn-secondary custom '+active+'">'+result[currentKey]['title']+'</button>'+
            '&nbsp';
      });
      $('#customOptions').append(html);
      doStuff()
  
    });
  }
    



  function doStuff(){
    //make it scroll
    $("#customOptions").wrapInner("<table cellspacing='30'><tr>");
    $(".custom").wrap("<td></td>");
    $("customOptions").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
    });
  }
    
}
 



















function clickText() {
    if(selectedTextBox){
      selectedTextBox = false;
      deleteTextBoxes();
      goForCustomLayout();
      TrackAction('Gone from Overview preset layout to custom layout');
    } else {
      TrackAction('Go to Overview preset layout');
      hideCustomLayout();
      deselectAllBoxes();
      addTextBoxes($("#all-content"))
      selectedTextBox = true;
      $('.close-button-right').hide();
    }
}

function clickVid() {
    if(selectedVideoBox){
      selectedVideoBox = false;
      deleteVideoBoxes();
      goForCustomLayout();
      TrackAction('Gone from Video preset layout to custom layout');
    } else {
      TrackAction('Go to Video preset layout');
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
    if(selectedAppBox){
      selectedAppBox = false;
      deleteAppBoxes();
      goForCustomLayout();
      TrackAction('Gone from Apps preset layout to custom layout');
    } else {
      TrackAction('Go to Apps preset layout');
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





(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);


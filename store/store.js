var storeName = '';

var storeNameToEnvName = {
    'Linear Algebra Magic': '/magic',
    'Secret Messages': '/secrets',
    'ASCII Art': '/asciiart'
};

var allStoreNames = ['Linear Algebra Magic', 'Secret Messages', 'ASCII Art'];
var index = 0;


function manageNextPrevButtons() {
    index = allStoreNames.indexOf(storeName);
    $('#PrevButton').show();
    $('#NextButton').show();

    if (index == 0) {
        $('#PrevButton').hide();
    }

    if (index == allStoreNames.length - 1) {
        $('#NextButton').hide();
    }
}

function GoNextUnit() {
    index += 1;
    storeName = allStoreNames[index];
    localStorage.setItem('storeLocation', storeName);
    $('#all-boxes').empty();
    Hello_World();
}

function GoPrevUnit() {
    index -= 1;
    storeName = allStoreNames[index];
    localStorage.setItem('storeLocation', storeName);
    $('#all-boxes').empty();
    Hello_World();
}




function Hello_World() {

    $('#all-boxes').append('<div id="loader"></div>');
    storeName = localStorage.getItem('storeLocation');

    TrackAction('Welcome to the Store section of '+storeName);

    manageNextPrevButtons();
    $('#StoreName').text(storeName + ' Store');
    getStoreBoxes(storeName, function(id, result) {
        if (!result) {$('#loader').css('display', 'none'); return;}
        console.log(id);
            
        var title = result['title'];
        var content = result['content'];
        var link = result['link'];
        var uid = result['uid'];
        var points = result['points'];
        var downed = result['downed'];
        makeNewBigBoy(id, uid);
        $('#'+id+'Title').text(title);
        $('#'+id+'Content').text(content);

        if (link != '0') {
          $('#'+id+'Content').after('<iframe id="'+id+'VideoIFrame" width="560" height="315" src="'+link+'" frameborder="0" allowfullscreen></iframe>');
          $('#'+id+'VideoIFrame').after('<p id="'+id+'VideoLink">'+link+'</p>');
        }
    });

    $('#loader').css('display', 'none')

}

function BackToPersonalEnv() {
    window.top.location = storeNameToEnvName[storeName];
}


function makeNewBigBoy(id, byID){
  var html = '<div id="'+id+'OuterDiv" class="outer-social-div">'+ 
  '<div id="'+id+'" class="big-boy ui-widget-content">'+
  '<div class="box">' +
  '<div class = "ui-widget-header">'+
  '<h3 id="'+id+'Title"> Click here to edit Title! </h3>' +
  //'<button onclick="CustomCloseBox(this)" class="close-button-right">X</button>'+
  //'<button onclick="makeBoxEditable('+"'"+id+"'"+')" class="edit-button">E</button>'+
  //'<button onclick="shareToStore('+"'"+unitTitle+"'"+", '"+id+"'"+')" class="share-button">S</button>'+
  //'<img id="'+id+'TrashBox" class="pointer trashBox" src="../external/trash-icon.png"  alt="trash box">'+
  '</div>'+
  '<div id="'+id+'Content">' +
  'Click here to edit the text!'+
  '</div><br>'+
  '</div></div>'+
  '<div id="'+id+'BoxInfo" class="box-info">'+
  '<p id="'+id+'ByID">Getting Uploader'+"'s "+'Name</p>'+
  '<p id="'+id+'Downed">Downloaded xx times</p>'+
  '<button id="'+id+'SaveBox" onclick="saveTheBoxFromStore('+"'"+storeName+"', "+ "'"+id+"'"+ ');" class="btn btn-success">Get this box!</button>&nbsp&nbsp'+
  '<button onclick="reportStoreBox('+"'"+storeName+"', "+ "'"+id+"'"+ ');" class="btn btn-danger">Report</button><br>'+
  '<p id="'+id+'Points" class="points">-</p>'+
  '<button id="'+id+'UpVoteBut" onclick="voteStoreButton('+"'"+storeName+"', "+ "'"+id+"'"+", 'up'"+');" class="upvote"><</button>'+
  '<button id="'+id+'DownVoteBut" onclick="voteStoreButton('+"'"+storeName+"', "+ "'"+id+"'"+", 'down'"+');" class="downvote">></button>'+
  '</div>'+
  '</div><br><br><br>';
  $('#all-boxes').prepend(html);

  getNameOfID(byID, function(result) {
    $('#'+id+'ByID').text('By '+result);
  });

  pointsStoreBoxListener(storeName, id, function(result) {
    $('#'+id+'Points').text(result);
  });

  downedStoreBoxListener(storeName, id, function(result) {
    $('#'+id+'Downed').text('Downloaded '+result+' times');
  });

  voteButtonListeners(id);

  personalDownedStoreBox(storeName, id, function(result) {
    if (result) {
        $('#'+id+'SaveBox').addClass('disabled');
        $('#'+id+'SaveBox').prop("disabled",true);
    } else {
        $('#'+id+'SaveBox').removeClass('disabled');
        $('#'+id+'SaveBox').prop("disabled",false);
    }
    
  });


}


function voteButtonListeners(boxID) {
    getVoteStatus(storeName, boxID, function(result){
        if (result == 'up') {
            $('#'+boxID+'DownVoteBut').prop("disabled",false);
            $('#'+boxID+'DownVoteBut').removeClass('disable');

            $('#'+boxID+'UpVoteBut').prop("disabled",true);
            $('#'+boxID+'UpVoteBut').addClass('disable');

        } else if (result == 'down') {
            $('#'+boxID+'DownVoteBut').prop("disabled",true);
            $('#'+boxID+'DownVoteBut').addClass('disable');

            $('#'+boxID+'UpVoteBut').prop("disabled",false);
            $('#'+boxID+'UpVoteBut').removeClass('disable');

        } else {
            $('#'+boxID+'UpVoteBut').prop("disabled",false);
            $('#'+boxID+'UpVoteBut').removeClass('disable');
            $('#'+boxID+'DownVoteBut').prop("disabled",false);
            $('#'+boxID+'DownVoteBut').removeClass('disable');

        }
    });
}











//<script src="https://www.gstatic.com/firebasejs/4.1.5/firebase.js"></script>
// Initialize Firebase

var config = {
  apiKey: "AIzaSyDiB3zpYdH0h2_ucJWdvI2OQTnDrDyEiaI",
  authDomain: "edusim-150921.firebaseapp.com",
  databaseURL: "https://edusim-150921.firebaseio.com",
  projectId: "edusim-150921",
  storageBucket: "edusim-150921.appspot.com",
  messagingSenderId: "826200897633"
};

var provider = new firebase.auth.GoogleAuthProvider();


firebase.initializeApp(config);

var database = firebase.database();


function canContinueWithID(){
  //USE THIS ->> firebase.auth().currentUser.uid;

  //var user = firebase.auth().currentUser; I LIKE THIS BETTER LOL
//   if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
//OR USE THIS AS A FUNCTION JUST AS IS
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    return uid;
  } else {
    alert('ERROR - Unknown user! Please Login again!');
    return false;
  }
}


function loginWithGoogle(callback){
  firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user, 'user');
      callback(user, 'user');
      database.ref('users/'+user.uid+'/name').set(user.displayName);
  }).catch(function(error) {
      var errorCode     = error.code;
      var errorMessage  = error.message;
      var email         = error.email;
      var credential    = error.credential;
      callback(error, 'error');
  });  
}

function needToLogin(callback){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log('SOMETHIN HAPPENED!');
      console.log(user);
      callback(user);
      database.ref('users/'+user.uid+'/name').set(user.displayName);
  } else {
    console.log('need to login in');
    callback('login');  
  }
      
  });
}


function checkFirstTime(){
  var uid = canContinueWithID();
  if(!uid){return;}

  TrackAction('Logged In!');

  database.ref('users/'+uid+'/FirstTime').once('value').then(function(snapshot) {
    if (!snapshot.val()) {
      database.ref('users/'+uid+'/FirstTime').set('YES');
      window.top.location = '/tutorial';

    } else if (snapshot.val() == 'YES') {
      TrackAction('Still not done with tutorial :(!');
      window.top.location = '/tutorial';

    } else {
      window.top.location = '/home';
    }
  });

   
  
}

function notFirstTime(){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/FirstTime').set('NO');
  TrackAction('Finished tutorial!');
}


function giveFeddback(info, callback){
 var uid = canContinueWithID();
  if(!uid){return;}

  TrackAction('Gave Feedback!');

  var go = database.ref().child('Feedback').push().key;
  database.ref('Feedback/'+go).set({
    uid: uid,
    feeback: info
  });
  callback();
  
}


function saveGraph(graph, type){
  var uid = canContinueWithID();
  if(!uid){return;}

  if (type == 'Apps'){
    console.log(graph);
    database.ref('users/'+uid+'/graphWithApps').set(graph);
  } else {
    database.ref('users/'+uid+'/graphNoApps').set(graph);
  }
 
   
}

function saveNote(note, topic){
 var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/notes/'+topic).set(note);
  
}


function getSaveNote(topic, callback){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/notes/'+topic).once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
  
}














function getDefaultLayout(callback){
  database.ref('DefaultLayout').once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
}

function saveDefaultLayout(layout){
  database.ref('DefaultLayout/').set(layout);
}




function saveLayout(layoutID, boxID, style){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/layouts/'+layoutID).update({
    [boxID]: style
  });
  
}

function getLayout(layoutID, callback){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/layouts/'+layoutID).once('value').then(function(snapshot) {
    console.log('layout fire');
    callback(snapshot.val());
  });
  
}

function deleteBox(layoutID, boxID){
  var uid = canContinueWithID();
  if(!uid){return;}

  TrackAction('Deleted (forever) box with id '+boxID);

  database.ref('users/'+uid+'/boxes/'+layoutID+'/'+boxID).remove();
  database.ref('users/'+uid+'/downed/'+layoutID+'/'+boxID).remove();
  database.ref('users/'+uid+'/layouts/'+layoutID+'/'+boxID).remove();
  //database.ref('Store/downedBoxesByUser/'+layoutID+'/'+boxID+'/'+uid).set('open to get'); 
 
}

function deleteLayoutBox(layoutID, boxID){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/layouts/'+layoutID+'/'+boxID).remove();
 
}

function addBox(layoutID){
  var uid = canContinueWithID();
  if(!uid){return;}

  var id = database.ref().child('Feedback').push().key;
  database.ref('users/'+uid+'/boxes/'+layoutID+'/'+id).set({
    title: 'A New Box',
    key: id,
    link: '0',
    content: 'A new box! Edit it!'
  });
  return id;

}

function setInfoOfBox(cat, layoutID, boxID, title, content, link){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/'+cat+'/'+layoutID+'/'+boxID+'/title').set(title);
  database.ref('users/'+uid+'/'+cat+'/'+layoutID+'/'+boxID+'/content').set(content);
  database.ref('users/'+uid+'/'+cat+'/'+layoutID+'/'+boxID+'/link').set(link);

}

function getMyBoxes(cat, layoutID, callback){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/'+cat+'/'+layoutID).on('value', function(snapshot) {
    callback(snapshot.val());
  });
}

function stopGetting(layoutID) {
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/boxes/'+layoutID).off();
  database.ref('users/'+uid+'/downloaded/'+layoutID).off();
}

function getMyBox(cat, layoutID, boxID, callback){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/'+cat+'/'+layoutID + '/' + boxID).once('value').then(function(snapshot) {
    if (!snapshot.val()) {return;}
    callback(snapshot.val());
  });
}


function deleteFullLayout(layoutID){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/layouts/'+layoutID).remove();
  TrackAction('Removed all boxes in current layout');
  
}








function shareToStore(getType, layoutID, boxID){
  var uid = canContinueWithID();
  if(!uid){return;}

  TrackAction('Shared box with id '+boxID+' to Store!');

  database.ref('users/'+uid+'/'+getType+'/'+layoutID+'/'+boxID).once('value', function(snapshot)  {
    if (!snapshot.val()) {return;}
    var id = database.ref('Store/'+'/boxes/'+layoutID).push().key;
    database.ref('Store/'+'/boxes/'+layoutID+'/'+id).set(snapshot.val());
    database.ref('Store/'+'/boxes/'+layoutID+'/'+id+'/key').remove();
    database.ref('Store/'+'/boxes/'+layoutID+'/'+id).update({
      uid: uid,
      points: 0,
      downed: 0
    });
    //database.ref('Store/hasVotedOn/'+layoutID+'/'+boxID+'/'+uid).set('no');
    
  });

}

function getStoreBoxes(layoutID, callback) {
  var uid = canContinueWithID();
  if(!uid){return;}

  var ref = firebase.database().ref('Store/boxes/'+layoutID).orderByChild('points');

  //database.ref('Store/boxes/'+layoutID).
  ref.on('child_added', function(snapshot)  {
    console.log(snapshot.val());
    callback(snapshot.key, snapshot.val());
  });
}

function reportStoreBox(layoutID, boxID) {
  var uid = canContinueWithID();
  if(!uid){return;}

  TrackAction('Reported box with id '+boxID);
  database.ref('Store/'+'/report/'+layoutID+'/'+boxID).update({
    [uid]: '<- this guy reported it!' 
  });

}


function voteStoreButton(layoutID, boxID, type) {
  var uid = canContinueWithID();
  if(!uid){return;}


  database.ref('Store/hasVotedOn/'+layoutID+'/'+boxID+'/'+uid).once('value', function(snapshot) {
    var isType = snapshot.val();
    var change = 0;

    if (type == 'up') {
      TrackAction('Upvoted box with id '+boxID);
      if (isType == 'down') {type='normal'}
      change = 1;
    }
    else if (type == 'down') {
      TrackAction('DownVoted box with id '+boxID);
      if (isType == 'up') {type='normal'}
      change = -1;
    }

    database.ref('Store/boxes/'+layoutID+'/'+boxID+'/'+'points').once('value', function(snapshot) {
      var num = snapshot.val();
      num += change;
      database.ref('Store/boxes/'+layoutID+'/'+boxID+'/'+'points').set(num);
    });


    database.ref('Store/hasVotedOn/'+layoutID+'/'+boxID+'/'+uid).set(type);

  });
  
  
}



function getVoteStatus(layoutID, boxID, callback) {
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('Store/hasVotedOn/'+layoutID+'/'+boxID+'/'+uid).on('value', function(snapshot) {
    callback(snapshot.val());
  });
}



function saveTheBoxFromStore(layoutID, boxID) {
  var uid = canContinueWithID();
  if(!uid){return;}

  //save box for user
  database.ref('Store/boxes/'+layoutID+'/'+boxID).once('value', function(snapshot)  {
    if (!snapshot.val()) {return;}
    var id = database.ref('users/downed/'+layoutID).push().key;
    database.ref('users/'+uid+'/downed/'+layoutID+'/'+id).set(snapshot.val());
    database.ref('users/'+uid+'/downed/'+layoutID+'/'+id+'/uid').remove();
    database.ref('users/'+uid+'/downed/'+layoutID+'/'+id+'/downed').remove();
    database.ref('users/'+uid+'/downed/'+layoutID+'/'+id+'/points').remove();
    database.ref('users/'+uid+'/downed/'+layoutID+'/'+id+'/key').set(id);

  });

  //user got box
  //database.ref('Store/downedBoxesByUser/'+layoutID+'/'+boxID+'/'+uid).set('bamm!, what'); 
  TrackAction('Downloaded box with id '+boxID);

  //increment download counter
  database.ref('Store/boxes/'+layoutID+'/'+boxID+'/'+'downed').once('value', function(snapshot) {
    var num = snapshot.val();
    num += 1;
    database.ref('Store/boxes/'+layoutID+'/'+boxID+'/'+'downed').set(num);
  });

}


// function personalDownedStoreBox(layoutID, boxID, callback) {
//   var uid = canContinueWithID();
//   if(!uid){return;}

//   database.ref('Store/downedBoxesByUser/'+layoutID+'/'+boxID+'/'+uid).on('value', function(snapshot) {
//     if (!snapshot.val()) {return}
//     if (snapshot.val() == 'bamm!, what') {
//       callback(true);
//     } else {
//       callback(false);
//     }
    
//   });
// }



function getNameOfID(id, callback) {
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+id+'/name').once('value', function(snapshot) {
    callback(snapshot.val());
  });
}

function pointsStoreBoxListener(layoutID, boxID, callback) {
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('Store/boxes/'+layoutID+'/'+boxID+'/points').on('value', function(snapshot) {
    callback(snapshot.val());
  });
}

function downedStoreBoxListener(layoutID, boxID, callback) {
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('Store/boxes/'+layoutID+'/'+boxID+'/downed').on('value', function(snapshot) {
    callback(snapshot.val());
  });
}




function TrackAction(action) {
  var uid = canContinueWithID();
  if(!uid){return;}

  var d = new Date();
  var date = d.getUTCDate() + '-' + (parseInt(d.getUTCMonth())+1) + '-' + d.getUTCFullYear();
  var keyu = database.ref('Analytics/users/'+uid+'/'+date).push().key;
  var keyd = database.ref('Analytics/date/'+date+'/'+uid).push().key;

  database.ref('Analytics/users/'+uid+'/'+date+'/'+keyu).set(action);
  database.ref('Analytics/date/'+date+'/'+uid+'/'+keyd).set(action);


}












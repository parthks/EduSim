
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

  database.ref('users/'+uid+'/FirstTime').once('value').then(function(snapshot) {
    if (!snapshot.val()) {
      database.ref('users/'+uid+'/FirstTime').set('YES');
      window.top.location = '/tutorial';

    } else if (snapshot.val() == 'YES') {
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
}


function giveFeddback(info, callback){
 var uid = canContinueWithID();
  if(!uid){return;}

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
  
  database.ref('users/'+uid+'/boxes/'+layoutID+'/'+boxID).remove();
 
}

function addBox(layoutID){
  var uid = canContinueWithID();
  if(!uid){return;}

  var id = database.ref().child('Feedback').push().key;
  database.ref('users/'+uid+'/boxes/'+layoutID+'/'+id).set({
    title: 'A New Box',
    key: id
  });
  return id;

}

function setInfoOfBox(layoutID, boxID, title, content){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/boxes/'+layoutID+'/'+boxID+'/title').set(title);
  database.ref('users/'+uid+'/boxes/'+layoutID+'/'+boxID+'/content').set(content);

}


function deleteFullLayout(layoutID){
  var uid = canContinueWithID();
  if(!uid){return;}

  database.ref('users/'+uid+'/layouts/'+layoutID).remove();
  
}




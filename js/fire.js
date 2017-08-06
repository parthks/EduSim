
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
  var uid = localStorage.getItem("uid");
  if(uid != ''){
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

  } else {
    alert('ERROR - Unknown user! Please Login again!');
  }
  
}

function notFirstTime(){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    database.ref('users/'+uid+'/FirstTime').set('NO');

  } else {
    alert('ERROR - Unknown user! Please Login again!');
  }
}



// function fireLogin(uid, passcode, callback) {
//   database.ref('users/'+uid+'/passcode').once('value').then(function(snapshot) {
//     if (!(snapshot.val()) || passcode == snapshot.val()) {
//       database.ref('users/'+uid+'/passcode').set(passcode);
//       var d = new Date();
//       var sd = d.getUTCHours() + ':' +  d.getUTCMinutes() + ' ' + d.getUTCDay() + '-' + (parseInt(d.getUTCMonth())+1) + '-' + d.getUTCFullYear();
//       database.ref('users/'+uid+'/active').set(sd);
//       console.log('success login!');
//       callback();
//     } else {
//       alert('Incorrect passcode for unique-uid: '+uid+
//         '\nPlease contact parthks@umich.edu for passcode recovery');
//     }
//   });
  
// }


function giveFeddback(info, callback){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    var go = database.ref().child('Feedback').push().key;
    database.ref('Feedback/'+go).set({
      uid: uid,
      feeback: info
    });
    callback();
  } 
  else {
    alert('ERROR - Unknown user! Please Login again!');
  }
}


function saveGraph(graph, type){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    if (type == 'Apps'){
      console.log(graph);
      database.ref('users/'+uid+'/graphWithApps').set(graph);
    } else {
      database.ref('users/'+uid+'/graphNoApps').set(graph);
    }
  } else {
    alert('ERROR - Unknown user! Please Login again!');
  }
   
}

function saveNote(note, topic){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    database.ref('users/'+uid+'/notes/'+topic).set(note);
  } else {
    alert('ERROR - Unknown user! Please Login again!');
  }
}


function getSaveNote(topic, callback){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    database.ref('users/'+uid+'/notes/'+topic).once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  } else {
    alert('ERROR - Unknown user! Please Login again!');
  }
}




function getDefaultLayout(callback){
  database.ref('DefaultLayout').once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
}

function saveDefaultLayout(layout){
  database.ref('DefaultLayout/').set(layout);
}



function saveLayout(id, style){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    database.ref('users/'+uid+'/layout').update({
      [id]: style
    });
  } else {
    alert('ERROR - Unknown user! Please Login again!');
  }
}

function getLayout(callback){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    database.ref('users/'+uid+'/layout').once('value').then(function(snapshot) {
      console.log('layout fire');
      callback(snapshot.val());
    });
  } else {
    alert('ERROR - Unknown user! Please Login again!');
  }
}

function deleteLayout(id){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    database.ref('users/'+uid+'/layout/'+id).remove();
  } else {
    alert('ERROR - Unknown user! Please Login again!');
  } 
}

function deleteAllLayout(){
  var uid = localStorage.getItem("uid");
  if(uid != ''){
    database.ref('users/'+uid+'/layout').remove();
  } else {
    alert('ERROR - Unknown user! Please Login again!');
  } 
}




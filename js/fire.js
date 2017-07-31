
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


firebase.initializeApp(config);

var database = firebase.database();

function fireLogin(name, passcode, callback) {
  database.ref('users/'+name+'/passcode').once('value').then(function(snapshot) {
    if (!(snapshot.val()) || passcode == snapshot.val()) {
      database.ref('users/'+name+'/passcode').set(passcode);
      var d = new Date();
      var sd = d.getUTCHours() + ':' +  d.getUTCMinutes() + ' ' + d.getUTCDay() + '-' + (parseInt(d.getUTCMonth())+1) + '-' + d.getUTCFullYear();
      database.ref('users/'+name+'/active').set(sd);
      console.log('success login!');
      callback();
    } else {
      alert('Incorrect passcode for unique-name: '+name+
        '\nPlease contact parthks@umich.edu for passcode recovery');
    }
  });
  
}

function saveGraph(graph, type){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    if (type == 'Apps'){
      console.log(graph);
      database.ref('users/'+name+'/graphWithApps').set(graph);
    } else {
      database.ref('users/'+name+'/graphNoApps').set(graph);
    }
  } else {
    alert('ERROR - Unknown user!');
  }
   
}

function saveNote(note, topic){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref('users/'+name+'/notes/'+topic).set(note);
  } else {
    alert('ERROR - Unknown user!');
  }
}


function getSaveNote(topic, callback){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref('users/'+name+'/notes/'+topic).once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  } else {
    alert('ERROR - Unknown user!');
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
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref('users/'+name+'/layout').update({
      [id]: style
    });
  } else {
    alert('ERROR - Unknown user!');
  }
}

function getLayout(callback){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref('users/'+name+'/layout').once('value').then(function(snapshot) {
      console.log('layout fire');
      callback(snapshot.val());
    });
  } else {
    alert('ERROR - Unknown user!');
  }
}

function deleteLayout(id){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref('users/'+name+'/layout/'+id).remove();
  } else {
    alert('ERROR - Unknown user!');
  } 
}

function deleteAllLayout(){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref('users/'+name+'/layout').remove();
  } else {
    alert('ERROR - Unknown user!');
  } 
}




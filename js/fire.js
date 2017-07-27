
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

function fireLogin(name=localStorage.getItem("uniquename")){
  if (name != '') {
    database.ref(name+'/active').set(Date.now());
  } else {
    alert('ERROR - Unknown user!');
  }
  
}

function saveGraph(graph, type){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    if (type == 'Apps'){
      console.log(graph);
      database.ref(name+'/graphWithApps').set(graph);
    } else {
      database.ref(name+'/graphNoApps').set(graph);
    }
  } else {
    alert('ERROR - Unknown user!');
  }
   
}

function saveNote(note, topic){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref(name+'/notes/'+topic).set(note);
  } else {
    alert('ERROR - Unknown user!');
  }
}

function getSaveNote(topic, callback){
  var name = localStorage.getItem("uniquename");
  if(name != ''){
    database.ref(name+'/notes/'+topic).once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  } else {
    alert('ERROR - Unknown user!');
  }
}






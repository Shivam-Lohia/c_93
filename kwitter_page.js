//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC3CG8IHrSGaYehC-4adBSH-k-NNkdkj0s",
      authDomain: "kwitter-f1ec1.firebaseapp.com",
      databaseURL: "https://kwitter-f1ec1-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1ec1",
      storageBucket: "kwitter-f1ec1.appspot.com",
      messagingSenderId: "872570689562",
      appId: "1:872570689562:web:2b8c0619517ead83e2d9a3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name =localStorage.getItem("user_name");
     room_name =localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";

}
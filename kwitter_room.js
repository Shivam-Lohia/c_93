
//ADD YOUR FIREBASE LINKS HERE
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
    
    
  
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage;Storage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}

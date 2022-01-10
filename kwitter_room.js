
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBvpXbH-QMGsjzYRRf4yWv_E607goTqPN4",
    authDomain: "kwitter-29bc4.firebaseapp.com",
    databaseURL: "https://kwitter-29bc4-default-rtdb.firebaseio.com",
    projectId: "kwitter-29bc4",
    storageBucket: "kwitter-29bc4.appspot.com",
    messagingSenderId: "892362581154",
    appId: "1:892362581154:web:e8f47fbb5f6bb0d5c7a3fb",
    measurementId: "G-TXV3ZLGRKD"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+ user_name+"!";

  function addroom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";


  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name-"+ Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ 
Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;


    //End code
    });});}
getData();
function redirectToRoomName(name){

    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    
}



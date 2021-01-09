
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCT-x0fopzdRdzLjlhHcZGI53vXo-l0YJc",
    authDomain: "kwitter-a515a.firebaseapp.com",
    databaseURL: "https://kwitter-a515a.firebaseio.com",
    projectId: "kwitter-a515a",
    storageBucket: "kwitter-a515a.appspot.com",
    messagingSenderId: "588628482643",
    appId: "1:588628482643:web:d925c984ee8eec2e2984a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
    console.log("inside firebase");
    user_name = document.getElementById("user_name").value;
    //localStorage.setItem("user_name", user_name);
    
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user practice"
      
    });
    //window.location = "kwitter_room.html";
  }
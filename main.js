 function addUser(){
     username=document.getElementById("user-name").value;
     localStorage.setItem("user-name", username);
     window.location="kwitter_room.html"
 }
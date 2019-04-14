var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "pragati" && password == "agnes"){
alert ("YAYYY!!! Come in...");
window.location = "agnes/index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert(" "+attempt+" attempt baki hai.. huh;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
else{
        window.alert("Hurrrrrr!! ");
      }
}
}


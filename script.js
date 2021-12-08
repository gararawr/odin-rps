let username = prompt("Username");
if  (username === "Admin") {
    var password = prompt("Password");
} else if (username === '') {
    alert("Canceled");
} else if (username === null) {
    alert("Canceled");
} else if (username != "Admin") {
    alert("I don't know you");
} 

if (password === "TheMaster") {
    alert("Welcome!");
} else if (password === '') {
    alert("Canceled");
} else if (password === null) {
    alert("Canceled");
} else if (password != "TheMaster") {
    alert("Wrong Password");
} 


// // userInput != '' && userInput != null




//  var username = prompt("Enter new value:", username);
    
//     if (username === "") {
//         // user pressed OK, but the input field was empty
//         ;
//     } else if (username) {
//         // user typed something and hit OK
//         results.innerHTML = "User entered text and hit OK";
//     } else {
//         // user hit cancel
//         results.innerHTML = "User hit Cancel";
//     }
// });




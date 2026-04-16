function setUser(user){
localStorage.setItem("user", JSON.stringify(user));
}

function getUser(){
return JSON.parse(localStorage.getItem("user"));
}

function requireLogin(){
if(!localStorage.getItem("user")){
window.location.href="logincustomer.html";
}
}

function logout(){
localStorage.removeItem("user");
window.location.href="logincustomer.html";
}
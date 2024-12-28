


var LogOut = document.getElementById("LogOut")
let username = localStorage.getItem("username")
console.log(username)
welcome.innerHTML = "Welcome " + username

LogOut.addEventListener("click" , function(){
    localStorage.removeItem("username")
   sessionStorage.clear()
    window.location.replace("../log in/signin.html")
})
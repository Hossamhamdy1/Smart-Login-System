var loginform = document.getElementById("loginform")
var logemail = document.getElementById("logemail")
var logpassword = document.getElementById("logpassword")
var alertwronguser = document.getElementById("alertwronguser")



let alluserdata = []
if (localStorage.getItem("alluserdata") != null) {
    alluserdata = JSON.parse(localStorage.getItem("alluserdata"))
}
loginform.addEventListener("submit", function (e) {
    e.preventDefault()
    login()
})



function login() {
    var logUser = {
        email: logemail.value,
        password: logpassword.value
    }
    if (logvail(logUser) == true) {
        console.log("user is found ")
        window.location.href = "../home/home.html"

    } else {
        alertwronguser.classList.replace("d-none" , "d-block")
    }

}

function logvail(logUser) {
    for (let i = 0; i < alluserdata.length; i++) {
        if (alluserdata[i].userEmail.toLowerCase() == logUser.email.toLowerCase() && alluserdata[i].userPassword.toLowerCase() == logUser.password.toLowerCase()) {
         localStorage.setItem("username" , alluserdata[i].userName)
         
            return true

        }
    }

}
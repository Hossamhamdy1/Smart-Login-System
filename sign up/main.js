

let signupForm = document.getElementById("registerform");
let signnameInput = document.getElementById("signname")
let signemailInput = document.getElementById("signemail")
let signpasswordInput = document.getElementById("signpassword");
let alert = document.getElementById("alertdanger") ;
let alertsuccess = document.getElementById("alertsuccess")


let alluserdata = []
if (localStorage.getItem("alluserdata") != null) {
  alluserdata = JSON.parse(localStorage.getItem("alluserdata"))
  }
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();
 if(checkvalid()){
  addUser()

 } else{

 }
})

function addUser() {
  let userSignUp = {
    userName: signnameInput.value,
    userEmail : signemailInput.value,
    userPassword : signpasswordInput.value
  }
  if(isalreadyexist(userSignUp) == true){
    console.log("already Exist")
    alert.classList.replace("d-none" , "d-block")
    
  }
  else{

    alluserdata.push(userSignUp)
  localStorage.setItem("alluserdata", JSON.stringify(alluserdata))
  alert.classList.replace("d-block" , "d-none")
  alertsuccess.classList.replace("d-none" , "d-block")
  }
  
  }
  function isalreadyexist(userSignUp){
    for(let i = 0; i < alluserdata.length ; i++){
      if( alluserdata[i].userEmail.toLowerCase() == userSignUp.userEmail.toLowerCase() ){
        return true
      }

    }
  }

function validation(regex, element) {
  var pattern = regex
  if (pattern.test(element.value)) {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
   
    return true

  } else {
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
   
    return false

  }
}
function checkvalid() {
  if (  validation(/^[a-z]{3,15}$/, signnameInput) == true&&
  validation(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, signemailInput) == true&&
  validation(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, signpasswordInput)== true){ 
  return true 
}else{
  return false
  }

}
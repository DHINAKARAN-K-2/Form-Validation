

var submit=document.getElementById("submit")
submit.addEventListener("click",function(event)
{
    event.preventDefault()

var nameRegex=/^[a-zA-Z]+$/
var emailRegex=/^[a-zA-Z0-9]+@gmail\.com/
var passRegex=/^.{6,}$/

var username=document.getElementById("username")
var email=document.getElementById("email")
var pass=document.getElementById("pass")

var validate=true
if(nameRegex.test(username.value)==false)
{
    document.querySelector(".errorName").style.display="inline"
    validate=false
}
else
{
    document.querySelector(".errorName").style.display="none"
}
if(emailRegex.test(email.value)==false)
{
    document.querySelector(".errorEmail").style.display="inline"
    validate=false
}
else
{
    document.querySelector(".errorEmail").style.display="none"
}
if(passRegex.test(pass.value)==false)
{
    document.querySelector(".errorPassword").style.display="inline"
    validate=false
}
else
{
    document.querySelector(".errorPassword").style.display="none"
}
if(validate==true)
{
    alert("Form Submited Sucessfully")
}
})


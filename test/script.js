const email=document.getElementById("email");
email.addEventListener('input',function(){
    const emailpattern=/^[a-z0-9._%+\-]+@(gmail|yahoo|hotmail)\.(com|org|in)$/;
    if(email.value.match(emailpattern)){
        email.style="border: 5px solid green";
        console.log("Valid Email")
    } else {
        email.style="border: 3px solid red";
    }
})
const pass=document.getElementById("password");
const newpass=document.getElementById("confirm-password");
newpass.addEventListener('input',function(){
    const passwordtest=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$&#!?_])[A-Za-z\d$&#!?_]{8,}$/;
    if(pass.value===newpass.value && pass.value.match(passwordtest)){
        pass.style="border: 5px solid green";
        newpass.style="border: 5px solid green";
    }
    else{
        pass.style="border: 5px solid red";
        newpass.style="border: 5px solid red";
    }
})
const loginform=document.getElementById("login-form");
loginform.addEventListener('submit',function(){
    if(email.value.match(emailpattern) &&pass.value===newpass && pass.value.match(passwordtest) ){
        window.location.href="navbar.html";
    }
    else{
        alert("please enter valid email and password");
    }
})
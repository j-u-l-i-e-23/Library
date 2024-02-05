var email=document.getElementById("email");
var pswd=document.getElementById("pswd");

var err1=document.getElementById("erremail");
var err2=document.getElementById("errpswd");

function validation(){

    // regex for email validation
    var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/

    //regex for password validation
    var regpswd=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;

    
    // checking if he fields are empty
    if  ( email.value == "" ) {
        err1.innerText="Email cannot be empty";
        err1.style.color="red";
        return false;
    }

    if(pswd.value == ""){
        err2.innerText="Password cannot be empty";
        err2.style.color="red";
        return false;
    }


    //checking if the data entered is correct or not

    if (!regexp.test(email.value)){
        err1.innerText="Enter correct email address like example@gmail.com";
        err1.style.color="red";
        return false;
    }

    if(!regpswd.test(pswd.value)){
        err2.innerText="Enter correct password";
        err2.style.color="red";
        return false;
    }
    

    

}

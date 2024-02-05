
var fname= document.getElementById("firstName");
var lname = document.getElementById("lastName");
var email=document.getElementById("email");
var pswd=document.getElementById("password");
var ph=document.getElementById("contact");
var cpsd=document.getElementById("cpswd")


var err1=document.getElementById("erremail");
var err2=document.getElementById("errpswd");
var err3=document.getElementById("errfname");
var err4=document.getElementById("errlname");
var err5=document.getElementById("errcontact");
var err6=document.getElementById("errcpswd");

function formValidate(){

    //regex for name validation
    var regname=/^[a-zA-Z]+[a-zA-Z]+$/;


    // regex for email validation
    var regexp = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/

    //regex for password validation
    var regpswd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;

    

    //regex for phone number
    var regph=/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;


    if ( (regexp.test(email.value)) && (regpswd.test(pswd.value)) && (regname.test(fname.value)) && (regname.test(lname.value)) &&(regph.test(ph.value)) && (cpsd.value === pswd.value)){
        alert("Successfully Registered");
        return true;
    }
    
    // checking if the fields are empty
    if  ( email.value.trim() == "" ) {
        err1.innerText="Email cannot be empty";
        err1.style.color="red";
        return false;
    }

    if (pswd.value.trim() == "") {
        err2.innerText="Password cannot be empty";
        err2.style.color="red";
        return false;
    }


    //checking if the data entered is correct or not

    if (!regexp.test(email.value) ) {
        err1.innerText="Enter correct email address like example@gmail.com";
        err1.style.color="red";
        return false;
    }

    if (!regpswd.test(pswd.value) ){
        err2.innerText="Password should include atleast 1 uppercase, 1 lowercase , 1 digit and special symbols ";
        err2.style.color="red";
        return false;
    }

    if (!regname.test(fname.value)) {
        err3.innerText="Alphabets Only";
        err3.style.color="red";
        return false;
    }

    if (!regname.test(lname.value)) {
        err4.innerText="Alphabets Only";
        err4.style.color="red";
        return false;
    }

    if(!regph.test(ph.value)){
        err5.innerText="Invalid phone number! Only Digits are allowed!!";
        err5.style.color="red";
        return false;
    }

    //checking whether the password and confirm password are same or not

    if(cpsd.value != pswd.value){
        err6.innerText="Password mismatch";
        err6.style.color="red";
        return false;
    }
    else{
        return true;
    }

}

function passval(){

    // password strength checking
    if (pswd.value.length > 15 ){
        err2.innerText="Password is too lengthy";
        err2.style.color="red";
        return false;
    }
    if( pswd.value.length < 8){
        err2.innerText="Password too weak";
        err2.style.color="red";
        return false;
    }
    if (pswd.value.length <= 11) {

        err2.innerText="Moderate Password";
        err2.style.color="orange";
        return true;
          
    }

    if (pswd.value.length > 11) {

        err2.innerText="strong Password";
        err2.style.color="green";
        return true;
          
    }


    

    
} 
    




const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const repassword=document.getElementById("repassword");

function error(input,message) {
    input.className='form-control is-invalid'

    const div=input.nextElementSibling;
    div.innerText=message;
    div.className="invalid-feedback";
}

function success(input) {
    input.className='form-control is-valid'
}

function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired(inputs){
    inputs.forEach(function(input) {
        if(input.value===''){
            error(input,`${input.id} is required.`);
        }else{
            success(input);
        }
    });
   
}

function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} must be at least ${min} character`);
    }else if(input.value.length>max){
        error(input,`${input.id} must be no more than ${max} character`);

    }else{
        success(input);
    }
}
function checkPasswords(input1,input2){
    if(input1.value!==input2.value){
        error(input2,'Passwords are not same');
    }
}

function checkPhone(input) {
    var exp=/^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,"Phone number must be 10 character")
    }
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    
   checkRequired([username,email,password,repassword,phone]);
   validateEmail(email);
   checkLength(username,7,15);
   checkLength(password,7,14);
   checkPasswords(password,repassword);
   checkPhone(phone);
});
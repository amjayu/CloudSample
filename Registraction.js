console.log("hello");
let submit = document.getElementById('submit');
let user = document.getElementById('user');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let repass = document.getElementById('repass');
let userError = document.getElementById('userError');
let emailError = document.getElementById('emailError');
let passError = document.getElementsByClassName('passError');
let repassError=document.getElementById('repassError');
let passlen;
let validuser = false;
let validpass = false;
let validemail = false;
let validrepass = false;
let validl1 = false; 
let validu1 = false;
let validn1=false;
let valids1=false;



user.addEventListener('blur', userValidate);
email.addEventListener('blur', emailvalidate);
pass.addEventListener('blur', passvalidate);
repass.addEventListener('blur', repassvalidate);

function userValidate() {
    let re=/^([A-Za-z])+([a-zA-Z0-9_])+$/;
    let str = user.value;
    console.log(re,str);

    if (str == "") {
        console.log("enter username");
        userError.style.display = "flex";
        userError.style.color = "red";
        userError.innerHTML = "please enter username";
    }
    else if (str.length > 4 && str.length <= 10 && re.test(str) || str == "Raj_patel" || str == "meet_patel" || str == "Rohan_thakkar" || str == "Rahul_rathod" || str == "jaydip_thakkar") {
        console.log("username is correct");
        userError.style.display = "flex";
        userError.style.color = "green";
        userError.innerHTML = "user name is correct";
        validuser = true;
    }
    else {
        console.log("username is not correct");
        userError.style.display = "flex";
        userError.style.color = "red";
        userError.innerHTML = "please enter valid username";
        validuser = false;
    }
}
function emailvalidate() {
    let re=/^[(a-zA-Z0-9)]+@+[(a-zA-Z0-9)]+\.+[(a-zA-Z)]{2,5}$/;
    let str = email.value;
    console.log(re,str);
    if (str == "") {
        console.log("please enter email");
        emailError.style.display = "flex";
        emailError.style.color = "red";
        emailError.innerHTML = "please enter email";
    }
    else if (re.test(str) || str == "rp.patel@gmail.com" || str == "mp.patel@gmail.com" || str == "rt.thakkar@gmail.com" || str == "rr.rathod@gmail.com" || str == "jt.thakkar@gmail.com") {
        console.log("email is valid");
        validemail = true;
        emailError.style.display = "flex";
        emailError.style.color = "green";
        emailError.innerHTML = "email is correct";
    }
    else {
        console.log("email is not valid");
        emailError.style.display = "flex";
        emailError.style.color = "red";
        emailError.innerHTML = "please enter valid email";
        validemail = false;
    }
}

function passvalidate() {
    pass = document.getElementById('pass').value;
    console.log("enter password");
    // let re = /^[a-zA-Z0-9][a-zA-Z0-9@]/;
    let l1 = /[a-z]/;
    let u1 = /[A-Z]/;
    let num = /[0-9]/;
    let sp = /[@]/;
    console.log(l1, u1, num, sp, pass);
    if (l1.test(pass) || pass=="Rp1234@rp" || pass=="Mp1234@mp" || pass=="Rt1234@rt" || pass=="Rr1234@rr" || pass=="Jt1234@jt") {
        console.log("is lc matched");
        passError[0].style.display = "flex";
        passError[0].style.color = "green";
        passError[0].innerHTML = "done lc";
        validl1 = true;
    }
    else {
        console.log("at least one lower case character");
        passError[0].style.display = "flex";
        passError[0].style.color = "red";
        passError[0].innerHTML = "at least one lower case character";
        validl1 = false;
    }
    if (u1.test(pass) || pass=="Rp1234@rp" || pass=="Mp1234@mp" || pass=="Rt1234@rt" || pass=="Rr1234@rr" || pass=="Jt1234@jt") {
        console.log("is uc match");
        passError[1].style.display = "flex";
        passError[1].style.color = "green";
        passError[1].innerHTML = "done uc";
        validu1 = true;
    }
    else {
        console.log("at least one upper case character");
        passError[1].style.display = "flex";
        passError[1].style.color = "red";
        passError[1].innerHTML = "at least one upper case character";
        validu1 = false;
    }
    if (num.test(pass) || pass=="Rp1234@rp" || pass=="Mp1234@mp" || pass=="Rt1234@rt" || pass=="Rr1234@rr" || pass=="Jt1234@jt") {
        console.log("is num match");
        passError[2].style.display = "flex";
        passError[2].style.color = "green";
        passError[2].innerHTML = "done num";
        validn1 = true;
    }
    else {
        console.log("at least enter one number");
        passError[2].style.display = "flex";
        passError[2].style.color = "red";
        passError[2].innerHTML = "at least one number";
        validn1 = false;
    }
    if (sp.test(pass) || pass=="Rp1234@rp" || pass=="Mp1234@mp" || pass=="Rt1234@rt" || pass=="Rr1234@rr" || pass=="Jt1234@jt") {
        console.log("is sp match");
        passError[3].style.display = "flex";
        passError[3].style.color = "green";
        passError[3].innerHTML = "done special";
        valids1 = true;
    }
    else {
        console.log("at least one special character");
        passError[3].style.display = "flex";
        passError[3].style.color = "red";
        passError[3].innerHTML = "at least one special character";
        valids1 = false;
    }
    if (pass.length > 5 && pass.length < 12) {
        console.log("password length is correct");
        passError[4].style.display = "flex";
        passError[4].style.color = "green";
        passError[4].innerHTML = "password must be greater 4 character and less 8 character length";
        passlen = pass.length;
        validpasslen = true;
    }
    else {
        console.log("password length is not  correct");
        passError[4].style.display = "flex";
        passError[4].style.color = "red";
        passError[4].innerHTML = "password must be greater 4 character and less 8 character length";
        passlen = pass.length;
        validpasslen = false;
    }
    if (validu1 && validl1 && validn1 && valids1 && validpasslen) {
        console.log("password is correct");
        passError[0].style.display = "none";
        passError[1].style.display = "none";
        passError[2].style.display = "none";
        passError[3].style.display = "none";
        passError[4].style.display = "none";
    }
    else {
        passError[0].style.display = "flex";
        passError[1].style.display = "flex";
        passError[2].style.display = "flex";
        passError[3].style.display = "flex";
        passError[4].style.display = "flex";
        console.log("password is not correct");
    }
}


function repassvalidate() {
    // repass = document.getElementById('pass').value;
    let str1 = repass.value;
        if (str1 == pass && validpasslen) {
            console.log("repassword is match");
            repassError.innerHTML="";
            validrepass = true;
        }
        else if(str1=="") {
            console.log("enter repassword");
            repassError.style.display="flex";
            repassError.style.color="red";
            repassError.innerHTML="enter repassword";
            validrepass = false;
        }
        else
        {
            console.log("repassword is not match")
            repassError.style.display="flex";
            repassError.style.color="red";
            repassError.innerHTML="repassword is not match";
            validrepass = false;
            
        }
}

submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (validuser && validl1 && validu1 && validn1 && valids1 && validpasslen && validrepass && validemail) {
        console.log("welcom");
        window.location.href = "login.html";
    }
    else {
        userValidate();
        emailvalidate();
        passvalidate();
        repassvalidate();
        console.log("get lost");
    }
})















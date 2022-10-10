
let submit = document.getElementById('submit');
let validuser = false;
let validpass = false;
let validusername=false;
let validraj=false;
let validmeet=false;
let validrohan=false;
let validrahul=false;
let validjaydip=false;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    forgotpass();
    if(validraj || validmeet || validrohan || validrahul || validjaydip)
    {
        console.log("success");
        window.location.href="login.html";
    }
    else
    {
        console.log("enter correct details");
    }

})

function forgotpass() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let usmsg = document.getElementById('userError');
    let psmsg = document.getElementById('passError');
    let errormsg=document.getElementById("errormsg");
  
    if (pass == "") {
        console.log("enter password");
        psmsg.style.display = "flex";
        psmsg.style.color = "red";
        psmsg.innerHTML = "enter password";
        validpass = false;
    }
    else {
        psmsg.innerHTML = "";
        validpass = true;
    }
    if (user == "") {
        console.log("enter username");
        usmsg.style.display = "flex";
        usmsg.style.color = "red";
        usmsg.innerHTML = "enter username";
        validuser = false;
    }
    else if (user == "Raj_patel" ) {
        if (pass == "Rp12345@rp" || pass == "Rp1246@rp") {
            console.log("forgot password is successfully");
            validraj=true;
        }
    }
    else if (user == "meet_patel") {
        if (pass == "Mp12345@mp" || pass == "Mp1246@mp") {
            console.log("forgot password is successfully");
            validmeet=true;
        }
       
    }
    else if (user == "Rohan_thakkar") {
        if (pass == "Rt12345@rt" || pass == "Rt1246@rt") {
            console.log("forgot password is successfully");
            validrohan=true;
        }
        
    }
    else if (user == "Rahul_rathod") {
        if (pass == "Rr12345@rr" || pass == "Rr1246@rr") {
            console.log("forgot password is successfully");
            validrahul=true;
        }
        
    }
    else if (user == "jaydip_thakkar") {
        if (pass == "Jt12345@jt" || pass == "Jt1246@jt") {
            console.log("forgot password is successfully");
            validjaydip=true;
        }
        
    }
    else
    {
        console.log("enter valid username");
        usmsg.style.display = "flex";
        usmsg.style.color = "red";
        usmsg.innerHTML = "enter valid username";
    }
    if(user=="Raj_patel" || user=="meet_patel" || user=="Rohan_thakkar" || user=="Rahul_rathod" || user=="jaydip_thakkar")
    {
        usmsg.style.display="none";
    }
    
 
    
    // else{
    //     console.log("enter valid username");
    //     usmsg.style.display="flex";
    //     usmsg.style.color="red";
    //     usmsg.innerHTML="enter valid username";
    // }
}
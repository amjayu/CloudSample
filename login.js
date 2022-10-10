console.log("validate login page");

let submit = document.getElementById('submit');
// let b1=document.getElementsByName('b1');
let validuserpass = false;
// let validuserlen = false;
// let validpasslen = false;
let validusernull = false;
let validpassnull = false;
// console.log(b1);

function login() {

    let user = document.getElementById('user').value;
    let usmsg = document.getElementById("userError");
    let pass = document.getElementById('pass').value;
    let psmsg = document.getElementById("passError");
    console.log(usmsg);
    console.log(psmsg);
    // e.preventDefault();
    if (user == "") {
        usmsg.style.display = "flex";
        usmsg.style.color = "red";
        usmsg.innerHTML = "enter username";
        console.log("enter username");
        validusernull = false;
    }
    else {
        usmsg.innerHTML = "";
        validusernull = true;
    }
    if (pass == "") {

        psmsg.style.display = "flex";
        psmsg.style.display = "flex";
        psmsg.style.color = "red";
        psmsg.innerHTML = "enter password";
        console.log("enter password");
        validpassnull = false;
    }
    else {
        psmsg.innerHTML = "";
        validpassnull = true;
    }
    if (user == "Raj_patel" && pass == "Rp1234@rp" || pass=="Rp12345@rp" || pass=="Rp1246@rp" && user.length>4 && user.length<15 && pass.length>4 && pass.length<20) {
        console.log("name is correct");
        usmsg.style.display = "flex";
        usmsg.style.color = "green";
        usmsg.innerHTML = "user is correct";

        console.log("password is correct");
        psmsg.style.display = "flex";
        psmsg.style.color = "green";
        psmsg.innerHTML = "password is correct";
        validuserpass = true;
    }
    if (user == "meet_patel" && pass == "Mp1234@mp" || pass=="Mp12345@mp" || pass=="Mp1246@mp" && user.length>4 && user.length<15 && pass.length>4 && pass.length<20) {
        usmsg.style.display = "flex";
        usmsg.style.color = "green";
        usmsg.innerHTML = "user is correct";

        psmsg.style.color = "green";
        psmsg.innerHTML = "password is correct";
        validuserpass = true;
    }
    if (user == "Rohan_thakkar" && pass == "Rt1234@rt" || pass=="Rt12345@rt" || pass=="Rt1246@rt" && user.length>4 && user.length<15 && pass.length>4 && pass.length<20) {
        usmsg.style.display = "flex";
        usmsg.style.color = "green";
        usmsg.innerHTML = "user is correct";

        psmsg.style.color = "green";
        psmsg.innerHTML = "password is correct";
        validuserpass = true;
    }
    if (user == "Rahul_rathod" && pass == "Rr1234@rr"  || pass=="Rr12345@rr" || pass=="Rr1246@rr" && user.length>4 && user.length<15 && pass.length>4 && pass.length<20) {
        usmsg.style.display = "flex";
        usmsg.style.color = "green";
        usmsg.innerHTML = "user is correct";

        psmsg.style.color = "green";
        psmsg.innerHTML = "password is correct";
        validuserpass = true;
    }
    if (user == "jaydip_thakkar" && pass == "Jt1234@jt" || pass=="Jt12345@jt" || pass=="Jt1246jt" && user.length>4 && user.length<15 && pass.length>4 && pass.length<20) {
        usmsg.style.display = "flex";
        usmsg.style.color = "green";
        usmsg.innerHTML = "user is correct";

        psmsg.style.color = "green";
        psmsg.innerHTML = "password is correct";
    }
}
submit.addEventListener('click', function (e) {
    e.preventDefault();
    login();
    if (validuserpass && validusernull && validpassnull) {
        window.location.href = "home1.html";
        // b1.innerText="logout";
    }
    else {
        console.log("enter correct details");
        // alert("enter valid details");
    }
});






// console.log("validate login page");

// let submit = document.getElementById('submit');

// user.addEventListener("blur", userValidate);
// pass.addEventListener("blur", passValidate);

// submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     userValidate();
//     passValidate();
//     // userpass();
// });

// function userValidate() {
//     let user = document.getElementById('user').value;
//     let re = /^[A-Za-z]([A-Za-z0-9S@]){3,7}$/;
//     let usmsg = document.getElementById("userError");

//     console.log("enter name");

//     console.log(re, user);

//     if (re.test(user)=="") {
//         usmsg.style.display = "flex";
//         usmsg.style.color = "red";
//         usmsg.innerHTML = "please enter username";
//         console.log("enter username");
//     }
//     else if (re.test(user)) {
//         console.log("name is correct");
//         // window.location.href="home1.html";
//         usmsg.style.display = "flex";
//         // usmsg.style.color="green";        
//         // usmsg.innerHTML="name is correct";        
//         usmsg.innerHTML = "";
//     }
//     else {
//         console.log('name is not coorect');
//         usmsg.style.display = "flex";
//         usmsg.style.color = "red";
//         usmsg.innerHTML = "please enter valid username";

//     }

// };


// function passValidate() {

//     let pass = document.getElementById('pass').value;
//     let psmsg = document.getElementsByClassName('passError');

//     console.log("enter password");
//     // let re = /^[a-zA-Z0-9][a-zA-Z0-9@]/;
//     let l1 = /[a-z]/;
//     let u1 = /[A-Z]/;
//     let num = /[0-9]/;
//     let sp = /[@]/;

//     console.log(l1, u1, num, sp, pass);
//     if (l1.test(pass)) {
//         console.log("is lc matched");
//         psmsg[0].style.display = "flex";
//         psmsg[0].style.color = "green";
//         psmsg[0].innerHTML = "done lc";
//     }
//     else {
//         console.log("at least one lower case character");
//         psmsg[0].style.display = "flex";
//         psmsg[0].style.color = "red";
//         psmsg[0].innerHTML = "at least one lower case character";
//     }
//     if (u1.test(pass)) {
//         console.log("is uc match");
//         psmsg[1].style.display = "flex";
//         psmsg[1].style.color = "green";
//         psmsg[1].innerHTML = "done uc";
//     }
//     else {
//         console.log("at least one upper case character");
//         psmsg[1].style.display = "flex";
//         psmsg[1].style.color = "red";
//         psmsg[1].innerHTML = "at least one upper case character";
//     }
//     if (num.test(pass)) {
//         console.log("is num match");
//         psmsg[2].style.display = "flex";
//         psmsg[2].style.color = "green";
//         psmsg[2].innerHTML = "done num";
//     }
//     else {
//         console.log("at least enter one number");
//         psmsg[2].style.display = "flex";
//         psmsg[2].style.color = "red";
//         psmsg[2].innerHTML = "at least one number";
//     }
//     if (sp.test(pass)) {
//         console.log("is sp match");
//         psmsg[3].style.display = "flex";
//         psmsg[3].style.color = "green";
//         psmsg[3].innerHTML = "done special";
//     }
//     else {
//         console.log("at least one special character");
//         psmsg[3].style.display = "flex";
//         psmsg[3].style.color = "red";
//         psmsg[3].innerHTML = "at least one special character";
//     }
//     if (pass.length > 3 && pass.length < 9) {
//         console.log("password length is correct");
//         psmsg[4].style.display = "flex";
//         psmsg[4].style.color = "green";
//         psmsg[4].innerHTML = "password must be greater 4 character and less 8 character length";
//     }
//     else {
//         console.log("password length is not  correct");
//         psmsg[4].style.display = "flex";
//         psmsg[4].style.color = "red";
//         psmsg[4].innerHTML = "password must be greater 4 character and less 8 character length";
//     }
//     if ((l1.test(pass)) && (u1.test(pass)) && (sp.test(pass)) && (num.test(pass))) {
//         console.log("username and password is correct");
//         // usmsg.style.display = "";
//         psmsg[0].style.display = "none";
//         psmsg[1].style.display = "none";
//         psmsg[2].style.display = "none";
//         psmsg[3].style.display = "none";
//         psmsg[4].style.display = "none";
//         window.location.href = "home1.html";
//     }
//     else {
//         console.log("password is not correct");
//     }

// };




// // user.addEventListener('blur', () => {
// //     console.log("enter name");
// //     let re = /^[A-Za-z]([A-Za-z0-9S@]){0,7}$/;
// //     let str = user.value;
// // let str1 = pass.value;
// //     console.log(re, str);

// //     if(re.test(str)=="")
// //     {
// //         usmsg.innerHTML="please enter username";
// //     }
// //     else if (re.test(str)) {
// //         console.log("name is correct");
// //         usmsg.innerHTML="name is correct";
// //         // alert("name is correct");
// //         // e.target.setCustomValidity("");
// //     }
// //     else {
// //         console.log('name is not coorect');
// //         usmsg.style.display="flex";
// //         usmsg.style.color="red";
// //         usmsg.innerHTML="please enter valid username"
// //         // alert("name is not correct");
// //         // e.target.setCustomValidity("name not correct");
// //     }

// // })

// // pass.addEventListener('blur', () => {
// //     console.log("enter password");
// //     let re = /^[a-zA-Z0-9][a-zA-Z0-9@]{0,7}$/;
// //     let str = pass.value;
// //     console.log(re, str);

// //     if (re.test(str)) {
// //         console.log("password is matched");
// //         psmsg.innerHTML="";
// //     }
// //     else {
// //         console.log("password is not matched");
// //         psmsg.innerHTML="please enter valid password"
// //         // e.target.setCustomValidity("ps not correct");
// //     }
// // })



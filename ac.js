let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let count = 0;
let ac1 = document.getElementById('ac1');
let carpenter1 = document.getElementById('carpenter1');
let salon1 = document.getElementById('salon1');
let elect1 = document.getElementById('elect1');
let plumber1 = document.getElementById('plumber1');
let painter1 = document.getElementById('painter1');
let bool=false;
let l1=document.getElementById("l1");
if (ac1 == "Ac Services") {
    if (s1 == "Patel Services")
    {
        add_first();     
    }
    else if (s4 == "Indus Services")
        add_second();
    else
        add_third();
}
else if (carpenter1 == "Carpenter Services") {
    if (s1 == "Patel Services")
        add_first();
    else if (s4 == "Indus Services")
        add_second();
    else
        add_third();
}
else if (elect1 == "Electrician Services") {
    if (s1 == "Patel Services")
        add_first();
    else if (s4 == "Indus Services")
        add_second();
    else
        add_third();
}
else if (salon1 == "Salon Services") {
    if (s1 == "Patel Services")
        add_first();
    else if (s4 == "Indus Services")
        add_second();
    else
        add_third();
}

else if (plumber1 == "Plumber Services") {
    if (s1 == "Patel Services")
        add_first();
    else if (s4 == "Indus Services")
        add_second();
    else
        add_third();
}
else {
    if (s1 == "Patel Services")
        add_first();
    else if (s4 == "Indus Services")
        add_second();
    else
        add_third();
}
function add_first() {

    if (b1.innerText == "ADD") {
        console.log("remove");
        b1.innerText = "REMOVE";
        count++;
        bool=true;
        l1.style.display="flex";
        window.location.href="cart.html";
        
        

    }
    else {
        console.log("ADD");
        b1.innerText = "ADD";
        count--;
        bool=false;
    }

}
function add_second() {
    if (b2.innerText == "ADD") {
        console.log("remove");
        b2.innerText = "REMOVE";
    }
    else {
        console.log("ADD");
        b2.innerText = "ADD";
    }
}
function add_third() {
    if (b3.innerText == "ADD") {
        console.log("remove");
        b3.innerText = "REMOVE";
    }
    else {
        console.log("ADD");
        b3.innerText = "ADD";
    }
}

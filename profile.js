var emailpattern = /^([A-Za-z0-9_\-])+\@([A-Za-z0-9_\-])+[\.]{0,1}[A-Za-z]{0,4}/;
var zippattern = /[0-9]{5}/;
var telpattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
var validated;
var curpw;
var curcpw;
window.onload = function(){
    var display_name = document.getElementById("display_name");
    var email = document.getElementById("email");
    var phone_number = document.getElementById("phone_number");
    var zipcode = document.getElementById("zipcode");
    var password = document.getElementById("password");
    var cpassword = document.getElementById("cpassword");
    var harddname = document.getElementById("harddname");
    var hardemail = document.getElementById("hardemail");
    var hardphone = document.getElementById("hardphone");
    var hardzip = document.getElementById("hardzip");
    var hardpw = document.getElementById("hardpw");
    var hardcpw = document.getElementById("hardcpw");
    var dnamechange = document.getElementById("dnamechange");
    var emailchange = document.getElementById("emailchange");
    var phonechange = document.getElementById("phonechange");
    var zipchange = document.getElementById("zipchange");
    var pwchange = document.getElementById("pwchange");
    var cpwchange = document.getElementById("cpwchange");
}

function clear(){
    validated = true;
    dnamechange.innerHTML = "";
    emailchange.innerHTML = " ";
    phonechange.innerHTML = " ";
    zipchange.innerHTML = " ";
    pwchange.innerHTML = " ";
    cpwchange.innerHTML = " "; 
    
}

function validate(){

    if((password.value=="" && cpassword.value!="") || (password.value!=""&& cpassword.value=="")){
        pwchange.innerHTML = "Please enter both password and password confirmation."
        cpwchange.innerHTML = "Please enter both password and password confirmation."
        validated = false;
    }
    else if(password!=""&&cpassword.value!=""&&password.value != cpassword.value){
        pwchange.innerHTML = "Password doesn't match."
        cpwchange.innerHTML = "Password doesn't match."
        validated = false;
    }
    if(email.value!="" && !emailpattern.test(email.value)){
        emailchange.innerHTML = "Please check the input email format";
        validated = false;
    }

    if(phone_number.value!="" && !telpattern.test(phone_number.value)){
        phonechange.innerHTML = "Please check the input phone number format";
        validated = false;
    }

    if(zipcode.value!="" && !zippattern.test(zipcode.value)){
        zipchange.innerHTML = "Please check the input zipcode format";
        validated = false;
    }
}

function OnUpdate(){
    clear();
    validate();
    if(display_name.value != "" && validated && display_name.value != harddname.innerHTML){
        dnamechange.innerHTML = "Display Name updated from "+harddname.innerHTML+" to "+display_name.value;
        harddname.innerHTML = display_name.value;
        display_name.value = "";
    }

    if(email.value != ""&& validated && email.value != hardemail.innerHTML){
        emailchange.innerHTML = "Email updated from "+hardemail.innerHTML+" to "+email.value;
        hardemail.innerHTML = email.value;
        email.value = "";
    }
    
    if(phone_number.value != ""&& validated && phone_number.value != hardphone.innerHTML){
        phonechange.innerHTML = "Phone Number updated from "+hardphone.innerHTML+" to "+phone_number.value;
        hardphone.innerHTML = phone_number.value;
        phone_number.value = "";
    }

    if(zipcode.value != ""&& validated && zipcode.value != hardzip.innerHTML){
        zipchange.innerHTML = "Zipcode updated from "+hardzip.innerHTML+" to "+zipcode.value;
        hardzip.innerHTML = zipcode.value;
        zipcode.value = "";
    }

    if(password.value != ""&& validated && password.value != curpw){
        curpw = password.value; //keep track of current password
        pwchange.innerHTML = "Password updated";
        password.value = "";
    }
    if(cpassword.value != ""&& validated && cpassword.value != curcpw){
        curcpw = cpassword.value;
        cpwchange.innerHTML = "Password confirmed";
        cpassword.value = "";
    }

}
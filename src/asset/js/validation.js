function submit() {
    var name=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var pass=document.getElementById("pass").value;
    var gender=document.getElementById("dropbtn1").value;
    var dob=document.getElementById("dob").value;
    var phone=document.getElementById("phone").value;
    var cs=document.getElementById("line").value;
    var country=document.getElementById("dropbtn2").value;

    function validateEmail(mail){
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(mail))
            return true;
        else
            return false;
    }
    function validatedob(dob) {
        var reg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        if (reg.test(dob))
            return true;
        else
            return false;
    }
    function validatephone(phone) {
        var reg = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
        if (reg.test(phone))
            return true;
        else
            return false;
    }

    if (name=="")
        alert("Please enter your name.");
    else if (mail=="")
        alert("Please enter your mail id.");
    else if (validateEmail(mail)==false)
        alert("Please enter valid mail id.");
    else if (pass=="" || pass.length<6)
        alert("Please enter valid password. \nMinimum password length should 6.");
    else if (gender=="")
        alert("Please select your gender.");
    else if (dob=="" || validatedob(dob)==false)
        alert("Please enter date of birth in specified format.");
    else if (phone=="" || validatephone(phone)==false)
        alert("Please enter valid mobile number");
    else if (cs=="" || country=="")
        alert("Please fill all details.");
}

function login(){
    var otp=document.getElementById("otp").value;
    var phone=document.getElementById("phone").value;

    function validatephone(phone) {
        var reg = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
        if (reg.test(phone))
            return true;
        else
            return false;
    }

    if (phone=="" || validatephone(phone)==false)
        alert("Please enter valid mobile number.");
    else if (otp=="")
        alert("Please enter otp.")
}

function appoint(){
    
}
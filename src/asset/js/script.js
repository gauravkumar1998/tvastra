window.onload=function(){
    this.document.getElementById("box1").click();
}

function work(id){
    switch (id) {
        case 1:
            allclear();
            document.getElementById("box1").classList.add("clicked");
            document.getElementById("img1").classList.add("active");
            break;
        case 2:
            allclear();
            document.getElementById("box2").classList.add("clicked");
            document.getElementById("img2").classList.add("active");
            break;
        case 3:
            allclear();
            document.getElementById("box3").classList.add("clicked");
            document.getElementById("img3").classList.add("active");
            break;
        case 4:
            allclear();
            document.getElementById("box4").classList.add("clicked");
            document.getElementById("img4").classList.add("active");
            break;
        case 5:
            allclear();
            document.getElementById("box5").classList.add("clicked");
            document.getElementById("img5").classList.add("active");
            break;
        case 6:
            allclear();
            document.getElementById("box6").classList.add("clicked");
            document.getElementById("img6").classList.add("active");
            break;
        case 7:
            allclear();
            document.getElementById("box7").classList.add("clicked");
            document.getElementById("img7").classList.add("active");
            break;
        default:
            break;
    }
}
function allclear() {
    document.getElementById("img1").classList.remove("active");
    document.getElementById("img2").classList.remove("active");
    document.getElementById("img3").classList.remove("active");
    document.getElementById("img4").classList.remove("active");
    document.getElementById("img5").classList.remove("active");
    document.getElementById("img6").classList.remove("active");
    document.getElementById("img7").classList.remove("active");
    
    document.getElementById("box1").classList.remove("clicked");
    document.getElementById("box2").classList.remove("clicked");
    document.getElementById("box3").classList.remove("clicked");
    document.getElementById("box4").classList.remove("clicked");
    document.getElementById("box5").classList.remove("clicked");
    document.getElementById("box6").classList.remove("clicked");
    document.getElementById("box7").classList.remove("clicked");
}

function burger(){
    document.getElementById("burger1").classList.toggle("show");
}

function dropdown1() {
    document.getElementById("gender").classList.toggle("show");
}
function dropdown2() {
    document.getElementById("country").classList.toggle("show");
}

window.onclick=function(event){
    if (!event.target.matches('#dropbtn1')) {
        document.getElementById("gender").classList.remove("show");
    }
    if (!event.target.matches('#dropbtn2')) {
        document.getElementById("country").classList.remove("show");
    }
    if (!event.target.matches('#burger')) {
        document.getElementById("burger1").classList.remove("show");
    }
}

function select1(id){
    switch (id) {
        case 1:
            document.getElementById("dropbtn1").value="Male";
            document.getElementById("gender").classList.toggle("show");
            break;
        case 2:
            document.getElementById("dropbtn1").value="Female";
            document.getElementById("gender").classList.toggle("show");
            break;
        default:
            break;
    }
}
function select2(id){
    switch (id) {
        case 1:
            document.getElementById("dropbtn2").value="India";
            document.getElementById("country").classList.toggle("show");
            break;
        case 2:
            document.getElementById("dropbtn2").value="Russia";
            document.getElementById("country").classList.toggle("show");
            break;
        case 3:
            document.getElementById("dropbtn2").value="China";
            document.getElementById("country").classList.toggle("show");
            break;
        case 4:
            document.getElementById("dropbtn2").value="United Kingdom";
            document.getElementById("country").classList.toggle("show");
            break;
        case 5:
            document.getElementById("dropbtn2").value="United States";
            document.getElementById("country").classList.toggle("show");
            break;
        case 6:
            document.getElementById("dropbtn2").value="Bhutan";
            document.getElementById("country").classList.toggle("show");
            break;
        default:
            break;
    }
}

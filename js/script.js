var i = 0;
var txt = "return \"Welcome!\""; 
var speed = 50; 

function typeWriter() {

    var bar = 0;
    while(bar < 6){
        if(bar % 2 == 0){
            document.getElementById("ret").innerHTML = "|"
        }else{
            document.getElementById("ret").innerHTML = " "
        }
        setTimeout(typeWriter, speed*2);
    }

    if (i < txt.length) {
        document.getElementById("ret").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.addEventListener("keydown", pwd);

function pwd(e) {

    console.log(e);
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == '82') {
        document.getElementById("pass").innerHTML = "r****r*****";
        document.getElementById("error1").innerHTML = "";
    }



    else if (key_pressed == '79') {
        document.getElementById("pass").innerHTML = "ro***r*****";
        document.getElementById("error1").innerHTML = "";
    }


    else if (key_pressed == '66') {
        document.getElementById("pass").innerHTML = "robb*r*****";
        document.getElementById("error1").innerHTML = "";
    }




    else if (key_pressed == '69') {
        document.getElementById("pass").innerHTML = "robber***ee";
        document.getElementById("error1").innerHTML = "";
    }

    else if (key_pressed == '83') {
        document.getElementById("pass").innerHTML = "robbers**ee";
        document.getElementById("error1").innerHTML = "";
    }

    else if (key_pressed == '70') {
        document.getElementById("pass").innerHTML = "robbersf*ee";
        document.getElementById("error1").innerHTML = "";
    }


    else if (key_pressed == '76') {
        document.getElementById("pass").innerHTML = "robbersflee";
        document.getElementById("error1").innerHTML = "";
    }


    else {
        document.getElementById("error1").innerHTML = "ERROR--Intruder?";

    }
}

function enter() {
    document.getElementById("password").style.display = "hide";


}

Webcam.set({
    height: 350,
    width: 350,
img_format: 'png',
png_quality: 90
});
    
camera=document.getElementById("camera");

Webcam.attach('#camera');
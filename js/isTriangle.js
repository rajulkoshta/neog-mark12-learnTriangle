const inputAngle = document.querySelectorAll(".input");
const isTriangle = document.querySelector(".btn-primary");
const reload = document.querySelector(".btn-secondary");
const message = document.querySelector("#message");
const hamburgerIcon = document.querySelector(".icon");

function cheackIsTriangle() {
    hideMessage();
    const angle1 = Number(inputAngle[0].value);
    const angle2 = Number(inputAngle[1].value);
    const angle3 = Number(inputAngle[2].value);
    if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
        showMessage("invalid input");
    } else {
        const sum = calculateSumOfAngles(angle1, angle2, angle3);
        if (sum === 180) {
            showMessage("Ohh yayy, the angles form the triangle.");
        } 
        else if(sum > 180){
            showMessage("Traingles are formed when sum of all three angles is 180 not beyond that!")
        }
        else {
            showMessage("uuff, the angles does not form the triangle.")
        }
    }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
    let sum = angle1 + angle2 + angle3;
    return sum;
}

isTriangle.addEventListener("click", cheackIsTriangle);

reload.addEventListener("click", refresh);

function refresh() {
    window.location.reload("refresh");
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}



hamburgerIcon.addEventListener("click", responsiveFunction);

function responsiveFunction() {
    var x = document.querySelector("#myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
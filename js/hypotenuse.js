const sideOne = document.querySelector("#side1");
const sideTwo = document.querySelector("#side2");
const calculateBtn = document.querySelector(".btn-primary");
const reloadBtn = document.querySelector(".btn-secondary");
const message = document.querySelector("#message");
const hamburgerIcon = document.querySelector(".icon");

calculateBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
    const a = sideOne.value;
    const b = sideTwo.value;
    if (a <= 0 || b <= 0) {
        showMessage("invalid input");
    } else {
        const LenOfHypo = calculateLengthOfHypotenuse(a, b);
        if (LenOfHypo === "") {
            showMessage("invalid sides");
        } else {
            showMessage("length of hypotenuse is : " + LenOfHypo);
        }
    }
}

function calculateLengthOfHypotenuse(a, b) {
    let len = Math.sqrt((a * a) + (b * b));
    return len;
}


function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

reloadBtn.addEventListener("click", refresh);

function refresh() {
    window.location.reload("refresh");
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
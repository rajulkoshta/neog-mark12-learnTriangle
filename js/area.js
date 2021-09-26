const baSe = document.querySelector("#base");
const heiGht = document.querySelector("#height");
const calculateBtn = document.querySelector(".btn-primary");
const reloadBtn = document.querySelector(".btn-secondary");
const message = document.querySelector("#message");
const hamburgerIcon = document.querySelector(".icon");


calculateBtn.addEventListener("click", calculateAreaOfTriangle);

function calculateAreaOfTriangle() {
    const b = baSe.value;
    const h = heiGht.value;
    if (b <= 0 || h <= 0) {
        showMessage("invalid input");
    } else {
        const area = calculateArea(b, h);
        if (area === "") {
            showMessage("invalid input");
        } else {
            showMessage("Area of triangle is : " + area.toFixed(2));
        }
    }
}

function calculateArea(b, h) {
    let area = (1 / 2) * b * h;
    return area;
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
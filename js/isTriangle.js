const angleOne = document.querySelector("#angle1");
const angleTwo = document.querySelector("#angle2");
const angleThree = document.querySelector("#angle3");
const isTriangle = document.querySelector(".btn-primary");
const reload = document.querySelector(".btn-secondary");
const message = document.querySelector("#message");

function cheackIsTriangle(){
    hideMessage();
    const angle1 = angleOne.value;
    const angle2 = angleTwo.value;
    const angle3 = angleThree.value;
    const sum = calculateSumOfAngles(angle1,angle2,angle3);
    if(sum===180){
        showMessage("Ohh yayy, the angles form the triangle.");
    }else{
        showMessage("uuff, the angles does not form the triangle.")
    }
}

function calculateSumOfAngles(angle1,angle2,angle3){
    let sum= Number(angle1) + Number(angle2) +Number(angle3);
    return sum;
}

isTriangle.addEventListener("click",cheackIsTriangle);

reload.addEventListener("click",refresh);
function refresh(){
    window.location.reload("refresh");
}    
    function hideMessage(){
        message.style.display="none";
    }

    function showMessage(msg){
        message.style.display="block";
        message.innerText = msg;
    }

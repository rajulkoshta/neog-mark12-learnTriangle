const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".btn-primary");
const reloadBtn = document.querySelector(".btn-secondary");
const message = document.querySelector("#message");

const correctAnswers = ["90°", "rightangled", "onerightangles", "121620", "equilateraltriangle"];

submitBtn.addEventListener("click",calculateScore);
function calculateScore(){
    hideMessage();
    let score =0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
      index = index + 1;  
    }
    showMessage("Your score is " + score +".");
}

function hideMessage(){
    message.style.display = "none";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg ;
}

reloadBtn.addEventListener("click",refresh);
function refresh(){
    window.location.reload("refresh");
}



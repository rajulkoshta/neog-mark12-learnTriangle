const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".btn-primary");
const message = document.querySelector("#message");
const hamburgerIcon = document.querySelector(".icon");

const correctAnswers = ["90°", "rightangled", "onerightangles", "121620", "equilateraltriangle"];


function showMessage(msg){
  message.style.display = "block";
  message.innerText = msg ;
}


function calculateScore(event){
  event.preventDefault();
    let score = 0;
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


quizForm.addEventListener("submit",calculateScore);


hamburgerIcon.addEventListener("click",responsiveFunction);
function responsiveFunction() {
    var x = document.querySelector("#myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }    
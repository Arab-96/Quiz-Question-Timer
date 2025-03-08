const quizData = [
    {
        question: "What is the capital of Nigeria?",
        options: [
            "Kwara",  "Lagos",  "Abuja",  "Kaduna"
        ],
        answer:  "Abuja"
    },
    {
        question: "What is the capital of France?",
        options: [
            "Berlin",  "Madrid",  "Paris",  "Lisbon"
        ],
        answer:  "Paris"
    },
    {
        question: "Which language is used  for web development?",
        options: [
            "Python",  "Java",  "C++",  "HTML"
        ],
        answer:  "HTML"
    },
    {
        question: "Which year did Nigeria gained independence?",
        options: [
            "1960",  "1914",  "1900",  "1958"
        ],
        answer:  "1960"
    },
    {
        question: "How many days did muslim fast during the month of Ramadan?",
        options: [
            "28days",  "30days",  "29days",  "29/30days"
        ],
        answer:  "29/30days"
    },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timeInterval;
const timerEl = document.getElementById("time");
const questionEl = document.querySelector(".question");
const optionEl = document.querySelector(".options");
const resultEl = document.querySelector(".result");
const scoreEl = document.getElementById("score");
const restartBtn = document.querySelector(".restart-button");

function loadQuestion(){
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    optionEl.innerHTML = "";

    currentQuiz.options.forEach((option) =>{
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionEl.appendChild(button);
    }
);
}
loadQuestion()
function checkAnswer (selectedOption){
    if (selectedOption === quizData[currentQuestion].answer){
        score++;
    }
    currentQuestion++;
    loadQuestion()
}


function startTimer(){
    timerInterval = 
    setInterval(() => {
        timeLeft--;
        timerEl.textContent= timeLeft;
        if (timeLeft <=0){
            endQuiz ()
        }
    }, 1000);

}
startTimer()

function endQuiz(){
    clearInterval(timerInterval);
    questionEl.style.display = "none";
    optionEl.style.display = "none";
    resultEl.style.display = "block";
    scoreEl.textContent = score;
    restartBtn.style.display = "block";
}
restartBtn.addEventListener("click", () =>{
    currentQuestion=0;
    score=0;
    timeLeft=30;
    timerEl.textContent = timeLeft;
    questionEl.style.display = "block";
    optionEl.style.display = "block";
    resultEl.style.display = "none";
    restartBtn.style.display = "none";
    loadQuestion()
    startTimer()
    
})
endQuiz()

var questionsArray = [
    // 1
    {question: "Commonly Used data type DO NOT include ________.", 
    // answer: "alerts", 
    options: {1: "Alerts", 2: "Boolean", 3: "String", 4: "Number"},
    correct: 1},
    // 2
    {question: "A very useful tool for debugging is ________.", 
    // answer: "debugger;", 
    options: {1: "console.log()", 2: "Terminal/Bash", 3: "for loops", 4: "JavaScript"}, 
    correct: 5},
    // 3
    {question: "Can JavaScript be used for Front-End Web development?", 
    // answer: "Yes", 
    options: {1: "No", 2: "Yes", 3: "Sometimes", 4: "It depends"}, 
    correct: 10},
    // 4
    {question: "HTML stands for ________.", 
    // answer: "Hypertext Markup Language", 
    options: {1: "HyperText Makeup Language", 2: "Hidden Text Markup Lesson", 3: "HyperText Markup Language", 4: "How tiny molecules live"}, 
    correct: 13},
    // 5
    {question: "Arrays in JavaScript can be used to store ________.", 
    // answer: "All of the mentioned", 
    options: {1: "Functions", 2: "Objects", 3: "All of the mentioned", 4: "Numbers"}, 
    correct: 15},
];
var startBtnEl = document.querySelector("#startBtn");
var title = document.querySelector("#title");
var paragraph1 = document.querySelector(".paragraph1");
var paragraph2 = document.querySelector(".paragraph2");
var optionsContainer = document.querySelector("#optionsContainer");
var validatorSection = document.querySelector(".validatorSection");
var checkAnswer = document.querySelector("#checkAnswer");
var timeLeft = document.querySelector("#timeLeft");
var dataId = 1;
var questionsIndex = 0;

var questionsLoop = function() {
    if (questionsIndex < 5) {
        title.textContent = `Question Number ${questionsIndex +1}`;
        paragraph1.textContent = questionsArray[questionsIndex].question;
        return
    }
    if (questionsIndex = 5) {
        title.textContent = "All Done!";
        paragraph1.textContent = `Your final score is ${timeLeft.innerText}.`
    }
}

var createOptions = function() {
    paragraph2.innerHTML = "";
    optionsContainer.innerHTML = "";
    for (questionsIndex; questionsIndex < questionsArray.length; questionsIndex++) {
            for (let i = 1; i < 5; i++) {
                var optionsBtn = document.createElement("button");
                optionsBtn.setAttribute('id', `option${dataId}`);
                dataId++
                optionsBtn.className = "option-btn"
                optionsBtn.textContent = questionsArray[questionsIndex].options[i]
                optionsContainer.appendChild(optionsBtn);
               
            }
    questionsIndex++
    return optionsBtn
    }
} 



var taskButtonHandler = function(event) {
    var targetEl = event.target;
    // START BTN 
    if (targetEl.matches("#startBtn")) {
            questionsLoop()
            createOptions()
            var startBtn = document.querySelector("#startBtnHolder");
            startBtn.remove()
    }
    // ANSWERS 
    if (targetEl.matches("#option1") || targetEl.matches("#option5") || targetEl.matches("#option10") || targetEl.matches("#option15") || targetEl.matches("#option19")) {
        checkAnswer.textContent = "CORRECT!";
        setTimeout(function(){
        checkAnswer.textContent = "";
        }, 500)
        questionsLoop()
        createOptions()
    } else if (targetEl.matches("#option1") ||
    targetEl.matches("#option2") ||
    targetEl.matches("#option3") ||
    targetEl.matches("#option4") ||
    targetEl.matches("#option6") ||
    targetEl.matches("#option7") ||
    targetEl.matches("#option8") ||
    targetEl.matches("#option9") ||
    targetEl.matches("#option11") ||
    targetEl.matches("#option12") ||
    targetEl.matches("#option13") ||
    targetEl.matches("#option14") ||
    targetEl.matches("#option16") ||
    targetEl.matches("#option17") ||
    targetEl.matches("#option18") ||
    targetEl.matches("#option20")) {
        checkAnswer.textContent = "WRONG!";
        setTimeout(function(){
            checkAnswer.textContent = "";
        }, 500)
        questionsLoop()
        createOptions()
    }
}


var body = document.querySelector("body");
body.addEventListener("click", taskButtonHandler)
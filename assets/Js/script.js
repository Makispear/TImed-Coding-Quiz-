var questionsArray = [
    // 1
    {question: "Commonly Used data type DO NOT include ________.", 
    // answer: "alerts", 
    options: {1: "Alerts", 2: "Boolean", 3: "String", 4: "Number"},
    correct: 1},
    // 2
    {question: "A very useful tool for debugging is ________.", 
    // answer: ";", 
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
var contentHolder = document.querySelector("#contentHolder");
var main = document.querySelector("#main");
var isComplete = false;
var score = "";
var dataId = 1;
var questionsIndex = 0;
var startCount = -1;

var questionsLoop = function() {
if (questionsIndex < questionsArray.length) {
    title.textContent = `Question Number ${questionsIndex +1}`;
    paragraph1.textContent = questionsArray[questionsIndex].question;
    return
}
if (questionsIndex = questionsArray.length) {
    isComplete = true;
    if (isComplete === true) {
        return
    }
}
}

var createOptions = function() {
    paragraph2.innerHTML = "";
    optionsContainer.innerHTML = "";
    for (questionsIndex; questionsIndex < questionsArray.length; questionsIndex++) {
            for (let i = 1; i < 5; i++) {
                var createOptionsBtn = document.createElement("button");
                createOptionsBtn.setAttribute('id', `option${dataId}`);
                dataId++
                createOptionsBtn.className = "option-btn"
                createOptionsBtn.textContent = questionsArray[questionsIndex].options[i]
                optionsContainer.appendChild(createOptionsBtn);
            }
    questionsIndex++
    return createOptionsBtn
    }
} 

var stopTimer = function() {
    if (targetEl.event === "#options17" ||
    targetEl.event === "#options18" || 
    targetEl.event === "#options19" || 
    targetEl.event === "#options20") {
        clearInterval(startCount)
    }
}

var startingTime = timeLeft.textContent = (questionsArray.length * 10);
var countDown = startingTime;

var SetTimeInterval =  function() {
        // START BTN 
        questionsLoop()
        createOptions()
        var startBtn = document.querySelector("#startBtnHolder");
        startBtn.remove()

        var startCount = setInterval(() => {
            timeLeft.textContent = `Time Left: ${countDown - 1}`;

            if (isComplete === false) {
                
                 if (countDown > 0) {
                        countDown--;
                        if (countDown <= 0) {
                            
                    isComplete = true;

                    clearInterval(startCount);
                    // countDown = startingTime;
                    timeLeft.textContent = `Time's up`;
    
                    // CODE FOR SHOWING NEXT PAGE 
                    title.textContent = "All Done!";
                    paragraph1.textContent = `Your final score is ${countDown}.`;
                    paragraph2.textContent = "";
                    optionsContainer.innerHTML = "";
                    let createDiv = document.createElement("div");
                    var CreateForm = document.createElement("form");
            
                    var createLabel = document.createElement("label");
                    createLabel.setAttribute("for", "initials");
                    createLabel.textContent = "Enter Initials:";
            
                    var createInput = document.createElement("input");
                    createInput.setAttribute("id", "initials");
                    createInput.setAttribute("type", "text");
                    createInput.setAttribute("placeholder", "Ex: M.T (for Mike Tyson)");
            
                    var createSubmit = document.createElement("button");
                    createSubmit.setAttribute("id", "submitBtn")
                    createSubmit.textContent = "Submit";
            
            
                    CreateForm.appendChild(createLabel);
                    CreateForm.appendChild(createInput);
                    createDiv.appendChild(CreateForm);
                    contentHolder.appendChild(createDiv);
                    contentHolder.appendChild(createSubmit);
                    return countDown;
                        }
                 }
            } else if (isComplete === true) {
                    // isComplete = true;
                    clearInterval(startCount);
                    // countDown = startingTime;
                    timeLeft.textContent = `You beat the clock!`;
    
                    // CODE FOR SHOWING NEXT PAGE 
                    title.textContent = "All Done!";
                    paragraph1.textContent = `Your final score is ${countDown}.`;
                    paragraph2.textContent = "";
                    optionsContainer.innerHTML = "";
                    let createDiv = document.createElement("div");
                    var CreateForm = document.createElement("form");
            
                    var createLabel = document.createElement("label");
                    createLabel.setAttribute("for", "initials");
                    createLabel.textContent = "Enter Initials:";
            
                    var createInput = document.createElement("input");
                    createInput.setAttribute("id", "initials");
                    createInput.setAttribute("type", "text");
                    createInput.setAttribute("placeholder", "Ex: M.T (for Mike Tyson)");
            
                    var createSubmit = document.createElement("button");
                    createSubmit.setAttribute("id", "submitBtn")
                    createSubmit.textContent = "Submit";
            
            
                    CreateForm.appendChild(createLabel);
                    CreateForm.appendChild(createInput);
                    createDiv.appendChild(CreateForm);
                    contentHolder.appendChild(createDiv);
                    contentHolder.appendChild(createSubmit);
                    
                    clearInterval(startCount)
                    return countDown;
                }

        }, 1000)
    }

var optionsChecker = function(event) {
    var targetEl = event.target;
    //IF USER CHOOSES ANSWER FROM LAST QUESTION CLEAR THE INTERVAL (THE FUNCTION )
    if (targetEl.event === "#options17" ||
    targetEl.event === "#options18" || 
    targetEl.event === "#options19" || 
    targetEl.event === "#options20") {
        clearInterval(startCount)
    }
    // ANSWERS 
    if (targetEl.matches("#option1") 
    || targetEl.matches("#option5") 
    || targetEl.matches("#option10") 
    || targetEl.matches("#option15") 
    || targetEl.matches("#option19")) {
        checkAnswer.textContent = "CORRECT!";
        setTimeout(function(){
        checkAnswer.textContent = "";
        }, 400)
        questionsLoop()
        createOptions()
    } else if (
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
        countDown = countDown -10
        checkAnswer.textContent = "WRONG!";
        setTimeout(function(){
            checkAnswer.textContent = "";
        }, 400)
        questionsLoop()
        createOptions()
    }
}

// FOR STORING [SCORE, INITIALS] 
var scoreSheet = [];

var submitScore = function(event) {
    event.preventDefault()
    var targetEl = event.target; 
    var formEl = document.querySelector("form")


    if (targetEl.matches("#submitBtn")) {
        var inputText = document.querySelector("#initials");
        var initials = inputText.value;
        var scoreList = {score: `${countDown}`, initials: `${initials}`};


        // testing here ------------------------------

        if (localStorage === null) {
            return
        } else if (localStorage.getItem("Score")) {
            var retrievedData = JSON.parse(localStorage.getItem("Score"));
            retrievedData.s
            localStorage.setItem('Score', JSON.stringify(scoreList));
        }
        localStorage.setItem('Score', JSON.stringify(scoreList));

        //---------------------------------------------------

        var submitBtn = document.querySelector("#submitBtn");
        submitBtn.remove();

        //create next page
        title.textContent = "High scores";
        paragraph1.textContent = "";
        paragraph2.textContent = "";

        formEl.remove();


        let createDiv = document.createElement("div");
        createDiv.setAttribute("class", "score-list-div");

        var createOlEl = document.createElement("ol");
        createOlEl.setAttribute("class", "score-list-container");

        var createScoreList = document.createElement("li");
        createScoreList.setAttribute("class", "score-list-item");
        createScoreList.textContent = `${initials} - ${countDown}`;

        // append the scores 
        createOlEl.appendChild(createScoreList);
        createDiv.appendChild(createOlEl);
        contentHolder.appendChild(createDiv);

        // create btns 
        var createBtnDiv = document.createElement("div");
        createBtnDiv.setAttribute("class", "back-clear-btns");
        
        var backBtn = document.createElement("button")
        backBtn.setAttribute("id", "back-btn");
        backBtn.textContent = "back"

        var clearScoresBtn = document.createElement("button");
        clearScoresBtn.setAttribute("id", "clear-btn");
        clearScoresBtn.textContent = "Clear Scores";

        // append buttons 
        createBtnDiv.appendChild(backBtn);
        createBtnDiv.appendChild(clearScoresBtn);
        contentHolder.appendChild(createBtnDiv);
    }

    if (targetEl.matches("#back-btn")) {
        //refresh page logic

        // title.textContent = "Coding Quiz challenge";
        // paragraph1.textContent = "Try to answer the following code-related questions within the time limit.";
        // paragraph2.textContent = "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
        // let createDiv = document.querySelector(".score-list-div");
        // createDiv.innerHTML = "";
        // let buttons = document.querySelector(".back-clear-btns");
        // buttons.remove();

        // var optionsContainer = document.querySelector("#optionsContainer");
        // var insertStartbtn = () => {
        //     var createStartDiv = document.createElement("div");
        //     createStartDiv.setAttribute("id", "startBtnHolder");
        //     var createStartBtn = document.createElement("button");
        //     createStartBtn.textContent = "Start Quiz";
        //     createStartBtn.setAttribute("id", "startBtn");

        //     createStartDiv.appendChild(createStartBtn);
        //     debugger
        //     console.log(createStartDiv)
        //     debugger
        //     return createStartDiv
        // }

        // insertAfter = function (optionsContainer, insertStartbtn) {
        //     debugger
        //     optionsContainer.parentNode.insertBefore(insertStartbtn);
        // }

        location.reload()
        
    }
    if (targetEl.matches("#clear-btn")) {
        let orderedListEl = document.querySelector(".score-list-container");
        while (orderedListEl.firstChild) {
            orderedListEl.removeChild(orderedListEl.firstChild);
        }
        localStorage.clear();
    }
}


var main = document.querySelector("#main");
main.addEventListener("click", optionsChecker);

main.addEventListener('click', submitScore)

startBtn.addEventListener("click", SetTimeInterval);


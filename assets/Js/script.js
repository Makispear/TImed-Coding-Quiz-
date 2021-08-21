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
                    createInput.setAttribute("type", "text")
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
        countDown = countDown + 10
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
        countDown = countDown - 10
        checkAnswer.textContent = "WRONG!";
        setTimeout(function(){
            checkAnswer.textContent = "";
        }, 400)
        questionsLoop()
        createOptions()
    }
}

// SORTING SCORES 
function compare(a, b) {
    return b.score - a.score
}

var pageAfterSubmit = () => {
    var submitBtn = document.querySelector("#submitBtn");
    submitBtn.remove();
    var formEl = document.querySelector("form")
    formEl.remove();
    title.textContent = "High scores";
    paragraph1.textContent = "";
    paragraph2.textContent = "";
} 


var taskHandler = function(event) {
    event.preventDefault()
    var targetEl = event.target; 

    //IF SUBMIT BTN IS PRESSED
    if (targetEl.matches("#submitBtn")) {
        var initials = document.querySelector("#initials").value;
        var scoreList = {score: `${countDown}`, initials: `${initials}`};

        // LOCAL STORAGE 
        var retrievedData = JSON.parse(localStorage.getItem("Scores")) || [];
        retrievedData.push(scoreList);
        localStorage.setItem("Scores", JSON.stringify(retrievedData));

        pageAfterSubmit()

        let ScoreListContainer = document.createElement("div");
        ScoreListContainer.setAttribute("class", "score-list-div");

        var createOlEl = document.createElement("ol");
        createOlEl.setAttribute("class", "score-list-container");
        for (let i = 0; i < retrievedData.length; i++) {
            retrievedData.sort(compare);
            let createScoreList = document.createElement("li");
            createScoreList.setAttribute("class", "score-list-item");
            createScoreList.textContent = `(${retrievedData[i].score}) ${retrievedData[i].initials}`;
            // createScoreList.textContent = `${initials} - ${countDown}`;
            createOlEl.appendChild(createScoreList);
        }

        // append the scores 
        ScoreListContainer.appendChild(createOlEl);
        contentHolder.appendChild(ScoreListContainer);

        // create btns 
        var createBtnDiv = document.createElement("div");
        createBtnDiv.setAttribute("class", "back-clear-btns");
        
        var clearScoresBtn = document.createElement("button");
        clearScoresBtn.setAttribute("id", "clear-btn");
        clearScoresBtn.textContent = "Clear Scores";
        var backBtn = document.createElement("button")
        backBtn.setAttribute("id", "back-btn");
        backBtn.textContent = "back"

        // append buttons 
        createBtnDiv.appendChild(backBtn);
        createBtnDiv.appendChild(clearScoresBtn);
        contentHolder.appendChild(createBtnDiv);
    }

    if (targetEl.matches("#back-btn")) {
        //refresh page logic
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


//-------------------------------------------------------


// var title2 = document.querySelector("#title2");
// var contentHolder2 = document.querySelector("#contentHolder2");

// var scorePage = () => {
//     contentHolder2.innerHTML = "";
//     var initials = document.querySelector("#initials").value;
//     var scoreList = {score: `${countDown}`, initials: `${initials}`};

//     // LOCAL STORAGE 
//     var retrievedData = JSON.parse(localStorage.getItem("Scores")) || [];
//     retrievedData.push(scoreList);
//     localStorage.setItem("Scores", JSON.stringify(retrievedData));

//     let ScoreListContainer = document.createElement("div");
//     ScoreListContainer.setAttribute("class", "score-list-div-2");

//     var createOlEl = document.createElement("ol");
//     createOlEl.setAttribute("class", "score-list-container-2");
//     for (let i = 0; i < retrievedData.length; i++) {
//         retrievedData.sort(compare);
//         let createScoreList = document.createElement("li");
//         createScoreList.setAttribute("class", "score-list-item-2");
//         createScoreList.textContent = `(${retrievedData[i].score}) ${retrievedData[i].initials}`;
//         // createScoreList.textContent = `${initials} - ${countDown}`;
//         createOlEl.appendChild(createScoreList);
//     }
//     // append the scores 
//     ScoreListContainer.appendChild(createOlEl);
//     contentHolder2.appendChild(ScoreListContainer);
// }
// setInterval(scorePage, 1000);

//-------------------------------------------------------

    


main.addEventListener("click", optionsChecker);

main.addEventListener('click', taskHandler)

startBtn.addEventListener("click", SetTimeInterval);
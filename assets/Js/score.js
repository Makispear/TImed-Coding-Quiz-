setInterval(() => {
    // SORTING SCORES 
function compare(a, b) {
    return b.score - a.score
}

    var title2 = document.querySelector("#title2")
    var main2 = document.querySelector("#main2")
    var contentHolder2 = document.querySelector("#contentHolder2")

    contentHolder2.innerHTML = "";
    var retrievedData = JSON.parse(localStorage.getItem("Scores")) || [];
    title2.textContent = "HIGH SCORES";

    let ScoreListContainer = document.createElement("div");
    ScoreListContainer.setAttribute("class", "score-list-div-2");

    var createOlEl = document.createElement("ol");
    createOlEl.setAttribute("class", "score-list-container-2");
    for (let i = 0; i < retrievedData.length; i++) {
        retrievedData.sort(compare);
        let createScoreList = document.createElement("li");
        createScoreList.setAttribute("class", "score-list-item-2");
        createScoreList.textContent = `(${retrievedData[i].score}) ${retrievedData[i].initials}`;
        // createScoreList.textContent = `${initials} - ${countDown}`;
        createOlEl.appendChild(createScoreList);
    }
    // append the scores 
    ScoreListContainer.appendChild(createOlEl);
    contentHolder2.appendChild(ScoreListContainer);
    
}, 500)

    
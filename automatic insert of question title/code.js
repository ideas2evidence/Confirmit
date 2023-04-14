
// add code in Look and feel, custom javascript
const question = document.getElementsByClassName("cf-question");

if(question) {
    for (let i = 0; i < question.length; i++) {
        var questionID = question[i].id;
        var titleElement = document.getElementById(questionID + "_title");
        titleElement.innerHTML = questionID;
    } 
}

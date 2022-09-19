
// Confirmit-nodes
//  - Page
//  -- q1 (normal single )
//  -- q1_clicks (open text box to store string. Normal, but hidden with css)


document.getElementById('q1').addEventListener("click", function () {
    var storeNode = Confirmit.page.getQuestion('q1_clicks'); // Get input field where previous answers are stored
    var qNode = Confirmit.page.getQuestion('q1'); // Get input field of current answer.

    var prev_answers = storeNode.value; // Get previously stored answers.
    
    if (prev_answers === null) { //if no value, the input is undefined.
        prev_answers = '[]';
    }

    if (prev_answers == '[]'){
        prev_answers = prev_answers.slice(0, -1) + qNode.value.toString() + "]";

    } else {
        prev_answers = prev_answers.slice(0, -1) + ", " + qNode.value.toString() + "]";
    }

    storeNode.setValue(prev_answers);
        
})

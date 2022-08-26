
// Confirmit-nodes
//  - Page
//  -- q1 (open text for the respondent to write his answer)
//  -- q1_count (numeric node for storing number of key strokes)


document.getElementById('q1_count_input').disabled = "true";

function countKeyStrokes(html, event) {
    var node = document.getElementById("q1_count_input"); // Get input field of node
    var number = node.value; // Get current value from input field
    if (number === undefined) { //if no value, the input is undefined.
        number = 0;
    } 
    number++; // increment by 1
    //console.log("value: " + number);
    node.value = number; // write new value back to input field
}

let htmlElem = document.querySelector("html");

htmlElem.addEventListener("keydown", function (e) {
    countKeyStrokes(htmlElem, e)

})
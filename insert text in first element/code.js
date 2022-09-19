
// Usefull if you would like to add a pre-question text/introduction text
// in a page where the order of the elements are randomized. 

// Example: https://jsfiddle.net/oskjerv/rdgaejxo/

// Confirmit-nodes
//  - Page (randomize order of nodes)
//  -- q1 (any type of Confirmit node with question text)
//  -- q2 (any type of Confirmit node with question text)
//  -- q3 (any type of Confirmit node with question text)

// Get all elements with class cf-question__text. Select the first one
var targetQuestion = document.getElementsByClassName("cf-question__text")[0]
// Get the question text
var qtext = targetQuestion.innerHTML;
// Add new preceeding question text
var new_qtext = "<p>New text.</p>" + qtext
// Write the new question text back to the HTML element. 
targetQuestion.innerHTML = new_qtext
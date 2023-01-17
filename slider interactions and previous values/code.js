
// Confirmit-nodes
//  - Page
//  -- q1 (Numeric with slider) 
//  -- q1_prevval (open text node for storing previously selected values. Normal question type, but hide with CSS)
//  -- q1_interactions (numeric node for counting the number of interactions the respondent has with the slider.  Normal question type, but hide with CSS)

// NOTE: The below code works with multiple sliders on the same page. The sliders can be in a randomized order. 
// In other words, the structure can be like this: 
// - Page
// -- q1
// -- q1_prevval
// -- q1_interactions
// -- q2
// -- q2_prevval
// -- q2_interactions



// returns an array-like object of all child elements which have all of the given class name(s). 
// In this case, {handles} will be of length 1 since there is one slider on the page. 
// If the page has multiples sliders, the length of {handles} and {tracks} equal to the number of
// sliders.

// The slider handle indicaties the selected value of the slider.
// The slider handle can be used to change values.   
var handles = document.getElementsByClassName("cf-slider__handle");
// The slider track is the full graphical interface representing the range of the slider.
// The slider track has tick marks. Respondents can click a specific position on the track
// in order to select a new value. The slider handle moves accordingly. 
var tracks = document.getElementsByClassName("cf-slider__track-area");

// HTML DOM events: 
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://www.w3schools.com/jsref/event_onmousedown.asp


// For each slider handle/slider
for (var i = 0; i < handles.length; i++) {
    // add event listener mousedown to the slider handle. 
    // If a mouse button is clicked on the handles, it initiates a function call
    handles[i].addEventListener('mousedown', function (event) {     
        var qID = findClosestId(event.target);
        registerInteraction(qID)
        }, false);
    // add event listener mousedown to the slider track. 
    // If a mouse button is clicked on the handles, it initiates a function call
    tracks[i].addEventListener('mousedown', function (event){
        var qID = findClosestId(event.target);
        registerInteraction(qID);
    }, false);
};

// The following function is called when a mousedown event occurs. 
// The function does mainly two things: 
//  - Collects the value of the slider before the new value is selected. That value is appended to  
//      q1_prevval
//  - Increments q1_interactions by 1 for each event. 
function registerInteraction(qID){

    // get value of slider before it is moved
    var qNode = Confirmit.page.getQuestion(qID);
    var value = qNode.value;

    if (value == null) {
        value = 'null';
    }

    // get number of interactions registered
    var interactionsNode = Confirmit.page.getQuestion(qID + 'interactions');
    var interactions = interactionsNode.value;

    if (interactions == undefined) {//if no value, the input is undefined.
        interactions = 0;
    }

    interactions++; //increment by 1
    interactionsNode.setValue(interactions);// write new value back to input field

    // get the string of previously stored values
    var storeNode = Confirmit.page.getQuestion(qID+'prevval');
    var prev_answers = storeNode.value; // Get previously stored answers. 

    if (prev_answers === null) { //if no value, the input is undefined.
        prev_answers = '[]';
    }

    //append the current value to the string
    if (prev_answers == '[]') {
        prev_answers = prev_answers.slice(0, -1) + value.toString() + "]";

    } else {
        prev_answers = prev_answers.slice(0, -1) + ", " + value.toString() + "]";
    }

    storeNode.setValue(prev_answers);

    
    //console.log(qID + ": Interaction!")
};

// A function for collecting question ID of the current slider. I.e. q1. 
function findClosestId(element) {
    var a = $(element).closest(".cf-question");
    var b = $(a).attr("id");
    return b;
}
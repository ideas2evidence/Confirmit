
// Confirmit-nodes
//  - q1 (open text)

// Note: Coordinates are dependent on screen resolution

document.getElementById('q1_input').disabled= "true"; 

function getMousePosition(html, event) { 
    let rect = html.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    console.log("Coordinate x: " + x, 
        "Coordinate y: " + y); 
    var outputCoordinates = "X:"+ x +", Y:"+ y +"\n"; 
    var textArea = document.getElementById("q1_input"); 
    var old = textArea.value; 
    textArea.value = old + outputCoordinates; 
} 


//The query selector decides where to listen. 
// if "html" is selected, all mouse clicks made in 
// that specific browser tab is counted. 
let htmlElem = document.querySelector("html"); 

htmlElem.addEventListener("mousedown", function (e) { 
    getMousePosition(htmlElem, e); 
});

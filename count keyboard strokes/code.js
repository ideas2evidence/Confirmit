
// Confirmit-nodes
//  - Page
//  -- q1 (open text)
//  -- q1_count (numeric)


document.getElementById('q1_count').disabled = "true"; 

function countKeyStrokes(html, event) {
    var node = document.getElementById("q1_count");
    var old = node.value;
    if(old === undefined){
        old = 0
    }
    console.log("value: " + old)
    node.value = old + 1
}

let htmlElem = document.querySelector("html"); 

htmlElem.addEventListener("keydown", function(e) {
    countKeyStrokes(htmlElem, e)

})
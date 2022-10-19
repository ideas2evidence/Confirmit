// Requirements:
// q1 (numeric node dressed as slider)
// global/node-specific css

// Add to global JS
$("#q1_input_slider div div").first().append("<div class='slider-ticks'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>")
    // Number of divs correspond to sum between lower limit and upper limit +1 

$("#q1_content").css({ 'overflow-y': 'hidden' })
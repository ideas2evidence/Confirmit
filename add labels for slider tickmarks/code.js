/*Add the following to your global JS or local node JS*/

/*Requires tickmarks to be added as well*/
/*See 'add tickmarks to slider for reference*/

$("#NODENAME_input_slider div div").first().append("<div class='slider-labels'><div>0</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div></div>")
$("#NODENAME_content").css({ 'overflow-y': 'hidden' })
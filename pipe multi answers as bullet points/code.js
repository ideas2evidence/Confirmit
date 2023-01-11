
// Confirmit-nodes
//  - q1 (normal multi )
//  - q2 (normal question where you´d like to pipe q1-responses)

//otherIndex=null -> does not work for some reason
//in the function call use null if there is no other text box: punktlisteFraMulti('q1', null)
//if the multi has an other text box, the function call looks like so: punktlisteFraMulti('q1', '9')
// where 9 is the index of the other-option.

// In order to pipe the returned htmlString from punktlisteFraMulti(),
// pipe the function directly into the text field of q2 like so: ^punktlisteFraMulti('q1', '9')^ 

// IMPORTANT: Under survey settings, you need to deactive "Html encode output of piping expressions" under XSS-settings. 
// It is not necessary to deactivate "Require all open text input to be XSS safe" using this approach.

function punktlisteFraMulti(qID, otherIndex) { 

    var multi = f(qID);

    //if there is response in multi
    if (multi.toBoolean()) {

            // If there is an other text box, collect the string
        if(otherIndex){
            var open = f(qID + "_" + otherIndex + "_other");
        }

        // collect labels and indexes of the selected answers
        var categoryLabels = multi.categoryLabels();
        var categoryValues = multi.categories();

        // initiate an html string
        var htmlString = "<ul>";

        // for each selected answer in multi, add a bulletpoint containing its label
        // if the selected answer is a an other text box, and the respondents answer to tha
        // answer label.
        for (var i = 0; i < categoryValues.length; i++) {
            if (categoryValues[i] == otherIndex && otherIndex) {
                htmlString += "<li>" + categoryLabels[i] + " " + open.get() + "</li>"
            } else {
                htmlString += "<li>" + categoryLabels[i] + "</li>"
            }
        }

        // close  the html
        htmlString += "</ul>";

        // return htmlstring
        return htmlString;
    }
}






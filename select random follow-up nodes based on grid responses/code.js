// requirements: 
// 1. initial grid which has been exposed to the respondent
// 2. two multi-nodes (hidden) to store values


// Use the values written in the node with suffix '_mask' to codemask

/* q010 skal ta inn en løsning at hvis respondenten svarer 4 eller 5 skal de få
oppfølgingsspørsmål: Hvis 14 «i stor grad» eller «i svært stor grad» på ett eller 
flere av alternativene. Begrense til maks. to områder, randomisert. */

//Sett de inn i multier og tell derfra
if (f('q009_1').any('4', '5')) {
    f('q010_multi')[1].set(1);
} else {
    f('q010_multi')[1].set(0);
}

if (f('q009_2').any('4', '5')) {
    f('q010_multi')[2].set(1);
} else {
    f('q010_multi')[2].set(0);
}

if (f('q009_3').any('4', '5')) {
    f('q010_multi')[3].set(1);
} else {
    f('q010_multi')[3].set(0);
}

if (f('q009_4').any('4', '5')) {
    f('q010_multi')[4].set(1);
} else {
    f('q010_multi')[4].set(0);
}

if (f('q009_5').any('4', '5')) {
    f('q010_multi')[5].set(1);
} else {
    f('q010_multi')[5].set(0);
}

//Response.Write(f('q010_multi'));

// Hvis de har to eller mindre setter vi dem bare hardt
var antall = f('q010_multi').categories();

if (antall.length <= 2) {
    f('q010_mask').set(antall);
} else {
    var antall_ran = shuffle(antall);
    var antall_ran_slice = antall_ran.slice(0, 2);
    f('q010_mask').set(antall_ran_slice);
}

//Response.Write(f('q010_mask'));

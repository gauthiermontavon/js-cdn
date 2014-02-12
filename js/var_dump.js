/*
	var_dump function
	Author:Justin Phillips, 
	http://www.justinphillips.co/
*/

function var_dump(obj, indentSpaces) {
    switch (typeof obj) {
        case "object":
            console.log(indent(indentSpaces) + typeof obj + ":");
            indentSpaces += 2; // indent further as we are entering the objects properties
            for (var i in obj) {
                console.log(indent(indentSpaces) + i + ":");
                var_dump(obj[i], indentSpaces + 1);
            }
            break;
        default: // things that are not objects, primatives... etc...
            console.log(indent(indentSpaces) + typeof obj + ":" + obj);
            break;
    }
}
 
// just for styling with indents
function indent(spaces) {
    var i = 0;
    var rtr = "";
    while(i <= (spaces * 2)) {
        rtr += " ";
        i++;
    }
    return rtr;
}
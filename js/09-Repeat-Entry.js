let miles, gallons, mpg, again;

do { 
    again = "";
    window.document.open();
    miles = parseFloat(window.prompt("Enter miles driven."));
    gallons = parseFloat(window.prompt("Enter size of tank in gallons."));
    if ((!isNaN(miles))&&(!isNaN(gallons))&&(gallons > 0)&&(miles > 0)) {
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg) + "<br>");
    }
    else {
        alert("Entries are invalid.\n");
    }
    while (again != "y") {
        again = window.prompt("Repeat entry? (y/n)");
        if (again === "n") {
            break;
        }
    } 
} while (again === "y");
window.document.write("Exit."); 
let coinFlip = Math.round(Math.random()*10);
let fact;
if (coinFlip >= 5) {
    fact = true;
}
else {
    fact = false;
}

let choice = prompt("Make your chose: \'Heads\' or \'Tails\'?");

if (choice == "Heads") {
    choice = true;
}
else if (choice == "Tails") {
    choice = false;
}
else {
    throw "stop";
}

if ((fact === true) && (choice === true)) {
    alert("The flip was heads and you chose heads...you win!")
}
if ((fact === true) && (choice === false)) {
    alert("The flip was heads but you chose tails...you lose!")
}
if ((fact === false) && (choice === true)) {
    alert("The flip was tails but you chose heads...you lose!")
}
if ((fact === false) && (choice === false)) {
    alert("The flip was tails and you chose tails...you win!")
}
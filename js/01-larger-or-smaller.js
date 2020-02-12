let x = prompt("Enter first digit.");
x = Number(x);
let y = prompt("Enter second digit.");
y = Number(y);
if (x > y) {
    alert("The biggest diget is " + x);
}
else if (x == y) {
    alert("Digits are equal.");
}
else {
    alert("The biggest diget is " + y)
}
let futureValue = 0;
let investment = 0;
let rate = 0;
let years = 0;
let i;

investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
rate = parseFloat(window.prompt("Enter interest rate as xx.xx"));
years = parseInt(window.prompt("Enter number of years"), 10);
if ((!isNaN(investment))&&(!isNaN(rate))&&(0 < rate)&&(rate < 6)&&(!isNaN(years))&&(1 < years)&&(years < 30)) {
futureValue = investment;
for(i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate/100);
}

window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Investment rate: " + rate + "%"+ "<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $" + futureValue.toFixed(2));
}
else {
    alert("You entered wrong data:\nInvestment - numeric number.\nRate - numeric number between 0 and 6%.\nYears - numeric between 1 and 30.")
}
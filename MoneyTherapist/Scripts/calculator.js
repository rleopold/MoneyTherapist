
// return monthly mortgage payment
// amount - mortgage amount in dollars
// term - term in years
// rate - annual interest rate of loan
function mortgageMonthlyPayment(amount, term, rate) {

    var n = term * 12;
    var i = (rate / 100) / 12;

    var payment = amount * ((i * Math.pow(1 + i, n)) / ((Math.pow(1 + i, n) - 1)));

    return payment;
}
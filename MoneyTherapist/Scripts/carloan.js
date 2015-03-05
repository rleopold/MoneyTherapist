
// return monthly mortgage payment
// amount - mortgage amount in dollars
// term - term in years
// rate - annual interest rate of loan
function carLoanMonthlyPayment(amount, term, rate) {

    var n = term * 12;
    var i = (rate / 100) / 12;

    var payment = amount * ((i * Math.pow(1 + i, n)) / ((Math.pow(1 + i, n) - 1)));

    return payment;
}

// render out monthly amortiazation
// amount - total principal of mortgage
// term - term in Years
// rate - Yearly interst rate
// month - begining month of loan
// year - begining year of loan
function renderAmortTable(amount, term, rate, month, year) {
    var n = term * 12;
    var mi = (rate / 100) / 12;

    var payment = carLoanMonthlyPayment(amount, term, rate);

    var table = "<tr> \
							<th>Month</th> \
							<th>Balance</th> \
							<th>Payment</th> \
							<th>Principal</th> \
							<th>Interest</th> \
							</tr>";

    var total_mortgage = parseFloat(0);
    var total_principal = parseFloat(0);
    var total_interest = parseFloat(0);

    for (i = n; i > 0; i--) {
        var monthInterest = parseFloat(amount * mi);
        var monthPrincipal = parseFloat(payment - monthInterest);
        total_mortgage += payment;
        total_principal += monthPrincipal;
        total_interest += monthInterest;
        var monthName = convert_month(month);
        var tablerow = "<tr> \
					<td>" + monthName + " " + year + "</td> \
					<td>$" + parseFloat(amount).toFixed(2) + "</td> \
					<td>$" + payment.toFixed(2) + "</td> \
					<td>$" + monthPrincipal.toFixed(2) + "</td> \
					<td>$" + monthInterest.toFixed(2) + "</td> \
					</tr>";

        table = table + tablerow;

        if (month == 12) {
            month = 1;
            year++;
        }
        else {
            month++;
        }
        amount -= monthPrincipal;
    };

    tablerow = "<tr> \
								<td></td> \
								<td></td> \
								<td><strong>$" + parseFloat(total_mortgage).toFixed(2) + "</strong></td> \
								<td><strong>$" + parseFloat(total_principal).toFixed(2) + "</strong></td> \
								<td><strong>$" + parseFloat(total_interest).toFixed(2) + "</strong></td> \
								</tr>";
    table = table + tablerow;

    return table;
}

function convert_month(month) {
    if (month == 1) { month = "January"; }
    else if (month == 2) { month = "February"; }
    else if (month == 3) { month = "March"; }
    else if (month == 4) { month = "April"; }
    else if (month == 5) { month = "May"; }
    else if (month == 6) { month = "June"; }
    else if (month == 7) { month = "July"; }
    else if (month == 8) { month = "August"; }
    else if (month == 9) { month = "September"; }
    else if (month == 10) { month = "October"; }
    else if (month == 11) { month = "November"; }
    else if (month == 12) { month = "December"; }
    return month;
}
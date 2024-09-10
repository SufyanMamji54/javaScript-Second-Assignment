// Chapter : 05

var num1 = 5
var num2 = 3

document.write("Sum of 5 and 3 = ", num1+num2)
document.write("<br>")

document.write("Subtraction of 5 and 3 = " + (num1-num2))

document.write("<br>")
document.write("Multiplication of 5 and 3 = " + (num1*num2))

document.write("<br>")
document.write("Division of 5 and 3 = " + (num1/num2))

document.write("<br>")
document.write("Modulus of 5 and 3 = " + (num1%num2))

var declareVariable;
document.write("<br>")
document.write("Value after variable declaration is " + declareVariable)

declareVariable = 5
document.write("<br>")
document.write("Initial Value is " + declareVariable)

document.write("<br>")
document.write("Value after Increment is " + (declareVariable + 1))

declareVariable = declareVariable + 8

document.write("<br>")
document.write("Value after Addition is " + declareVariable)

document.write("<br>")
document.write("Value after Decrement is " + (declareVariable - 1))

document.write("<br>")
document.write("The Reminder is " + (declareVariable % 3))

document.write("<br>")
var ticket = 600
document.write("Total cost to buy 5 tickets to a movie is " + (ticket * 5) + " PKR")
document.write("<br>")
document.write("<br>")

document.write("<br>")
document.write("Table of 4")

document.write("<br>")
document.write("4 x 1 = " + 4*1)
document.write("<br>")
document.write("4 x 2 = " + 4*2)
document.write("<br>")
document.write("4 x 3 = " + 4*3)
document.write("<br>")
document.write("4 x 4 = " + 4*4)
document.write("<br>")
document.write("4 x 5 = " + 4*5)
document.write("<br>")
document.write("4 x 6 = " + 4*6)
document.write("<br>")
document.write("4 x 7 = " + 4*7)
document.write("<br>")
document.write("4 x 8 = " + 4*8)
document.write("<br>")
document.write("4 x 9 = " + 4*9)
document.write("<br>")
document.write("4 x 10 = " + 4*10)
document.write("<br>");
document.write("<br>");

var celsiusTemp = 30;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F");
document.write("<br>");

var fahrenheitTemp2 = 86;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2.toFixed(2) + "°C");

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<br>");
document.write("<br>");

document.write("Price of item 1: " + priceItem1 + " PKR");
document.write("<br>");
document.write("Quantity of item 1: " + quantityItem1);
document.write("<br>");
document.write("Price of item 2: " + priceItem2 + " PKR");
document.write("<br>");
document.write("Quantity of item 2: " + quantityItem2);
document.write("<br>");
document.write("Shipping charges: " + shippingCharges + " PKR");
document.write("<br><br>");
document.write("Total cost of your order is: " + totalCost + " PKR");
document.write("<br>");
document.write("<br>");

var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks);
document.write("<br>");
document.write("Marks Obtained: " + marksObtained);
document.write("<br>");
document.write("Percentage: " + percentage + "%");
document.write("<br>");
document.write("<br>");

var usDollars = 10;
var saudiRiyals = 25;

var totalInPKR = (usDollars * 104.80) + (saudiRiyals * 28);

document.write("Total Currency in PKR: " + totalInPKR + " PKR");
document.write("<br>");
document.write("<br>");

var number = 10;

var result = ((number + 5) * 10) / 2;

document.write("The result is: " + result);
document.write("<br>");
document.write("<br>");

var currentYear = 2024;
var birthYear = 1990;

var age = currentYear - birthYear;

document.write("They are " + age + " years old.");
document.write("<br>");
document.write("<br>");

var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("The circumference is " + circumference);
document.write("<br>");
document.write("The area is " + area);
document.write("<br>");
document.write("<br>");

var favoriteSnack = "Chips";
var currentAge = 25;
var maxAge = 80;
var estimatedAmountPerDay = 2;

var totalNeeded = (maxAge - currentAge) * 365 * estimatedAmountPerDay;

document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);
document.write("<br>");
document.write("<br>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is" + a)
document.write("<br>");
document.write("b is" + b)
document.write("<br>");
document.write("Result is" + result)
document.write("<br>");
document.write("<br>");

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;

var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));

document.write("Subject 1: " + subject1);
document.write("<br>");
document.write("Obtained Marks in " + subject1 + ": " + obtainedMarks1);
document.write("<br>");
document.write("Subject 2: " + subject2);
document.write("<br>");
document.write("Obtained Marks in " + subject2 + ": " + obtainedMarks2);
document.write("<br>");
document.write("Subject 3: " + subject3);
document.write("<br>");
document.write("Obtained Marks in " + subject3 + ": " + obtainedMarks3);
document.write("<br>");
document.write("Total Marks per Subject: " + totalMarksPerSubject);

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;

var obtainedMarks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));
document.write("<br>");

var totalMarks = totalMarksPerSubject * 3;
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th><th>" + totalMarks + "</th></tr>");
document.write("</table>");
document.write("<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");
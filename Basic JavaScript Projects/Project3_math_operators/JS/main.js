function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 7 * 9;
    document.getElementById("Math2").innerHTML = "7 x 9 = " + multiplication;
}

function division_Function() {
    var division = 48 / 6;
    document.getElementById("Math3").innerHTML = "48 / 6 = " + division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "1 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math_1 = 25 % 6;
    document.getElementById("Math5").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_Math_1;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x ;
}

var X = 5;
X++;
document.write(X);

var Y = 5.25;
Y--;
document.write(Y);

window.alert(Math.random() * 100);

function math_method() {
    document.getElementById("Math7").innerHTML = Math.sqrt(9);
  }
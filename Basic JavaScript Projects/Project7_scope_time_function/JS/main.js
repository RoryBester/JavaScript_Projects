var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 50;
    document.write(Y + 100);
}
Add_numbers_3();

function Add_numbers_4() {
    var Y = 10;
    console.log(Y + 15);
}
function Add_numbers_5() {
    console.log(Y + 100);
}
Add_numbers_4();
Add_numbers_5();

if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    } 
}

function Gender_Function() {
    Gender = document.getElementById("Gender").value;
    if (Gender == "male") {
        Sex = "you are male.";
    }
    else {
        Sex = "you are female.";
    }
    document.getElementById("whats_your_gender").innerHTML = Sex;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's the Morning";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's the Afternoon";
    }
    else {
        Reply = "It's the Evening";
    } 
    document.getElementById("Time_of_day").innerHTML = Reply;
}
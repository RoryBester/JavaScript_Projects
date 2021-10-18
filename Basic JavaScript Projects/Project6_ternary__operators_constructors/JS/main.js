function Ride_Function() {// ride function
    var Age, Can_vote;
    Age = document.getElementById("Age").value; 
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Can_vote").innerHTML = Can_vote + " to vote.";
}
function Vehicle(Make, Model, Year, Color) {//function
    this.Vehicle_Make = Make;//this fuction make
    this.Vehicle_Model = Model;//this function model
    this.Vehicle_Year = Year;//this function year
    this.Vehicle_Color = Color;//this function color
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//variable jack
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//variable emily
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");//variable Erik
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
function count_Function() {//count function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point; //returns the starting point number + 1
    }
}
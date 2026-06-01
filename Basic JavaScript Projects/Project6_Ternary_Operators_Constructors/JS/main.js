const Ride_function = () => { // Arrow function for Ride_function
    var Height, Can_ride;
    Height = document.getElementById("Height").value;// Getting the value of the input field with id "Height"
    Can_ride = (Height < 52 ) ? "You are too short" : "You are tall enough";// Ternary operator to determine if the person is tall enough to ride
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
 
const Vote_function = () => { // Arrow function for Vote_function
    var Age, Can_vote;
    Age = document.getElementById("Age").value;// Getting the value of the input field with id "Age"
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";// Ternary operator to determine if the person is old enough to vote
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { // Constructor function for Vehicle
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display information the result of the constructor function in HTML
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

const count_Function = () => { // Arrow function for count_Function with a nested function
    document.getElementById("Counting").innerHTML = Count();// Calling the nested function and displaying the result in HTML
    const Count = () => {// Nested function for counting
        var Starting_point = 9;
        const Plus_one = () => {Starting_point += 1;}// Nested function for adding one to the starting point
        Plus_one();// Calling the nested function to add one to the starting point
        return Starting_point;
    }
}

const add_string = () => { // Arrow function for add_string with a nested function
    var start_string = "Hello";
    const adding = (str) => { // Nested arrow function for adding
        start_string += " " + str;// Concatenating the string with a space and the new string
    }
    adding(" World");// Calling the nested function to add "World" to the start_string
    document.getElementById("Nested_Function").innerHTML = start_string;
}
/* alert, window.alert and document.write */
window.alert("Hello World!"); // Show message popup 
document.write("Hello World!<br>"); //Write text in the browser

/* Variable Assignment */
var A = "<br>This is a string"; // Defining and Assign string to variable A
document.write(A); //write variable A

/* String Assignment */
var myFirstVariable = "This is a string to variable" //Defining and Assign string to variable myFirstVariable
window.alert(myFirstVariable); // Show message popup 

/* Escape Character Assignment */
var myVariableA = 'I can\'t see the route.<br><br>' //Defining and Assign string with ' using escape character
document.writeln(myVariableA); //Write the variable in the browser

/* Concatenation ASsignment*/
document.writeln("\"Be who you are and say what you feel,"  // Write some strings Concatenated
    + " because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr. Seuss"
)

/* Multiple Variables Assignment */
var myVariableB = "Apple", myVariableC = "Peach", myVariableD = "Pinapple", myVariableE = "Mango"; //Defining and Assign some variables
document.writeln('<br>' + myVariableE +" - "+ myVariableB+'<br>'); // Just write two variables in the browser

/** Expression Assignment */
document.writeln(25 + 25); // write expression math

/** Functions */
function My_First_Function() {  //Defining a function
    var str = "This is the button text!"; // Defining and assign string to a variable
    document.getElementById("Button_Text").innerHTML = str;  // assign variable to element Button_Text id
}

var Sent1 = "<br>This is the beginning of the string"; //Defining and assign string to a variable
var Sent2 = " and this is the end of the string"; //Defining and assign string to a variable
document.writeln(Sent1+Sent2); // write both variables in the browser

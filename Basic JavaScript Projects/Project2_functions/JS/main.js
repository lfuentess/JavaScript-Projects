function AssignVariable(variabA, variabB) {  //Defining a function
    var str = variabA ;  //defining and assign variable
    str +="<br>and <br>"; //  concatenate text to same variable
    str += variabB; // //  concatenate text to same variable
    document.getElementById("Button_Text").innerHTML = str;  // write variable to element Button_Text id 
    document.getElementById("btn1").innerText ="Done!";  // change button text
}

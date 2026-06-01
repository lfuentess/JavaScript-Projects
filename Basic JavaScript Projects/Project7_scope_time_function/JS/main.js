var vGlobal = 5;// This is a global variable because it is declared outside of any function. It can be accessed from anywhere in the code.

const function1 = () => {// This is a function that demonstrates the concept of local and global variables. The variable vLocal is a local variable because it is declared inside the function. It can only be accessed within the function, and not outside of it.
    var vLocal = 10, result;// This will declare a local variable vLocal and assign it the value of 10. The variable result is declared but not assigned a value.
    result = vGlobal + vLocal;// This will add the value of the global variable vGlobal (which is 5) and the local variable vLocal (which is 10) and store the result in the variable result. The value of result will be 15.
    console.log("Inside function1: " +  result);// This will print the value of result, which is 15, to the console.
    console.log("Inside function1: " + vLocal);// This will print the value of the local variable vLocal, which is 10.
}
function1();// This will call the function1 and execute the code inside it. It will print the values of vGlobal and vLocal to the console.

const function2 = () => {// This is another function that demonstrates the concept of local and global variables. The variable vLocal is a local variable because it is declared inside the function. It can only be accessed within the function, and not outside of it.
    console.log("Inside function2: " + vGlobal);// This will print the value of the global variable vGlobal, which is 5.
}

function2();// This will call the function2 and execute the code inside it. It will print the values of vGlobal and vLocal to the console.

const get_Time = () => {// This is a function that demonstrates the use of the Date object to get the current time and display a message based on the time of day. The variable Time is a local variable that stores the current hour, and the variable Reply is used to store the message that will be displayed based on the value of Time.
    var Time = new Date().getHours();// This will get the current hour from the Date object and store it in the variable Time.
    var Reply;  
    if (Time < 12 && Time > 0) {// This condition checks if the current hour is less than 12 and greater than 0, which means it is morning time. If this condition is true, the variable Reply will be assigned the string "It is morning time!".
        Reply = "It is morning time!";
    }
    if (Time >= 12 && Time < 18) {// This condition checks if the current hour is greater than or equal to 12 and less than 18, which means it is afternoon time. If this condition is true, the variable Reply will be assigned the string "It is afternoon.".
        Reply = "It is afternoon.";
    }
    if (Time >= 18 && Time < 24) {// This condition checks if the current hour is greater than or equal to 18 and less than 24, which means it is evening time. If this condition is true, the variable Reply will be assigned the string "It is evening time.".
        Reply = "It is evening time.";
    }   
    document.getElementById("Time").innerHTML = Reply;
}

const age_Calc = () => {// This is a function that demonstrates the use of the Date object to calculate a person's age based on their birth year. The variable BirthYear is a local variable that stores the value entered by the user, and the variable Age is used to store the calculated age.
    var age = document.getElementById("age_Input").value;// This will get the value entered by the user in the input field with the id "age_Input" and store it in the variable age.
    var message;  // These variables are used to store the messages that will be displayed based on the value of age. message1 will be used if the user is old enough to vote, and message2 will be used if the user is not old enough to vote.
    
    if (age >= 18) {// This condition checks if the value of age is greater than or equal to 18. If this condition is true, the message indicates that the user is old enough to vote.
        message = "You are old enough to vote!";
    } else {// If the condition is false (the user is under 18), the message indicates that the user is not old enough to vote.
        message = "You aren't old enough to vote!";
    }
    document.getElementById("show_Age").innerHTML = message;
}   

const time_Function = () => {// This is a function that demonstrates the use of the Date object to display a message based on the current time. The variable Time is a local variable that stores the current hour, and the variable Reply is used to store the message that will be displayed based on the value of Time.
    var Time = new Date().getHours();   // This will get the current hour from the Date object and store it in the variable Time.
    var Reply;
    if (Time < 12 && Time > 0) {// This condition checks if the current hour is less than 12 and greater than 0, which means it is morning time. If this condition is true, the variable Reply will be assigned the string "It is morning time!".
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {// This condition checks if the current hour is greater than or equal to 12 and less than 18, which means it is afternoon time. If this condition is true, the variable Reply will be assigned the string "It is afternoon.".
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";// If the previous conditions are false (the current hour is greater than or equal to 18), the variable Reply will be assigned the string "It is evening time.".
    }   
    document.getElementById("Time_of_Day").innerHTML = Reply;
}
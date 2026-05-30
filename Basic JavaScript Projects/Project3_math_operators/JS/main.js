/** Functions Math */
var a =8, b=4, c=7, d=3; //defining and assign variables
function multi(){
    const multi = (a, b) => a * b; // defining function multiply
    let result = multi(a, b); // call function with parameters
    document.getElementById("Math").innerHTML = a.toString() +" * "+ b.toString()+" = "+ result.toString(); // write operation in p tag
}

function subtract(){
    const subtract = (a, b) => a - b; // defining function subtraction
    let result1 = subtract(a, b);
    document.getElementById("subtraction").innerHTML = a.toString() +" - "+ b.toString()+" = "+ result1.toString(); // write operation in p tag
}

function multiply(){
    const multiply = (a, b) => a * b; // defining function multiply
    let result2 = multiply(a, b);

    document.getElementById("multiply").innerHTML = a.toString() +" * "+ b.toString()+" = "+ result2.toString(); // write operation in p tag
}

function division(){
const division = (a, b) => a / b; // defining function division
let result3 = division(a, b);

document.getElementById("division").innerHTML = a.toString() +" / "+ b.toString()+" = "+ result3.toString(); // write operation in p tag
}
function operators(){
const simple_math = (a + b) * c / (a - d); // defining some operators math
document.getElementById("operators").innerHTML = "("+ a.toString() +" + "+ b.toString()+ ") *" + c.toString() +" / ("+ a.toString()+ " - "+ d.toString()+") = "+ simple_math.toString(); // write operation in p tag
}
function modulus(){
    const modulus_operator = a % d;
    document.getElementById("modulus").innerHTML = "When you divide " + a.toString() + " by "+ d.toString() +" you have a remainder of: " + modulus_operator.toString();// write operation in p tag
}
function negation(){
    const negation_operator = 10; // defining function division
    document.getElementById("negation").innerHTML = -negation_operator;// write operation in p tag
}
function Increment(){
    var incA = 9;
    incA++; // increment value
    document.getElementById("Increment").innerHTML = "number: 9 increment = " + incA.toString(); // write operation in p tag
}
function Decrement(){
    var decB = 14;
    decB--; // decrement value
    document.getElementById("Decrement").innerHTML = "number: 14 decrement = " + decB.toString(); // write operation in p tag
}
/*function (){
    window.alert("Math.random(): "+ Math.random()); // 
}
function (){
    window.alert("Math.random() * 100: "+Math.random() * 100); //
}*/
function mTrunc(){
    var dataIn = Math.random() * 100
    dataIn += " ---> " +Math.trunc(dataIn)
    document.getElementById("Trunc").innerHTML = dataIn;// write operation in p tag
}
function mExp(){
    var dataIn = 7 + " ---> " + Math.exp(7);
    document.getElementById("EXP").innerHTML =dataIn ;// write operation in p tag
}
function mPI(){
    var datain = 3.14 +" ---> "+Math.PI;
    document.getElementById("PI").innerHTML = datain;// write operation in p tag
}
function mCeil(){
    var datain = 14.5 +" ---> "+Math.ceil(14.5);
    document.getElementById("Ceil").innerHTML = datain ;// write operation in p tag
}
function mRound(){
    var datain = 2.47 +" ---> "+Math.round(2.47);
    document.getElementById("Round").innerHTML = datain;// write operation in p tag
}




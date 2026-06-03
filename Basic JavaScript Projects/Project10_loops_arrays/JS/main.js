//using a while loop function
const mytop = 10;
let count=0;

const Call_Loop = () => {
    var showCount="";
    while (count < mytop){
        showCount += "<br>" + count;
        count++;
    }
    document.getElementById("Loop").innerHTML = showCount + "<br>Loop Terminated!";
}

//using a length function 
const countText = () => {
    let text = document.getElementById("entry").value;
    let totalText = text.length;
    document.getElementById("countLetters").innerHTML = totalText;
}

//using a for loop
var Instruments =["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
const for_Loop = () => {
    for (Y=0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//using an array function
const array_Function = () => {
    var Fruits = [];
    Fruits[0] = "Mango";
    Fruits[1] = "Apple";
    Fruits[2] = "Peach";
    Fruits[3] = "Melon";
    Fruits[4] = "Pinapple";
    document.getElementById("Array").innerHTML = "I like very much a " + Fruits[3] + ".";
}

// using a data struc
const constant_Function = () => {
    const Musical_instrument = {type:"guitar", brand:"Fender", color:"Black"};
    Musical_instrument.color = "blue";
    Musical_instrument.price = "$900";
    Musical_instrument.brand = "Gibson";
    Musical_instrument.year = "1985";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_instrument.type 
    + " was " + Musical_instrument.price + " Brand: " +Musical_instrument.brand + " made in " +Musical_instrument.year;
}

// using a let keyword
const letKeyword = () => {
    let data1 = 456;
    document.write(data1);
    {
        let data1 = 784;
        document.write("<br>" + data1);
    }
    document.write("<br>" + data1);
}
// using return
const testReturn = () => {
    alert(greetting());
}

const greetting = () => {
   let message = ("Hello World!");
   return message
}

//created an object
const testObject = () => {
    let car = {
        make:"Dodge ",
        model:"Viper ",
        year:"2021 ",
        color:"red ",
        description: function() {
            return "The car is a "+ this.year + this.color + this.make + this.model;
        }
    }
    document.getElementById("Car_Object").innerHTML = car.description();
}

// using a break instruction
const testBreak = (numA) => {
    var myArray = [0,1,2,3,4,5,6,7,8,9], ncount = 0;
    var numbFind = numA;
    for (let j = 0 ; j <  myArray.length; j++){
        if (myArray[j] ==numA) { break ;}
        ncount++;
    }
    document.getElementById("tBreak").innerHTML = "The number ["+ numA +"] was found";
}
// using a continue instruction
const testContinue = (numB) => {
    var myArray = [0,1,2,3,4,5,6,7,8,9], ncount = 0, myResult;
    for (let j = 0 ; j < myArray.length; j++){
        if (myArray[j] ==numB) {continue ;}
        myResult += "<br>"+ myArray[j];
        ncount++;
    }
    document.getElementById("tContinue").innerHTML = myResult;
}
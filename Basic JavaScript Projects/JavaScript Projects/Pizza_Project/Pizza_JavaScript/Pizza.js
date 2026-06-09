function getReceipt() {
    //this inializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 ="<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;        
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;        
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;        
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;            
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed onto each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var textOrder ="";
    var toppingArray = document.getElementsByClassName("toppings");
    var autoHeight =0,currHeight=0;
    for (var j= 0; j < toppingArray.length; j++){
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+ toppingArray[j].value+")");
            text1 = text1 + toppingArray[j].value + "<br>"
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount -1);
    } else {
        toppingTotal = 0;
    }
    //show in console information about order
    console.log("total selected toppinmg items: "+ toppingCount);
    console.log(toppingCount +" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+ text1 );
    console.log("Purchase Total: "+"$"+ runningTotal +".00" );

    //display in screen order and total price to pay
    runningTotal = (runningTotal + toppingTotal);
    textOrder += toppingCount +" topping - 1 free topping = "+"$"+toppingTotal+".00<br>";
    textOrder += "topping text1: "+ text1 ;
    document.getElementById("showText").innerHTML = textOrder;
    textOrder = "<h3>Total: <strong>$"+ runningTotal +".00" + "</strong></h3>";
    document.getElementById("totalPrice").innerHTML = textOrder;

    //Order information adjustment by topping count
    currHeight = 190;
    autoHeight = currHeight + (toppingTotal *14 );
    document.getElementById("showText").style = "height:"+ autoHeight +"px;"
    document.getElementById("totalPrice").style = "height:"+ autoHeight +"px;"
    autoHeight += 17; 
    document.getElementById("cart").style = "height:"+ autoHeight +"px;"

}
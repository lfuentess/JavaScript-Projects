// switch function
const Color_Function = () => {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break; 
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break; 
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break; 
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break; 
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//getElementesByClassName()
const Hello_World_Function = () => {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Canvas Challenge
const fcanvas = () => {
    var c = document.getElementById("mCanvas");
    var ctx = c.getContext("2d");
    //text
    ctx.font = "30px Arial";
    ctx.fillStyle = "Blue";
    ctx.fillText("Hello World!", 10, 50);
    //circle
    ctx.beginPath();
    ctx.arc(155, 70, 60, 0, 2 * Math.PI);

    // rectangule
    ctx.fillStyle = "Purple";
    ctx.fillRect(80, 70, 150, 75);

    // left line 
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 70);
    // right line 
    ctx.moveTo(300, 0);
    ctx.lineTo(170, 70);

    ctx.stroke();
}
fcanvas();

// Canvas Challenge
const createLinearGradient  = () => {
    const canvas = document.getElementById("mCanvas1");
    const ctx = canvas.getContext("2d");

    // Create Gradient
    const my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "white");
    my_gradient.addColorStop(1, "Royalblue");
    

    // Fill Rectangle
    ctx.fillStyle = my_gradient;
    ctx.fillRect(10, 10, 280, 130);
}
createLinearGradient();
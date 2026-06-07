/*
// Array .Some() Method
var ages = [2, 10, 18, 20, 13, 15, 30]

//using the arrow function two pass in a parameter of age

checkAge = (age) => age >= 18;

function mFunction() {
    // use the .some() to iterate through the array of ages and display the result.
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
}
mFunction();
*/
// This variable keeps track of whose turn it is.
let activePlayer = 'X'
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // the .some() method is used to check each element of the selecSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is.
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/X.png")';
            //active player only be 'X' or 'O', if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/O.png")';
        }
        select.style.backgroundSize = '180px 200px';//size images
        select.style.backgroundRepeat = 'no-repeat';//no duplicate image in the same square
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player.
        if (activePlayer === 'X') {
            //if active palyer is 'X' change it to 'O'.
            activePlayer = 'O';
            // if active player is anything other than 'X'
        } else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
        }
        //this function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            //this function disables clicking for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn() function to work
        return true;
    }
    // This function results in a random square being selected by the computer.
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet//
            if (placeXOrO(pickASquare)) {
                //this line calls the function.
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop.
                success = true;
            }
        }
    }
}function checkWinConditions() {// X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }// X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }// X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }// X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }// X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }// X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }// X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }// O 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) } // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }// O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }// O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }// O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }// O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }// O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }// O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }// O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    // This condition checks for a tie. If none of the above conditions are met and 
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //This function sets a 3. second timer begore the resetGame is called.
        setTimeout(function () { resetGame(); }, 1500);
    }

    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawline() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //This line accesses our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
    y1 = coordY1,//this line indicates where the start of a lines y axis is.
    x2 = coordX2,//this line indicates where the end of a lines x axis is.
    y2 = coordY2,//this line indicates where the end of a lines y axis is.
    x = x1,//this variable stores temporary x axis data we update in pur animation loop.
    y = y1;//this variable stores temporary y axis data we update in pur animation loop.

    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);//this variable creates a loop.
        c.clearRect(0,0,608,608); //this method clears content from the last loop iteration.
        c.beginPath();//this method starts a new path
        c.moveTo(x1,y1);// this method moves us to a starting point in our line.
        c.lineTo(x,y);//this metohod indicates the end point in our line.
        c.lineWith = 10;//this method sets the width  of our line.
        c.strokeStyle = 'rgba(27, 21, 193, 0.8)'; //this method sets the color of our line.
        c.stroke();//this method  draws everything we laid out above.

        if(x1 <= x2 && y1 <= y2){ //this condition checks if we've reached the endpoints.
            if (x < x2) {x += 10;}// this condition adds 10 to the previous end x endpoint.
            if (y < y2) {y += 10;}// this condition adds 10 to the previous end y endpoint.
            //this condtion is similar to the one above.
            //this is necessary for the 6,4,2 win conditions.
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        //this condtion is similar to the one above.
        //this is necessary for the 6,4,2 win conditions.
        if (x1 <= x2 && y1 >=y2){
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }          
    }
    //this function clears our canvas after our win line is drawn.
    function clear(){
        const animationLoop = requestAnimationFrame(clear);// this line starts our animation loop.
        c.clearRect(0,0,608,608);//this line clears our canvas
        cancelAnimationFrame(animationLoop);//this line stops our animation loop.
    }
    
    disableClick();//this line disallows clicking while the win sound is playing
    audio('./media/winGame.mp3');// this line plays the win sounds.
    animateLineDrawing();// this line calls our main animation loop
    setTimeout(function () {clear();resetGame();}, 1000);// this line waits 1 second. Then, clears canvas, resets game, an allows clicking again.
}

//this funtion resets the fame in the event of a tie or a win.
function resetGame() {
    //this for loop iterates through each HTML square element.
    for (let i=0; i<9 ; i++){
        let square = document.getElementById(String(i));//this variable gets the HTML element i.
        square.style.backgroundImage = '';        //this removes our elements backgroundImage
    }
    selectedSquares= [];//this resets our array so it is empty and we can start over
}

//this function makes our body element temporarily unclickable.
function disableClick() {
    const body = document.body;
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}
//This function takes a string parameter of the path you set earlier for
// placement sound('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();

}
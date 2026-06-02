const concatStrings = () => { // The concat() method concatenates (joins) two or more strings together.
    var string1 = "I have ";
    var string2 = "made this ";
    var string3 = "into a complete ";
    var string4 = "sentence.";
    var result = string1.concat(string2,string3,string4);// The concat() method does not change the existing strings. It returns a new string containing the text of the joined strings.
    document.getElementById("strings").innerText = result;
}

const sliceMethod = () => {// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);// The slice() method takes two parameters: the starting index and the ending index (not included). If the second parameter is omitted, slice() will extract to the end of the string.
    document.getElementById("slice").innerText = section;
}

const upperCaseMethod = () => {// The toUpperCase() method converts a string to uppercase letters.
    var text = "I have made this in lowercase.";
    var upperText = text.toUpperCase();// The toUpperCase() method does not change the original string. It returns a new string with all uppercase letters.
    document.getElementById("upper").innerText = upperText;
}

const searchMethod = () => {// The search() method searches a string for a specified value and returns the position of the match.
    var sentence = "All work and no play makes Johnny a dull boy.";
    var position = sentence.search("Johnny");// The search() method returns the index of the first match between the regular expression and the searched string. It returns -1 if no match is found.
    document.getElementById("search").innerText = sentence + ", 'Johnny' is at position: " + position;
}

const numberMethod = () => {// The toString() method returns a string representing the specified number object.
    var num = 674;// The toString() method does not change the original number. It returns a new string representing the number.
    document.getElementById("number").innerText = num.toString();
}   

const toPrecisionMethod = () => {// The toPrecision() method formats a number to a specified number of significant digits.
    var num = 78938.987376112;// The toPrecision() method does not change the original number. It returns a new string representing the number with the specified precision.
    document.getElementById("toPrecision").innerText = num.toPrecision(12);
}

const toFixedMethod = () => {// The toFixed() method formats a number using fixed-point notation.
    var num = 3.47236789;// The toFixed() method does not change the original number. It returns a new string representing the number with a specified number of digits after the decimal point.
    document.getElementById("toFixed").innerText = num.toFixed(2);
}
 
const valueOfMethod = () => {// The valueOf() method returns the primitive value of a string object.
    var text = "Hello World!";// The valueOf() method does not change the original string. It returns the primitive value of the string object.
    document.getElementById("valueOf").innerText = text.valueOf();
}

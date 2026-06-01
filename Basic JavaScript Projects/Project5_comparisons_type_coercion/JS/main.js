const testTypeof = (fp,typeData) => { //defining method
    var dataOut = "typeof [ "+typeData +" ] ---> [ "+  typeof typeData + " ]";//show type of data and function typeof
    return document.getElementById(fp).innerHTML = dataOut; //return to div specify
}

// type coercion data
const testCoercion = () => { //defining method coercion
    var dataIn = "52" + 52 ; // string concatenation, coercion of number 52 to string "52"
    return document.getElementById("tcoercion").innerHTML = dataIn; //return to div specify
}

const testNaN = (fp,dataIn) => { //defining method NaN
    return document.getElementById(fp).innerHTML = isNaN(dataIn); //return to div specify, isNaN function to test if data is not a number
}   

const testInfinity = (fp,dataIn) => { //defining method Infinity
    return document.getElementById(fp).innerHTML = dataIn; //return to div specify, dataIn is expected to be Infinity or -Infinity
}

const testNegativeInfinity = (fp,dataIn) => { //defining method Negative Infinity
    return document.getElementById(fp).innerHTML = dataIn;//   return to div specify, dataIn is expected to be -Infinity
}   
const compute = (dataIn1,dataIn2,op) => {//defining method compute, takes in two data inputs and an operator
    switch(op) {//switch statement to determine which operator to use
        case '>': return dataIn1 > dataIn2;//greater than operator
        case '<': return dataIn1 < dataIn2;//less than operator
        case '>=': return dataIn1 >= dataIn2;//greater than or equal to operator
        case '<=': return dataIn1 <= dataIn2;//less than or equal to operator
        case '==': return dataIn1 == dataIn2;//equality operator
        case '===': return dataIn1 === dataIn2;//strict equality operator
        case '!=': return dataIn1 != dataIn2;//inequality operator
        case '!==': return dataIn1 !== dataIn2;//strict inequality operator
        case '&&': return dataIn1 && dataIn2;//logical AND operator
        case '||': return dataIn1 || dataIn2;//logical OR operator
        default: return 'Invalid operator';//default case for invalid operator
    }
}
const testBoolean = (fp,op,dataIn1,dataIn2) => {//defining method testBoolean, takes in a function parameter, an operator, and two data inputs
    return document.getElementById(fp).innerHTML = compute(dataIn1, dataIn2, op);//return to div specify, calls compute method with data inputs and operator
}

const testConsole = (dataIn) => {//defining method testConsole, takes in data input
    console.log(dataIn);//logs data input to console
}

const testBooleanComplex = (fp,op,dataIn1,dataIn2,op1,dataIn3,dataIn4,op2) => {//defining method testBoolean, takes in a function parameter, an operator, and two data inputs
    var result1 = compute(dataIn1, dataIn2, op);//compute first operation and store result
    var result2 = compute(dataIn3, dataIn4, op1);//compute second operation and store result
    return document.getElementById(fp).innerHTML = compute(result1, result2, op2);//return to div specify, calls compute method with data inputs and operator
}

const not_function = (fp,numA, numB) => {//defining method not_function
    var result = !(numA > numB);
    return document.getElementById(fp).innerHTML = result.toString();//return to div specify, uses logical NOT operator to return false
}
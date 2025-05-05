// file explaning call back function in javascript 

function findsum (a,b){
    return a+ b; 
}

const value = findsum(4,5);
console.log(value);


function sum(num1, num2 , fn_to_call) {
    let result = num1 + num2;
    fn_to_call(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const ans =  sum(11,9,displayResult);
// callbacks

// error was comming due to interpreted lang 

 

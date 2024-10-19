//No. 1 :  Add two numbers

let A = 12;
let B = 16;

function AddTwoNumbers(A, B) {
    return A + B;
}

console.log(AddTwoNumbers(A, B)); 

// #######################################

// No. 2 : 

let A1 = 4;
let A2 = 6;

function Is_Valid(A1, A2) {
    
    return (A1 < 10 && A1 > A2);
}
console.log(Is_Valid(A1, A2)); 

// ###########################################

//  No.3 : 

let c = 20;
let d = 40;

function CheckDivisibility(e, f) {
    
    if (c % 10 === 0 && d % 10 === 0) {
        console.log(true);
    }
    
    else if (c % 10 !== 0 && d % 10 !== 0) {
        console.log(false);
    }

    else {
        console.log(true);
    }
}

CheckDivisibility();

// ###############################################

// No. 4 : TO print first digit of number

let X = 4567;

function First_Digit(X) {
    
    let firstDigit = Math.floor(X / 1000);
    
    
    console.log(firstDigit);
}


First_Digit(X); 

// ###############################################

// No. 5 : last digi of  4 digi number

let Y= 4567;

function Last_Digit() {

    let lastDigit = Y % 10;
    
    
    console.log(lastDigit);
}


Last_Digit(); 

// ############################################

// No. 6 : finding remainder

let a = 5;
let b = 9;

function Find_the_remainder(a, b) {
    
    let remainder = b % a;
    
    
    console.log(remainder);
}


Find_the_remainder(a, b); 

// ###############################################

//  No. 7: mutiplication

let P = 25;
let Q = 50;

function Multiply_two_number(P, Q) {
    let product = P * Q;
    
    console.log(product);
}


Multiply_two_number(P, Q); 

// ############################################3

// No. 8:  calculating marks

let x = 75;
let y = 80;
let z = 85;

function Sum(x, y, z) {
    return x + y + z;
}

function Average(x, y, z) {

    return Sum(x, y, z) / 3;
}

console.log("Total Marks:", Sum(x, y, z));       
console.log("Average Marks:", Average(x, y, z));  




  


  









    

    
   
    
    






   















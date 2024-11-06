// SOLUTIONS FOR ASSIGNMENT 5********************


// solution 1

var arr = [2, 4, 9, 10]
function find_Prod(arr) {
    var prod = 1;
    for (let num of arr) {
        prod *= num;
    }
    return prod;
}
console.log(find_Prod(arr));


// solution 2

var arr = [2, 12, 13, 123, 23]
function find_Sum(arr) {
    var sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(find_Sum(arr));


// solution 3

var arr = [12, 1, 23, 1, 1, 1, 23, 12, 14, 15, 18, 1, 23, 11, 1, 3, 4, 5, 1, 5,] // here N =20 and K=1;
// We have to find the occurence of 1 in given array.
function count_Occurence(arr) {
    var count_K = 0;
    for (let num of arr) {
        if (num == 1) {
            count_K++
        }
    }
    return count_K;
}
console.log(count_Occurence(arr));


// solution 4

var arr = [2, 1, 3, 4, 5, 6]
function sum_Elements(arr) {
    var even_Sum = 0;
    var odd_Sum = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            even_Sum += num;
        }
        else {
            odd_Sum += num;
        }

    }
    return [even_Sum, odd_Sum];
}
console.log(sum_Elements(arr));


// solution 5

var arr = [12, 12, 3, 4, 5, 6, 7, 7, 8, 9, 0, 1, 2, 23, 12, 13, 14, 16, 0, 19, 2]
// we will check whether 7 is present in an array or not
function find_num(arr, num) {

    if (arr.includes(num))
        return "Number is present in an array";
    else
        return 'Number is not present in an array'

}
console.log(find_num(arr, 7));


// solution 6

var arr = [12, 13, 1, 45, 5, 34, 23, 16, 19, 20, , 23, 12, 21, 89, 18, 67]
function high_Age(arr) {
    return arr.filter(age => age >= 18);

}
console.log(high_Age(arr))


// solution 7

var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
function inc_Arr(arr) {
    return arr.map(function (num) {
        return num + 1; // Increment each element by 1
    });
}
console.log(inc_Arr(arr));

var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
function inc_Arr(arr) {
    const arr1 = arr.map(num => num + 1);
    return arr1;
}
console.log(inc_Arr(arr));


// solution 8.

var arr = [33, 32, 45, 16,65, 78, 45, 54]
function isAllPass(arr) {
    for (const num of arr) {
        if (num < 32) {
            return "NO";
        }
        
    }
    return "YES"
 

}
console.log(isAllPass(arr));


// solution 9

function uniqueColorShirts(shirts) {
    let colorCount = {};
    let uniqueCount = 0;

    for (let color of shirts) {
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }
    for (let color in colorCount) {
        if (colorCount[color] === 1) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

let shirts = [0, 1, 2, 2, 3, 3, 4, 5, 6, 6];
console.log(uniqueColorShirts(shirts)); 


// solution 10

var arr=[12,11,121,12,120,132]
var max_Number=arr[0];
var min_Number=arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]>max_Number){
        max_Number=arr[i];
    }
}

console.log(max_Number);
for(i=0;i<arr.length;i++){
    if(arr[i]<min_Number){
        min_Number=arr[i];
    }
}
console.log(min_Number);
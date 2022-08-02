// math option 
var input = 56.3655;
var output = Math.abs(input);
var output = Math.ceil(input);
var output = Math.floor(input);
// console.log(output);


// compare option 
var job = 3500;
var business = 5000;
var entrepreniour = 6000;
if (job > business && job > entrepreniour) {
    // console.log(job, 'job is choosable');
}
else if (business > job && business > entrepreniour) {
    // console.log(business, 'business is choosable')
}
else {
    // console.log(entrepreniour, 'entrepreniour is choosable ')
}

// sum of array 
function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const someNumber = [24, 545, 767, 23, 554, 59];
const numberResult = sumOfArray(someNumber);
// console.log(numberResult);


// greatest number of an array 
function greatestNumber(numbers) {
    let greatest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > greatest) {
            greatest = element;
        }
    }
    return greatest;
}

const nineScience = [23, 545, 323, 23, 767, 12, 293, 289, -23, -09, 1295]
const resultScience = greatestNumber(nineScience);
// console.log(resultScience);

// lowest number of an array 
function lowestNumber(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const nineCommerce = [-36, -3456, 5454, -4, 1295]
const resultCommerce = lowestNumber(nineCommerce);
// console.log(resultCommerce);

// fibonacci serius
function fibonacci(number) {
    if (typeof number != 'number') {
        return 'Please input type of number'
    }
    if (number < 2) {
        return 'Please input greater than 2 number'
    }
    let fibo = [0, 1]
    for (let i = 2; i <= number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}
const fiboArray = 15;
const fiboResult = fibonacci(fiboArray);
// console.log(fiboResult);

// unique name find 
function uniqueName(names) {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const seven = ['karim', 'babul', 'humayon', 'jolil', 'shobor', 'david', 'shobor', 'david']
const resutlSeven = uniqueName(seven);
console.log(resutlSeven);


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
console.log(numberResult);




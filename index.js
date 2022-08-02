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
// console.log(resutlSeven);

// calculation of shopping 
function shopping(panjabi, pajama, sandal) {
    const panjabiPrice = 1500;
    const pajamaPrice = 1000;
    const sandalPrice = 1500;

    const totalPanjabiPrice = pajamaPrice * panjabi;
    const totalPajamaPrice = pajamaPrice * pajama;
    const totalSandalPrice = sandalPrice * sandal;

    const totalShopping = totalPanjabiPrice + totalPajamaPrice + totalSandalPrice;
    return totalShopping;
}
const panjabiItem = 10;
const pajamaItem = 5;
const sandalItem = 2;
const resultShopping = shopping(panjabiItem, pajamaItem, sandalItem)
// console.log(resultShopping);

// foobar solve 
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        // console.log('foobar')
    }
    else if (i % 5 == 0) {
        // console.log('foo')
    }
    else if (i % 3 == 00) {
        // console.log('bar')
    }
    else {
        // console.log(i)
    }
}

// highest value compare 
const ryans = [
    { name: 'asus', price: 65000, ram: 8, ssd: 250, color: 'silver', quantity: 1 },
    { name: 'hp', price: 75000, ram: 4, ssd: 256, color: 'black', quantity: 2 },
    { name: 'acer', price: 85000, ram: 12, ssd: 220, color: 'white', quantity: 4 },
    { name: 'apple', price: 105000, ram: 16, ssd: 560, color: 'silver', quantity: 5 },
    { name: 'samsung', price: 95000, ram: 8, ssd: 220, color: 'black', quantity: 10 }
]
function highestValue(laptops) {
    let highest = laptops[0]
    for (const laptop of laptops) {
        if (laptop.price > highest.price) {
            highest = laptop;
        }
    }
    return highest;
}
const gadget = highestValue(ryans);
// console.log(gadget);

const computerVillage = [
    { name: 'asus', price: 65000, ram: 8, ssd: 250, color: 'silver', quantity: 1 },
    { name: 'hp', price: 75000, ram: 4, ssd: 256, color: 'black', quantity: 2 },
    { name: 'acer', price: 85000, ram: 12, ssd: 220, color: 'white', quantity: 4 },
    { name: 'apple', price: 105000, ram: 16, ssd: 560, color: 'silver', quantity: 5 },
    { name: 'samsung', price: 95000, ram: 8, ssd: 220, color: 'black', quantity: 10 }
]
function totalValue(laptops) {
    let totalPrice = 0;
    for (const laptop of laptops) {
        laptopTotal = laptop.price * laptop.quantity;
        totalPrice = totalPrice + laptopTotal;
    }
    return totalPrice;
}
const gadgetResult = totalValue(computerVillage);
// console.log(gadgetResult);

// people survey
function peopleSurvey(kilometer) {
    const first10Kilometer = 1000;
    const second20Kilometer = 2000;
    const thirdrestKilometer = 3000;
    if (kilometer <= 10) {
        const people = kilometer * first10Kilometer;
        return people;
    }
    else if (kilometer <= 30) {
        const people10Kilometer = 10 * first10Kilometer;
        const restKilometer = kilometer - 10;
        const people20Kilometer = restKilometer * second20Kilometer;
        const totalPeople = people10Kilometer + people20Kilometer;
        return totalPeople;
    }
    else {
        const people10Kilometer = 10 * first10Kilometer;
        const people20Kilometer = 20 * second20Kilometer;
        const restKilometer = kilometer - 30;
        const peopleRestKilometer = restKilometer * thirdrestKilometer;
        const totalPeople = people10Kilometer + people20Kilometer + peopleRestKilometer;
        return totalPeople;
    }
}
const villageArea = peopleSurvey(31);
console.log(villageArea);

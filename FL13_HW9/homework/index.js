// Your code goes here

// Task #1
function convert(...args) {
    let resultArr = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            resultArr.push(Number(args[i]));
        } else {
            resultArr.push(String(args[i]));
        }
    }
    return resultArr;
}
// console.log(convert('1', 2, 3, '4')); //  => [1, '2', '3', 4]

// Task #2
function executeForEach (arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}
// executeForEach([1, 2, 3], function (el) {
//     console.log(el * 2)
// });

// Task #3
function mapArray(arr, callback){
    let resultArr = [];
    executeForEach(arr, function(el){
        resultArr.push(callback(+el));
    });
    return resultArr;
}
// console.log(mapArray([2, '5', 8], function(el) {
//     return el + 3
// })); //  => returns [5, 8, 11]

// Task #4
function filterArray(arr, callback){
    let resultArr = [];
    executeForEach(arr, function(el){
        if(callback(el)){
            resultArr.push(+el);
        }
    });
    return resultArr;
}
// console.log(filterArray([2, 5, 8,], function (el) {
//     return el % 2 === 0;
// })); // => returns [2, 8]

// Task #5
function containsValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
// containsValue([2, 5, 8], 2)  // returns true
// containsValue([12, 4, 6], 5)  // returns false

// Task #6
function flipOver(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
// console.log(flipOver('hey world')); // => 'dlrow yeh'

// Task #7
function makeListFromRange(arr) {
    let resultArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        resultArr.push(i);
    }
    return resultArr;
}
// console.log(makeListFromRange([2, 7])); // => [2, 3, 4, 5, 6, 7]

// Task #8
function getArrayOfKeys(arr, key) {
    const resultArr = [];
    executeForEach(arr, function (el) {
        resultArr.push(el[key])
    });
    return resultArr;
}
const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];
// console.log(getArrayOfKeys(fruits, 'name'));

// Task #9
const numTen = 10;
const numTwenty = 20
function substitute(arr) {
    let resultArr = [];
    mapArray(arr, function (el) {
        if (el >= numTwenty) {
            resultArr.push(el);
        } else if (el <= numTen) {
            resultArr.push(el);
        } else {
            resultArr.push('*');
        }
    });
    return resultArr;
}
// console.log(substitute([20, 58, 14, 48, 12, 31, 19, 10])); // = > returns [20, 58, '*', 48, '*', 31, '*', 10]

// Task #10
const year = 2020;
const day = 2
const date = new Date(year, 0, day)

function getPastDate(date, numDaysAgo) {
    let pastDate = date;
    pastDate.setDate(date.getDate() - numDaysAgo);
    return pastDate.getDate();
}
// console.log(getPastDate(date, 1));
// getPastDay(date, 1); // 1, (1 Jan 2020)
// getPastDay(date, 2); // 31, (31 Dec 2019)
// getPastDay(date, 365); // 2, (2 Jan 2019)

// Task #11
function formatDate(date) {
    // let month = date.getMonth() < numTen ? '0' + date.getMonth() : date.getMonth();
    let month = date.getMonth() < numTen ? `0` + (date.getMonth() + 1) : date.getMonth();
    let day = date.getDate() < numTen ? '0' + date.getDate() : date.getDate();
    let hours = date.getHours() < numTen ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < numTen ? '0' + date.getMinutes() : date.getMinutes();
    return `${date.getFullYear()}/${month}/${day} ${hours}:${minutes}`
}
console.log(formatDate(new Date('6/15/2019 09:15:00'))); // => "2019/06/15 09:15"
console.log(formatDate(new Date())); // gets current local time in such format (YYYY/MM/DD HH:mm)

// RESTRICTIONS
// -	Using built–in array or object methods(besides push, length and date methods) is forbidden
// -	Using built–in string methods (except parseInt) is forbidden
// -	Using any external libraries is forbidden


// function positiveSum( array ) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] > 0) {
//             sum += array[i];
//         }
//     }
//     return sum;
// }
// positiveSum([0, -3, 5, 7]);


function positiveSum(arr) {
    let sum = arr.reduce(((acc, item) => item > 0 ? item + acc: acc), 0);
    return sum;
}
console.log(positiveSum([0, -3, 5, 7]));


// positiveSum() consider using reduce instead of for loop;
// you don't need filter, just reduce and if (item > 0) {return acc + item} return acc;
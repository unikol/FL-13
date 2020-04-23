// function extractMiddle(str) {

//     var position;
//     var length;

//     if(str.length % 2 === 1) {
//         position = str.length / 2;
//         length = 1;
//     } else {
//         position = str.length / 2 - 1;
//         length = 2;
//     }

//     return str.substring(position, position + length)
// }

// console.log(extractMiddle("152"));

// the most amazing
// let s = prompt('input a word', '');
let getMiddle = prompt('');
getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

// should return "dd"

alert(getMiddle);
// alert(getMiddle);
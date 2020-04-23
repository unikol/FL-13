// Your code goes here
let billAmount = parseFloat(prompt(`Enter Check number:`));
let percentTip = parseFloat(prompt(`Enter Tip percentage`));
let hundred = 100;
let two = 2;

if(isNaN(billAmount) || isNaN(percentTip) || billAmount < 0 || percentTip < 0 || percentTip > hundred){
    alert('Invalid input data');
} else if (billAmount === undefined || percentTip === undefined) {
    alert('Invalid input data');
} else {
    let tipAmount = billAmount * percentTip / hundred;
    let totalSum = billAmount + tipAmount; 
 alert(
`Check number: ${billAmount.toFixed(two)}  
Tip: ${percentTip.toFixed(two)}%
Tip amount: ${tipAmount.toFixed(two)} 
Total sum to pay: ${totalSum.toFixed(two)}`);
}

// result = `Price without discount: ${+price.toFixed(2)}
// Discount: ${+discount.toFixed(2)}%
// Price with discount: ${+priceDiscount.toFixed(2)}
// Saved: ${+priceSaved.toFixed(2)}`;
// }
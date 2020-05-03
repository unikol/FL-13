function isBigger(a, b){
  return a > b;
}
function getDifference (a, b) {
  return isBigger(a, b) ? a - b : b - a;
    }
    console.log(getDifference(5, 8)); // => 3
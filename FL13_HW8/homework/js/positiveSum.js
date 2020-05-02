function positiveSum( array ) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}
positiveSum([2, 4, 6, 8]);

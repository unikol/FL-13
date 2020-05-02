
function letterCount(str, char){
    let string = str.toLowerCase();
    return string.split(char).length - 1;
}
letterCount("Barry", "b")
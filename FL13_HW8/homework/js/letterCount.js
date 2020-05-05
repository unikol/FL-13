function letterCount(str, char){
    let character = char.toLowerCase(); //?
    let string = str.toLowerCase();
    return string.split(character).length - 1;
}
console.log(letterCount("Barry", "b"));
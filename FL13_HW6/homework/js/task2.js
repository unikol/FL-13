let string = prompt('input a word:');
const midChar = string => string.substr(string.length - 1 >>> 1, (~string.length & 1) + 1);
if (string === '' || string === null || string.trim() === '') {
    alert('Invalid value');
} else {
alert(`"${midChar(string)}"`);
}
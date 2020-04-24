let s = prompt('input a word:');
const midChar = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);
if (s === '' || s === null || s.trim() === '') {
    alert('Invalid value');
} else {
alert(`"${midChar(s)}"`);
}
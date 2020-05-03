function storeNames() {
    return Array.prototype.slice.call(arguments);
}
console.log(storeNames('Nick Fury', 'Iron Man', 'Doctor Strange'));



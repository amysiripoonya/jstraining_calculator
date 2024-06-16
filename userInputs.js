const readline = require('readline-sync');

exports.getNum = function() {
    let num = readline.prompt();
    if (isNaN(num)) {
        console.log("Not a number")
        return getNum();
    } else {
        return parseInt(num);
    }
}

exports.getStr = function() {
    return String(readline.prompt());
}


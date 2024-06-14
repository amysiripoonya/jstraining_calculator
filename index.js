const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================')
console.log('Enter the operator: ');
const op = readline.prompt();
console.log("How many numbers do you want to " + op + ": ");
const num = readline.prompt();

const arr = Array(num);

for (let i = 0; i < num; i++) {
    console.log('Enter number ' + (i + 1) + ' : ');
    arr[i] = parseInt(readline.prompt());
}

let ans = arr[0];

for (let i = 1; i < num; i++) {
    switch (op) {
        case "+":
            ans += arr[i];
            break;
        case "-":
            ans -= arr[i];
            break;
        case "*":
            ans *= arr[i];
            break;
        case "/":
            ans /= arr[i];
            break;
    }
}


console.log(ans);
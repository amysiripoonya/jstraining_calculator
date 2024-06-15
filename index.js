const readline = require('readline-sync');

printWelcomeMessage();
while (true) {
    performOneCalculation();
}


function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function performOneCalculation() {
    console.log('Enter the operator: ');
    const op = readline.prompt();
    console.log("How many numbers do you want to " + op + ": ");
    const num = getNum();

    const arr = Array(num);

    for (let i = 0; i < num; i++) {
        console.log('Enter number ' + (i + 1) + ': ');
        arr[i] = getNum();
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
}

function getNum() {
    let num = readline.prompt();
    if (isNaN(num)) {
        console.log("Not a number")
        return getNum();
    } else {
        return parseInt(num);
    }
}
const input = require('./userInputs');

exports.performOneArithmeticCalculation = function() {
    console.log('Enter the operator: ');
    const op = input.getStr();
    console.log(`How many numbers do you want to ${op}: `);
    const num = input.getNum();

    const arr = Array(num);

    for (let i = 0; i < num; i++) {
        console.log(`Enter number ${i + 1}: `);
        arr[i] = input.getNum();
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
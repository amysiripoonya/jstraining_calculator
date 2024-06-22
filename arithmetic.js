const input = require('./userInputs');

exports.performOneArithmeticCalculation = function() {

        console.log('Enter the operator: ');
        let op = input.getStr();
        while (op != '+' && op != '-' && op != '*' && op != '/') {
            console.log("Invalid Operation");
            op = input.getStr();
        }
        console.log(`How many numbers do you want to ${op}: `);
        const num = input.getNum();

        const arr = Array(num);

        for (let i = 0; i < num; i++) {
            console.log(`Enter number ${i + 1}: `);
            arr[i] = input.getNum();
        }

        // let ans = arr[0];

        // for (let i = 1; i < num; i++) {
        //     switch (op) {
        //         case "+":
        //             ans += arr[i];
        //             break;
        //         case "-":
        //             ans -= arr[i];
        //             break;
        //         case "*":
        //             ans *= arr[i];
        //             break;
        //         case "/":
        //             ans /= arr[i];
        //             break;
        //     }
        // }
        ans = arr[0];
        let rem = arr.splice(1, num);

        switch (op) {
            case "+":
                ans = rem.reduce((acc, cv) => acc + cv, ans);
                break;
            case "-":
                ans = rem.reduce((acc, cv) => acc - cv, ans);
                break;
            case "*":
                ans = rem.reduce((acc, cv) => acc * cv, ans);
                break;
            case "/":
                rem = rem.filter((item) => item != 0);
                if (ans == 0) {
                    ans = rem[0];
                    rem = rem.splice(1, rem.length - 1);
                }
                console.log(rem);
                ans = rem.reduce((acc, cv) => acc / cv, ans);
                break;
        }


        console.log(ans);
    
}
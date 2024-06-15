const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';


printWelcomeMessage();
while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performOneVowelCountingCalculation();
  }
}



function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function performOneArithmeticCalculation() {
    console.log('Enter the operator: ');
    const op = readline.prompt();
    console.log(`How many numbers do you want to ${op}: `);
    const num = getNum();

    const arr = Array(num);

    for (let i = 0; i < num; i++) {
        console.log(`Enter number ${i + 1}: `);
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

function performOneVowelCountingCalculation() {
    console.log('Enter a string: ');
    let str = String(readline.prompt());
    str = str.toLowerCase();
    let vowels = 
        {a: 0, e: 0, i: 0, o: 0, u: 0};
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                vowels.a += 1;
                break;
            case 'e':
                vowels.e += 1;
                break;
            case 'i':
                vowels.i += 1;
                break;
            case 'o':
                vowels.o += 1;
                break;
            case 'u':
                vowels.u += 1;
                break;
        }
    }
    console.log("The vowel counts are:");
    console.log(` A: ${vowels.a}\n E: ${vowels.e}\n I: ${vowels.i}\n\ O: ${vowels.o}\n U: ${vowels.u}\n`);

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

function getCalculationMode() {
    console.log("Which calculator mode do you want?\n 1) Arithmetic\n 2) Vowel counting")
    return readline.prompt();
}
const readline = require('readline-sync');
const input = require('./userInputs');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';


printWelcomeMessage();
while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    arithmetic.performOneArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    vowelCounting.performOneVowelCountingCalculation();
  }
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function getCalculationMode() {
    console.log("Which calculator mode do you want?\n 1) Arithmetic\n 2) Vowel counting")
    return input.getStr();
}
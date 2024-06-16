const input = require('./userInputs');


exports.performOneVowelCountingCalculation = function() {
    console.log('Enter a string: ');
    let str = input.getStr();
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
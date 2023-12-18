let nr = 54145;
let string = nr.toString();
let reverse = string.split('').reverse().join('');
if (string == reverse) {
    console.log(`${nr} este palindrom.`);
} else {
    console.log(`${nr} nu este palindrom.`);
}
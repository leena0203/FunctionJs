function isPrime(num) {
    let flag = new Boolean(true);
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (num <= 2) {
        flag = false;
    }
    return flag;
}
function getPalindrome(number) {
    let num = number;
    let reverseNum = 0;
    while (num != 0) {
        reverseNum = reverseNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverseNum;
}
var num = parseInt(process.argv[2]);
if (isPrime(num)) {
    if (isPrime(getPalindrome(num))) {
        console.log(num + " is prime and its palindrome is also prime");
    } else {
        console.log(num + " is prime and but its palindrome is NOT prime");
    }
} else {
    if (isPrime(getPalindrome(num))) {
        console.log(num + " is NOT prime and its palindrome is prime");
    } else {
        console.log(num + " is NOT prime and its palindrome is also NOT prime");
    }
}
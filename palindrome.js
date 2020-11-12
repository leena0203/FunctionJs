function isPalindrome(number) {
    let num = number;
    let reverseNum = 0;
    while (num != 0) {
        reverseNum = reverseNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    if (number == reverseNum) {
        return true;
    }
    else {
        return false;
    }
}

var first = parseInt(process.argv[2]);
var second = parseInt(process.argv[3]);
if (isPalindrome(first)) {
    console.log(first + " is a palindrome number");
} else {
    console.log(first + " is NOT a palindrome number");
}
if (isPalindrome(second)) {
    console.log(second + " is a palindrome number");
} else {
    console.log(second + " is NOT a palindrome number");
}
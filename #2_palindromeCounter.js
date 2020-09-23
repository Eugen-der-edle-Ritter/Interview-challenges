function isPalindrome(str) {
    const wordArray = str.split(' ');
    let counterObject = {palindromeCount: 0, notPalindromeCount: 0};
    
    wordArray.forEach(el => {
        if(el.toLowerCase().split('').reverse().join('') === el.toLowerCase()) {
            counterObject.palindromeCount += 1;
        }
        else {
            counterObject.notPalindromeCount += 1;
        }
    });
    
    return counterObject;
}

console.log(isPalindrome('топот рокот тут там'));
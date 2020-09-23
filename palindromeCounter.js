/*
Нужно описать функцию, которая подсчитывает количество слов палиндромов и слов непалиндромов в строке.  На вход функция принимает строку - набор слов, разделенных пробелами. Возвращать функция должна объект состоящий из двух числовых полей - количество словпалиндромов и слов не-палиндромов.
*/
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

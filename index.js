function calculateTax(amount) {
    return amount * .1
}


function convertToUpperCase(text) {
    return text.toUpperCase();
}


function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


function isPalindrome(word) {
    let backword = '';
    for (let i = word.length -1; i>=0; i--) {
        backword += word[i];
    }
    if (word === backword) {
        return true;
    } else {
        return false;
    }
}
  

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - (discountPercentage / 100))
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

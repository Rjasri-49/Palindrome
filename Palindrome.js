function isPalindrome(str) {
    // Convert the string to lowercase to handle case sensitivity
    const normalizedStr = str.toLowerCase();
    
    // Reverse the string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the reversed string is the same as the original
    if (normalizedStr === reversedStr) {
        return "It's a palindrome";
    } else {
        return "Not a palindrome!";
    }
}

// Test cases
console.log(isPalindrome("malayalam")); // Output: It's a palindrome
console.log(isPalindrome("Dad"));       // Output: Not a palindrome!
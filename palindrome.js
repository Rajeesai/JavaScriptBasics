function reverseString(str) {
    let strArr = str.split("") 
    console.log(`Splited String is - ${strArr}`)
    let arrLen = strArr.length
    let revStr = ""
    for (i = arrLen-1; i>=0; i--) {
        revStr = revStr + strArr[i]
    }
    console.log(`Reversed String is - ${revStr}`)
    return revStr;
}

function isPalindrome(str) {
    revStr = reverseString(str);
    if (str.toLowerCase() == revStr.toLowerCase()) {
        console.log(`${str} is a Palindrome!!`)
    }
    else {
        console.log(`${str} is not a Palindrome`)
    }
}

let word1 = "MAdam"
let word2 = "CiVic"
let word3 = "Testing"
console.log("Test 1: String - " + word1)
console.log("---------------------------")
isPalindrome(word1)
console.log("---------------------------")
console.log("Test 2: String - " + word2)
console.log("---------------------------")
isPalindrome(word2)
console.log("---------------------------")
console.log("Test 3: String - " + word3)
console.log("---------------------------")
isPalindrome(word3)


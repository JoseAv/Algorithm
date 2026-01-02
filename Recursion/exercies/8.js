function palindrome(word, newWord = '') {

    if (newWord.length < word.length) {
        newWord += word[(word.length - 1) - newWord.length]
        return palindrome(word, newWord)
    }

    return newWord === word


}

console.log(palindrome('hoh'))

// segunda forma
function recursive(word) {
    function palindrome(word, index = 0) {
        if (index === word.length - 1) {
            return word[index]
        }

        return word[index] + palindrome(word, ++index)
    }
    return palindrome(word) === word
}

console.log(recursive('hoh'))



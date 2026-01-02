const reverseString = (word) => {
    if (typeof word !== 'string') return

    function trueReverse(word, reverse = '', index = word.length - 1) {
        if (index < 0) return reverse
        reverse += word[index]
        return trueReverse(word, reverse, index - 1)
    }
    return trueReverse(word)
}



console.log(reverseString('hola'))
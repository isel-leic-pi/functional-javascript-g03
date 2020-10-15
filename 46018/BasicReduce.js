function countWords(inputWords) {
    return inputWords.reduce(
        (obj, word) => { 
            Object.keys(obj).includes(word) ? obj[word]++ : obj[word] = 1
            return obj
        }
        , {})
}

module.exports = countWords
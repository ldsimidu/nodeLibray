const fs = require('fs'); //file system

const path = process.argv;
const link = path[2];

fs.readFile(link, 'utf-8', (err, str) => paragraphBreak(str))

function paragraphBreak(str) {
    const paragraph = str.toLowerCase().split('\n')
    const count = paragraph.flatMap((paragraph) => {
        if (!paragraph) return [] ;
        return duplicatedWordsVerification(paragraph)
    })
    //.filter((paragraph) => paragraph)
    //.map((paragraph) => {        
    console.log(count);
    
}

function specialCharacters(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function duplicatedWordsVerification(str) {
    const wordsList = str.split(' ');
    const result = {}
    
    wordsList.forEach(word => {
        if (word.length >= 3) {
            const freeWord = specialCharacters(word)
            result[freeWord] = (result[freeWord] || 0) + 1
        }
    })
    return result;
}
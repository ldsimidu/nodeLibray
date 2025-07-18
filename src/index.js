const fs = require('fs'); //file system

const path = process.argv;
const link = path[2];

fs.readFile(link, 'utf-8', (err, str) => paragraphBreak(str))

function paragraphBreak(str) {
    const paragraphList = str.toLowerCase().split('\n')
    const count = paragraphList.map((paragraph) => {
        return duplicatedWordsVerification(paragraph)
    })
    console.log(count);
    
}

function duplicatedWordsVerification(str) {
    const wordsList = str.split(' ');
    const result = {}
    
    wordsList.forEach(word => {
        result[word] = (result[word] || 0) + 1
    })
    return result;
}
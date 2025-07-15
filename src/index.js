const fs = require('fs'); //file system

const path = process.argv;
const link = path[2];

fs.readFile(link, 'utf-8', (err, str) => duplicatedWordsVerification(str))

function duplicatedWordsVerification(str) {
    const wordsList = str.split(' ');
    const result = {}
    
    wordsList.forEach(word => {
        result[word] = (result[word] || 0) + 1
    })
    console.log(result);
}
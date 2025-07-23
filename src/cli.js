//Command Line Interface
import fs from 'fs'
import errorHandling from './errors/errorFunctions.js'
import { paragraphBreak } from './index.js';
import { outFile } from '../helpers.js';

const filePath = process.argv;
const link = filePath[2];
const newFilePath = filePath[3]

fs.readFile(link, 'utf-8', (err, str) => {
    try {
        if (err) throw err
        const result = paragraphBreak(str)
        saveFile(result, newFilePath)
    } catch(err) {        
        errorHandling(err) 
    }
})

async function saveFile(wordList, path) {
    const newFile = `${path}/result.txt`
    const textWords = outFile(wordList);
    try {
        await fs.promises.writeFile(newFile, textWords)
        console.log(`File has been created!`);
    } catch(err) {
        errorHandling(err)
    }
}

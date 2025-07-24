//Command Line Interface
import fs from 'fs';
import path from 'path';
import errorHandling from './errors/errorFunctions.js';
import { paragraphBreak } from './index.js';
import { outFile } from '../helpers.js';
import { Command } from 'commander';
import { text } from 'stream/consumers';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --text <string>', 'Path of the text to be processed')
    .option('-d, --destination <string>', 'Folder path to save the results file')
    .action((options) => {
        const { text, destination } = options

        if (!text || !destination) {
            console.error('error: please enter the origin and destination path');
            program.help()
            return;
        }

        const textPath = path.resolve(text);
        const destPath = path.resolve(destination);

        try {
            fileProcess(textPath, destPath)
            console.log(`Text has been sucefully processed`);
        } catch (err) {
            console.log(`An error occurred while processing the file`, err );
        }
    })

program.parse();

const filePath = process.argv;
const link = filePath[2];
const newFilePath = filePath[3]

function fileProcess(text, destination) {
    fs.readFile(text, 'utf-8', (err, str) => {
        try {
            if (err) throw err
            const result = paragraphBreak(str)
            saveFile(result, destination)
        } catch(err) {        
            errorHandling(err) 
        }
    })
}

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

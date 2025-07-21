//Command Line Interface
import fs from 'fs'
import errorHandling from './errors/errorFunctions.js'
import { paragraphBreak } from './index.js';

const path = process.argv;
const link = path[2];

fs.readFile(link, 'utf-8', (err, str) => {
    try {
        if (err) throw err
        paragraphBreak(str)
    } catch(err) {        
        errorHandling(err) 
    }
})

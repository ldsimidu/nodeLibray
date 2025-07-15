const fs = require('fs'); //file system

const path = process.argv;
const link = path[2];

fs.readFile(link, 'utf-8', (erro, texto) => console.log(texto))


# **File Reader via Command Line**

This small Node.js script allows you to read and display the contents of a text file passed as an argument in the terminal.

<br>

## **How to execute**
Considering the 'txt' files in this project:

```bash
node src/index.js ../files/text.txt
```

<br>

## **Package JSON**

The package.json file is used to manage a Node.js project's dependencies, scripts, and configurations. It describes the project, including its name, version, author, and the libraries it uses.

```bash
$ npm init -y
```

<br>

## **File Reader in JS**

```javascript
const fs = require('fs'); // Imports the 'fs' module for file system manipulation
```

👉 Responsável por permitir que o Node.js leia arquivos locais.

```javascript
const path = process.argv; // Captures all command-line arguments
const link = path[2]; // Gets the third argument, which should be the file path
```

Node.js stores the passed arguments in the process.argv variable as an array.
- path[0] → path to Node
- path[1] → path to the .js file
- path[2] → argument passed by the user (in this case, the path to the file we want to read).

```javascript
fs.readFile(link, 'utf-8', (err, str) => { // Reads the file at the given path using UTF-8 encoding
    try {
        if (err) throw err // If an error occurred during reading, throw it to be caught below
        paragraphBreak(str) // Calls the paragraphBreak function, passing the file's contents as argument
    } catch(err) {        
        errorHandling(err) // If an error was thrown, handle it using the errorHandling function
    }
})
```

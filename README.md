# **File Reader via Command Line**

This small Node.js script allows you to read and display the contents of a text file passed as an argument in the terminal. It also identifies and outputs repeated words (with 3 or more letters) found in each paragraph, and saves the result to a new file.

**This project was developed to improve my JavaScript knowledge and concepts!**

<br>

## **How to execute**

in your terminal, type:

```bash
node src/cli.js ../files/text.txt ../results
```

- The first argument is the file you want to read.

- The second argument is the directory where the result will be saved.

✅ ***Output will be saved as result.txt inside the specified folder.***

<br>

## **Package JSON**

The package.json file is used to manage a Node.js project's dependencies, scripts, and configurations. It describes the project, including its name, version, author, and the libraries it uses.

```bash
$ npm init -y
```

<br>

## **Main Files Overview**

### **📄 cli.js**
#### Responsible for reading the file, processing its content, and saving the result.

---

<br>

Here we extract the file path (text input) and destination folder path from command-line arguments.

```javascript
const filePath = process.argv;
const link = filePath[2];
const newFilePath = filePath[3]
```

---

<br>

Reads the file, processes repeated words per paragraph, and saves the output.

```javascript
fs.readFile(link, 'utf-8', (err, str) => {
    try {
        if (err) throw err
        const result = paragraphBreak(str)
        saveFile(result, newFilePath)
    } catch(err) {        
        errorHandling(err) 
    }
})
```

---

<br>

This function formats and saves the results to a ***.txt*** file.

```javascript
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
```

<br>

### **📄 index.js**
#### Contains the logic to split the text by paragraphs and count repeated words (with at least 3 letters).

---

<br>

Converts the entire string to lowercase, splits it into paragraphs, and calls a function to verify duplicates.

```javascript
export function paragraphBreak(str) {
    const paragraph = str.toLowerCase().split('\n')
    const count = paragraph.flatMap((paragraph) => {
        if (!paragraph) return [] ;
        return duplicatedWordsVerification(paragraph)
    })
    return count;
}
```

---

<br>

Counts words that appear more than once, ignoring punctuation and filtering by length.

```javascript
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
```
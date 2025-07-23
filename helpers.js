function occurrenceFilter(paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1)
}

function outFile(wordList) {
    let finalText = '';
    wordList.forEach((paragraph, index) => {
        const doubles = occurrenceFilter(paragraph);
        if (doubles.length > 0) {
            finalText += `Duplicate words from paragraph ${index + 1}: ${doubles.join(', ')} \n`;
        }
    })
    
    return finalText;
}

export { outFile };

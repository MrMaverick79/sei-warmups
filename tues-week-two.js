// Word Counter
// ​Given the following string:​

 const story = "The dogs are happy. The dogs are running. The owners are drunk. The dogs are running on the road. The dogs are gone. Bye, dogs.";
// ​...print out a "word frequency" table which lists each word from the string, followed by how many times it appeared:​

// The: 5
// dogs: 4
// dogs.: 1
// are: 5
// happy.: 1
// owners: 2
// the: 1
// drunk.: 1
// Bye,: 1
// // ...etc...
// ​The order the words print out does not matter - you don't have to match the above output exactly.​​

// BONUS
// Notice that the example output has punctuation (i.e. the full stops) included as part of the word - this is because the easiest way to split up the string into words involves just looking for spaces. Change the code so that the string is split up into words that ignore the punctuation, i.e. "dogs" and "dogs." are treated as the same word "dogs" and "Bye," is treated as "Bye"
// Ignore case as well, so "The" and "the" are both treated as the same word "the"
// Ultra bonus: print out the words in order of frequency, from highest count to lowest (don't expect a solution for this)​

const wordCount = (string) =>{
    const lowerCaseString = string.toLowerCase(); //turn the string into lowercase
    let wordList= lowerCaseString.split(" "); //splits the string into an array
    let wordCount = {} //add to this object which collects all of the words

    for(i = 0; i < wordList.length; i++) { //i is the word being checked
        wordList[i] = removePunctuation(wordList[i]); //replaces the words with punctuation without//replace current word
        let count = 0;
        for (j = 0; j < wordList.length; j++) { //inner loop to check each word //NOT NEEDED as long as there is an if else in the original loop
            if (wordList[i] === wordList[j]){
                count ++
            }
            wordCount[wordList[i]] = count;
        }
        
    }
    console.log(wordCount)
    printInOrder(wordCount)
}

const removePunctuation = (str) =>{
    const punctuation = ['.', ',', '!', '?', "'", '"',"(", ")" ] 
    if ( punctuation.includes(str[str.length-1])) {
        return str.slice(0, -1);
    } else {
        return str;
    }
   
}

const printInOrder = (obj) =>  {
    for (key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
    
}

wordCount(story)

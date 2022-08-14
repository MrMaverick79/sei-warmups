console.log('Hi');

// Write a function scrabbleScore() that, given a word, computes the scrabble score for that word.

// scrabbleScore('cabbage') // => 14
// Use the below to calculate the score. Convert the following letter and values into an appropriate object structure. There are several ways to do this, some easier than others!

// Letter Values:
// Letters	Values
// A, E, I, O, U, L, N, R, S, T	1
// D, G	2
// B, C, M, P	3
// F, H, V, W, Y	4
// K	5
// J, X	8
// Q, Z	10
// Goodluck!

const letterValues = [
    {
        names: [ "A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
        value: 1,
    },
    {
        names:  ["D", "G"],
        value: 2,
    },
    {
        names: ["B", "C",  "M", "P"],
        value: 3,
    },

    {
        names: ["F", "H", "V", "W", "Y"],
        value: 4
    },

    {
        names: ["K"],
        value: 5,
    },

    {
        names: ["J", "X"],
        value: 8,

    },

    {
        names: ["Q", "Z"],
        value: 10,
    }


] //end letter values

const scrabbleScore = (word) => {
    let score = 0;
    word = word.toUpperCase();
    console.log(word)
    for (let i=0; i<word.length; i++){
        for(let j= 0; j< letterValues.length; j++) {
        if (letterValues[j].names.includes(word[i])) {
            score += letterValues[j].value;
        }};
    } console.log(score)
}

scrabbleScore('cabbage') // => 14
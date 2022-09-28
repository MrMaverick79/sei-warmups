// Isogram Finder

// An isogram is a word which has no repeating characters anywhere in the word. For example the string "isogram" is an isogram, however the string "is isogram", is not an isogram (2 i's and 2 s's).

//     There must be no repeating letters anywhere in the string.

//     The strings are case insensitive. Different Cased letters are still counted.

// isIsogram("Dermatoglyphics") // true
// isIsogram("isogram") // true
// isIsogram("aba") //false
// isIsogram("moOse") // false,
// isIsogram("isIsogram") // false
// isIsogram("") // true

// Write a program in JavaScript that when given a string will detect if the string is or is not an isogram.

const isIsogram =  ( word => new Set(word.toLowerCase()).size === word.length ) 


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("MoOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));


// Anagram Detector

// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
// Suggestions

// Start out by getting this working with discrete functions. If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const anagramTest = (word, anagram) => {
        return word.split("").sort().join("")  === anagram.split("").sort().join("") 
           
    };
        
const checkList =( arr, anagram ) => { 
    for (let i = 0; i < arr.length; i++) { //loop over the words provided and test whether they are anagrams
        if (anagramTest(arr[i], anagram)){
            return arr[i];
        }
        
    }
}

let wordlist = ["enlists", "google" ,"inlets", "banana"]
let anagram = "listen"
console.log(checkList(wordlist, anagram))


// Object version

const anagramObject = {

    anagramList : [],

    anagramTest: function ( word, anagram ) {
        return word.split("").sort().join("")  === anagram.split("").sort().join("")      
    },

    checkList: function  ( arr, anagram ) {
        
        for (let i = 0; i < arr.length; i++) {
            console.log(`Word: ${arr[i]}, anagram: ${anagram}`);
            console.log(anagramTest(arr[i], anagram));
            if (anagramTest(arr[i], anagram)){
                this.anagramList.push(arr[i])
            }
            
        }
        console.log(this.anagramList);
        
    },


} //end anagram object

console.log("=====Object Version=====");
let objectWordlist = ["enlists", "google" ,"inlets", "tinsel", "banana" ]
let objectAnagram = "listen"
anagramObject.checkList(objectWordlist, anagram)

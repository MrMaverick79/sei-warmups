//Friday Week 1 WU

// Simon Says
// Create a function in JS that takes an input and returns Simon's response as follows:

// Simon answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// The input will not contain any numbers.
// Examples:
// simonSays("Hello, how are you?"); // => "Sure."
// simonSays("Hello, how are you!"); // => "Whatever"
// simonSays(""); // => "Fine. Be that way!"
// simonSays("HEYYYYY"); // => "Woah, chill out!"
// Bonus:
// Strike out the last dot point, the input may be a combination of numbers and other characters.

const isQuestion = (str) => { //returns true false whether it is a question.
    return str.endsWith('?')
}; //end isQuestion

const isYelling = (str) => {
    for (letter in str) { //this does not need to be for each letter---can be for the message
        if (str[letter] !== str[letter].toUpperCase()) {
            return true;
        }   
    }; 
    
}; //end isYelling

const isBlank = (str) => {
    if(str.trim() === "") {
        return true;
    }
};


const simonSays  = (str) => {
    if (isQuestion(str)) {
        console.log('Sure');
    } else if (isYelling(str)){
         console.log("Woah, chill out!"); //not working
    } else if (isBlank(str)){
        console.log("Fine be that way!");
    } else {
        console.log("Whatever.")
    }

};

//Testing strings

simonSays("Hello, how are you?"); // => "Sure."
simonSays("Hello, how are you!"); // => "Whatever"
simonSays("HHHHHH")  // => "woah chill out" 
simonSays(""); // => "Fine. Be that way!"


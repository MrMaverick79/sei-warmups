console.log('Check');


// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg, and paste the text into a hidden <div> element in your HTML file (use CSS to hide it).

// Use jQuery to get the contents of the div as a string, then split up the string into an array of words.

// Create a getRandomElementFromArray() function to pick a random word from the array.
// Use jQuery to
//     create a new DIV with that word as its contents
//     set the DIV to appear at a random position on the page
//     append it to the DOM.
// Do all of the above in a window.setInterval() callback ​






//grab the text as a string
const textString = $('#randomText').html();

//split up thew words as an array
textString.trim() //shoould remove whitespace
const wordArray = textString.split(" ");

// Create a getRandomElementFromArray() function to pick a random word from the array.

const getRandomElementFromArray = (arr) => {
    let choice = Math.floor(Math.random() * arr.length);
    if(arr[choice] != "") {
        return arr[choice];
    }
    else {
        getRandomElementFromArray(arr)
    }
}; //end getRandomElement

//these could be made into ranodomInteeger(int), where int can be the limits (font size, widths and heights etc)

const randomWidth = () => {
    let width = Math.floor(Math.random() * window.innerWidth - 100)
    return width;
};

const randomHeight = () => {
    let height = Math.floor(Math.random() * window.innerHeight - 100)
    return height;
}


// Use jQuery to
//     create a new DIV with that word as its contents
//     set the DIV to appear at a random position on the page
const addToScreen = () => {
    console.log('Called');
    const $newDiv = $("<div></div>");
    $newDiv.html(getRandomElementFromArray(wordArray))
    $newDiv.addClass("show");
    $newDiv.css({
        top: randomHeight(),
        left: randomWidth(),
        fontSize: Math.floor(Math.random() * 30) + 'px' 
    })
    $("body").append($newDiv);
    $($newDiv).fadeIn("slow").fadeOut("slow");
    
}; //end addToScreen

window.setInterval(addToScreen, 200);

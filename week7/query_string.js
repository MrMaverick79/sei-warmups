// Query string to Params Object

// Given the following sample url

// let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"
let url = "https://api.giphy.com/v1/gifs/search?q=cats&limit=10"

const parseQueryString = ( str )=> {    
    //get rid of the base url
    const parameters = str.split('?')[1]
    //split into elements
    const elements = parameters.split('&');
    const splitElements = []
    elements.forEach(function(e){
       splitElements.push (e.split('='))
    });
    let finalObj= {}
    for (let i = 0; i < splitElements.length; i++) {
        const element = splitElements[i];
       
        finalObj [element[0]] = element[1]
        
    }
    return finalObj
};
console.log(parseQueryString(url));

// Write a function that accepts a url as an argument and returns just the query string formatted as an object. Please write this in JavaScript.
// Hint: look into substring()

// parseQueryString(url)

// returns the following

// {
//   t: "jaws",
//   apikey: "123456",
//   page: "5"
// }

// here is another example



// parseQueryString(url)

// returns the following

// {
//   q: "cats",
//   limit: "10"
// }

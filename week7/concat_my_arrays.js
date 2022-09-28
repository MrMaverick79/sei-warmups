// Concat my arrays

// Given two arrays (below) with the same number of rows, return a concatenated version of the two arrays. Please do this in JavaScript

const arrayA = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];


const arrayB = [
    [0, 1],
    [3, 4],
    [6, 7],
];

const concat =  (array1, array2) => {
    array1.forEach(function(element, i)  {
        (element.push(array2[i]))
        array1[i] = element.flat()
    });
    return array1
}
// Your function should look like:

console.log(concat(arrayA, arrayB));

// console.log(result); // output below
// [
//     ["a", "b", "c", 0, 1],
//     ["d", "e", "f", 3, 4],
//     ["g", "h", "i", 6, 7],
// ];

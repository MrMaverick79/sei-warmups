// Allergies

// Given a person's allergy score, determine their full list of allergens.

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

//     eggs (1)
//     peanuts (2)
//     shellfish (4)
//     strawberries (8)
//     tomatoes (16)
//     chocolate (32)
//     pollen (64)
//     cats (128)

// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say:

//     Whether Tom is allergic to any one of those allergens listed above.
//     All the allergens Tom is allergic to.

// Write this inside an object, in JavaScript.
// Examples:

// allergies.diagnosis(34);  // => [ 'chocolate', 'peanuts' ]
// allergies.diagnosis(26);  // => [ 'tomatoes', 'strawberries', 'peanuts' ]
// allergies.diagnosis(132); // => [ 'cats', 'shellfish' ]
// allergies.diagnosis(0);   // => [] 

const allergensTest = {

    products: {
        1: 'eggs',
        2: 'peanuts',
        4: 'shellfish',
        8: 'strawberries',
        16: 'tomatoes',
        32: 'chocolate',
        64: 'pollen',
        128: 'cats'
    },

    diagnosis: function(total){
        
        //1. ensure the order of the scores
        const scores= Object.keys(this.products).reverse()
        
        //2. Collect our allergens
        const allergies = [];

        //3. Loop through and add to an array
        for (let i = 0; i < scores.length; i++) {
            const allergenScore = Number(scores[i])

            if ( allergenScore <= total) {
                total-= allergenScore;
                allergies.push(this.products[allergenScore])

            }
        }       
       console.log(allergies);
    }
 }

  
console.log(allergensTest.diagnosis());

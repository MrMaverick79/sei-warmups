//Warmup: Leap Years
// Write a function that will take any given year and return a boolean value, whether it is a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
// How to structure it - we want a custom function called isLeapYear which returns true or false.


//should include a helper function that divides the number and returns number 
const remainderOfNumber = (number1, number2) => { //helper function
    return number1 % number2  === 0;
}; 

const leapYearTest =  ( year ) => { 
    if ( year % 4 === 0 ){  //all leap years must pass this test first
        if ( year % 100 === 0 && year % 400 === 0 ){ 
            return true;
        } else if ( year % 100 === 0 ) {
            return false;
        } else {
            return true;    
        }
        
    } else { //anything that does not pass the original year % 4 === 0 returns false.
        return false;
    }
};//end leapYearTester

//Testing

const notLeapYearEdge = 1900;
const leapYearEdge = 2000;
const notLeapYear = 1998;
const leapYear = 2020;

console.log(`The year ${leapYear} returns ${leapYearTest(leapYear)}`);

console.log(`The year ${notLeapYear} returns ${leapYearTest(notLeapYear)}`);
console.log(`The year ${leapYearEdge} returns ${leapYearTest(leapYearEdge)}`); 
console.log(`The year ${notLeapYearEdge} returns ${leapYearTest(notLeapYearEdge)}`); 



// const leapYearTest =  ( year ) => { 

//     if ( year < 399 ){
//             if ( year % 4 === 0 ){  //all leap years must pass this test first
//                 if ( year % 100 === 0 && year % 400 === 0 ){ 
//                     return true;
//                 } else if ( year % 100 === 0 ) {
//                     return false;
//                 } else {
//                     return true;    
//                 }
                
//             } else { //anything that does not pass the original year % 4 === 0 returns false.
//                 return false;
//             } //ested if
//     } else if ( year % 4 === 0 ) {
//         return true;
//     } else {
//       return false;         
//     }  // end if

//shortest version'
const leapYearTest2 =  ( year ) => { 

    return ( remainderOfNumber( year, 4 ) && (!remainderOfNumber( year, 100 ) || remainderOfNumber( year, 400 )));

};//end leapYearTester

// //Testing

// const notLeapYearEdge = 1900;
// const leapYearEdge = 2000;
// const notLeapYear = 1998;
// const leapYear = 2020;
// const earlyYear  = 7;

// console.log(`The year ${leapYear} returns ${leapYearTest(leapYear)}`);
// console.log(`The year ${notLeapYear} returns ${leapYearTest(notLeapYear)}`);
// console.log(`The year ${leapYearEdge} returns ${leapYearTest(leapYearEdge)}`); 
// console.log(`The year ${notLeapYearEdge} returns ${leapYearTest(notLeapYearEdge)}`); 
// console.log(`The year ${earlyYear} returns ${leapYearTest(earlyYear)}`); 

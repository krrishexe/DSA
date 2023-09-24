// IIFE - Immediately Invoked Function Expression.

// why?
// -to save our funtion from global scope pollution , we use IIFE.

// Syntax - ()()
// - just wrap our function into parenthesis

// ----------------------------------------------------------------
// Named IIFE
// (function DB(){
//     console.log("Db Connected")
// })();

// these iife's do not end themselves on their own. so we have to end their context by putting a semi colon at the end.

//Unnamed IIFE
// (()=>{
//     console.log("Db Connected 2")
// })();
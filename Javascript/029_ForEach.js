

//Foreach loop
// foreach loop demands a callback function (Mujhe bas ek fn dedo ki merko kya karna hai) in it.


const arr = ["one", "two", "three", "four", "five", "six"]

// arr.forEach((val)=>{
//     console.log(val)
// })

// ----------------------------------------------------------------

// function printValues(values) {
//     console.log(values)
// }
// arr.forEach(printValues)      --> we just pass the reference of the function , we dont call it.

// ----------------------------------------------------------------

// NOTE:- FOREACH COMES WTIH THREE PARAMETERS (ITEM , INDEX ,ARR) (that array that we are looping on to.)
// arr.forEach((item, index, array)=>{
//     console.log(item, index, array)
// })

// ----------------------------------------------------------------

// const arr1 = [
//     {
//         name:"krish",
//         num:637
//     },
//     {
//         name:"singh",
//         num:636
//     },
//     {
//         name:"yadav",
//         num:553
//     },
// ]

// arr1.forEach((item, index)=>{
//     console.log(index.name)       --> Now it will iterate through each element of tha array which is an object.
// })
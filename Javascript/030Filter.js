// Filter Array -
// (Jabhi use karte hai jab hume kuch array me se filter karna ho.)
// Ye khudse return nahi karte , hume ek new array banake usme store karna padta hai. 

// ----------------------------------------------------------------

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const remainderTerms = nums.filter((num)=>num%2 == 0) //Implicit return
// const remainderTerms = nums.filter((num)=>{
//     return num%2 == 0                                   // Explicit return ( if we are using the {} then we have to return them explicitly)
// })
// console.log(remainderTerms)

// ----------------------------------------------------------------
//Example

// const books = [
//     { title: 'One Book', genre: 'fictional', publish: 1999, edition: 2000 },
//     { title: 'Two Book', genre: 'History', publish: 1989, edition: 2001 },
//     { title: 'Three Book', genre: 'Science', publish: 1967, edition: 1986 },
//     { title: 'Four Book', genre: 'politics', publish: 1956, edition: 2016 },
//     { title: 'Five Book', genre: 'Sports', publish: 2001, edition: 2021 },
// ]

// const userBook = books.filter((book)=> book.genre  === "History")
// console.log(userBook)

// ----------------------------------------------------------------
//Custom IMplementation of Array.filter()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newArr = []
// for (const num of nums) {
//     if(num>5){
//         newArr.push(num)
//     }
// }
// console.log(newArr)
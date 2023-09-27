//Array Map.
//(Jabhi use karte hai jab hume array ki saari values me ek stah kuch change karna ho.)
// Ye khudse return nahi karte , hume ek new array banake usme store karna padta hai. 

// ----------------------------------------------------------------

// const nums = [1,2,3,4,5,6,7,8,9]
// const newNums = nums.map((num) => num + 10)

// console.log(newNums)

// Example
// const books = [
//     { title: 'One Book', genre: 'fictional', publish: 1999, edition: 2000 },
//     { title: 'Two Book', genre: 'History', publish: 1989, edition: 2001 },
//     { title: 'Three Book', genre: 'Science', publish: 1967, edition: 1986 },
//     { title: 'Four Book', genre: 'politics', publish: 1956, edition: 2016 },
//     { title: 'Five Book', genre: 'Sports', publish: 2001, edition: 2021 },
// ]

// books.map((book)=>{
//     return book.publish + 1
// })
// console.log(books)

// ----------------------------------------------------------------
//Custom IMplementation of Array.Map()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArr =[]

nums.forEach((num)=>{
    return newArr.push(num+10)
})
console.log(newArr)
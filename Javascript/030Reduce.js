// Array Reduce
//Two Values - ACC (Accumulator) and Curr(current value) , most of the times the acc = 0.
// Used in Shopping carts to determine the total amount of cart.

// ----------------------------------------------------------------
// Example
// const nums = [1, 2, 3, 4, 5]
// const newArr = nums.reduce((acc, curr)=>{
//     console.log(`accumulator: ${acc} , current value: ${curr}`)
//     return acc + curr
// },0)
// console.log(newArr)

// ----------------------------------------------------------------

// const prices = [2500,5000,500,200,10000,5700]
// const totalCart = prices.reduce((acc, curr)=>{
//     return acc + curr
// },0)
// console.log(totalCart)

// ----------------------------------------------------------------

// const shoppingCart = [
//     {course:"js course", amount:2500},
//     {course:"py course", amount:3500},
//     {course:"cpp course", amount:200},
//     {course:"kotlin course", amount:500},
//     {course:"swift course", amount:11000},
//     {course:"c course", amount:15000},
// ]

// const cartTotal = shoppingCart.reduce((acc,curr)=>{
//     return acc + curr.amount 
// },0)
// console.log(cartTotal)
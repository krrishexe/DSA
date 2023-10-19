const mySet = new Set()
const mySet2 = new Set()
mySet.add(1)
mySet.add(2)
mySet.add('a')
mySet.add('b')
mySet.add('c')
mySet2.add(1)
mySet2.add(2)
mySet2.add('x')
mySet2.add('y')
mySet2.add('z')
const myset3 = new Set([...mySet].filter(a => mySet2.has(a)))        // taking the intersection.
const mySet4 = new Set([...mySet,...mySet2])                         // Union of two sets.
console.log(mySet4)



// const mySym = Symbol(1)
// const obj = {
//     id:"krish",
//     [mySym]:1
// }
// console.log(obj[mySym])
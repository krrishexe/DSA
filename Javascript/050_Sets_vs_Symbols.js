const mySet = new Set()
const mySet2 = new Set()
mySet.add(1)
mySet.add(2)
mySet.add('a')
mySet.add('b')
mySet.add('c')
console.log(mySet)
for(let key of mySet){
    console.log(key)
}
mySet2.add(1)
mySet2.add(2)
mySet2.add('x')
mySet2.add('y')
mySet2.add('z')
const myset3 = new Set([...mySet].filter(a => mySet2.has(a)))        // taking the intersection.
console.log(myset3)
const mySet4 = new Set([...mySet,...mySet2])                         // Union of two sets.
console.log(mySet4)


// ----------------------------------------------------------------
// Symbols:
// they are used for making an element unique.

// const mySym = Symbol(1)
// const mySym2 = Symbol(1)
// console.log(mySym === mySym2)

// const mySym = Symbol.has(1)
// const mySym2 = Symbol.has(1)
// console.log(mySym === mySym2)

// UseCase :
const id = Symbol('id')
const obj ={
    [id]:1234,
    lastName : "John",
}
for(let key in obj) {
    console.log(key)
}
// id remains hidden even if we are looping on the object.
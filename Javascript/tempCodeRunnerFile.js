ySet2.add(1)
mySet2.add(2)
mySet2.add('x')
mySet2.add('y')
mySet2.add('z')
const myset3 = new Set([...mySet].filter(a => mySet2.has(a)))        // taking the intersection.
console.log(myset3)
const mySet4 = new Set([...mySet,...mySet2])                         // Union of two sets.
console.log(mySet4)
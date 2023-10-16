// ----------------------------------------------------------------
// FOR OF LOOP

// const arr = ["a", "b", "c", "d", "e"]
// const arr1 = [
//     {
//         name:"krish",
//         num:637
//     },
//     {
//         name:"yadav",
//         num:636
//     },
// ]

// for(const key of arr1){
//     console.log(key)
// }

// const str ="Hello world!"
// for (const letter of str) {
//     if(letter == " "){
//         continue
//     }
//     console.log(letter)
// } 


// ----------------------------------------------------------------
// For Of LOOP on an object.
 
const obj1 = {
    name:"krish",
    num:637,
    lastName: "yadav",
}

// for (const val of obj1.keys()) {
//     console.log(val)
// }

// NOTE :- For Of loop doesnt work on objects as they are not iterable.




// ----------------------------------------------------------------
// DATATYPE MAP

// Map is also an object which remembers the order by which you put the values in any object.
// Map also does not allows you take create duplicate keys.

// const map = new Map()
// map.set('a',1)
// map.set('b',2)
// map.set('c',3)

// // console.log(map)
// for (const key of map.keys()) {
//     console.log(key)
// }
// for (const value of map.values()) {
//     console.log(value)
// }
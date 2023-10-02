const arr = [3,6,9,15]
// console.log(arr.includes(7))
// function findMissing(arr) {
//     let missing;
//     for(let i = 0; i < arr.length; i++) {
//         missing = arr[i] + 2 
//         // console.log(missing)
//         if(!arr.includes(missing)) return missing;
//     }
// }
// console.log(findMissing(arr))
function findMissing(arr) {
    let missing;
    for(let i = 0; i < arr.length; i++) {
        missing = arr[i] + 3 
        // console.log(missing)
        if(!arr.includes(missing)) return missing;
    }
}
console.log(findMissing(arr))
// For NUMBERS
// function maximumEl(arr){
//     arr.sort()
//     let obj = {}
    
//     arr.forEach(element => {
//         obj[element] = obj[element] ? obj[element] + 1 : 1
//     });
//     return Object.keys(obj).find(key => obj[key] === Math.max(...Object.values(obj)));

    
// }
// console.log(maximumEl([0,0,1,1]));


// FOR STRINGS
function maximumEl(arr){
    let newArr = arr.split('')
    let obj = {}
    
    newArr.forEach(element => {
        obj[element] = obj[element] ? obj[element] + 1 : 1
    });
    return Object.keys(obj).find(key => obj[key] === Math.max(...Object.values(obj)));

    
}
console.log(maximumEl("Hello worlllllddddd!"));
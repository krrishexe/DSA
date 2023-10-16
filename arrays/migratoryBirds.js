function migratoryBirds(arr) {
    // Write your code here
    // const newArr = []
    // const anotherNewArr =[]
    
    // arr = arr.sort((a,b) => a - b)
    // console.log(arr)
    // let max = 0
    // let item = 0
    // for(let i = 0; i < arr.length; i++){
    //     let count = 0
    //     for (let j = 1; j < arr.length; j++){
    //         if (arr[i] == arr[j])count++
    //     }
    //     if (count > max) {
    //         max = count
    //         item = arr[i]            
    //     }
    // }
    // return item
    arr = arr.sort((a,b) => a - b)
    let max = 0
    let item = 0
    let count = 1
    console.log(arr)
    for(let i = 0; i < arr.length-1; i++){
        
        if (arr[i] == arr[i+1])count++
        else count=1
        
        if (count > max) {
            max = count
            item = arr[i]            
        }
    }
    return item
   


}
console.log(migratoryBirds([1, 2, 3 ,4, 5, 4, 3, 2, 1 ,3, 4]))


// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < i; j++){
//         if(arr[i] === arr[j]){
//             newArr.push(arr[j])
//         }
//     }
// }
// console.log(newArr)

// for(let i = 0; i < newArr.length; i++) {
//     for(let j = 0; j < i; j++){
//         if(newArr[i] === newArr[j]){
//             anotherNewArr.push(newArr[j])
//         }
//     }
// }
// for(let i = 0; i < anotherNewArr.length; i){
//     for(let j = 0; j <anotherNewArr.length ; j++){
//         if(anotherNewArr[i]<=anotherNewArr[j]){
//             return anotherNewArr[i]
//         }
//     }
// }
const arr = [7,69,2,221,8974]

function miniMax(arr){
    const newArr = arr.sort()
    let sum = 0;
    let min =0;
    for(let i = 0; i < newArr.length; i++){
        sum+= newArr[i] 
        min+= newArr[i] 
    }
    let one = sum - newArr[0]
    let two = min - newArr[newArr.length-1]
    return two + " " + one
}
console.log(miniMax(arr))
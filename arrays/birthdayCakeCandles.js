const candles = [4, 5, 1, 3,4,5]


function birthdayCakeCandles(arr){
    const max = Math.max(...arr)
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(max === arr[i]){
            count++
        }
    }
    return count
}
console.log(birthdayCakeCandles(candles))
function pickingNumbers(a) {
    // Write your code here
    const arr = []
    // a.sort((a, b) => a - b)
    console.log(a)
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length; j++){
            if(Math.abs(a[i]-a[j]) <=1){
                arr.push(a[i])
                // break
            }
        }
    }
    return arr
}
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]))


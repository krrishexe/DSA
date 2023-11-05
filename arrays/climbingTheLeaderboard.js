function climbingLeaderboard(ranked, player) {
    // Write your code here
    let count = 1
    let arr = []
    let newArr = []
    newArr.push(...ranked, ...player)
    // newArr.sort((a,b)=>b-a)
    console.log(newArr)
    for (let i = 1; i <= newArr.length; i++) {
        if (newArr[i - 1] == newArr[i]) {
            arr.push(count)
        } else if(newArr[i-1] !== newArr[i] &&( newArr[i-1] > newArr[i]) ){
            if(newArr[i-1]){
                arr.push(count)
                
            }
            arr.push(count)
            count += 1
        }
    }
    return arr
}
console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]))
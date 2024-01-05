function beautifulDays(i, j, k) {
    // Write your code here
    let arr = []
    function revNum(num) {
        let strNum = parseInt(num.toString().split('').reverse().join(''))
        return strNum
    }
    for (let a = i; a <= j; a++) {
        console.log("outer : " + a)
        if ((a - (revNum(a)) / k) === Math.round((a - (revNum(a)) / k))) {
            console.log(a)
            arr.push(a)
        }
        
    }
    return arr
}
console.log(beautifulDays(20, 23, 6))
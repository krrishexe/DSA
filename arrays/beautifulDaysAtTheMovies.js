function beautifulDays(i, j, k) {
    // Write your code here
    let beautifulDays = []
    for (let p = i; p <= j; p++) {
        let revNum = Number(p.toString().split('').reverse().join(''))
        let diff = Math.abs(p - revNum)
        if (!Number.isInteger(diff/k)) {
            beautifulDays.push(diff/k)
        }
    }
    return beautifulDays.length
}
console.log(beautifulDays(20, 23, 6))
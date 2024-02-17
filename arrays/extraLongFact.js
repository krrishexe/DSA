function extraLongFact(n) {
    let y = BigInt(n)
    if (n === 1) {
        return 1
    } else {
        y = y * BigInt(extraLongFact(n - 1))
        return y
    }
}

console.log(extraLongFact(30))
function createCounter(n, arr) {
    let count = n
    for (let i = 0; i < arr.length; i++) {
        count += 1;
        console.log(count)
    }
}
console.log(createCounter(10, ["call", "call", "call", "call", "call",]))
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let newArr =[]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0 && i<j) {
                newArr.push(ar[i] , ar[j])
            }
        }
    }
    return newArr.length /2
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))


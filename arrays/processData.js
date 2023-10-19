function processData(input) {
    //Enter your code here
    const totalSum = input.reduce((a, b) => {
        return a + b;
    }, 0)
    let leftSum = 0;
    for (let i = 0; i < input.length; i++) {
        let rightSum = totalSum - leftSum - input[i]
        if (rightSum === leftSum) {
            return i
        }
        leftSum += input[i]
    }
    return -1
}
console.log(processData([1, 2, 3, 4, 6]))
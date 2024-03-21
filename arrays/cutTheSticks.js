function cutTheSticks(arr) {
    let count = [];
    let newArr = []

    for (let m = 0; m < arr.length ; m++) {
        const originalArr = arr.sort((a, b) => a - b)
        count.push(originalArr.length)
        let shortest = originalArr[0]
        let temp = []
        for (let i = 0; i < originalArr.length; i++) {
            temp.push(arr[i] - shortest)
            newArr = temp.filter(el => el > 0)
        }
        console.log(newArr)
    }
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))
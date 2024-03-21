function cutTheSticks(arr) {
    let count = [];
    let newArr = []
    let normie = arr;
    for (let m = 0; m < 20; m++) {
        const originalArr = normie.sort((a, b) => a - b)
        if (originalArr.length >= 1) {
            count.push(originalArr.length)
        }
        let shortest = originalArr[0]
        let temp = []
        for (let i = 0; i < originalArr.length; i++) {
            temp.push(originalArr[i] - shortest)
        }
        newArr = temp.filter(el => el > 0)
        normie = newArr
    }
    for(let x =0;x<count.length;x++){
        console.log(count[x])
    }
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))
const arr = [4, 6, 4, -8, 0, -7, 5, 7]

function uniqueOccurrences(arr) {

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1
        }
    }
    const values = Object.values(obj);
    console.log(values)
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (values[i] == values[j]) {
                return false;
            }
        }
    }
    return true
}

console.log(uniqueOccurrences(arr))
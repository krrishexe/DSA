function repeatedString(s, n) {
    let initLength = s.length;
    let remaining = n - s.length;

    for(let i=0;i<n,i++){
        
    }
    let newArr = s.split()
    newArr.splice(1, 0, s)
    return newArr



    // let arr = s.split('').sort();
    // let count = arr.lastIndexOf('a')
    // return count + 1
}

console.log(repeatedString("abcab", 10))
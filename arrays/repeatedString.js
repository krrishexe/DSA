function repeatedString(s, n) {
    let initLength = s.length;
    let remaining = n - s.length;
    
    let newArr = s.split('')

    for(let i=0;i<remaining;i++){
        newArr.push(s[i])
        //agar s khtm ho jaye to dubara s laga do
    }
    return newArr.join('')

}

console.log(repeatedString("aba", 10))
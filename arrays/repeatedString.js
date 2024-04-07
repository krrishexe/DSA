function repeatedString(s, n) {
    let initLength = s.length;
    let remaining = n - s.length;
    if(initLength === 1){
        return n
    }    
    let newArr = s.split('')

    for(let i=0;i<remaining;i++){
        newArr.push(s[i % initLength])
    }
    return newArr.filter((item)=> item === 'a').length

}

console.log(repeatedString("ba", 100))
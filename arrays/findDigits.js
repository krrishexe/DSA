function findDigits(n){
    let result = []
    let num = n.toString().split('')
    for(let i =0;i<num.length;i++){
        if(n%Number(num[i]) === 0){
            result.push(num[i])
        }
    }
    return result.length

}
console.log(findDigits(1240))
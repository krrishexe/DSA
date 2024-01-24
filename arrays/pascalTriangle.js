function pascalTriangle(num,col){
    let res = 1
    for(let i = 0; i < col;i++){ 
        res = (res * (num - i)) / (i+1)
    }
    return res

}
console.log(pascalTriangle(5,3))
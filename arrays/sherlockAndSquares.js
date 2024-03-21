function sherAndSquares(a, b) {
    let squares = []
    for (let i = a; i <= b; i++) {
        i = BigInt(i)
        let sqrt = Math.sqrt(i)
        console.log(sqrt)
        // if(Number.isInteger(sqrt)){
        //     // console.log(sqrt)
        //     squares.push(sqrt)
        // }
    }
    return squares.length

}
console.log(sherAndSquares(24, 49))
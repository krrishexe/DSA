function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let posiOne = []
    let posiTwo = []
    let jumpCount =0;
    let jumpCount1 =0;
    let current =x1
    let current1 =x2


    if(x1 == x2 && v1 != v2){
        return false;
    }
    for(let i = 0; i < 10; i++){
        current = current + v1
        posiOne.push(current)
        jumpCount = posiOne[i] / (x1+v1)
    }
    for(let i = 0; i < 10; i++){
        current1 = current1 + v2
        posiTwo.push(current1)
        jumpCount1 = posiTwo[i] / (x2+v2)

    }
    console.log(jumpCount)
    console.log(posiTwo)

}
console.log(kangaroo(0,3,4,2))
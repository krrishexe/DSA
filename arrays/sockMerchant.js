function sockMerchant(n, ar) {
    // Write your code here
    ar.sort()
    let makeAPair = 0;
    for(let i = 0; i < ar.length; i++){
        if(ar[i] == ar[i+1]){
            makeAPair++;
            ar.shift()
        }
    }
    return makeAPair
}

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))

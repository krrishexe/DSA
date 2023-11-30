function utopianTree(n) {
    // Write your code here
    let height = 1;
    let arr = [];
    for (let i = 0; i < n; i++) {
        if(i == 0){
            arr.push(height)
        }
        if(i%2 == 0){
            // height + 1;
            arr.push(height*=2)
        }
        else if( i%2 == 1){
            // height*2;
            arr.push(height+=1)
        }
    }
    return arr
}
console.log(utopianTree(2)) 
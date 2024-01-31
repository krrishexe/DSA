function sellAndBuy(arr,k){
    const newArr = []
    
    for(let i=0;i<arr.length - k;i++){
        for(let j=0;j<k;j++){
            newArr.push(arr[i+j])
        }
        
    }
    return newArr

}
console.log(sellAndBuy([7,1,5,3,6,4],3))    
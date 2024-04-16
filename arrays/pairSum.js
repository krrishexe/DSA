function pairSum(arr,k){
    let newArr = []

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == k){
                newArr.push(arr[i])
                newArr.push(arr[j])
            }
        }
    }
    return newArr
}

console.log(pairSum([0,1,2,4,5],5))
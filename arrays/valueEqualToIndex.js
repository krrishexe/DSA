const arr = [15, 2, 45, 12, 7]

function valueEqualToIndex(arr){
        for(let i=0; i<arr.length; i++){
            console.log(arr[i])
            if(arr[i] == i) return true
        }
}
console.log(valueEqualToIndex(arr))
let arr = [1,2,3,4,5]
function swap(arr){
    if(arr.length %2 == 0){
        for(let i=0;i<arr.length;i+=2){
            let temp;
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        return arr
    }else{
        for(let i =0;i<arr.length;i+=2){
            if(i+1 < arr.length){
                let temp;
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        return arr
    }
}
console.log(swap(arr))
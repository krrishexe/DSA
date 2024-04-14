const arr = [1,1,33,33,5,5,7]

function findUnique(arr){
    arr = arr.sort((a,b) => a-b)
    let obj ={}
    console.log(arr)


    for(let i=0;i<arr.length;i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]] +=1;
        }else{
            obj[arr[i]] = 1;
        }
    }
    for(let i =0;i<arr.length;i++){
        if(obj[arr[i]] == 1){
            return arr[i]
        }
    }
}

console.log(findUnique(arr))
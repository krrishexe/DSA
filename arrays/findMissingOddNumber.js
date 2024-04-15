const arr = [5,7,11,13,15,17]

function findMissingOddNum(arr) {
    
    for(let i=0;i<arr.length;i++){
        let missing = arr[i] + 2;
        if(!arr.includes(missing)){
            return missing;
        }
    }

}
console.log(findMissingOddNum(arr))
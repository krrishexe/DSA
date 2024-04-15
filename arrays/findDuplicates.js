const arr = [1];

function findDuplicates(arr){

    let obj = {}
    for (let i=0;i<arr.length;i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]] +=1;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    const keys = Object.keys(obj);
    let newArr = []

    for(let i=0;i<keys.length;i++){
        if(obj[keys[i]] == 2){
            newArr.push(parseInt(keys[i]))
        }
    }
    return newArr

}

console.log(findDuplicates(arr))
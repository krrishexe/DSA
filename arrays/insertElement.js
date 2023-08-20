const arr = ["a", "b", "c", "d", "e"];
const pos = 3
const el = 5

function insertElement(arr , pos , el){
    const index = pos - 1 ;
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = el;
    }
    return arr
}

console.log(insertElement(arr , pos , el))
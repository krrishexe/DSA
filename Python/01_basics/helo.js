const set1 = new Set([1,2,3,4,5])
const set2 = new Set([4,5,6,7,8])

function intersection(){
    let intSet = new Set()
    for(let elem of set1){
        if(set2.has(elem)){
            intSet.add(elem)
        }
    }
    return intSet
}
console.log(intersection(set1, set2) )
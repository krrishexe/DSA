const arr = ['a','b','c','d','d','e','f','d','h','i','j','k','l','d','d','a']
let obj = {}
// console.log(obj)
arr.map((val)=>{
    if(obj[val]){
        obj[val]+=1
    }
    else{
        obj[val]=1
    }
})
let v = Object.values(obj)
let maxCount = Math.max(...v)
let k = Object.keys(obj)
let maxCountKey = v.findIndex((x)=>x==maxCount)
console.log(maxCountKey)
console.log(k[maxCountKey],maxCount)
// console.log(obj)
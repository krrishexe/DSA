const input1 = {a:1,b:2,c:3,d:4,e:5}
const input2 = {a:2,c:3,e:5,f:9}

function sameValue(input1,input2){
    let output = new Set()
    output.add(input1)
    output.add({b:4})
    return output
}

console.log(sameValue(input1,input2))





















// const keys1 = Object.keys(input1)
//     const values1 = Object.values(input1)
//     const keys2 = Object.keys(input2)
//     const values2 = Object.values(input2)
//     let len = Math.max(keys1.length,keys2.length)

//     for(let i=0; i< len;i++){
//         for(let j=0 ; j<)
//     }

    
    
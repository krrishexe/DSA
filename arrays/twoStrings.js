function twoStrings(s1, s2) {
    // Write your code here
    // const arr =[]
    // for(let i = 0; i<s1.length; i++) {
    //     for(let j = 0; j < s2.length; j++){
    //         if(s1[i] === s2[j]) {
    //             arr.push(s1[i])
    //         }
    //     }
    // }
    // if(arr.length > 0){
    //     return "YES"
    // }
    // else{
    //     return "NO"
    // }
    const set1 = new Set(s1)
    const set2 = new Set(s2)
    let set = new Set([...set1].filter(x => set2.has(x)));
    console.log(set.size) 
    if(set.size>0){
        // console.log(set)
        return "YES"
    }
    else{
        return "NO"
    }

}
console.log(twoStrings('nand','art'))
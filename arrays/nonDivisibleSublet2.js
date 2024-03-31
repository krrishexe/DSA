function nonDivisibleSublet(k, s) {
    const count = []
    let originalArr = k
    let maximum= 0;

    for (let j = 0; j < originalArr.length; j++) {

        let sublet = []
        for (let i = 0; i < originalArr.length; i++) {
            if(sublet.length === 0){
                sublet.push(originalArr[0])
            }else{
                let sweetch = false
                for(let x =0; x<sublet.length;x++){
                    if((originalArr[i] + sublet[x]) % s === 0){
                        sweetch = true
                        break;
                    }
                }
                if(sweetch === false){
                    sublet.push(originalArr[i])
                }
            }
        }
        if(sublet.length > maximum){
            maximum = sublet.length
        }
        originalArr = originalArr.slice(1)
    }
    return maximum
}

console.log(nonDivisibleSublet([1,7,2,4],3))






// sublet.add(originalArr[0])
            // if ((originalArr[0] + originalArr[i]) % s !== 0) {
            //     let gg = [...sublet]
            //     console.log("gg", gg)
            //     for(let x =0; x<=gg.length; x++){
            //         if ((originalArr[i] + gg[x]) % s !== 0) {
            //             console.log(originalArr[i])
            //             sublet.add(originalArr[i])
            //         }
            //     }
                
            //     sublet.add(originalArr[i])
            // }
            // console.log(sublet)
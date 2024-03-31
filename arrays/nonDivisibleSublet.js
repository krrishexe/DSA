function nonDivisibleSublet(k, s) {
    
    let sublet = new Set()

    for (let i = 0; i < k.length; i++) {
        for (let j = i + 1; j < k.length; j++) {
            
            if ((k[i] + k[j]) % s !== 0) {
                // vahi add karo jo arr me already exist nahi karta or jinka sum including the rest of the array % s !== 0
                let sum;
                sum = [...sublet].reduce((acc,el) => {
                    return acc+el;
                },0)
                console.log(sum)

                for(let x = 0;x<k.length;x++){
                    if((k[x]+sum)%s===0){
                        console.log(k[x])
                        break;
                    }
                }
                
            }
        }
    }
    
    return sublet.size
}

console.log(nonDivisibleSublet([19, 10, 12, 10, 24, 25, 22], 4))

//[278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436], 7
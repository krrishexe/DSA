function getMoneySpent(budget,keyboards,drives) {
    /*
     * Write your code here.
     */
    // const arr = []
    let x = -1;
    
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j <drives.length;j++){
            let totalSpent = keyboards[i] + drives[j]
            console.log(totalSpent)
            if(totalSpent < budget && totalSpent >x ){
                x = totalSpent
            }
        }
    }
    return x 


}
console.log(getMoneySpent(5,[4],[5]))
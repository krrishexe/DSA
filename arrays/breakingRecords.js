
function breakingRecords(scores) {
    // Write your code here

    let high=[scores[0]]
    let low=[scores[0]]
    let highCount=0
    let lowCount =0;

    for(let i=0; i<scores.length; i++){
        if(scores[i+1] >= high[i]){
            high.push(scores[i+1])

        }
        else if(scores[i+1] <= high[i]){
            high.push(high[i])
        }
    }
    for(let i=0; i<scores.length; i++){
        if(scores[i+1] >= low[i]){
            low.push(low[i])
        }
        else if(scores[i+1] <= low[i]){
            low.push(scores[i+1])
        }
    }

    for(let i=0; i<scores.length; i++){
        if(high[i] < high[i+1]){
            highCount++;
        }
        else if(low[i] > low[i+1]){
            lowCount++;
        }
    }
    console.log(highCount, lowCount)
} 
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
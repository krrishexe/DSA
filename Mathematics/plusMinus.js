
function plusMinus(arr){
    let arrSize = arr.length;
    let positive= 0 ;
    let negative=0;
    let zero=0;
    for(let i = 0; i < arrSize; i++){
        if(arr[i] > 0){
            positive++;
        }
        else if(arr[i] < 0){
            negative++;
        }
        else{
            zero++;
        }

    }

    console.log((positive/arrSize).toFixed(6))
    console.log((negative/arrSize).toFixed(6))
    console.log((zero/arrSize).toFixed(6))
    // rato of positive / arrSize
    // ratio of negative / arrSize
    // ratio of zero / arrSize
}

plusMinus([-4, 3, -9, 0, 4, 1])
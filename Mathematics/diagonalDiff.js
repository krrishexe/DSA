const arr = [[11, 2, 4],
             [4, 5, 6],
             [10, 8, -12]]

// console.log(arr[2][1])

function diagonalDiff(arr){
    let leftDiag =0;
    let rightDiag =0;

    for(let i=0; i<arr.length; i++){
        leftDiag += arr[i][i] 
        rightDiag += arr[i][arr.length-1-i]
    }
    
    return rightDiag - leftDiag;
}
console.log(diagonalDiff(arr))